import './App.css';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import logo from './assets/logo.svg';
import newchatIcon from './assets/newchat-icon.svg';
import historyIcon from './assets/history-icon.svg';
import moreIcon from './assets/more-icon.svg';
import questionIcon from './assets/questionmark-icon.svg';
import settingsIcon from './assets/setting-icon.svg';

function App() {
  return (
    <>
      {/* <Sidebar /> */}
      <div className="expanded-sidebar">
        <div className="expandedsidebar-card1">
          <div className="logo-title">
            <img src={logo} alt="Logo" />
            <span className='title'>Power Maker AI</span>
            <span> (Beta)</span>
          </div>
          <img src={newchatIcon} alt="New Chat" className='newchaticon'width='220px'/>
          <div className="recent">
            <img src={historyIcon} alt="History" className='historyicon' />
            <span>Recent</span>
          </div>
          <div className="history">
            <div className='history-item'>Watch Purchase Comparison</div>
            <div className='history-item'>URL Filtering Issue</div>
            <div className='history-item'>SQL Proficiency for Job Appli...</div>
            <div className='history-item'>Browser Location Sharing</div>
            <div className='history-item'>Website Structure for Healthc...</div>
          </div>
          <div className="more">
            <img src={moreIcon} alt="More" className='moreicon' />
            <span>More</span>
          </div>
        </div>
        <div className="expandedsidebar-card2">
          <div className="bottom1">
            <img src={questionIcon} alt="Help" />
            <span>Help</span>
          </div>
          <div className="bottom2">
            <img src={settingsIcon} alt="Settings" />
            <span>Settings</span>
          </div>
          
        </div>
      </div>
      <MainContent />
    </>
  );
}

export default App;
