import React from 'react';
import submitIcon from '../assets/submit-icon.svg';
import attachIcon from '../assets/attach-icon.svg';

const PromptInputArea = () => (
  <div className="textarea-box">
    <div className="box1">
      <textarea placeholder='Enter Prompt Here'></textarea>
      <div className="model-selector">
        <select defaultValue="model-0.2" id="model-selector">
          <option value="model-0.1">Model 0.1</option>
          <option value="model-0.2">Model 0.2</option>
          <option value="model-0.3">Model 0.3</option>
          <option value="model-0.4">Model 0.4</option>
        </select>
      </div>
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
);

export default PromptInputArea;
// This component provides an input area for users to enter prompts, select a model, and attach files.
// It includes a textarea for prompt input, a dropdown for model selection, and buttons for attachments and submission.