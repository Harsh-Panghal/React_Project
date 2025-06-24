import profileIcon from '../assets/profile-icon.svg';
import inviteIcon from '../assets/invite-icon.svg';
import logoutIcon from '../assets/logout-icon.svg';

function ProfileCard({onToggleInviteCard, isInviteCardVisible, onToggleDeleteChatAccount, onToggleProfilePage, isProfilePageVisible}) {
    return (
        <div className={`profile-card ${isInviteCardVisible || isProfilePageVisible ? 'hidden' : ''}`}>
            <div className="edit-profile" onClick={onToggleProfilePage}>
                <img src={profileIcon} alt="share" />
                <span>Edit profile</span>
            </div>
            <div className="invite" onClick={onToggleInviteCard}>
                <img src={inviteIcon} alt="edit" />
                <span>Invite</span>
            </div>
            <div className="logout" onClick={onToggleDeleteChatAccount}>
                <img src={logoutIcon} alt="delete"  className='logouticon'/>
                <span>Log Out</span>
            </div>
        </div>
    );
}
export default ProfileCard;