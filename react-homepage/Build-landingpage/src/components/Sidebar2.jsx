import React, { useState } from 'react';
import LogoTitle from './LogoTitle';
import NewChatButton from './NewChatButton';
import RecentSection from './RecentSection';
import HistoryList from './HistoryList';
import MoreSection from './MoreSection';
import SidebarBottom from './SidebarBottom';
import PromptMenu from './PromptMenu';
import HelpCard from './HelpCard';


function Sidebar2({ onToggleDeleteChatAccount, onToggleSidebar }) {
  const [ishelpCardVisible, setIsHelpCardVisible] = useState(false);
  const handleToggleHelpCard = () => {

    setIsHelpCardVisible(prev => !prev);
  } 
  return (
    <div className="expanded-sidebar">
      <PromptMenu  />
      <div className="expandedsidebar-card1">
        <LogoTitle onToggleSidebar={onToggleSidebar}/>
        <NewChatButton />
        <RecentSection />
        <HistoryList />
        <MoreSection />
      </div>
      <div className="expandedsidebar-card2">
        <SidebarBottom onToggleHelpCard={handleToggleHelpCard} />

        {ishelpCardVisible && <HelpCard onToggleDeleteChatAccount={onToggleDeleteChatAccount} />}

      </div>
    </div>
  );
}
// This component serves as the sidebar of the application, providing navigation options.
// It includes a logo and title, a button for starting new chats, sections for recent activity and more options, and a bottom section for help and settings.
export default Sidebar2;
