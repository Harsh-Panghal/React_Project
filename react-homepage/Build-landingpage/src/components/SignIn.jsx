import React from 'react';
import logo from '../assets/logo.svg';
import googleLogo from '../assets/g1.svg';
import PasswordInput from '../components/PasswordInput.jsx'; // Adjusted casing to match folder name

function SignIn({ switchToSignUp }) {
  return (
    <div className="signIn-card">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Sign In account</h2>
      <p className="signIn-description">Enter your data to enter your account</p>
      <form className="signIn-form">
        <input type="email" placeholder=" Enter Email" required />
        <PasswordInput placeholder=" Enter Password" />

        <button type="submit" className="signIn-button">Sign In</button>
        <p className="forgot-password">Forgot Password?</p>
      </form>
      <div className="lines-or-card">
        <div className="line"></div>
        <p>or</p>
        <div className="line"></div>
      </div>
      <div className="loginWithGoogle">
        <img src={googleLogo} alt="Sign in with Google" className="google-logo" />
        <p>Login with Google</p>
      </div>
      <div className="signUp">
        <p>Don't have an account? <span onClick={switchToSignUp}>Sign Up</span></p>
      </div>
    </div>
  );
}

export default SignIn;
// This component renders the Sign In form with a logo, input fields for email and password, a submit button, and options to sign in with Google or switch to the Sign Up page.
// It uses props to handle the switch to the Sign Up page, allowing for a seamless user experience in a single-page application.