import React from 'react';
import Header from './homePagesComponents/Header';
import Footer from './homePagesComponents/Footer';
import HeaderBottom from './homePagesComponents/HeaderBottom';
import FeatureItem from './homePagesComponents/FeatureItem';
import './Home.css';
import Navbar from './homePagesComponents/Navbar';

const AboutUs = (props) => {
	return (
		<>
			<div className="main-about-page">
				<Navbar />
				<HeaderBottom {...props} />
				<Header />
				<Footer />
			</div>
		</>
	);
};

export default AboutUs;
