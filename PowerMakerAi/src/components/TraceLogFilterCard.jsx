import React, { useState } from 'react';
import plugInIcon from '../assets/plugin-icon.svg';
import calenderICon from '../assets/calender-icon.svg';
function TraceLogFilterCard({ setIsShowTraceClicked }) {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const isFilledstartDate = startDate !== '';
    const isFilledendDate = endDate !== '';
    const [minDurartion, setMinDuration] = useState('');
    const isFilledMinDuration = minDurartion !== '';
    const [maxDurartion, setMaxDuration] = useState('');
    const isFilledMaxDuration = maxDurartion !== '';
    const [position, setPosition] = useState("operation-3");
    const [message, setMessage] = useState('');
    const isFilledMessage = message !== '';
    const [stage, setStage] = useState('All');
    const isFilledStage = stage !== '';
    const [mode, setMode] = useState('');
    const isFilledMode = mode !== '';
    const [pluginName, setPluginName] = useState('');
    const isFilledPluginName = pluginName !== '';
    const [entityName, setEntityName] = useState('');
    const isFilledEntityName = entityName !== '';
    const [correlationId, setCorrelationId] = useState('');
    const isFilledCorrelationId = correlationId !== '';
    const [initiatedBy, setInitiatedBy] = useState('');
    const isFilledInitiatedBy = initiatedBy !== '';
    const [exception, setException] = useState('');
    const isFilledException = exception !== '';
    const [recordCount, setRecordCount] = useState('100');
    const isFilledRecordCount = recordCount !== '';

    const [isSeeLessClicked, setIsSeeLessClicked] = useState(true);

    const handleSeeLessClick = () => setIsSeeLessClicked(false);


    return (
        <div className="trace-log-filter-area w-full max-w-full md:w-[734px] md:max-w-[734px] flex flex-col gap-6 ">
            <h2 className="text-[18px] text-[#082343] font-[600]">Trace Log Filter:</h2>
            <div className={`
    trace-log-filter-table relative border border-[#E6E6E6]
    w-full max-w-full
    rounded-md
    ${isSeeLessClicked
                    ? 'md:h-[153px] h-[245px] overflow-hidden md:gap-y-8 gap-y-5 gap-x-5'
                    : 'md:min-h-[359px]  gap-y-5 min-h-[497px] gap-x-5 '}
    bg-[#F4F4F4] shadow-[0px_2px_4px_0px_#00000014] !px-3 !py-3
    grid
  `}
                style={{
                    gridTemplateColumns: 'repeat(auto-fit, minmax(162px, 1fr))',
                }}>
                <div className="startdate relative w-full h-[38px]">
                    <input
                        type="date"
                        id="startdate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="peer w-full min-h-[38px] !pl-3 pr-8 text-[#082343] text-[14px] 
               border border-[#08234333] rounded-[6px] outline-none bg-[#F4F4F4] 
               appearance-none"
                    />
                    <label
                        htmlFor="startdate"
                        className={`absolute left-4 text-[#81817C] bg-[#F4F4F4] transition-all duration-200 ease-in
      ${isFilledstartDate ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
      peer-focus:top-2 peer-focus:text-[14px]`}
                    >
                        Start Date
                    </label>

                    {/* Custom calendar icon */}
                    <img
                        src={calenderICon}
                        alt="calendar"
                        className="absolute right-2 top-2.5 w-[16px] h-[16px] pointer-events-none"
                    />
                </div>
                <div className="enddate relative w-full h-[38px]  ">
                    <input
                        type="date"
                        id="enddate"
                        placeholder=" "
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="enddate"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledendDate ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        End Date
                    </label>
                    {/* Custom calendar icon */}
                    <img
                        src={calenderICon}
                        alt="calendar"
                        className="absolute right-2 top-2.5 w-[16px] h-[16px] pointer-events-none"
                    />
                </div>
                <div className="minDurartion relative w-full h-[38px]  ">
                    <input
                        type="number"
                        id="minDurartion"
                        placeholder=" "
                        step="50"
                        value={minDurartion}
                        onChange={(e) => setMinDuration(e.target.value)}
                        className="with-stepper peer w-full min-h-[38px] md:min-h-[38px] 
             !pl-3 text-[#082343] text-[14px] bg-[#F4F4F4] 
             border border-[#08234333] rounded-[6px] 
             outline-none transition-all"
                    />


                    <label
                        htmlFor="minDurartion"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledMinDuration ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Min Duration(ms)
                    </label>
                </div>
                <div className="maxDurartion relative w-full h-[38px] ">
                    <input
                        type="number"
                        id="maxDurartion"
                        placeholder=" "
                        value={maxDurartion}
                        step="50"
                        onChange={(e) => setMaxDuration(e.target.value)}
                        className="peer with-stepper w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="maxDurartion"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledMaxDuration ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Max Duration(ms)
                    </label>
                </div>
                <div className="operationType relative w-full h-[38px]  ">
                    <div className="text-[#81817C] text-[12px] absolute top-[-0.7rem] bg-[#F4F4F4] left-3">
                        Operation Type
                    </div>

                    <img
                        src={plugInIcon}
                        alt="option-selector"
                        className="absolute left-[85%] md:top-[30%] top-[27%] w-[14px] h-[14px] cursor-pointer"
                    />

                    <select
                        name="position"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="cursor-pointer w-full focus:outline-none appearance-none min-h-[38px] text-[14px] text-[#082343] border border-[#08234333] !pl-3 rounded-[6px]"
                    >
                        <option value="operation-1">type-1</option>
                        <option value="operation-2">type-2</option>
                        <option value="operation-3">Plug-in</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="messageType relative w-full h-[38px] ">
                    <input
                        type="text"
                        id="message"
                        placeholder=" "
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="message"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledMessage ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Message
                    </label>
                </div>
                <div className="stage relative w-full h-[38px] ">
                    <div className="text-[#81817C] text-[12px] absolute top-[-0.7rem] bg-[#F4F4F4] left-3">
                        Stage
                    </div>

                    <img
                        src={plugInIcon}
                        alt="option-selector"
                        className="absolute left-[85%] md:top-[30%] top-[27%] w-[14px] h-[14px] cursor-pointer"
                    />

                    <select
                        name="stage"
                        id="stage"
                        value={stage}
                        onChange={(e) => setStage(e.target.value)}
                        className="cursor-pointer w-full focus:outline-none appearance-none min-h-[38px] text-[14px] text-[#082343] border border-[#08234333] !pl-3 rounded-[6px]"
                    >
                        <option value="stage-1">Stage-1</option>
                        <option value="stage-2">Stage-2</option>
                        <option value="stage-3">Stage-3</option>
                        <option value="All">All</option>
                    </select>
                </div>
                <div className="mode relative w-full h-[38px] ">
                    <input
                        type="text"
                        id="mode"
                        placeholder=" "
                        value={mode}
                        onChange={(e) => setMode(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="mode"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledMode ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Mode
                    </label>
                </div>
                <div className="plugin-name relative w-full h-[38px] ">
                    <input
                        type="text"
                        id="plugin-name"
                        placeholder=" "
                        value={pluginName}
                        onChange={(e) => setPluginName(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="plugin-name"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledPluginName ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Plugin Name
                    </label>
                </div>
                <div className=" entityName relative w-full h-[38px] ">
                    <input
                        type="text"
                        id="entityName"
                        placeholder=" "
                        value={entityName}
                        onChange={(e) => setEntityName(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="entityName"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledEntityName ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Entity Name
                    </label>
                </div>
                <div className="correlationId relative w-full h-[38px] ">
                    <input
                        type="text"
                        id="correlationId"
                        placeholder=" "
                        value={correlationId}
                        onChange={(e) => setCorrelationId(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="correlationId"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledCorrelationId ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Correlation Id
                    </label>
                </div>
                <div className="InitiatedBy relative w-full h-[38px] ">
                    <input
                        type="text"
                        id="InitiatedBy"
                        placeholder=" "
                        value={initiatedBy}
                        onChange={(e) => setInitiatedBy(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="InitiatedBy"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledInitiatedBy ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Initiated By
                    </label>
                </div>
                <div className="exception w-full relative col-span-2 h-[76px] md:row-start-4 md:row-end-6 md:col-start-1 md:col-end-5 !mr-4">
                    <input
                        type="text"
                        id="exception"
                        placeholder=" "
                        value={exception}
                        onChange={(e) => setException(e.target.value)}
                        className="peer w-full h-full  !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="startdate"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledException ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Exception
                    </label>
                </div>
                <div className="recordCount relative w-full h-[38px]  ">
                    <input
                        type="number"
                        id="recordCount"
                        placeholder=" "
                        value={recordCount}
                        onChange={(e) => setRecordCount(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="recordCount"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledRecordCount ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Record Count
                    </label>
                </div>
                <div className="w-[160px] h-[38px]  flex items-center justify-center gap-2">
                    <input
                        type="checkbox"
                        id="exceptionOnly"
                        className="peer hidden"
                    />
                    <label
                        htmlFor="exceptionOnly"
                        className="relative w-[16px] h-[16px] border border-[#082343] rounded-[6px] cursor-pointer 
               peer-checked:bg-[#082343] peer-checked:after:content-['✔'] 
               peer-checked:after:text-white peer-checked:after:absolute 
               peer-checked:after:top-[0px] peer-checked:after:left-[2px] 
               peer-checked:after:text-[12px] flex items-center justify-center"
                    ></label>
                    <label htmlFor="exceptionOnly" className="text-[#082343] text-[14px] cursor-pointer">
                        Exception Only
                    </label>
                </div>
                <div
                    className="seeLess absolute right-[12px] bottom-[0px] md:right-8 md:bottom-1.5 text-[#0E5185] text-[12px] cursor-pointer inline-block group"
                    onClick={() => setIsSeeLessClicked(!isSeeLessClicked)}
                >
                    {isSeeLessClicked ? 'See More' : 'See Less'}
                    <span className="absolute left-0 w-0 bottom-0 h-[1px] bg-[#0E5185] transition-all duration-300 group-hover:w-full"></span>
                </div>
            </div>
            <button className="!mr-auto !mt-[-5px] border-1 border-[#0E5185] rounded-md font-[500] !px-3 !py-1 text-[14px] text-[#0E5185] cursor-pointer hover:bg-[#b5cfe3ca] hover:scale-[1.01] transition-scale ease-in duration-100" onClick={() => setIsShowTraceClicked(prev => !prev)}>Show Trace Logs</button>

        </div >
    );
}
export default TraceLogFilterCard;