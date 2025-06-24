import feedbackIcon from '../assets/feedback-icon.svg';
import privacyIcon from '../assets/privacy-icon.svg';
import termIcon from '../assets/terms-icon.svg';
import cleanIcon from '../assets/clean-icon.svg';
import crmIcon from '../assets/crm-icon.svg'; 

function HelpCard({ onToggleDeleteChatAccount, isDeleteChatAccountVisible, onToggleFeedbackCard, onToggleCrmCard }) {
    return (
        <div className={`help-dropdown ${isDeleteChatAccountVisible ? 'hidden' : ''}`}>
            <div className='feedback' onClick={onToggleFeedbackCard}>
                <img src={feedbackIcon} alt="Feedback" />
                <span>Feedback</span>
            </div>
            <div className='privacy'>
                <img src={privacyIcon} alt="privacy" />
                <span>Privacy Policy</span>
            </div>
            <div className='terms'>
                <img src={termIcon} alt="Terms" />
                <span>Terms of Use</span>
            </div>
            <div className='terms' onClick={onToggleCrmCard}>
                <img src={crmIcon} alt="Terms" />
                <span>Crm Connection Detail</span>
            </div>
            <div className='clean' onClick={onToggleDeleteChatAccount}>
                <img src={cleanIcon} alt="cleanicon" className='cleanicon'/>
                <span>Clean Chat</span>
            </div>
        </div>
    );
}
export default HelpCard;