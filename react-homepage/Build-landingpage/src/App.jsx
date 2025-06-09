import './App.css'
import logo from './assets/logo.svg';
import addIcon from './assets/add-icon.svg';
import histIcon from './assets/history-icon.svg';
import quesIcon from './assets/questionmark-icon.svg';
import setIcon from './assets/setting-icon.svg';
import mainImg from './assets/main-img.svg';
import threelinesIcon from './assets/parallel-icon.svg';
import dbIcon from './assets/contdb-icon.svg';
import bellIcon from './assets/bell-icon.svg';
import picIcon from './assets/pic-icon.svg';


function App() {

  return (
    <>
    <div className="sidebar-card">
      <div className="card1">
        <img src={logo} alt="Logo"  className='logo'/>
        <img src={addIcon} alt="Add" className='addicon' />
        <img src={histIcon} alt="History" className='histicon' />
      </div>
      <div className="card2">
        <img src={quesIcon} alt="Questions" className='quesicon' />
        <img src={setIcon} alt="Settings" className='seticon' />
      </div>
    </div>
    <div className="main-card">
      <img src={mainImg} alt="Main" className='mainimg' />
      <div className="sub-main-card">
        <header>
          <div className="header-card1">
            <img src={threelinesIcon} alt="parallel three lines" className='threelinesicon' />
            <img src={dbIcon} alt="database" className='dbicon' />
          </div>
          <div className="header-card2">
            <img src={bellIcon} alt="bell" className='bellicon' />
            <img src={picIcon} alt="picture" className='picicon' />
            <span>Alessio</span>
          </div>
        </header>
        <div className="content-grid">
          
        </div>
      </div>
    </div>
    </>
  )
}

export default App
