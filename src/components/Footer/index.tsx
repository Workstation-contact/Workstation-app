import React from 'react';
import { ContainerFooter } from './styles';

import { Link } from 'react-router-dom';
import Linkedin from '../../images/linkedin.svg';
import Logo from '../../images/logo.svg';

const Footer: React.FC = () => {
	return (
		<ContainerFooter>
			<div className="footer">
				<div className="footer-inner">
					<div className="footer-nav">
						<div className="btn1">
							<Link reloadDocument to="/" className="link-logo">
								<img className="logo" src={Logo} alt="Logo" />
							</Link>
						</div>

						<div className="btn2">
						<a href='https://www.linkedin.com/in/matthieupollet-websitecreator/' className="link-linkedin blur-effect"><img className='linkedin' src={Linkedin} alt="Linkedin"/></a>
						</div>

					</div>

					<div className="footer-text">
						<h6>Aidez nous à révolutionner l’espace de travail de demain ! </h6>
					</div>

					<div className="footer-cta">
						<div className="btn">
							<a
								href="https://www.linkedin.com/in/matthieupollet-websitecreator/"
								className="link-connecter"
							>
								Se connecter
							</a>
						</div>

						<div className="btn">
							<Link reloadDocument to="/Participer" className="link-participate blur-effect">
								Participer
							</Link>
						</div>
					</div>

					<div className="footer-info">
						<ul>
							<li>Mentions légale</li>
							<li>|</li>
							<li>Crédit</li>
							<li>|</li>
							<li>Confidentialité des donées</li>
							<li>|</li>
							<li>Cookies</li>
						</ul>
					</div>

					<div className="by">by Matthieu Pollet x Lucas Aprea</div>
				</div>
			</div>
		</ContainerFooter>
	);
};

export default Footer;
