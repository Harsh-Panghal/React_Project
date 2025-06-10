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
import item1Icon from './assets/item1-icon.svg';
import item2Icon from './assets/item2-icon.svg';
import item3Icon from './assets/item3-icon.svg';
import item4Icon from './assets/item4-icon.svg';
import submitIcon from './assets/submit-icon.svg';
import attachIcon from './assets/attach-icon.svg';


function App() {

  return (
    <>
      <div className="sidebar-card">
        <div className="card1">
          <img src={logo} alt="Logo" className='logo' />
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
            <div className="content-card">
              <h1>Hello, Adam Siegel! <br /> What would you like to make?</h1>
              <p>Use one of the most common prompts below</p>
              <div className="card-items">
                <div className="item1">
                  <p>Show all plugin trace logs for the account entity.</p>
                  <img src={item1Icon} alt="Add" className='addicon' />
                </div>
                <div className="item2">
                  <p>Filter trace logs generated in the last 1 hour.</p>
                  <img src={item2Icon} alt="Add" className='addicon' />
                </div>
                <div className="item3">
                  <p>Find plugin logs that contain a NullReferenceException.</p>
                  <img src={item3Icon} alt="Add" className='addicon' />
                </div>
                <div className="item4">
                  <p>List trace logs where execution time exceeded 60,00 ms.</p>
                  <img src={item4Icon} alt="Add" className='addicon' />
                </div>
              </div>
              <div className="textarea-box">
                <div className="box1">
                  <textarea name="" id="" placeholder='Enter Prompt Here'></textarea>
                  <div className="model-selector">
                    <select name="model-selector" id="model-selector">
                      <option value="model-0.1">Model 0.1</option>
                      <option value="model-0.2" selected>Model 0.2</option>
                      <option value="model-0.3">Model 0.3</option>
                      <option value="model-0.4">Model 0.4</option>
                    </select>
                  </div>
                </div>
                <div className="box2">
                  <div className="attachment-icon">
                    <img src={attachIcon} alt="Add" className='addicon' />
                    <span>Add Attachment</span>
                  </div>
                  <div className="submit-button">
                    <span>0/1000</span>
                    <img src={submitIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
