import crossIcon from '../assets/cross-icon.svg';
function DeleteChatAccount() {
    return (
        <div className="delete-chat-acct-card">
            <div className='d-item1'>
                <span>Are you sure?</span>
                <img src={crossIcon} alt="" width='24px' height="24px" />
            </div>
            <div className='d-item2'>
                <p>Do you really want to Delete the chat</p>
            </div>
            <div className='d-item3'>
                <button className='cancel-btn'>Cancel</button>
                <button className='yes-btn'>Yes</button>
            </div>
        </div>
    )
}
export default DeleteChatAccount; 