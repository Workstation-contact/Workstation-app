import React from 'react';
import Products from '../components/Products';
import Accueil from '../components/Accueil';
import Animate from '../components/Animate';
import SmoothScroll from '../components/SmoothScroll';
import Avantage from '../components/Avantage';
import Innovant from '../components/Innovant';
import Testsss from '../components/Accueil/index';
import Footer from '../components/Footer';

import logo1 from '../images/1.png';
// Movies
import video1 from '../Video/opti.mp4';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {

  return (
      <div className='home-page'>
        <Testsss/>

        <Products logo={logo1} video={video1}/>
        <Innovant/>
        <Avantage/>
        <Footer/>
      </div>
  );
};

export default HomePage;