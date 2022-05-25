import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

import wBox from '../../images/1.png';
import wDesk from '../../images/2.png';
import wScreen from '../../images/3.png';
import wStation from '../../images/home3.png';
import W from '../../images/logo.svg';

const Accueil: React.FC = () => {
	return (
		<Container>
			<div className='header-text-container'>
        
        <h1><img className='w' src={W} alt="Lettre W (logo)" />orkstation</h1>
        <p>Better Space, Better Process</p>
        <div className='header-cta'>
        <a href='https://www.linkedin.com/in/matthieupollet-websitecreator/' className="">Se connecter</a>
        </div>
      </div>

      <div className='header-container-img'>
      <img src={wStation} alt="wStation : un ordinateur, un bureau, un écran" />
      </div>
      

			
		</Container>
	);
};

export default Accueil;
