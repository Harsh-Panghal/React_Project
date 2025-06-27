import React, { useState } from 'react';
import LogoTitle from './LogoTitle';
import NewChatButton from './NewChatButton';
import RecentSection from './RecentSection';
import HistoryList from './HistoryList';
import MoreSection from './MoreSection';
import SidebarBottom from './SidebarBottom';
import PromptMenu from './PromptMenu';
import HelpCard from './HelpCard';


function Sidebar2({ onToggleDeleteChatAccount, onToggleSidebar, isInviteCardVisible, isDeleteChatAccountVisible, onToggleFeedbackCard, onToggleCrmCard, isCrmCardVisible, isFeedbackCardVisible, onToggleHelpCard, setIsNewChatPageVisible, setIsChatPageVisible }) {
  
  return (
    <div className={`expanded-sidebar ${isInviteCardVisible || isDeleteChatAccountVisible || isFeedbackCardVisible || isCrmCardVisible ? 'blurred' : ''} shadow-[inset_-1px_-1px_2px_0px_rgba(139,139,139,0.5)]`}>
      <PromptMenu  />
      <div className="expandedsidebar-card1 h-auto gap-[1rem]">
        <LogoTitle onToggleSidebar={onToggleSidebar}/>
        <NewChatButton isInviteCardVisible={isInviteCardVisible} isDeleteChatAccountVisible={isDeleteChatAccountVisible} setIsNewChatPageVisible={setIsNewChatPageVisible} setIsChatPageVisible={setIsChatPageVisible}/>
        <RecentSection />
        <HistoryList setIsChatPageVisible={setIsChatPageVisible} setIsNewChatPageVisible={setIsNewChatPageVisible} />
        <MoreSection />
      </div>
      <div className="expandedsidebar-card2">
        <SidebarBottom onToggleHelpCard={onToggleHelpCard} />
      </div>
    </div>
  );
}
// This component serves as the sidebar of the application, providing navigation options.
// It includes a logo and title, a button for starting new chats, sections for recent activity and more options, and a bottom section for help and settings.
export default Sidebar2;
