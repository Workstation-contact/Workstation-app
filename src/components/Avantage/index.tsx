import React, { FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { Container, ProductCard, Wrapper } from './styles';

import Lock from '../../images/Lock.png';
import Power from '../../images/power.png';
import Compatible from '../../images/Compatible.png';
import Libre from '../../images/Libre.png';

const Avantage: React.FC = () => {
	return (
		<Container>
			<Wrapper>
				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>Sécurisé</h3>
						</div>

						<div className="product-img">
							<img src={Lock} alt="wBox : ordiateur externe" />
						</div>

						<div className="product-desc">
							<p>La sécurité atteint de nouveaux commets</p>
						</div>
					</div>
				</ProductCard>

				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>Puissance</h3>
						</div>

						<div className="product-img">
							<img src={Power} alt="wDesk : bureau ergonomique" />
						</div>

						<div className="product-desc">
							<p>La sécurité atteint de nouveaux sommets.</p>
						</div>
					</div>
				</ProductCard>

				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>Compatible</h3>
						</div>

						<div className="product-img">
							<img src={Compatible} alt="wScreen : un écran ultrawide" />
						</div>

						<div className="product-desc">
							<p>Une flexibilité à toute épreuves</p>
						</div>

						<div className='text-hover'>
							<p>Concu pour sadapté a chaque profils. Les perfomances d’OS link vous permettent de concerver votre environnment de travail d’un PC à un autre</p>
						</div>
					</div>
				</ProductCard>	

				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>Libre</h3>
						</div>

						<div className="product-img">
							<img src={Libre} alt="wBox : ordiateur externe" />
						</div>

						<div className="product-desc">
							<p>Devenez indépendant gardez le contrôle</p>
						</div>
					</div>
				</ProductCard>					
			</Wrapper>
		</Container>
	);
};

export default Avantage;
