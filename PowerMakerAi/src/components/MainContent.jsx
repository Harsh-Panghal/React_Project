import React, { useEffect, useState } from 'react';
import Header from './Header';
import PromptInputArea from './PromptInputArea';
import NewChatPage from './NewChatPage';
import ChatPage from './ChatPage'; // Import the ChatPage>
import moreIcon from '../assets/more-icon.svg';
import TraceLogFilterCard from './TraceLogFilterCard';
// import EntityTable from './EntityTable';
import ChatPageWithTable from './ChatPageWithTable';





const MainContent = ({ onToggleSidebar, onToggleProfileCard, issidebar2Visible, isInviteCardVisible, isDeleteChatAccountVisible, isProfilePageVisible, isFeedbackCardVisible, isCrmCardVisible, isNewChatPageVisible, isChatPageVisible, isChatPageWithTableVisible,setIsAttributeSideDrawerOpen, isAttributeSideDrawerOpen, setIsPluginTraceDrawerOpen,isPluginTraceDrawerOpen }) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);  

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldBlur = issidebar2Visible && windowWidth <= 428;

  return (
    <div className={`main-card ${isInviteCardVisible || isAttributeSideDrawerOpen || isPluginTraceDrawerOpen ||isDeleteChatAccountVisible || isFeedbackCardVisible || isCrmCardVisible ? 'blurred' : ''} grow shrink basis-auto`}>
      
      {/* <img src={mainImg} alt="Main" className='mainimg' /> */}
      <div className={`sub-main-card ${shouldBlur  ? 'blurred' : ''}`}>
        <Header onToggleSidebar={onToggleSidebar} onToggleProfileCard={onToggleProfileCard} />
        <div className="content-grid">
          {/* ------------------------------------------default Landing page Or new chat page------------------- */}
          {isNewChatPageVisible && <NewChatPage isProfilePageVisible={isProfilePageVisible} isDeleteChatAccountVisible={isDeleteChatAccountVisible} />}

          {/*---------------------------------------  Existing-Chat-page --------------------------------- */}
          {isChatPageVisible && <ChatPage />}

          {isChatPageWithTableVisible && <ChatPageWithTable isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} setIsAttributeSideDrawerOpen={setIsAttributeSideDrawerOpen} setIsPluginTraceDrawerOpen={setIsPluginTraceDrawerOpen} />}

          {/* --------------------------------------Trace log filter Table Page ---------------- */}
          
          {/* <TraceLogFilterCard /> */}
          {/* -------------------------------------SideDrawer for Attributes------------------------  */}
          

        </div >
      </div >

    </div >
  );
};

export default MainContent;
