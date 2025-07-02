import sideDrawerCrossbtnIcon from '../assets/side-drawer-cross-btn.svg';
import React, { useState } from 'react';
function PluginTraceDrawer({ setIsPluginTraceDrawerOpen }) {
    const [isDrawerVisible, setIsDrawerVisible] = useState(true);
    
        const handleCloseDrawer = () => {
            setIsDrawerVisible(false); // start slide-out animation
            setTimeout(() => {
                setIsPluginTraceDrawerOpen(false); // unmount after animation
            }, 300); // match duration
        };
    
    return (
        <div className={`absolute w-[350px] md:w-auto min-w-[282px] top-0 right-0 z-50 flex items-start gap-4 transition-all transform duration-300 ease-in-out
    ${isDrawerVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}  overflow-hidden `}>
            <img
                src={sideDrawerCrossbtnIcon}
                alt="side-drawer-cross-btn"
                className="side-drawer-cross-btn cursor-pointer md:!mt-[20px] !mt-[45px] w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
                onClick={handleCloseDrawer}
            />
            <div className="side-drawer-card flex-1 md:w-[548px] md:max-w-[548px] h-[100vh] bg-[#FFFFFF] border-2 border-[#E6E6E6] opacity-97 flex flex-col gap-4 md:!px-4 !px-3 !py-6 ">
                <h2 className="text-[#082343] text-[18px] font-[600] md:!mt-[10px] !mt-[20px]">Details</h2>
                <div className='w-[265px] md:w-[494px] md:max-w-[494px] flex flex-wrap justify-start gap-2.5'>
                    <div className="h-[28px] text-[14px]  text-[#FFFFFF] border border-[#0E5185] rounded-md bg-[#0E5185] !px-[10px] !py-[2.5px] cursor-pointer">Message Block</div>
                    <div className="h-[28px] text-[14px]  text-[#81817C] border border-[#81817C] rounded-md  !px-[10px] !py-[2.5px] cursor-pointer">Exception Details</div>
                    <div className="h-[28px] text-[14px]  text-[#81817C] border border-[#81817C] rounded-md  !px-[10px] !py-[2.5px] cursor-pointer">Explanation</div>
                    <div className="h-[28px] text-[14px]  text-[#81817C] border border-[#81817C] rounded-md  !px-[10px] !py-[2.5px] cursor-pointer">Resolution</div>
                </div>
                <div className="w-[265px] md:w-[494px] md:h-[636px] md:min-h-[636px] border border-[#E6E6E6] rounded-md !pl-2 !pt-2.5">
                    <p className=" md:max-w-[465px] md:min-h-[613px] leading-[150%] text-[#000000] text-[14px] font-[500]">
                        -- Quo eius veniam? --<br></br>
                        Ut aliquam rerum.<br></br>
                        In mollitia quis?<br></br>
                        Sed dolores quibusdam et minus reiciendis. <br></br> Qui aspernatur possimus.
                        <br />
                        <br />
                        -- Quo eius veniam? --<br></br>
                        Ut aliquam rerum.<br></br>
                        In mollitia quis?<br></br>
                        Sed dolores quibusdam et minus reiciendis. <br></br> Qui aspernatur possimus.
                        <br />
                        <br />
                        -- Quo eius veniam? --<br></br>
                        Ut aliquam rerum.<br></br>
                        In mollitia quis?<br></br>
                        Sed dolores quibusdam et minus reiciendis. <br></br> Qui aspernatur possimus.
                        <br />
                        <br />
                        -- Quo eius veniam? --<br></br>
                        Ut aliquam rerum.<br></br>
                        In mollitia quis?<br></br>
                        Sed dolores quibusdam et minus reiciendis. <br></br> Qui aspernatur possimus.
                    </p>

                </div>
            </div>
        </div>
    )
}
export default PluginTraceDrawer;