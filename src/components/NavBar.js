import React from 'react';
import { NavLink } from 'react-router-dom';
import left from '../images/icon-left.png';
import micro from '../images/microphone.png';
import setting from '../images/settings.png';

function NavBar() {
  return (
    <header className='nav-bar'>
      <nav className='navigation'>
        <NavLink to='/' >
          <img src={left} className='back-button' alt='back'/>
        </NavLink>
        <div className='right-icons'>
          <img src={micro} className='micro' alt='micro'/>
          <img src={setting} className='settings-icon' alt='settings'/>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;