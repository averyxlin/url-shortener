import React from 'react';
import TopBarItem from '../../atoms/TopBarItem/TopBarItem';
import './TopBar.css'

const TopBar = ({ items }) => {
  return (
    <div className="top-bar">
      {items.map((item, index) => (
        <TopBarItem
          key={index}
          title={item.title}
          hasDropdown={item.hasDropdown}
        />
      ))}
    </div>
  );
};

export default TopBar;