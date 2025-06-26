import React, { useEffect, useState } from 'react';
import Header from './Header';
import PromptCards from './PromptCards';
import PromptInputArea from './PromptInputArea';
import ChatPage from './ChatPage'; // Import the ChatPage>
import moreIcon from '../assets/more-icon.svg';
import TraceLogFilterCard from './TraceLogFilterCard';
import EntityTable from './EntityTable';



const MainContent = ({ onToggleSidebar, onToggleProfileCard, issidebar2Visible, isInviteCardVisible, isDeleteChatAccountVisible, isProfilePageVisible, isFeedbackCardVisible, isCrmCardVisible }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldBlur = issidebar2Visible && windowWidth <= 428;

  return (
    <div className={`main-card ${isInviteCardVisible || isDeleteChatAccountVisible || isFeedbackCardVisible || isCrmCardVisible ? 'blurred' : ''} grow shrink basis-auto`}>
      {/* <img src={mainImg} alt="Main" className='mainimg' /> */}
      <div className={`sub-main-card ${shouldBlur ? 'blurred' : ''}`}>
        <Header onToggleSidebar={onToggleSidebar} onToggleProfileCard={onToggleProfileCard} />
        <div className="content-grid">
          {/* ------------------------------------------default home page------------------- */}
          {/* <div className={`content-card ${isProfilePageVisible ? '!hidden' : ''}`}>
            <h1>Hello, Adam Siegel! <br />What would you like to make?</h1>
            <p>Use one of the most common prompts below</p>
            <PromptCards />
            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
          </div> */}


          {/*--------------------------------------- text area--------------------------------- */}
          {/* <ChatPage></ChatPage> */}


          {/* --------------------------------------Trace log filter Table area---------------- */}
          {/* <TraceLogFilterCard /> */}

          {/* --------------------------------------Entity Table area---------------- */}
          <EntityTable />

        </div >
      </div >

    </div >
  );
};

export default MainContent;
