import React, { useState } from 'react';
import searchIcon from '../assets/search-icon.svg';
import traceDownIcon from '../assets/trace-down-icon.svg';
import crossIcon from '../assets/cross-icon.svg';

function PluginTraceLogTable({ setIsPluginTraceDrawerOpen }) {
    const [isFocused, setIsFocused] = useState(false);
    const [searchValue, setSearchValue] = useState('');


    const handleClear = (e) => {
        e.preventDefault(); // prevent blur
        setSearchValue('');
    };

    const totalPages = 10;

    const allTableData = Array.from({ length: 30 }, (_, i) => ({
        groupTitle: `Lorem Ipsum is simply dummy text of the printing and  ${Math.floor(i / 3) + 1}`,
        rows: [
            ['Lorem Ipsum is', 'Lorem Ipsum is', 'Lorem Ipsum is', 'Lorem Ipsum is'],
            ['Lorem Ipsum is', 'Lorem Ipsum is', 'Lorem Ipsum is', 'Lorem Ipsum is'],
            ['Lorem Ipsum is', 'Lorem Ipsum is', 'Lorem Ipsum is', 'Lorem Ipsum is'],
        ],
    }));
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    const paginatedData = allTableData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="plugin-trace-area md:w-[734px] md:max-w-[734px]  flex flex-col gap-4 ">
            <h2 className="text-[#082343] text-[18px] font-[600]">Plugin Trace Logs</h2>
            <div className="group-by flex gap-2.5">
                <div className="correlation md:w-[165px] h-[28px] border border-[#0E5185] rounded-md text-[14px] font-[400] text-[#0E5185] !px-2 !py-1 cursor-pointer">Group by Correlation ID</div>
                <div className="correlation md:w-[165px] h-[28px] border border-[#81817C] rounded-md text-[14px] font-[400] text-[#81817C] !px-4 !py-1 cursor-pointer">Group by Type Name</div>
            </div>
            <div className="plugin-trace-table border border-[#E6E6E6] rounded-md shadow-[0px_2px_4px_0px_#00000014]">
                <div className="search-exportCSV relative !mt-[12px] !px-4 flex justify-between">
                    <div className="relative w-[286px] h-[38px]">
                        <input
                            type="text"
                            value={searchValue}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search"
                            className="appearance-none w-full h-full border border-[#E6E6E6] rounded-md focus:outline-none focus:border-[#0E5185] !px-4 text-[#81817C] text-[14px] font-[400]"
                        />

                        {/* Show search icon when not typing */}
                        {!searchValue && (
                            <img
                                src={searchIcon}
                                alt="search"
                                className="w-[18px] h-[18px] absolute top-[10px] left-[258px] cursor-pointer"
                            />
                        )}

                        {/* Show cross icon when input has text */}
                        {searchValue && (
                            <img
                                src={crossIcon}
                                alt="clear"
                                onMouseDown={handleClear} // use mouse down to avoid blur
                                className="w-[12px]  absolute top-[12px] left-[258px] cursor-pointer"
                            />
                        )}
                    </div>
                    <button className='!mt-[8px] block-inline md:w-[100px] h-[28px] bg-[#0E5185] text-[14px] font-[400] text-[#FFFFFF] rounded-md cursor-pointer hover:bg-[#082343] !mr-[15px]'>Export CSV</button>
                </div>
                <div className="!mt-[24px] rounded-md overflow-hidden relative">
                    <table className="w-full table-fixed border-separate border-spacing-0">
                        <thead className="bg-[#F4F4F4] h-[41px]">
                            <tr>
                                <th className="w-[130px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Created On</th>
                                <th className="w-[130px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Execution Start</th>
                                <th className=" w-[130px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Data Duration</th>
                                <th className=" w-[210px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Plugin Name</th>
                                <th className=" text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Step Name</th>

                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((group, groupIndex) => (
                                <React.Fragment key={groupIndex}>
                                    <tr className="h-[38px] relative">
                                        <td colSpan={5} className='text-[14px] font-[600] capitalize text-[#082343] border border-[#E6E6E6] !px-4'>
                                            {group.groupTitle}
                                            <img src={traceDownIcon} alt="" className='absolute top-[16px] right-[340px] cursor-pointer' />
                                        </td>
                                    </tr>
                                    {group.rows.map((row, rowIndex) => (
                                        <tr key={rowIndex} className={rowIndex % 2 === 1 ? 'bg-[#F4F4F4] h-[38px]' : 'h-[38px]'}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className='text-[14px] font-[400] text-[#81817C] border border-[#E6E6E6] !px-4'>
                                                    {cell}
                                                </td>
                                            ))}
                                            <td className='border border-[#E6E6E6] !px-4'>
                                                <div className="h-[28px] w-[100px] border border-[#0E5185] rounded-md shadow-[0px_2px_4px_0px_#00000014] text-[14px] font-[400] text-[#0E5185] cursor-pointer text-center !py-0.5" onClick={() => setIsPluginTraceDrawerOpen(true)}>
                                                    View Details
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                    <div className=" !mt-[10px] !mb-[5px] flex items-center justify-center gap-2 py-4 bg-white ">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            className="px-2 text-[#082343] cursor-pointer"
                        >
                            {'<'}
                        </button>

                        {[1, 2, 3, 4, '...', totalPages].map((num, index) => (
                            <button
                                key={index}
                                onClick={() => typeof num === 'number' && setCurrentPage(num)}
                                disabled={num === '...'}
                                className={`w-8 h-8 rounded-full text-sm ${currentPage === num ? 'bg-[#0E5185] text-white' : 'text-[#082343]'
                                    } ${num === '...' ? 'cursor-default' : 'hover:bg-gray-200'}`}
                            >
                                {num}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            className="px-2 text-[#082343] cursor-pointer"
                        >
                            {'>'}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default PluginTraceLogTable;