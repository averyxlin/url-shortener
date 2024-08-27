import React from 'react';
import TopBarLink from '../TopBarLink/TopBarLink';
import './TopBarItem.css'

const TopBarItem = ({ title, hasDropdown }) => {
  return (
    <div className="top-bar-item">
      <TopBarLink 
        title={title}
        hasDropdown={hasDropdown}
      />
    </div>
  );
};

export default TopBarItem;