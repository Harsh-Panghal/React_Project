// components/PromptMenu.jsx
import shareIcon from '../assets/share-icon.svg';
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';
import { useState } from 'react';

function PromptMenu() {
  const [isPromptMenuOpen, setIsPromptMenuOpen] = useState(false);

  const handleTogglePromptMenu = () => {
    setIsPromptMenuOpen(prev => !prev);
  };
  return (
    <>
      <span className="prompt" onClick={handleTogglePromptMenu}>...</span>
      {isPromptMenuOpen &&
        <div className="prompt-dropdown"><div className="share">
          <img src={shareIcon} alt="share" />
          <span>Share</span>
        </div>
          <div className="edit-prompt">
            <img src={editIcon} alt="edit" />
            <span>Edit Prompt</span>
          </div>
          <div className="delete-prompt">
            <img src={deleteIcon} alt="delete"className='deleteicon' />
            <span>Delete</span>
          </div></div>
      }

    </>
  );
}

export default PromptMenu;
