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
import HelpCard from '../components/HelpCard.jsx';
import AttributeSideDrawer from '../components/AttributeSideDrawer.jsx';
import PluginTraceDrawer from '../components/PluginTraceDrawer.jsx';
import TermsCard from '../components/TermsCard.jsx';
import PrivacyCard from '../components/PrivacyCard.jsx';



function LandingPage() {
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false);
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const [isInviteCardVisible, setIsInviteCardVisible] = useState(false);
  const [isDeleteChatAccountVisible, setIsDeleteChatAccountVisible] = useState(false);
  const [isFeedbackCardVisible, setIsFeedbackCardVisible] = useState(false);
  const [isProfilePageVisible, setIsProfilePageVisible] = useState(false);
  const [isCrmCardVisible, setIsCrmCardVisible] = useState(false);

  const [isAttributeSideDrawerOpen, setIsAttributeSideDrawerOpen] = useState(false);
  const [isPluginTraceDrawerOpen, setIsPluginTraceDrawerOpen] = useState(false);

  const handleToggleCrmCard = () => setIsCrmCardVisible(prev => !prev);

  const handleToggleSidebar = () => setIsSidebar2Visible(prev => !prev);
  const handleToggleProfileCard = () => setIsProfileCardVisible(prev => !prev);
  const handleToggleInviteCard = () => setIsInviteCardVisible(prev => !prev);
  const handleToggleDeleteChatAccount = () => setIsDeleteChatAccountVisible(prev => !prev);
  const handleToggleFeedbackCard = () => setIsFeedbackCardVisible(prev => !prev);
  const handleToggleProfilePage = () => setIsProfilePageVisible(prev => !prev);


  const [ishelpCardVisible, setIsHelpCardVisible] = useState(false);
  const handleToggleHelpCard = () => {

    setIsHelpCardVisible(prev => !prev);
  }

  const [isNewChatPageVisible, setIsNewChatPageVisible] = useState(true);
  const [isChatPageVisible, setIsChatPageVisible] = useState(false);
  const [isChatPageWithTableVisible, setIsChatPageWithTableVisible] = useState(false);

  const [isDrawerVisible, setIsDrawerVisible] = useState(true);
  const [isTermCardVisible, setIsTermCardVisible] = useState(false);
  const handletermcard = () => setIsTermCardVisible(prev => !prev);
  const [isPrivacyCardVisible, setIsPrivacyCardVisible] = useState(false);
  const handleprivacycard = () => setIsPrivacyCardVisible(prev => !prev);






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
          isFeedbackCardVisible={isFeedbackCardVisible}
          onToggleHelpCard={handleToggleHelpCard}
          setIsNewChatPageVisible={setIsNewChatPageVisible}
          setIsChatPageVisible={setIsChatPageVisible}
          setIsChatPageWithTableVisible={setIsChatPageWithTableVisible}
          isAttributeSideDrawerOpen={isAttributeSideDrawerOpen}
          isPluginTraceDrawerOpen={isPluginTraceDrawerOpen}
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
        isFeedbackCardVisible={isFeedbackCardVisible}
        isCrmCardVisible={isCrmCardVisible}
        isNewChatPageVisible={isNewChatPageVisible}
        isChatPageVisible={isChatPageVisible}
        isChatPageWithTableVisible={isChatPageWithTableVisible}
        isAttributeSideDrawerOpen={isAttributeSideDrawerOpen}
        setIsAttributeSideDrawerOpen={setIsAttributeSideDrawerOpen}
        setIsPluginTraceDrawerOpen={setIsPluginTraceDrawerOpen}
        isPluginTraceDrawerOpen={isPluginTraceDrawerOpen}
      />

      {isDeleteChatAccountVisible && (
        <DeleteChatAccount
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
          isProfileCardVisible={isProfileCardVisible}
          isProfilePageVisible={isProfilePageVisible}
        />
      )}

      {isProfileCardVisible && (
        <ProfileCard
          isInviteCardVisible={isInviteCardVisible}
          onToggleInviteCard={handleToggleInviteCard}
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
          onToggleProfilePage={handleToggleProfilePage}
          isProfilePageVisible={isProfilePageVisible}
          isDeleteChatAccountVisible={isDeleteChatAccountVisible}
        />
      )}

      {isInviteCardVisible && <InviteCard onToggleInviteCard={handleToggleInviteCard} />}
      {isFeedbackCardVisible && <FeedbackCard onToggleFeedbackCard={handleToggleFeedbackCard} />}
      {isProfilePageVisible && <ProfilePage onToggleProfilePage={handleToggleProfilePage} onToggleDeleteChatAccount={handleToggleDeleteChatAccount} />}
      {isCrmCardVisible && <CRMCard onToggleCrmCard={handleToggleCrmCard} />}

      {ishelpCardVisible && <HelpCard onToggleDeleteChatAccount={handleToggleDeleteChatAccount} isDeleteChatAccountVisible={isDeleteChatAccountVisible} onToggleFeedbackCard={handleToggleFeedbackCard} onToggleCrmCard={handleToggleCrmCard} isCrmCardVisible={isCrmCardVisible} isFeedbackCardVisible={isFeedbackCardVisible} onToggleHelpCard={handleToggleHelpCard} onToggleTermCard={handletermcard} onTogglePrivacyCard={handleprivacycard} />}

      
      {isTermCardVisible && <TermsCard />}
      {isPrivacyCardVisible && <PrivacyCard />}

    

      {isAttributeSideDrawerOpen && <AttributeSideDrawer setIsAttributeSideDrawerOpen={setIsAttributeSideDrawerOpen} />}
      {isPluginTraceDrawerOpen && <PluginTraceDrawer setIsPluginTraceDrawerOpen={setIsPluginTraceDrawerOpen} />}


    </>
  );
}

export default LandingPage;
