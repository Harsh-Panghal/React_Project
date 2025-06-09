import { useState } from 'react';
import './App.css';
import bottomImg from './assets/bottom-img.svg';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';

function App() {
  const [isSignIn, setIsSignIn] = useState(true);

  const switchToSignUp = () => setIsSignIn(false);
  const switchToSignIn = () => setIsSignIn(true);

  return (
    <>
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
