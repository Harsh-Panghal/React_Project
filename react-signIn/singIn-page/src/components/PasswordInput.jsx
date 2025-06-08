import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

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
      <FontAwesomeIcon
        icon={showPassword ? faEyeSlash : faEye}
        className="eye-icon"
        onClick={toggleVisibility}
      />
    </div>
  );
}

export default PasswordInput;
