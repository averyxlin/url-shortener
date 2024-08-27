import React from 'react';
import TopBarLink from '../TopBarLink/TopBarLink';
import TopBarDropdown from '../TopBarDropdown/TopBarDropdown';

const TopBarItem = ({ hasDropdown }) => {
  return (
    <div className="top-bar-item">
      {hasDropdown ? (
        <TopBarDropdown />
      ) : (
        <TopBarLink />
      )}
    </div>
  );
};

export default TopBarItem;