import React from 'react';
import threelinesIcon from '../assets/parallel-icon.svg';
import dbIcon from '../assets/contdb-icon.svg';
import bellIcon from '../assets/bell-icon.svg';
import picIcon from '../assets/pic-icon.svg';

const Header = ({ onToggleSidebar, onToggleProfileCard }) => (
  <header className='gap-4'>
    <div className="header-card1 grow shrink basis-auto">
      <img src={threelinesIcon} alt="Menu" className='threelinesicon max-w-[20px]' onClick={onToggleSidebar} />
      <span className="title">Power Maker AI</span>
      <span className='beta'> (Beta)</span>
      <img src={dbIcon} alt="Database" className='dbicon max-w-[172px]' />
    </div>
    <div className="header-card2">
      <img src={bellIcon} alt="Bell" className='bellicon max-w-[20px]' />
      <img src={picIcon} alt="Profile" className='picicon' onClick={onToggleProfileCard} />
      <span className='username'>Alessio</span>
    </div>
  </header>
);

export default Header;
// This component serves as the header of the application, providing navigation and user profile options.
// It includes icons for menu, database, notifications, and user profile, enhancing the user interface and accessibility.