
import LogoTitle from './LogoTitle';
import NewChatButton from './NewChatButton';
import RecentSection from './RecentSection';
import HistoryList from './HistoryList';
import MoreSection from './MoreSection';
import SidebarBottom from './SidebarBottom';
import shareIcon from '../assets/share-icon.svg';
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';

function Sidebar2() {
  return (
    <div className="expanded-sidebar">
      <span className='prompt'>...</span>
      {/* This span is used to display a prompt or an ellipsis, indicating that more options are available */}
      <div className="prompt-description">
        <div className='share'>
          <img src={shareIcon} alt="share" />
          <span>Share</span>
        </div>
        <div className="edit-prompt">
          <img src={editIcon} alt="edit" />
          <span>Edit</span>
        </div>
        <div className="delete-prompt">
          <img src={deleteIcon} alt="delete" />
          <span>Delete</span>
        </div>
      </div>
      <div className="expandedsidebar-card1">
        <LogoTitle />
        <NewChatButton />
        <RecentSection />
        <HistoryList />
        <MoreSection />
      </div>
      <div className="expandedsidebar-card2">
        <SidebarBottom />
      </div>
    </div>
  );
}
// This component serves as the sidebar of the application, providing navigation options.
// It includes a logo and title, a button for starting new chats, sections for recent activity and more options, and a bottom section for help and settings.
export default Sidebar2;
