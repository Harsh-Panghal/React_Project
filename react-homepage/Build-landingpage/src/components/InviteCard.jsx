import { useState } from 'react';
import crossIcon from '../assets/cross-icon.svg';

function InviteCard({ onToggleInviteCard }) {
  const [isEmailClicked, setIsEmailClicked] = useState(true); // default to email mode

  function handleEmailClick() {
    setIsEmailClicked(true);
  }

  function handleLinkClick() {
    setIsEmailClicked(false);
  }

  return (
    <div className="invite-card">
      <img src={crossIcon} alt="cross-btn" onClick={onToggleInviteCard} />
      <h2>Invite people</h2>
      <p>Lorem Ipsum is simply dummy text of the printing</p>

      <div className='invite-btn'>
        <button className={`email ${isEmailClicked ? 'active' : ''}`} onClick={handleEmailClick}>
          Invite with email
        </button>
        <button className={`link ${!isEmailClicked ? 'active' : ''}`} onClick={handleLinkClick}>
          Invite with link
        </button>
      </div>

      <span>Add Team</span>

      <div className='email-input'>
        <input
          type={isEmailClicked ? 'email' : 'text'}
          placeholder={isEmailClicked ? 'Enter email' : 'Enter link'}
        />
        <button className='send-btn'>
          {isEmailClicked ? 'Send' : 'Copy Link'}
        </button>
      </div>

      <p>Lorem Ipsum is simply dummy text of the printing</p>
    </div>
  );
}

export default InviteCard;
