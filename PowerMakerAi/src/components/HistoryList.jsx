import { useState } from 'react';
import PromptMenu from './PromptMenu';


function HistoryList({
  setIsChatPageVisible,
  setIsNewChatPageVisible,
  setIsChatPageWithTableVisible,
}) {
  const historyItems = [
    'Watch Purchase Comparison',
    'URL Filtering Issue',
    'SQL Proficiency for Job Appli...',
    'Browser Location Sharing',
    'Website Structure for Healthc...'
  ];
  const [isPromptMenuOpen, setIsPromptMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);

  const handleTogglePromptMenu = () => {
    setIsPromptMenuOpen(prev => !prev);
  };
  const [selectedIndex, setSelectedIndex] = useState(0); // First item selected by default

  return (
    <div className="history w-[228px] md:w-[198px]">
      {historyItems.map((item, index) => (
        <div
          key={index}
          className={`history-item relative group h-[25px] hover:bg-gray-200 hover:rounded-sm cursor-pointer flex justify-between items-center !px-1.5 py-1 ${selectedIndex === index ? 'bg-gray-200 rounded-sm' : ''
            }`}
          onClick={() => {
            setSelectedIndex(index);

            if (index === 1) {
              setIsChatPageWithTableVisible(true);
              setIsChatPageVisible(false);
              setIsNewChatPageVisible(false);
            } else {
              setIsChatPageVisible(true);
              setIsNewChatPageVisible(false);
              setIsChatPageWithTableVisible(false);
            }
          }}
        >
          <span className="truncate">{item}</span>
          <span
            className={`prompt text-[22px] font-[700] text-[#007A8D] relative top-[-6px] ${selectedIndex === index ? 'visible' : 'invisible group-hover:visible'
              }`}
            onClick={(e) => {
              e.stopPropagation();
              const rect = e.currentTarget.getBoundingClientRect();
              setMenuPosition({
                top: rect.bottom + window.scrollY,  // Absolute from top of page
                left: rect.left + window.scrollX    // Absolute from left
              });
              handleTogglePromptMenu();
            }}
          >
            ...
          </span>
        </div>
      ))}
      <PromptMenu isPromptMenuOpen={isPromptMenuOpen}
        top={menuPosition?.top}
        left={menuPosition?.left} />
    </div>
  );
}

export default HistoryList;
