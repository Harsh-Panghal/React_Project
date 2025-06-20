import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Sidebar2 from './components/Sidebar2.jsx';
import MainContent from './components/MainContent.jsx';
import React, { useState } from 'react';
import DeleteChatAccount from './components/DeleteChatAccount.jsx';
import InviteCard from './components/InviteCard.jsx';
import ProfileCard from './components/ProfileCard.jsx';
// import { useState } from 'react';
import './SignInUp.css';
import bottomImg from './assets/bottom-img.svg';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';


function App() {
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false); // false means Sidebar (default)
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const [isInviteCardVisible, setIsInviteCardVisible] = useState(false);
  const [isDeleteChatAccountVisible, setIsDeleteChatAccountVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const switchToSignUp = () => setIsSignIn(false);
  const switchToSignIn = () => setIsSignIn(true);


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

    {/* landing Page component */}

      {/* {isSidebar2Visible ? <Sidebar2 isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} onToggleSidebar={handleToggleSidebar} onToggleDeleteChatAccount={handleToggleDeleteChatAccount} /> : <Sidebar isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} onToggleInviteCard={handleToggleInviteCard} />}
      <MainContent isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} issidebar2Visible={isSidebar2Visible} onToggleSidebar={handleToggleSidebar} onToggleProfileCard={handleToggleProfileCard} />
      {isDeleteChatAccountVisible && <DeleteChatAccount onToggleDeleteChatAccount={handleToggleDeleteChatAccount} isProfileCardVisible={isProfileCardVisible} />}


      {isProfileCardVisible && <ProfileCard isInviteCardVisible={isInviteCardVisible} onToggleInviteCard={handleToggleInviteCard} onToggleDeleteChatAccount={handleToggleDeleteChatAccount} />}
      {isInviteCardVisible && <InviteCard onToggleInviteCard={handleToggleInviteCard} />} */}
      


      {/* ----------------------------SignInUp component--------------------------------------------------------------------- */}
      <div className="describe">
        <h1 className='title'>AI-Powered</h1>
        <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <img src={bottomImg} alt="wave image" className='bottom-img' />
      </div>

      {isSignIn ? (
        <SignIn switchToSignUp={switchToSignUp} />
      ) : (
        <SignUp switchToSignIn={switchToSignIn} />
      )}

    </>
  );
}

export default App;
