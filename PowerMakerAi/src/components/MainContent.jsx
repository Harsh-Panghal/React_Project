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
  const [name, setName] = useState('');
  const isFilled = name !== '';
  const [email, setEmail] = useState('');
  const isFilledemail = email !== '';
  const [Cname, setCName] = useState('');
  const isFilledCname = Cname !== '';
  const [AddressLine1, setAddressLine1] = useState('');
  const isFilledAddressLine1 = AddressLine1 !== '';
  const [AddressLine2, setAddressLine2] = useState('');
  const isFilledAddressLine2 = AddressLine2 !== '';
  const [City, setCity] = useState('');
  const isFilledCity = City !== '';
  const [State, setState] = useState('');
  const isFilledState = State !== '';
  const [Zip, setZip] = useState('');
  const isFilledZip = Zip !== '';
  const [Country, setCountry] = useState('');
  const isFilledCountry = Country !== '';

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
            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
          </div>
        </div>
      </div>
      <div className="profile-page gap-2 absolute top-[52%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white/90 border-1 border-solid border-[#E6E6E6CC] max-w-[1125px] w-[1125px] rounded-[6px] z-2 flex flex-col flex-wrap items-center justify-around">
        <img src={tokenIcon} alt="token area" className='absolute top-[2%] right-[2%] cursor-pointer max-w-[120px] h-auto' />
        <h2 className="text-[#082343] font-bold">Profile</h2>
        <img src={picSelectIcon} alt="pic-select-area" className='h-[100px] cursor-pointer' />
        <div className=' profile-input-area text-[16px] max-w-[897px] h-auto flex gap-6 justify-between flex-wrap ' >
          <div className="relative w-[400px] ">
            <input
              type="text"
              id="name"
              placeholder=" "
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] outline-none transition-all"
            />
            <label
              htmlFor="name"
              className={`
          absolute left-6 text-[#81817C]  bg-white/80 transition-all duration-200 ease-in 
          ${isFilled ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
            >
              Name
            </label>
          </div>
          <div className="relative w-[400px]">
            <input
              type="text"
              id="eamil"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
            />
            <label
              htmlFor="email"
              className={`
          absolute left-6 text-[#81817C]  bg-[#ebf7fa]  transition-all duration-200 ease-in 
          ${isFilledemail ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
            >
              E-Mail
            </label>
          </div>
          <div className="relative w-[400px]">
            <input
              type="text"
              id="name"
              placeholder=" "
              value={Cname}
              onChange={(e) => setCName(e.target.value)}
              className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] outline-none transition-all"
            />
            <label
              htmlFor="name"
              className={`
          absolute left-6 text-[#81817C]  bg-white/80  transition-all duration-200 ease-in 
          ${isFilledCname ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
            >
              Company Name
            </label>
          </div>
          <div className=' max-w-[400px] position-area relative'>
            <div className='text-[rgba(0, 20, 45, 1)] text-[14px] absolute top-[-0.7rem] bg-[#F3FAFD]   left-6'>Position</div>
            <img src={moreIcon} alt="option-selector" className='absolute left-[92%] top-[45%] w-[24px] h-[24px] cursor-pointer' />
            <select name="position" id="position" className=' cursor-pointer w-[400px] focus:outline-none appearance-none min-h-[56px] text-[16px] text-[#082343] border-1 border-solid border-[#08234333] pl-6 rounded-[6px]'>
              <option value="position-1">Position 1</option>
              <option value="position-2">Position 2</option>
              <option value="position-3">Position 3</option>
              <option value="other">other</option>
            </select>
          </div>
          <div className='address-area w-[100%] max-w-[100%]'>
            {/* <div className='text-[rgba(0, 20, 45, 1)] text-[14px] opacity-50'>Address</div> */}
            <div className="address-wrapper flex justify-between flex-wrap gap-4">
              <div className="relative w-[400px]">
                <input
                  type="text"
                  id="add1"
                  placeholder=" "
                  value={AddressLine1}
                  onChange={(e) => setAddressLine1(e.target.value)}
                  className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                />
                <label
                  htmlFor="add1"
                  className={`
          absolute left-6 text-[#81817C] bg-white/80 transition-all duration-200 ease-in 
          ${isFilledAddressLine1 ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                >
                  Address Line 1
                </label>
              </div>
              <div className="relative w-[400px]">
                <input
                  type="text"
                  id="add2"
                  placeholder=" "
                  value={AddressLine2}
                  onChange={(e) => setAddressLine2(e.target.value)}
                  className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                />
                <label
                  htmlFor="add2"
                  className={`
          absolute left-6 text-[#81817C]  bg-[#eaf3f52b]  transition-all duration-200 ease-in 
          ${isFilledAddressLine2 ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                >
                  Address Line 2
                </label>
              </div>
              <div className="relative w-[400px]">
                <input
                  type="text"
                  id="city"
                  placeholder=" "
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                />
                <label
                  htmlFor="city"
                  className={`
          absolute left-6 text-[#81817C] bg-white/80 transition-all duration-200 ease-in 
          ${isFilledCity ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                >
                  City
                </label>
              </div>
              <div className="relative w-[400px]">
                <input
                  type="text"
                  id="zip"
                  placeholder=" "
                  value={Zip}
                  onChange={(e) => setZip(e.target.value)}
                  className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                />
                <label
                  htmlFor="zip"
                  className={`
          absolute left-6 text-[#81817C] bg-white/80 transition-all duration-200 ease-in 
          ${isFilledZip ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                >
                  Zip Code
                </label>
              </div>
              <div className="relative w-[400px]">
                <input
                  type="text"
                  id="country"
                  placeholder=" "
                  value={Country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="peer w-full min-h-[56px] pt-5 pl-6 text-[#082343] text-[16px] border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                />
                <label
                  htmlFor="country"
                  className={`
          absolute left-6 text-[#81817C] bg-white/80  transition-all duration-200 ease-in 
          ${isFilledCountry ? 'top-[-0.7rem] text-[14px]' : 'top-4 text-[16px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                >
                   Country
                </label>
              </div>
            </div>
          </div>

        </div>
        <button className='profile-update-btn  !mt-6 cursor-pointer bg-[#0E5185] text-[#FFFFFF] max-w-[400px] rounded-[6px] hover:bg-[#1FA2D0] transition ease-in-out hover:scale-[1.01] duration-300 !px-[141px] !py-[15px]'>Update</button>
        <span className='text-[16px] font-[500] text-[#B3261E] underline cursor-pointer'>Delete Account</span>
      </div>
      <img src={logo} alt="logo" className='absolute top-[12%] left-[38%] w-[23%] z-1 blur-[10px]' />
    </div>
  );
};

export default MainContent;
