import newchatIcon from '../assets/newchat-icon.svg';

function NewChatButton({isInviteCardVisible, isDeleteChatAccountVisible}) {
  return (
    <div className={`newchaticon ${isInviteCardVisible || isDeleteChatAccountVisible ? 'blurred' : ''} w-[191px] bg-[#FFFFFF] min-h[36px] rounded-[6px] border-[0.82px] border-[#E6E6E6] shadow-[0px_2px_3px_0_#00000014] flex items-center justify-center gap-2 cursor-pointer hover:bg-[]`}>
      <img src={newchatIcon} alt="New Chat" className="newchaticon" />
      <span className='text-[#0E5185] font-[600] text-[14px]'>New Chat</span>
    </div>
  )
}

export default NewChatButton;
// This component serves as a button for starting new chats in the application.
// It includes an icon representing the action, enhancing the user interface and accessibility.
// <img src={newchatIcon} alt="New Chat" className="newchaticon" width="220px" />;