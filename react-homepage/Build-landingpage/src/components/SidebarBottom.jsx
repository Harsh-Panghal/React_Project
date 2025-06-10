import questionIcon from '../assets/questionmark-icon.svg';
import settingsIcon from '../assets/setting-icon.svg';

function SidebarBottom() {
  return (
    <>
      <div className="bottom1">
        <img src={questionIcon} alt="Help" />
        <span>Help</span>
      </div>
      <div className="bottom2">
        <img src={settingsIcon} alt="Settings" />
        <span>Settings</span>
      </div>
    </>
  );
}

export default SidebarBottom;
// This component serves as the bottom section of the sidebar, providing access to help and settings.
// It includes icons for help and settings, enhancing the user interface and navigation experience.