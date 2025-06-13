import crossIcon from '../assets/cross-icon.svg';

function InviteCard({onToggleInviteCard}) {
    return (
        <div className="invite-card">
            <img src={crossIcon} alt="cross-btn"  onClick={onToggleInviteCard}/>
            <h2>Invite people</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className='invite-btn'>
                <button className='email'>Invite with email</button>
                <button className='link'>Invite with link</button>
            </div>
            <span>Add Team</span>
            <div className='email-input'>
                <input type="email" placeholder='Enter Email' />
                <button className='send-btn'>Send</button>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
        </div>
    );
}
export default InviteCard;