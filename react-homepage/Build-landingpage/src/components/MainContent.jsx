import React, { useEffect, useState } from 'react';
import mainImg from '../assets/main-img.svg';
import Header from './Header';
import PromptCards from './PromptCards';
import PromptInputArea from './PromptInputArea';
import picSelectIcon from '../assets/pic-select-icon.svg';
import moreIcon from '../assets/more-icon.svg';
import tokenIcon from '../assets/token-icon.svg';
import logo from '../assets/logo.svg';

const MainContent = ({ onToggleSidebar, onToggleProfileCard, issidebar2Visible, isInviteCardVisible, isDeleteChatAccountVisible }) => {
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
        <div className="content-grid">
          <div className="content-card ">
            <h1>Hello, Adam Siegel! <br />What would you like to make?</h1>
            <p>Use one of the most common prompts below</p>
            <PromptCards />
            <PromptInputArea />
          </div>
        </div>
      </div>
      {/* <div className="profile-page gap-2 absolute top-[10%] left-[1%] bg-white/90 border-1 border-solid border-[#E6E6E6CC]  w-[96%] max-w-[1604px] rounded-[12px] z-2 flex flex-col flex-wrap items-center justify-around">
        <img src={tokenIcon} alt="token area" className='absolute top-[2%] right-[2%] cursor-pointer max-w-[179px] h-auto' />
        <h2 className="text-[#082343] font-bold">Profile</h2>
        <img src={picSelectIcon} alt="pic-select-area" className='h-[113px] cursor-pointer' />
        <div className=' profile-input-area text-[16px] max-w-[88%] h-auto flex gap-4 justify-between flex-wrap' >
          <div className='name-area max-w-[45%] w-[45%]'>
            <div className='text-[rgba(0, 20, 45, 1)] text-[14px] opacity-50'>Name</div>
            <input type="text" placeholder='Enter your name' value="Alessio" className='w-[100%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
          </div>
          <div className='email-area w-[45%] max-w-[45%] '>
            <div className='text-[rgba(0, 20, 45, 1)] text-[14px] opacity-50'>E-Mail</div>
            <input type="email" placeholder='Enter your E-mail' className='w-[100%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
          </div>
          <div className='company-area w-[45%] max-w-[45%]'>
            <div className='text-[rgba(0, 20, 45, 1)] text-[14px] opacity-50'>Company Name</div>
            <input type="text" placeholder='Enter your name' value="Lorem Ipsum is simpl" className='w-[100%] outline-[#1FA2D0] min-h-[60px] text-[#082343] text-[16px] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
          </div>
          <div className='w-[45%] max-w-[45%] position-area relative'>
            <div className='text-[rgba(0, 20, 45, 1)] text-[14px] opacity-50'>Position</div>
            <img src={moreIcon} alt="option-selector" className='absolute left-[92%] top-[45%] w-[24px] h-[24px] cursor-pointer' />
            <select name="position" id="position" className=' cursor-pointer w-[100%] outline-[#1FA2D0] appearance-none min-h-[60px] text-[16px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]'>
              <option value="position-1">Position 1</option>
              <option value="position-2">Position 2</option>
              <option value="position-3">Position 3</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className='address-area w-[100%] max-w-[100%]'>
            <div className='text-[rgba(0, 20, 45, 1)] text-[14px] opacity-50'>Address</div>
            <div className="address-wrapper flex justify-between flex-wrap gap-1">
              <input type="text" placeholder='Line 1' className='w-[45%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
              <input type="text" placeholder='Line 2' className='w-[45%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
              <input type="text" placeholder='City' className='w-[45%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
              <input type="text" placeholder='ZIP Code' className='w-[45%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
              <input type="text" placeholder='Country' className='w-[45%] outline-[#1FA2D0] min-h-[60px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[74px]' />
            </div>
          </div>

        </div>
        <button className='profile-update-btn  cursor-pointer bg-[#0E5185] text-[#FFFFFF] max-w-[400px] rounded-[50px] hover:bg-[#1FA2D0] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300'>Update</button>
        <span className='text-[16px] font-[500] text-[#B3261E] underline cursor-pointer'>Delete Account</span>
      </div>
      <img src={logo} alt="logo"  className='absolute top-[12%] left-[38%] w-[23%] z-1 blur-[10px]'/> */}
    </div>
  );
};

export default MainContent;
