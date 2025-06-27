import React from 'react';
import PromptCards from './PromptCards';
import PromptInputArea from './PromptInputArea';

function NewChatPage({ isDeleteChatAccountVisible, isInviteCardVisible, isProfilePageVisible }) {
    return (
        <div className={`content-card ${isProfilePageVisible ? '!hidden' : ''}`}>
            <h1>Hello, Adam Siegel! <br />What would you like to make?</h1>
            <p>Use one of the most common prompts below</p>
            <PromptCards />
            <PromptInputArea isDeleteChatAccountVisible={isDeleteChatAccountVisible} isInviteCardVisible={isInviteCardVisible} />
        </div>
    );
}
export default NewChatPage;