import React, { useState } from 'react';
import sideDrawerCrossbtnIcon from '../assets/side-drawer-cross-btn.svg';
import downIcon from '../assets/down-icon.svg';

function AttributeSideDrawer({ setIsAttributeSideDrawerOpen }) {
    const [displayName, setDisplayName] = useState('API Name');
    const isFilledDisplayName = displayName !== '';
    const [dataType, setDataType] = useState('Single Line of Text');
    const isFilledDataType = dataType !== '';
    const [maxLength, setMaxLength] = useState(100);
    const isFilledMaxLength = maxLength !== '';
    const [format, setFormat] = useState('Text');
    const isFilledFormat = format !== '';

    const [isDrawerVisible, setIsDrawerVisible] = useState(true);

    const handleCloseDrawer = () => {
        setIsDrawerVisible(false); // start slide-out animation
        setTimeout(() => {
            setIsAttributeSideDrawerOpen(false); // unmount after animation
        }, 300); // match duration
    };


    return (
        <div className={`attribute-side-drawer absolute w-[350px] md:w-auto min-w-[282px] top-0 right-0 z-50 flex items-start gap-4 transition-all transform duration-300 ease-in-out
    ${isDrawerVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}  overflow-hidden`}>
            <img
                src={sideDrawerCrossbtnIcon}
                alt="side-drawer-cross-btn"
                className="side-drawer-cross-btn cursor-pointer md:!mt-[20px] !mt-[45px] w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
                onClick={handleCloseDrawer}
            />
            <div className="side-drawer-card md:w-[488px] md:max-w-[488px] h-[100vh] bg-[#FFFFFF] border-2 border-[#E6E6E6] opacity-97 flex flex-col gap-4 md:!px-6 !px-3 !py-4 ">

                <div className="attribute-detail-card flex flex-col gap-6 md:!mt-[10px] !mt-[30px] md:w-[425px] w-[265px]">
                    <h2 className="text-[18px] font-[600] leading-[22px] text-[#082343]">Attribute Details</h2>
                    <div className="displayName relative w-full h-[38px] ">
                        <input
                            type="text"
                            id="displayName"
                            placeholder=" "
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all opacity-50"
                        />
                        <label
                            htmlFor="displayName"
                            className={`
          absolute bg-white left-4 text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledDisplayName ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Display Name
                        </label>
                    </div>
                    <div className="custom-checkbox !mt-[-15px] z-0 md:w-full w-[265px]  bg-[#FFFFFF] !py-[6px] text-[#082343] text-[14px] flex flex-wrap md:gap-5 justify-between gap-y-1 md:h-[]border border-green-700">
                        {["Is Searchable", "Is Audit Enabled", "Primary Attribute"].map((labelText, index) => (
                            <div key={index} className="gap-2 flex items-center">
                                <input type="checkbox" id={`option-${index}`} className="peer hidden" />
                                <label
                                    htmlFor={`option-${index}`}
                                    className="relative w-[16px] h-[16px] border border-[#08234333] rounded-[3px] cursor-pointer 
         peer-checked:bg-[#082343] peer-checked:after:content-['✔'] 
         peer-checked:after:text-white peer-checked:after:absolute 
         peer-checked:after:top-[0px] peer-checked:after:left-[2px] 
         peer-checked:after:text-[12px] flex items-center justify-center"
                                />
                                <label htmlFor={`option-${index}`} className="text-[#082343] text-[14px] cursor-pointer font-[400]">
                                    {labelText}
                                </label>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="md:w-[422px] w-[270px] md:max-w-[422px] !mt-[0px] border border-[#E6E6E6]"></div>

                <div className="type-card md:w-[425px] w-[265px] flex flex-col md:gap-4 gap-6">
                    <h2 className='text-[18px] font-[600] leading-[150%] text-[#082343]'>Type</h2>
                    <div className="data-type relative h-[38px]  ">
                        <div className="text-[#81817C] text-[12px] absolute top-[-0.6rem] z-1 bg-[white] left-4">
                            Data Type
                        </div>

                        <img
                            src={downIcon}
                            alt="data-type-selector"
                            className="absolute left-[90%] md:left-[93%] md:top-[32%] top-[27%] w-[14px] h-[14px] cursor-pointer"
                        />

                        <select
                            name="dataType"
                            id="dataType"
                            value={dataType}
                            onChange={(e) => setDataType(e.target.value)}
                            className="cursor-pointer w-full focus:outline-none appearance-none min-h-[38px] text-[14px] text-[#082343] border border-[#08234333] !pl-3 rounded-[6px] opacity-50"
                        >
                            <option value="operation-1">Single Line of Text</option>
                            <option value="operation-2">Multi Line of Text</option>
                            <option value="operation-3">Number</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="length-format  flex md:gap-3 gap-6 md:!mt-[6px] flex-wrap ">
                        <div className="max-length relative  !bg-white md:w-[206px] w-[265px] h-[38px] ">
                            <input
                                type="number"
                                id="maxLength"
                                placeholder=" "
                                value={maxLength}
                                step="10"
                                onChange={(e) => setMaxLength(e.target.value)}
                                className="peer with-stepper w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] !bg-white rounded-[6px] opacity-50 outline-none transition-all"
                            />
                            <label
                                htmlFor="maxLength"
                                className={`
          absolute left-4 text-[#81817C]  bg-white transition-all duration-200 ease-in 
          ${isFilledMaxLength ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                            >
                                Max Length
                            </label>
                        </div>
                        <div className="format relative md:w-[206px] h-[38px] w-[265px] ">
                            <input
                                type="text"
                                id="format-type"
                                placeholder=" "
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}
                                className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all opacity-50"
                            />
                            <label
                                htmlFor="schemaName"
                                className={`
          absolute left-4 text-[#81817C]  bg-white transition-all duration-200 ease-in 
          ${isFilledFormat ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                            >
                                Format
                            </label>
                        </div>
                    </div>
                </div>

                <button className="save-btn inline-block w-[265px] md:w-[425px] md:max-w-[425px] !px-[121px] !py-[8px] md:!px-[141px] md:!py-[12px] bg-[#0E5185] text-white text-[16px] font-[700] rounded-md cursor-pointer hover:scale-[1.01] transition-all duration-100 ease-in">Save</button>
            </div>
        </div>
    )
}
export default AttributeSideDrawer;