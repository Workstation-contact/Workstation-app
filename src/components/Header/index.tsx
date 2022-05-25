import React, { useContext, useState, useEffect, useRef } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { Link } from 'react-router-dom';
import Linkedin from '../../images/linkedin.svg'
import Logo from '../../images/logo.svg'

import { ContainerNav } from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme  }) => {
  const { colors, title } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false)
  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen)
  }

  console.log(menuOpen)

  
  return (
    <ContainerNav>
    
    <div className={`nav-container ${menuOpen ? "active" : ""} `}>
      <nav>

        <ul className="mobile-nav">
            <li>
                <Link reloadDocument to="/"><img className='logo' src={Logo} alt="Logo"/></Link>
            </li>
            <li>
                <div onClick={handleMenuOpen} className="menu-icon-container">
                    <div className="menu-icon">
                        <span className="line-1"></span>
                        <span className="line-2"></span>
                    </div>
                </div>
            </li>
        </ul>

        <ul className="desktop-nav">
            <div className="nav-left">
                <li>
                <Link reloadDocument to="/"><img className='logo' src={Logo} alt="Logo"/></Link>
                </li>
                <li>
                <Link reloadDocument to="/Wbox">wBox</Link>
                </li>
                <li>
                <Link reloadDocument to="/Wdesk">wDesk</Link>
                </li>

                <li>
                <Link reloadDocument to="/Wscreen">wScreen</Link>
                </li>

                <li>
                <Link reloadDocument to="/Pro">Pro</Link>
                </li>
            </div>

            <div className="nav-right">

                <li>
                  <Switch
                    onChange={toggleTheme}
                    checked={title === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    width={40}
                    handleDiameter={20}
                  />
                </li>
                <li className='participer'>
                <Link reloadDocument to="/Participer">Participer</Link>
                </li>
                
            </div>
        </ul>
        
      </nav>

      <div className="link-close"></div>
    </div>
    
    
      <div className='link-linkedin'>
        
          <a href="https://www.linkedin.com/company/w-station-cp/about/?viewAsMember=true"><img src={Linkedin} alt="Linkedin"/></a>
        
      </div>


    </ContainerNav>
  );
};

export default Header;
