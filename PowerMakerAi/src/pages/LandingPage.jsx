import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Sidebar2 from '../components/Sidebar2.jsx';
import MainContent from '../components/MainContent.jsx';
import DeleteChatAccount from '../components/DeleteChatAccount.jsx';
import InviteCard from '../components/InviteCard.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import '../App.css';
import FeedbackCard from '../components/FeedbackCard.jsx';
import ProfilePage from '../components/ProfilePage.jsx';
import CRMCard from '../components/CRMCard.jsx';



function LandingPage() {
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false);
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const [isInviteCardVisible, setIsInviteCardVisible] = useState(false);
  const [isDeleteChatAccountVisible, setIsDeleteChatAccountVisible] = useState(false);
  const [isFeedbackCardVisible, setIsFeedbackCardVisible] = useState(false);
  const [isProfilePageVisible, setIsProfilePageVisible] = useState(false);
  const [isCrmCardVisible, setIsCrmCardVisible] = useState(false);

  const handleToggleCrmCard = () => setIsCrmCardVisible(prev => !prev);

  const handleToggleSidebar = () => setIsSidebar2Visible(prev => !prev);
  const handleToggleProfileCard = () => setIsProfileCardVisible(prev => !prev);
  const handleToggleInviteCard = () => setIsInviteCardVisible(prev => !prev);
  const handleToggleDeleteChatAccount = () => setIsDeleteChatAccountVisible(prev => !prev);
  const handleToggleFeedbackCard = () => setIsFeedbackCardVisible(prev => !prev);
  const handleToggleProfilePage = () => setIsProfilePageVisible(prev => !prev);





  return (
    <>
      {isProfilePageVisible ? (
        <Sidebar
          isDeleteChatAccountVisible={isDeleteChatAccountVisible}
          isInviteCardVisible={isInviteCardVisible}
          onToggleInviteCard={handleToggleInviteCard}
        />
      ) : isSidebar2Visible ? (
        <Sidebar2
          isDeleteChatAccountVisible={isDeleteChatAccountVisible}
          isInviteCardVisible={isInviteCardVisible}
          onToggleSidebar={handleToggleSidebar}
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
          onToggleFeedbackCard={handleToggleFeedbackCard}
          onToggleCrmCard={handleToggleCrmCard}
          isCrmCardVisible={isCrmCardVisible}
        />
      ) : (
        <Sidebar
          isDeleteChatAccountVisible={isDeleteChatAccountVisible}
          isInviteCardVisible={isInviteCardVisible}
          onToggleInviteCard={handleToggleInviteCard}
        />
      )}


      <MainContent
        isDeleteChatAccountVisible={isDeleteChatAccountVisible}
        isInviteCardVisible={isInviteCardVisible}
        issidebar2Visible={isSidebar2Visible}
        onToggleSidebar={handleToggleSidebar}
        onToggleProfileCard={handleToggleProfileCard}
        isProfilePageVisible={isProfilePageVisible}
      />

      {isDeleteChatAccountVisible && (
        <DeleteChatAccount
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
          isProfileCardVisible={isProfileCardVisible}
        />
      )}

      {isProfileCardVisible && (
        <ProfileCard
          isInviteCardVisible={isInviteCardVisible}
          onToggleInviteCard={handleToggleInviteCard}
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
          onToggleProfilePage={handleToggleProfilePage}
          isProfilePageVisible={isProfilePageVisible}
        />
      )}

      {isInviteCardVisible && <InviteCard onToggleInviteCard={handleToggleInviteCard} />}
      {isFeedbackCardVisible && <FeedbackCard />}
      {isProfilePageVisible && <ProfilePage onToggleProfilePage={handleToggleProfilePage} />}
      {isCrmCardVisible && <CRMCard onToggleCrmCard={handleToggleCrmCard}/>}


    </>
  );
}

export default LandingPage;
