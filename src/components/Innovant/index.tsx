import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { ContainerInnovant, ContainerInner, Box } from './styles';

import wBox from '../../images/perf.png';


const Innovant: React.FC = () => {
	return (
		<ContainerInnovant>
			<ContainerInner>
				<Box>
				<div className="wbox-text">

					<h2>wBox</h2>
					<h3>Ne soyez plus limité par votre matériel.</h3>
					<p>
						Créer une station de travail capable de conjuguer des performances extrêmes avec une parfaite
						modularité wBox a été conçu pour que même les pros les plus intraitables puissent repousser leurs
						limites et les limites du possible. Une fois connecter donner le champ libre à vous plus grandes
						idées
					</p>
				</div>

				<div className="wbox-img">
					<img src={wBox} alt="" />
				</div>
				</Box>
			</ContainerInner>
		</ContainerInnovant>
	);
};

export default Innovant;
