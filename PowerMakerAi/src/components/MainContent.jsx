import React, { useEffect, useState } from 'react';
import Header from './Header';
import PromptCards from './PromptCards';
import PromptInputArea from './PromptInputArea';
import editTextIcon from '../assets/editText-icon.svg';
import copyIcon from '../assets/copy-icon.svg';
import quickPromptIcon from '../assets/quick-prompt-icon.svg';
import arrowQuickIcon from '../assets/arrow-quick-icon.svg';


const MainContent = ({ onToggleSidebar, onToggleProfileCard, issidebar2Visible, isInviteCardVisible, isDeleteChatAccountVisible, isProfilePageVisible }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldBlur = issidebar2Visible && windowWidth <= 428;

  return (
    <div className={`main-card ${isInviteCardVisible || isDeleteChatAccountVisible ? 'blurred' : ''} grow shrink basis-auto`}>
      {/* <img src={mainImg} alt="Main" className='mainimg' /> */}
      <div className={`sub-main-card ${shouldBlur ? 'blurred' : ''}`}>
        <Header onToggleSidebar={onToggleSidebar} onToggleProfileCard={onToggleProfileCard} />
        <div className="content-grid !items-start">
          {/* ------------------------------------------default home page------------------- */}
          {/* <div className={`content-card ${isProfilePageVisible ? '!hidden' : ''}`}>
            <h1>Hello, Adam Siegel! <br />What would you like to make?</h1>
            <p>Use one of the most common prompts below</p>
            <PromptCards />
            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
          </div> */}
          {/*--------------------------------------- text area------------------------ */}
          <div className="input-card !mt-[-30px] md:w-[734px] md:max-w-[734px] flex flex-col gap-4 ">
            <div className="input-text-area md:w-[556px] max-w-[556px] !py-[5px] !px-[16px] bg-[#F4F4F4] rounded-md self-end">
              <p className="text-[12px] leading-[22px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
            </div>
            <div className="tools flex gap-[10px] justify-end">
              <img src={copyIcon} alt="copy-text" className='cursor-pointer' />
              <img src={editTextIcon} alt="edit-text" className='cursor-pointer' />
            </div>
            <div className="output-text text-[12px] font-[400] leading-[165%] text-[#082343] text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
            <button className="show-preview self-start text-[12px] font-[400] text-[#81817C] border-1 border-[#81817C] !px-4 !py-1 rounded-md cursor-pointer">Show Preview</button>
            <div className="border-[1px] border-[#082343] w-[732px] opacity-20 !mt-4"></div>
            <div className="quick-prompt flex gap-2 items-center">
              <img src={quickPromptIcon} alt="quick-prompt-icon" className='w-[24px] h-[24px]' />
              <p className="text-[16px] font-[600] leading-[22px] text-[#082343]">Quick Prompts</p>
            </div>
            <div className="quick-prompt-options flext flex-col gap-2 !mt-[-10px]">
              <div className="option flex justify-between items-center h-auto">
                <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                <img src={arrowQuickIcon} alt="select-prompt-option"/>
              </div>
              <div className="border-[1px] border-[#082343] w-[732px] opacity-20"></div>
              <div className="option flex justify-between items-center h-auto">
                <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                <img src={arrowQuickIcon} alt="select-prompt-option"/>
              </div>
              <div className="border-[1px] border-[#082343] w-[732px] opacity-20"></div>
              <div className="option flex justify-between items-center h-auto">
                <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                <img src={arrowQuickIcon} alt="select-prompt-option"/>
              </div>
              <div className="border-[1px] border-[#082343] w-[732px] opacity-20"></div>
              <div className="option flex justify-between items-center h-auto">
                <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                <img src={arrowQuickIcon} alt="select-prompt-option"/>
              </div>
              <div className="border-[1px] border-[#082343] w-[732px] opacity-20"></div>
              
            </div>
            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
          </div> 

        </div>
      </div>

    </div>
  );
};

export default MainContent;
