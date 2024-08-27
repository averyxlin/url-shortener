import React from 'react';
// import TopBarDropdown from '../TopBarDropdown/TopBarDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import './TopBarLink.css';

const TopBarLink = ({ title, hasDropdown }) => {

  return (
    <div
      className="top-bar-link"
    >
      <div className="top-bar-link-title">
        <div className="top-bar-link-title-text">
          {title}
        </div>
        {hasDropdown && (
          <div className="top-bar-link-title-icon">
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        )}
      </div>
      {/* {hasDropdown && <TopBarDropdown />} */}
    </div>
  );
};

export default TopBarLink;