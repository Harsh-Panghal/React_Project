import React, { useState } from 'react';
import editTextIcon from '../assets/editText-icon.svg';
import copyIcon from '../assets/copy-icon.svg';
import picIcon from '../assets/pic-icon.svg';
import logo from '../assets/logo.svg';
import EntityTable from './EntityTable';
import PromptInputArea from './PromptInputArea';

function ChatPageWithTable({ isDeleteChatAccountVisible, isInviteCardVisible }) {
    return (
        <div className="input-card2 overflow-auto hide-scrollbar md:max-h-[560px]  !mb-auto relative  !mt-[-30px] md:w-[734px] md:max-w-[734px] flex flex-col gap-4   ">
            <div className="input-text-area flex gap-[5px] !ml-auto">
                <div className=" md:w-content max-w-[556px] !py-[14px] !px-[16px] bg-[#F4F4F4] rounded-md ">
                    <p className="text-[12px] leading-[22px] font-[400] text-[#082343]">Extract all the collected plugin fillter details</p>
                </div>
                <img src={picIcon} alt="pic-icon" className="cursor-pointer w-[35px] h-[35px]" />
            </div>
            <div className="tools flex gap-[10px] justify-end !mr-10 !mt-[-10px]">
                <img src={copyIcon} alt="copy-text" className='cursor-pointer' />
                <img src={editTextIcon} alt="edit-text" className='cursor-pointer' />
            </div>
            <div className="output-text flex gap-4">
                <img src={logo} className="w-[28px] h-[35px]" alt="" />
                <div className="flex flex-col gap-2">
                    <p className="text-[14px] font-[400] leading-[165%] text-[#082343] text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <button className="show-preview self-start text-[12px] font-[400] text-[#81817C] border-1 border-[#81817C] !px-4 !py-1 rounded-md cursor-pointer hover:bg-[#b9b9b8] hover:text-[#082343] trabsition-all duration-300">Show Preview</button>
                </div>
            </div>
            {/* ------------------Entity Table------------------- */}
            <EntityTable />
            {/* ------------------Attribute Table------------------- */}
            <div className="attribute-area md:w-[734px] md:max-w-[734px] flex flex-col gap-6  ">
                <h2 className="text-[18px] text-[#082343] font-[600]">Attributes</h2>
                <div className="attribute-table rounded-md overflow-hidden shadow-[0px_2px_4px_0px_#00000014] border border-[#E6E6E6]">
                    <table className="w-full table-fixed border-separate border-spacing-0">
                        <thead className="bg-[#F4F4F4] h-[41px]">
                            <tr>
                                <th className="w-[140px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Display Name</th>
                                <th className="w-[140px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Schema Name</th>
                                <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Data Type</th>
                                <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Format</th>
                                <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Description</th>
                                <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-2">Required Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white h-[82px]">
                                <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Authentication Type</td>
                                <td className="w-[140px] text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4 break-words whitespace-normal">dev_authentication_type</td>
                                <td className="text-[14px] font-[400] text-[#0E5185] underline cursor-pointer border border-[#E6E6E6] !px-4">Option Set</td>
                                <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Text</td>
                                <td className="text-[14px] font-[400] text-[#81817C] border border-[#E6E6E6] !px-4">(null)</td>
                                <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Optional</td>
                            </tr>
                            <tr className="bg-white h-[82px]">
                                <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Authentication Type</td>
                                <td className="w-[140px] text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4 break-words whitespace-normal">dev_authentication_type</td>
                                <td className="text-[14px] font-[400] text-[#0E5185] underline cursor-pointer border border-[#E6E6E6] !px-4">Option Set</td>
                                <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Text</td>
                                <td className="text-[14px] font-[400] text-[#81817C] border border-[#E6E6E6] !px-4">(null)</td>
                                <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Optional</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
            {/* ------------------------Relationship Table---------------- */}



            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
        </div>
    )
}
export default ChatPageWithTable;