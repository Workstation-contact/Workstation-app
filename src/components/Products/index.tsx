import React, { FC, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Container, ProductCard, Wrapper } from './styles';

import wBox from '../../images/1.png';
import logo from '../../images/1.png';
import wDesk from '../../images/2.png';
import wScreen from '../../images/3.png';
import wStation from '../../images/home.png';

type Props = {
	logo: string;
	video: string;
};

const Products: React.FC<Props> = ({ logo, video }) => {
	const handleOnMouseOver = (e: React.MouseEvent<HTMLVideoElement>) => {
		e.currentTarget.play();
	};

	const handleOnMouseOut = (e: React.MouseEvent<HTMLVideoElement>) => {
		e.currentTarget.pause();
	};

	return (
		<Container>
			<h2>Products</h2>
			<Wrapper>
				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>wBox</h3>
						</div>

						<img src={logo} alt="wBox : ordiateur externe" />
						<video
							loop
							preload="none"
							muted // Needs to be there to be able to play
							onMouseOver={handleOnMouseOver}
							onMouseOut={handleOnMouseOut}
						>
							<source src={video} type="video/mp4" />
						</video>

						<div className="product-desc">
							<p>Connectez votre PC portable et boostez votre puissance de travail</p>
						</div>
					</div>
				</ProductCard>

				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>wDesk</h3>
						</div>

						<img src={wDesk} alt="wDesk : bureau ergonomique" />
						<video
							loop
							preload="none"
							muted // Needs to be there to be able to play
							onMouseOver={handleOnMouseOver}
							onMouseOut={handleOnMouseOut}
						>
							<source src={video} type="video/mp4" />
						</video>

						<div className="product-desc">
							<p>Un bureau ergonomique, sur mesure et adapté aux open spaces</p>
						</div>
					</div>
				</ProductCard>

				<ProductCard>
					<div className="product-card">
						<div className="product-title">
							<h3>wScreen</h3>
						</div>

						<img src={wScreen} alt="wScreen : un écran ultrawide" />
						<video
							loop
							preload="none"
							muted // Needs to be there to be able to play
							onMouseOver={handleOnMouseOver}
							onMouseOut={handleOnMouseOut}
						>
							<source src={video} type="video/mp4" />
						</video>

						<div className="product-desc">
							<p>Un écran ultrawide, fluide avec des couleurs éclatantes</p>
						</div>
					</div>
				</ProductCard>
			</Wrapper>
		</Container>
	);
};

export default Products;
