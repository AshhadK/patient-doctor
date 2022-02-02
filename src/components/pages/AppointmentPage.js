import Header from './homePagesComponents/Header';
import AvailableAppointments from './homePagesComponents/AvailableAppointments';
import TextSpeech from './homePagesComponents/TextSpeech';
import React, { useState, useEffect, useContext } from 'react';
import HeaderBottom from './homePagesComponents/HeaderBottom';
import Navbar from './homePagesComponents/Navbar';
import Footer from './homePagesComponents/Footer';
// import Speech from 'react-speech';

const AppointmentPage = () => {
	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is appoinment page');
		window.speechSynthesis.speak(msg);
	}, []);

	return (
		<div className="main-home-page">
			<Navbar />
			<Header />
			<HeaderBottom />
			<AvailableAppointments />
			<Footer />
		</div>
	);
};

export default AppointmentPage;
