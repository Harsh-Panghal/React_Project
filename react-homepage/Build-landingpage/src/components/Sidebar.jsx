import React from 'react';
import logo from '../assets/logo.svg';
import addIcon from '../assets/add-icon.svg';
import histIcon from '../assets/history-icon.svg';
import quesIcon from '../assets/questionmark-icon.svg';
import setIcon from '../assets/setting-icon.svg';

const Sidebar = ({isInviteCardVisible, isDeleteChatAccountVisible}) => (
  <div className={`sidebar-card ${isInviteCardVisible || isDeleteChatAccountVisible ? 'blurred' : ''}`}>
    <div className="card1">
      <img src={logo} alt="Logo" className='logo' />
      <img src={addIcon} alt="Add" className='addicon' />
      <img src={histIcon} alt="History" className='histicon' />
    </div>
    <div className="card2">
      <img src={quesIcon} alt="Questions" className='quesicon' />
      <img src={setIcon} alt="Settings" className='seticon' />
    </div>
  </div>
);

export default Sidebar;
// This component serves as the sidebar of the application, providing navigation options.
// It includes icons for the logo, adding new items, viewing history, accessing help, and settings, enhancing the user interface and navigation experience.