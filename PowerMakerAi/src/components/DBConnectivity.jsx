import dbIcon from '../assets/db-icon.svg';
import refreshIcon from '../assets/refresh-icon.svg';
import { useState } from 'react';
function DBConnectivity() {
     const [isDBConnected, setIsDBConnected] = useState(true);
      const [isRefreshing, setIsRefreshing] = useState(false);
      const handleRefreshClick = () => {
        setIsRefreshing(true);
    
        // Simulate DB check (replace this with real API call)
        setTimeout(() => {
          // simulate new DB status
          const success = Math.random() > 0.5;
          setIsDBConnected(success);
          setIsRefreshing(false);
        }, 1500); // 1.5 sec spin
      };
    
    
      const toggleDBConnection = () => {
        setIsDBConnected(!isDBConnected);
      };

    return (
        <div className={`dbCard  !px-[8px] !py-[4px] ${isDBConnected ? 'bg-[#34C7591A] md:w-[172px] md:max-w-[172px]' : 'bg-[#FF3B3033] md:w-[139px] md:max-w-[139px]'}  rounded-[14px] flex gap-2`}>
            {isDBConnected ? (
                <img
                    src={dbIcon}
                    alt="db-icon"
                    className='cursor-pointer'
                />
            ) : (
                <img
                    src={refreshIcon}
                    alt="refresh-icon"
                    onClick={handleRefreshClick}
                    className={` cursor-pointer ${isRefreshing ? 'animate-spin' : ''}`}
                />
            )}
            <span className={`${isDBConnected ? 'text-[#34C759]' : 'text-[#FF3B30]'} text-[12px] font-[600]`}>{isDBConnected ? 'Connected to Database' : 'Failed to Database'}</span>
        </div>
    );
}
export default DBConnectivity;