import React from 'react';
import logo from '../assets/logo.svg';
import PasswordInput from '../components/PasswordInput.jsx'; // Adjusted casing to match folder name

function SignUp({ switchToSignIn, switchToVerify }) {
    return (
        <div className="signIn-card">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Sign Up</h2>
            <p className="signIn-description">Create your new account</p>
            <form className="signIn-form">
                <input type="email" placeholder=" Enter Email" required />
                <PasswordInput placeholder=" Enter Password" />
                <PasswordInput placeholder=" Confirm Password" />
                <button type="submit" className="signIn-button" onClick={switchToVerify}>Sign Up</button>
            </form>
            <div className="signIn">
                <p>Already have an account? <span onClick={switchToSignIn}>Sign In</span></p>
            </div>
        </div>
    );
}

export default SignUp;
// This component renders the Sign Up form with a logo, input fields for email and password, a submit button, and an option to switch to the Sign In page.
// It uses props to handle the switch to the Sign In page, allowing for a seamless user experience in a single-page application.