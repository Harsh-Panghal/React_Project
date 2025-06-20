import logo from '../assets/logo.svg';
import crossIcon from '../assets/cross-icon.svg';

function LogoTitle({ onToggleSidebar }) {
  return (
    <div className="logo-title">
      <img src={logo} alt="Logo" />
      <span className="title">Power Maker AI</span>
      <span className='top-[6px]'> (Beta)</span>
      <img src={crossIcon} alt="Close" className='close-icon' onClick={onToggleSidebar}/>
    </div>
  );
}

export default LogoTitle;
// This component serves as the logo and title section of the sidebar, providing branding and context for the application.
// It includes the application logo and title, enhancing the user interface and branding consistency.