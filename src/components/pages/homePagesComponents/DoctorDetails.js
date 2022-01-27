import React, { useEffect, useState } from 'react';
import {Paper} from '@material-ui/core';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';
import db from '../../../firebase/service'

const Header = (props) => {
	const [patientData, setpatientData] = useState([]);
	const [picture, setpicture] = useState(null);

	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is patient Information page');
		window.speechSynthesis.speak(msg);
	}, []);

	useEffect(() => {
		const getUser = JSON.parse(localStorage.getItem("user_details"))
		const isUserPresent = localStorage.getItem("status_login")

		if (isUserPresent === 'true'){
			db.collection(getUser.email).get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					var patientInfoData = {
						name: doc.data().name,
						email: doc.data().email,
						clinicName: doc.data().clinicName,
						date: doc.data().date,
						images: doc.data().images,
						phone: doc.data().phone,
						time: doc.data().time
					};

					setpatientData((prev)=> [...prev, patientInfoData])
				});
			});
			
		}
	}, []);
	return (
		<section className="App" style={{marginBottom: '60px'}}>
			<div className="container">
			<h1 style={{ textAlign: 'center', paddingTop: '30px' }}>Patient Info</h1>

				{
					patientData && patientData?.map((userDetails)=> {
						return <Paper elevation={3} style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'çenter', marginBottom: '40px', padding: '20px 0px'}}>
								<div style={{alignItems: 'center', justifyContent: 'çenter', display:'flex'}}>
							<img src={userDetails.images} style={{  textAlign: 'center', width: '250px' }}></img>
								</div>
								<div>
								<h3>{userDetails.clinicName}</h3>
								<h3>{userDetails.name}</h3>
								<h3>{userDetails.email}</h3>
								<h3>{userDetails.date}</h3>
								<h3>{userDetails.phone}</h3>
								<h3>{userDetails.time}</h3>

								</div>

								


						</Paper>
					})
				}
				<br/><br/><br/>
			</div>
		</section>
	);
};

export default Header;
