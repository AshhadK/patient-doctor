import React, { useState, useEffect, useContext } from 'react';
import Chatbot from 'react-chatbot-kit';
import '../App.css';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './pages/config';
import Navbar from './pages/homePagesComponents/Navbar';
import Footer from './pages/homePagesComponents/Footer';

function Chat() {
	useEffect(() => {
		const msg = new window.SpeechSynthesisUtterance('This is Chat bot where you can chat with the doctor');
		window.speechSynthesis.speak(msg);
	}, []);

	return (
		<>
			<div style={{ backgroundColor: '#A7C7E7' }}>
				<div>
					<Navbar />
				</div>
				<div style={{ backgroundColor: '#A7C7E7', marginTop: '70px' }}>
					<h1 style={{ textAlign: 'center', paddingTop: '30px' }}>CHATBOT</h1>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '86vh' }}>
						<Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
}
export default Chat;
