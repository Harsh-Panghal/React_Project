import React from 'react';
import mainImg from '../assets/main-img.svg';
import Header from './Header';
import PromptCards from './PromptCards';
import PromptInputArea from './PromptInputArea';

const MainContent = ({ onToggleSidebar }) => (
  <div className="main-card ">
    <img src={mainImg} alt="Main" className='mainimg' />
    <div className="sub-main-card">
      <Header onToggleSidebar={onToggleSidebar} />
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

export default MainContent;
// This component serves as the main content area of the application, displaying a welcome message, prompt cards, and an input area for user interaction.
// It includes an image, a header, and a grid layout for organizing the content.