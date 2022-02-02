import React from 'react';
import './Footer.css';
import Wave from '../homePagesComponents/wave.svg';
import { colors } from '@material-ui/core';

const Footer = () => {
	return (
		<footer>
			<div className="footer-wave">
				<div className="wave-decoration">
					<div className="wave02">
						<svg
							version="1.1"
							width="100%"
							height={131}
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 100% 131.2"
							style={{ enableBackground: 'new 0 0 100% 131.2' }}
							xmlSpace="preserve"
						>
							<path
								className="st0"
								d="M-0.5,83.4c59.6,40.5,193.3,35,316.7-12.3C525.6-9.2,756.7-9.6,979.8,12.3s445.6,57.9,669.8,54.1C1821.1,63.5,1932,56,2000,53c0,36,0,76.4,0,76.4H1L-0.5,83.4z"
							/>
							<path
								className="st1"
								d="M309.2,46.1c265.1-57.8,453.7-19.6,687.9,6.8c285.1,32.2,564.2,63,863.4,33.4c94-9.3,119.5-19.6,139.5-19c0,32.2,0,63,0,63H0v-66C0,64.3,152.7,80.2,309.2,46.1z"
							/>
							<path
								className="st1"
								d="M344.5,54.9c82.3-26.3,167.2-46,253-36.5S767,51.6,851.9,67.8c272.3,52,522.5,16.7,819.3,5c90-3.5,293.8-13.6,328.8-12.6c0,24,0,71,0,71H-1v-59C-1,72.3,198.7,101.6,344.5,54.9z"
							/>
							<path d="M1731.8,97.1c-289.3,18.5-590.4,17.2-873.9-16.8C746,66.9,641.1,42.1,528.5,39.5s-249.3,31-353.7,69.9c-57.5,21.4-164.7,2.3-175.7-4.7c0,8,0,26.5,0,26.5h2003v-58C2002,73.3,1854.2,89.2,1731.8,97.1z" />
						</svg>
					</div>
				</div>
			</div>
			<div className="foot">
				<div className="icons-footer">
					<br />
					<a href="https://www.facebook.com/">
						<i className="fa fa-facebook" />
						&nbsp;
					</a>
					<a href="https://www.twitter.com/">
						<i className="fa fa-twitter" />
						&nbsp;
					</a>
					<a href="https://www.snapchat.com/">
						<i className="fa fa-snapchat" />
						&nbsp;
					</a>
					<a href="https://www.instagram.com/">
						<i className="fa fa-instagram" />
						&nbsp;
					</a>
				</div>
				<br />
				<br />
				<p className="copyright"> Doctor-Patient-Appointment © 2022 </p>
				<br />
				<br />
			</div>
		</footer>
	);
};

export default Footer;
