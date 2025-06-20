import React, { useState } from 'react';
import eyeIcon from "../assets/eye-icon.svg";
import eyeSlashIcon from "../assets/eye-icon-slash.svg"; // use PNG or SVG as you have

function PasswordInput({ placeholder }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="password-input-wrapper">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
      />
      <img
        src={showPassword ? eyeSlashIcon : eyeIcon}
        alt="Toggle password"
        className="eye-icon"
        onClick={toggleVisibility}
      />
    </div>
  );
}

export default PasswordInput;
