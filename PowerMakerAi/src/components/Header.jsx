import React, { useState } from 'react';
import threelinesIcon from '../assets/parallel-icon.svg';

import picIcon from '../assets/pic-icon.svg';
import DBConnectivity from './DBConnectivity';
import NotificationBell from './NotificationBell';

const Header = ({ onToggleSidebar, onToggleProfileCard }) => {

  return (
    <header className='gap-4'>
      <div className="header-card1 grow shrink basis-auto">
        <img src={threelinesIcon} alt="Menu" className='threelinesicon max-w-[20px]' onClick={onToggleSidebar} />
        <span className="title">Power Maker AI</span>
        <span className='beta'> (Beta)</span>
        <DBConnectivity />
      </div>
      <div className="header-card2">
        <NotificationBell />
        <img src={picIcon} alt="Profile" className='picicon' onClick={onToggleProfileCard} />
        <span className='username text-[#082343]'>Alessio</span>
      </div>
    </header>
  );
}

export default Header;
// This component serves as the header of the application, providing navigation and user profile options.
// It includes icons for menu, database, notifications, and user profile, enhancing the user interface and accessibility.