import newchatIcon from '../assets/newchat-icon.svg';

function NewChatButton() {
  return <img src={newchatIcon} alt="New Chat" className="newchaticon" width="220px" />;
}

export default NewChatButton;
// This component serves as a button for starting new chats in the application.
// It includes an icon representing the action, enhancing the user interface and accessibility.