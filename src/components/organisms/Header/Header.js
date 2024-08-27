import React from 'react';
import './Header.css';
import Logo from '../../atoms/Logo/Logo';
import TopBar from '../../molecules/TopBar/TopBar';


const Header = () => {

const items = [
  { title: 'Item 1', hasDropdown: true },
  { title: 'Item 2', hasDropdown: false },
  { title: 'Item 3', hasDropdown: true },
];

  return (
    <div className="header">
        <div className="header-content">
            <div className="header-section">
                <Logo />
            </div>
            <div className="header-section">
                <TopBar items={items} />
            </div>
      </div>
    </div>
  );
};

export default Header;