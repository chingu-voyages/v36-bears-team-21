import React from 'react';
import backgroundImage from '../images/bg-header-desktop.svg';

const Header = () => {
  return (
    <header
      className="bg-fixed bg-teal-600 bg-repeat "
      style={{
        backgroundImage: `url(${backgroundImage})`,
        height: '110px',
        width: '100%',
      }}
    ></header>
  );
};

export default Header;
