import React, { useContext, useEffect, useState } from 'react';
import './AppoitmentForm.css';
import { UserContext } from '../../useAuth';
import axios from 'axios';
import { IconButton } from '@material-ui/core';
import Loading from '../../uttiles/Loading';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebcamCapture from './WebCam';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Button } from '@material-ui/core';
import db from '../../../firebase/service';
import '../Home.css';

const AppointmentForm = (props) => {
	const notify = () => toast('Your Appoitnment Add Successfully!');
	const { selectTedDate, cleaning } = useContext(UserContext);
	const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [status, setStatus] = useState(true);

	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is the login page');
		window.speechSynthesis.speak(msg);
	}, []);
	if (!browserSupportsSpeechRecognition) {
		setStatus(false);
	}

	const emailListener = () => {
		console.log(transcript);
		resetTranscript();
		SpeechRecognition.startListening();
		setEmail(transcript);
	};
	const nameListener = () => {
		console.log(transcript);
		resetTranscript();
		SpeechRecognition.startListening();
		setName(transcript);
	};

	const phoneListener = () => {
		resetTranscript();
		SpeechRecognition.startListening();
		setPhone(transcript);
	};

	const loginListener = () => {
		resetTranscript();
		SpeechRecognition.startListening();
		if (transcript && transcript.toString().toLowerCase().includes('submit')) {
			submitHandler();
		}
	};
	const onCangeHandler = (e) => {
		const { name, value } = e.target;
		if (name === 'name') {
			setName(value);
		}
		if (name === 'email') {
			setEmail(value);
		}
		if (name === 'phone') {
			setPhone(value);
		}
	};

	const handleRouteVideo = () => {
		props.history.push('/Videocall');
	};

	const submitHandler = async (e) => {
		if (e) {
			e.preventDefault();
		}
		if (selectTedDate && cleaning && name && email && phone) {
			setIsLoading(true);
			const formData = {
				clinicName: cleaning.name,
				name,
				email,
				phone,
				time: cleaning.time,
				date: selectTedDate,
			};

			const getUser = JSON.parse(localStorage.getItem('user_details'));

			db.collection(getUser.email)
				.add({
					clinicName: cleaning.name,
					name,
					email,
					phone,
					time: cleaning.time,
					date: selectTedDate,
					images: localStorage.getItem('link'),
				})
				.then((docRef) => {
					console.log('Document written with ID: ', docRef.id);
					setIsLoading(false);
					props.history.push('/');
				})
				.catch((error) => {
					console.error('Error adding document: ', error);
					setIsLoading(false);
				});
		} else {
			alert('Invalid Form data');
		}
	};

	if (isLoading) {
		return <Loading />;
	}
	const clear = () => {
		setName('');
		setEmail('');
		setPhone('');
	};

	return (
		<section id="appointment-form-page">
			<div className="container">
				<div className="row">
					<div className="col-5">
						<div className="appointment-form-page-container">
							<div className="appointment-form shadow">
								<Button
									variant="contained"
									color="primary"
									fullWidth
									onClick={handleRouteVideo}
									startIcon={<VideoCallIcon />}
								>
									Start Video Call
								</Button>
								<WebcamCapture />
								<h2 className="text-center pb-4">{cleaning.name}</h2>
								<form autoComplete="off" className="mt-4" onSubmit={submitHandler} id="create-course-form">
									<div className="form-group">
										<input
											type="text"
											className="form-control"
											required
											readOnly
											defaultValue={cleaning.time}
											placeholder="Time"
										/>
									</div>
									<div className="form-group" style={{ display: 'flex', width: '320px' }}>
										<input
											type="text"
											className="form-control"
											required
											name="name"
											value={name}
											onChange={onCangeHandler}
											placeholder="Your Name"
										/>
										{status && (
											<IconButton onClick={nameListener}>
												{listening ? <MicIcon /> : <MicOffIcon />}
											</IconButton>
										)}
									</div>
									<div className="form-group" style={{ display: 'flex', width: '320px' }}>
										<input
											type="text"
											className="form-control"
											required
											name="phone"
											value={phone}
											onChange={onCangeHandler}
											placeholder="Phone Number"
										/>
										{status && (
											<IconButton onClick={phoneListener}>
												{listening ? <MicIcon /> : <MicOffIcon />}
											</IconButton>
										)}
									</div>
									<div className="form-group" style={{ display: 'flex', width: '320px' }}>
										<input
											type="email"
											className="form-control"
											required
											name="email"
											value={email}
											onChange={onCangeHandler}
											placeholder="Email"
										/>
										{status && (
											<IconButton onClick={emailListener}>
												{listening ? <MicIcon /> : <MicOffIcon />}
											</IconButton>
										)}
									</div>
									<div className="form-group" style={{ width: '300px' }}>
										<input
											type="text"
											className="form-control"
											required
											defaultValue={selectTedDate}
											readOnly
										/>
									</div>
									<div style={{ display: 'flex', width: '280px' }}>
										<Button
											style={{ height: '50px' }}
											type="submit"
											className="btn text-uppercase text-white"
											fullWidth
											variant="contained"
											color="primary"
										>
											Submit
										</Button>
										{status && (
											<>
												<IconButton onClick={loginListener}>
													{listening ? <MicIcon /> : <MicOffIcon />}
												</IconButton>
											</>
										)}
									</div>
									<Button
										fullWidth
										className="btn text-uppercase  text-white mt-2"
										variant="contained"
										color="primary"
										onClick={() => {
											clear();
										}}
									>
										Clear
									</Button>
									{status && (
										<>
											<IconButton onClick={loginListener}>
												{listening ? <MicIcon /> : <MicOffIcon />}
											</IconButton>
										</>
									)}
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AppointmentForm;
