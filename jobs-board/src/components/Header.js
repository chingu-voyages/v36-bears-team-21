import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import backgroundImage from '../images/bg-header-desktop.svg';

const Header = () => {
  return (
    <header
      className="bg-fixed bg-teal-600 bg-repeat flex text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '110px',
        width: '100%',
        lineHeight: '110px',
      }}
    >
      <h1 className="basis-1/2 md:basis-3/4 px-4">JobBoard</h1>
      <nav
        className="flex justify-between align-center w-full px-4 h-full tracking-wider md:basis-1/4 basis-1/2"
        style={{ lineHeight: '110px' }}
      >
        <NavLink className="pr-4" to="/">
          Home
        </NavLink>{' '}
        <NavLink to="profile">Profile</NavLink>{' '}
      </nav>
    </header>
  );
};

export default Header;
