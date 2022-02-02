import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	const history = useHistory();
	const logout = () => {
		localStorage.setItem('status_login', 'false');
		history.push('/');
	};
	return (
		<nav className="my-nav-bar">
			<ul>
				<li>
					<i className="fa fa-home">
						{' '}
						<Link to="/">Home</Link>{' '}
					</i>
				</li>
				<li>
					<i className="fa fa-newspaper-o">
						<Link to="/about">
							<span></span> About Us
						</Link>
					</i>
				</li>

				{localStorage.getItem('status_login') && localStorage.getItem('status_login') === 'false' ? (
					<>
						<li>
							<i className="fa fa-user">
								<Link to="/signup">
									<span> </span>Register
								</Link>
							</i>
						</li>
						<li>
							<i className="fa fa-user">
								<Link to="/login">
									<span> </span>Login
								</Link>
							</i>
						</li>
					</>
				) : (
					<>
						<li>
							<i className="fa fa-book">
								<Link to="/create-appointment">
									<span> </span> Book
								</Link>
							</i>
						</li>
						<li>
							<i className="fa fa-user">
								<Link onClick={() => logout()}>
									<span> </span> Logout
								</Link>
							</i>
						</li>
					</>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;
