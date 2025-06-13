import profileIcon from '../assets/profile-icon.svg';
import inviteIcon from '../assets/invite-icon.svg';
import logoutIcon from '../assets/logout-icon.svg';
function ProfileCard({onToggleInviteCard, isInviteCardVisible}) {
    return (
        <div className={`profile-card ${isInviteCardVisible ? 'blurred' : ''}`}>
            <div className="edit-profile">
                <img src={profileIcon} alt="share" />
                <span>Edit profile</span>
            </div>
            <div className="invite" onClick={onToggleInviteCard}>
                <img src={inviteIcon} alt="edit" />
                <span>Invite</span>
            </div>
            <div className="logout">
                <img src={logoutIcon} alt="delete" />
                <span>Log Out</span>
            </div>
        </div>
    );
}
export default ProfileCard;