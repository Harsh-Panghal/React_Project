// components/PromptMenu.jsx
import shareIcon from '../assets/share-icon.svg';
import editIcon from '../assets/edit-icon.svg';
import deleteIcon from '../assets/delete-icon.svg';

function PromptMenu() {
  return (
    <>
      <span className="prompt">...</span>
      <div className="prompt-dropdown">
        <div className="share">
          <img src={shareIcon} alt="share" />
          <span>Share</span>
        </div>
        <div className="edit-prompt">
          <img src={editIcon} alt="edit" />
          <span>Edit Prompt</span>
        </div>
        <div className="delete-prompt">
          <img src={deleteIcon} alt="delete" />
          <span>Delete</span>
        </div>
      </div>
    </>
  );
}

export default PromptMenu;
