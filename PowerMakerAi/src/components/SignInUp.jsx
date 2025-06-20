import { useState } from 'react';
import '../SignInUp.css';
import bottomImg from '../assets/bottom-img.svg';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import Verify from './Verify.jsx';
function SignInUp() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [isVerify, setIsVerify] = useState(false);

    const switchToVerify = () => setIsVerify(true);

    const switchToSignUp = () => setIsSignIn(false);
    const switchToSignIn = () => setIsSignIn(true);

    return (
        <>
            <div className="describe">
                <h1 className='title'>AI-Powered</h1>
                <p className='description'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <img src={bottomImg} alt="wave image" className='bottom-img' />
            </div>

            {isVerify ? (
                <Verify />
            ) : isSignIn ? (
                <SignIn switchToSignUp={switchToSignUp} switchToVerify={switchToVerify} />
            ) : (
                <SignUp switchToSignIn={switchToSignIn} switchToVerify={switchToVerify} />
            )}
        </>
    );
}
export default SignInUp;