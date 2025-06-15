import React, { useEffect, useState } from 'react';
import mainImg from '../assets/main-img.svg';
import Header from './Header';
import PromptCards from './PromptCards';
import PromptInputArea from './PromptInputArea';

const MainContent = ({ onToggleSidebar, onToggleProfileCard, issidebar2Visible, isInviteCardVisible, isDeleteChatAccountVisible}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldBlur = issidebar2Visible && windowWidth <= 428;

  return (
    <div className={`main-card ${isInviteCardVisible || isDeleteChatAccountVisible ? 'blurred' : ''}`}>
      {/* <img src={mainImg} alt="Main" className='mainimg' /> */}
      <div className={`sub-main-card ${shouldBlur ? 'blurred' : ''}`}>
        <Header onToggleSidebar={onToggleSidebar} onToggleProfileCard={onToggleProfileCard} />
        <div className="content-grid">
          <div className="content-card">
            <h1>Hello, Adam Siegel! <br /> What would you like to make?</h1>
            <p>Use one of the most common prompts below</p>
            <PromptCards />
            <PromptInputArea />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
