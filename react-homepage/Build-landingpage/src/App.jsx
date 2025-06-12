import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Sidebar2 from './components/Sidebar2.jsx';
import MainContent from './components/MainContent.jsx';
import React, { useState } from 'react';

function App() {
   const [isSidebar2Visible, setIsSidebar2Visible] = useState(false); // false means Sidebar (default)
   const [isMobile, setIsMobile] = useState(window.innerWidth <= 428);
   

  const handleToggleSidebar = () => {
    setIsSidebar2Visible(prev => !prev);
  };
  return (
    <>
      {isSidebar2Visible ? <Sidebar2 /> : <Sidebar />}
      <MainContent onToggleSidebar={handleToggleSidebar} isMobile={isMobile} />
    </>
  );
}

export default App;
