import React, { useState } from 'react';
import editTextIcon from '../assets/editText-icon.svg';
import copyIcon from '../assets/copy-icon.svg';
import picIcon from '../assets/pic-icon.svg';
import logo from '../assets/logo.svg';
import EntityTable from './EntityTable';
import AttributeTable from './AttributeTable';
import RelationshipTable from './RelationshipTable';
import PromptInputArea from './PromptInputArea';
import TraceLogFilterCard from './TraceLogFilterCard';
import PluginTraceLogTable from './PluginTraceLogTable';


function ChatPageWithTable({ isDeleteChatAccountVisible, isInviteCardVisible, setIsAttributeSideDrawerOpen, setIsPluginTraceDrawerOpen }) {
    const [isShowPreviewClicked, setIsShowPreviewClicked] = useState(false);
    const [isEditTextIconClicked, setIsEditTextIconClicked] = useState(false);
    const [isShowTraceClicked, setIsShowTraceClicked] = useState(false);
   

    return (
        <div className={`input-card2 overflow-auto hide-scrollbar max-h-[600px] md:max-h-[560px]  relative  md:w-[734px] md:max-w-[734px] max-w-[385px] flex flex-col gap-4 !mt-[-30px] !mb-auto `}>
            <div className="input-text-area md:max-w-[556px] flex gap-[5px] !ml-auto ">
                <div className=" w-content !py-[14px] !px-[16px] bg-[#F4F4F4] rounded-md ">
                    <p
                        className={`text-[14px] leading-[22px] font-[400] ${isEditTextIconClicked ? 'text-[#81817C]' : 'text-[#082343]'} focus:outline-none`}
                        contentEditable={isEditTextIconClicked}
                    >
                        Extract all the collected plugin fillter details
                    </p>
                </div>
                <img src={picIcon} alt="pic-icon" className="cursor-pointer w-[35px] h-[35px]" />
            </div>
            <div className="tools flex gap-[10px] justify-end !mr-10 !mt-[-10px]">
                <img src={copyIcon} alt="copy-text" className='cursor-pointer' />
                <img src={editTextIcon} alt="edit-text" className='cursor-pointer' onClick={() => setIsEditTextIconClicked(!isEditTextIconClicked)} />
            </div>
            <div className="output-text flex gap-4">
                <img src={logo} className="w-[28px] h-[35px]" alt="" />
                <div className="flex flex-col gap-2">
                    <p className="text-[14px] font-[400] leading-[165%] text-[#082343] text-start">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                    <button className="show-preview self-start text-[12px] font-[400] text-[#81817C] border-1 border-[#81817C] !px-4 !py-1 rounded-md cursor-pointer hover:bg-[#d0d0ce] hover:text-[#082343] trabsition-all duration-300" onClick={() => setIsShowPreviewClicked(!isShowPreviewClicked)}>Show Preview</button>
                </div>
            </div>
            {/* ------------------Entity Table------------------- */}
            {isShowPreviewClicked && <EntityTable />}
            {/* ------------------Attribute Table------------------- */}
            {isShowPreviewClicked && <AttributeTable setIsAttributeSideDrawerOpen={setIsAttributeSideDrawerOpen} />}
            {/* ------------------------Relationship Table---------------- */}
            {isShowPreviewClicked && <RelationshipTable />}
            <TraceLogFilterCard setIsShowTraceClicked={setIsShowTraceClicked}/>
            {isShowTraceClicked && <PluginTraceLogTable setIsPluginTraceDrawerOpen={setIsPluginTraceDrawerOpen} />}
            

            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
        </div>
    )
}
export default ChatPageWithTable;
