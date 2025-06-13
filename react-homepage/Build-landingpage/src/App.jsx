import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Sidebar2 from './components/Sidebar2.jsx';
import MainContent from './components/MainContent.jsx';
import React, { useState } from 'react';
import DeleteChatAccount from './components/DeleteChatAccount.jsx';
import InviteCard from './components/InviteCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';


function App() {
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false); // false means Sidebar (default)
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const [isInviteCardVisible, setIsInviteCardVisible] = useState(false);
  const [isDeleteChatAccountVisible, setIsDeleteChatAccountVisible] = useState(false);
 

  const handleToggleSidebar = () => {

    setIsSidebar2Visible(prev => !prev);
  };
  const handleToggleProfileCard = () => {

    setIsProfileCardVisible(prev => !prev);
  }
  const handleToggleInviteCard = () => {

    setIsInviteCardVisible(prev => !prev);
  }
  const handleToggleDeleteChatAccount = () => {

    setIsDeleteChatAccountVisible(prev => !prev);
  }
  return (
    <>
      {isSidebar2Visible ? <Sidebar2 isSidebar2Visible={isSidebar2Visible} onToggleSidebar={handleToggleSidebar} onToggleDeleteChatAccount={handleToggleDeleteChatAccount}/> : <Sidebar />}
      <MainContent onToggleSidebar={handleToggleSidebar} onToggleProfileCard={handleToggleProfileCard} />
      {isDeleteChatAccountVisible && <DeleteChatAccount onToggleDeleteChatAccount={handleToggleDeleteChatAccount}/>}
      {/* convert this to a component */}
      {isProfileCardVisible && <ProfileCard onToggleInviteCard={handleToggleInviteCard}/>}
      {isInviteCardVisible && <InviteCard onToggleInviteCard={handleToggleInviteCard} />}
      

    </>
  );
}

export default App;
