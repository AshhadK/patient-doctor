import React, { useEffect, useState } from 'react';
import { Paper } from '@material-ui/core';
import Navbar from './Navbar';
import HeaderBottom from './HeaderBottom';
import db from '../../../firebase/service';
import '../homePagesComponents/DoctorDetails.css';

const Header = (props) => {
	const [patientData, setpatientData] = useState([]);
	const [picture, setpicture] = useState(null);

	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is patient Information page');
		window.speechSynthesis.speak(msg);
	}, []);

	useEffect(() => {
		const getUser = JSON.parse(localStorage.getItem('user_details'));
		const isUserPresent = localStorage.getItem('status_login');

		if (isUserPresent === 'true') {
			db.collection(getUser.email)
				.get()
				.then((querySnapshot) => {
					querySnapshot.forEach((doc) => {
						var patientInfoData = {
							name: doc.data().name,
							email: doc.data().email,
							clinicName: doc.data().clinicName,
							date: doc.data().date,
							images: doc.data().images,
							phone: doc.data().phone,
							time: doc.data().time,
						};

						setpatientData((prev) => [...prev, patientInfoData]);
					});
				});
		}
	}, []);
	return (
		<section className="App" style={{ marginBottom: '60px' }}>
			<header>
				<Navbar />
			</header>
			<div class="main-page">
				<h1 class="patient-heading">Patient Info</h1>
				<h4>The following patients are booked under the following user :</h4>
				<h2 style={{ textAlign: 'center' }}>{JSON.parse(localStorage.getItem('user_details')).email} </h2>
				{patientData &&
					patientData?.map((userDetails) => {
						return (
							<Paper
								elevation={3}
								style={{
									display: 'flex',
									justifyContent: 'space-evenly',
									alignItems: 'çenter',
									marginBottom: '40px',
									padding: '20px 0px',
								}}
							>
								<div style={{ alignItems: 'center', justifyContent: 'çenter', display: 'flex' }}>
									<img src={userDetails.images} style={{ textAlign: 'center', width: '250px' }}></img>
								</div>
								<div>
									<h4>{userDetails.clinicName}</h4>
									<h4>{userDetails.name}</h4>
									<h4>{userDetails.email}</h4>
									<h4>{userDetails.date}</h4>
									<h4>{userDetails.phone}</h4>
									<h4>{userDetails.time}</h4>
								</div>
							</Paper>
						);
					})}
				<br />
				<br />
				<br />
			</div>
		</section>
	);
};

export default Header;
