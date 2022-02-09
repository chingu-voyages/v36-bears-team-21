import React from 'react';
import { Link } from 'react-router-dom';

import backgroundImage from '../images/bg-header-desktop.svg';

const Header = (props) => {
  return (
    <header
      className="bg-fixed bg-teal-600 bg-repeat "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '110px',
        width: '100%',
      }}
    >
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="profile">Profile</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
