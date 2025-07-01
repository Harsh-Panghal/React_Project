import editTextIcon from '../assets/editText-icon.svg';
import copyIcon from '../assets/copy-icon.svg';
import quickPromptIcon from '../assets/quick-prompt-icon.svg';
import arrowQuickIcon from '../assets/arrow-quick-icon.svg';
import PromptInputArea from './PromptInputArea';
import React, { useState } from 'react';
import picIcon from '../assets/pic-icon.svg';
import logo from '../assets/logo.svg';

function ChatPage({ isInviteCardVisible, isDeleteChatAccountVisible }) {
    return (
        <div className="input-card !mt-[40px] md:!mt-[-30px] md:w-[734px] max-w-[375px] md:max-w-[734px] flex flex-col gap-4  ">
            <div className="input-text-area max-w-[302px] md:max-w-[556px]  flex gap-[5px] !ml-auto">
                <div className=" w-content !py-[14px] !px-[16px] bg-[#F4F4F4] rounded-md self-end">
                    <p className="text-[12px] leading-[22px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                </div>
                <img src={picIcon} alt="pic-icon" className=" md:inline cursor-pointer w-[35px] h-[35px]" />
            </div>
            <div className="tools flex gap-[10px] justify-end !mr-10 !mt-[-10px]">
                <img src={copyIcon} alt="copy-text" className='cursor-pointer' />
                <img src={editTextIcon} alt="edit-text" className='cursor-pointer' />
            </div>
            <div className="output-text flex gap-4">
                <img src={logo} className="w-[28px] h-[35px]" alt="" />
                <div className="flex flex-col gap-2 ">
                    <p className=" text-[12px] font-[400] leading-[165%] text-[#082343] text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the </p>
                    <button className="show-preview self-start text-[12px] font-[400] text-[#81817C] border-1 border-[#81817C] !px-4 !py-1 rounded-md cursor-pointer hover:bg-[#d0d0ce] hover:text-[#082343] trabsition-all duration-300">Show Preview</button>
                </div>
            </div>

            <div className="qiuck-prompt-area flex flex-col gap-5 md:!mt-[-20px] ">
                <div className="border-[1px] border-[#082343] md:w-[732px] opacity-20 !mt-4 "></div>
                <div className="quick-prompt flex gap-2 items-center">
                    <img src={quickPromptIcon} alt="quick-prompt-icon" className='md:w-[24px] md:h-[24px] w-[18px] h-[18px]' />
                    <p className="text-[16px] font-[600] leading-[22px] text-[#082343]">Quick Prompts</p>
                </div>
                <div className="quick-prompt-options  !mt-[-10px]">
                    <div className="option flex justify-between items-center h-auto">
                        <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <img src={arrowQuickIcon} alt="select-prompt-option" />
                    </div>
                    <div className="border-[1px] !mt-[10px] md:!mt-0 border-[#082343] md:w-[732px] opacity-20"></div>
                    <div className="option !mt-[10px] md:!mt-0 flex justify-between items-center h-auto">
                        <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <img src={arrowQuickIcon} alt="select-prompt-option" />
                    </div>
                    <div className="border-[1px] !mt-[10px] md:!mt-0 border-[#082343] md:w-[732px] opacity-20"></div>
                    <div className="option flex !mt-[10px] md:!mt-0 justify-between items-center h-auto">
                        <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <img src={arrowQuickIcon} alt="select-prompt-option" />
                    </div>
                    <div className="border-[1px] !mt-[10px] md:!mt-0 border-[#082343] md:w-[732px] opacity-20"></div>
                    <div className="option flex !mt-[10px] md:!mt-0 justify-between items-center h-auto">
                        <p className="text-[12px] font-[400] text-[#082343]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        <img src={arrowQuickIcon} alt="select-prompt-option" />
                    </div>
                    <div className="border-[1px] !mt-[10px] md:!mt-0 border-[#082343] md:w-[732px] opacity-20"></div>

                </div>
            </div>
            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
        </div>
    )
}
export default ChatPage;