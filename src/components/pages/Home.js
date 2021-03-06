import React from 'react';
import Header from './homePagesComponents/Header';
import Footer from './homePagesComponents/Footer';
import HeaderBottom from './homePagesComponents/HeaderBottom';
import FeatureItem from './homePagesComponents/FeatureItem';
import './Home.css';
import Navbar from './homePagesComponents/Navbar';

const Home = () => {
	return (
		<>
			<div className="main-home-page">
				<Navbar />
				<HeaderBottom/>
				<Header />
				<Footer />
			</div>
		</>
	);
};

export default Home;
