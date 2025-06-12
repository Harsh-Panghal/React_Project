import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Sidebar2 from './components/Sidebar2.jsx';
import MainContent from './components/MainContent.jsx';
import React, { useState } from 'react';
import DeleteChatAccount from './components/DeleteChatAccount.jsx';
import crossIcon from './assets/cross-icon.svg';


function App() {
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false); // false means Sidebar (default)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 428);


  const handleToggleSidebar = () => {

    setIsSidebar2Visible(prev => !prev);
  };
  return (
    <>
      
      {isSidebar2Visible ? <Sidebar2 /> : <Sidebar />}
      <MainContent onToggleSidebar={handleToggleSidebar} />
      <DeleteChatAccount></DeleteChatAccount>
      <div className="invite-card">
        <img src={crossIcon} alt="cross-btn" />
        <h2>Invite people</h2>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
        <div className='invite-btn'>
          <button className='email'>Invite with email</button>
          <button className='link'>Invite with link</button>
        </div>
        <span>Add Team</span>
        <div className='email-input'>
           <input type="email" placeholder='Enter Email'/>
           <button className='send-btn'>Send</button>
        </div>
        <p>Lorem Ipsum is simply dummy text of the printing</p>
      </div>
      
    </>
  );
}

export default App;
