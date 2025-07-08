import React from 'react';
import submitIcon from '../assets/submit-icon.svg';
import attachIcon from '../assets/attach-icon.svg';
import modelIcon02 from '../assets/model-0.2-icon.svg';
import modelIcon01 from '../assets/model-0.1-icon.svg';
import CustomModelSelector from './CustomDropDown';



const PromptInputArea = ({ isDeleteChatAccountVisible, isInviteCardVisible }) => (
  <div className="textarea-wrapper max-w-[331px] md:max-w-none !mx-auto md:!mx-0 !mb-[80px] md:!mb-0">
    <div className={`textarea-box ${isDeleteChatAccountVisible || isInviteCardVisible ? 'blurred' : ''}`}>
      <div className="box1">
        <textarea placeholder='Enter Prompt Here'></textarea>
        <CustomModelSelector />
      </div>
      
      <div className="box2">
        <div className="attachment-icon">
          <img src={attachIcon} alt="Attach" className='addicon' />
          <span className='attachment-text'>Add Attachment</span>
        </div>
        <div className="submit-button">
          <span>0/1000</span>
          <img src={submitIcon} alt="Submit" />
        </div>
      </div>
    </div>
  </div>

);

export default PromptInputArea;
// This component provides an input area for users to enter prompts, select a model, and attach files.
// It includes a textarea for prompt input, a dropdown for model selection, and buttons for attachments and submission.