
import LogoTitle from './LogoTitle';
import NewChatButton from './NewChatButton';
import RecentSection from './RecentSection';
import HistoryList from './HistoryList';
import MoreSection from './MoreSection';
import SidebarBottom from './SidebarBottom';
import PromptMenu from './PromptMenu';
import feedbackIcon from '../assets/feedback-icon.svg';
import privacyIcon from '../assets/privacy-icon.svg';
import termIcon from '../assets/terms-icon.svg';
import cleanIcon from '../assets/clean-icon.svg';


function Sidebar2() {
  return (
    <div className="expanded-sidebar">
      <PromptMenu />
      <div className="expandedsidebar-card1">
        <LogoTitle />
        <NewChatButton />
        <RecentSection />
        <HistoryList />
        <MoreSection />
      </div>
      <div className="expandedsidebar-card2">
        <SidebarBottom />

        <div className="bottom-dropdown">
           <div className='feedback'>
             <img src={feedbackIcon} alt="Feedback" />
             <span>Feedback</span>
           </div>
           <div className='privacy'>
             <img src={privacyIcon} alt="privacy" />
             <span>Privacy Policy</span>
           </div>
           <div className='terms'>
             <img src={termIcon} alt="Terms" />
             <span>Terms of Use</span>
           </div>
           <div className='clean'>
             <img src={cleanIcon}alt="cleanicon" />
             <span>Clean Chat</span>
           </div>
           
        </div>
      </div>
    </div>
  );
}
// This component serves as the sidebar of the application, providing navigation options.
// It includes a logo and title, a button for starting new chats, sections for recent activity and more options, and a bottom section for help and settings.
export default Sidebar2;
