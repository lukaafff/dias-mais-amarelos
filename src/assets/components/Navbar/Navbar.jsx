import React, { useState } from 'react'
import { MenuData } from './MenuData';

import "./Navbar.css";
import LogoIcon from "../../images/logo-icon.png";

const Navbar = () => {
  //menu
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className='NavContainer'>
      <nav className="NavbarItens">
        <div className='logo'>
          <a href='#'>
            <img src={LogoIcon} alt="logo" />
          </a>
          <p className='nomeLogo'>Dias Mais Amarelos</p>
        </div>
        
        <ul className= {clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <a href={item.rota} className={item.cName}>
                {item.nome}
              </a>
              </li>
            ))}
        </ul>
        <div className='menu' onClick={handleClick}>
          <i 
            className= {clicked ? "bx bx-x" : "bx bx-menu"}
            id='menu-icon'
          ></i>
        </div>
      </nav>
    </div>
  )
}

export default Navbar