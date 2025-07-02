import feedbackIcon from '../assets/feedback-icon.svg';
import privacyIcon from '../assets/privacy-icon.svg';
import termIcon from '../assets/terms-icon.svg';
import cleanIcon from '../assets/clean-icon.svg';
import crmIcon from '../assets/crm-icon.svg';
import backIcon from '../assets/back-icon.svg';

function HelpCard({ onToggleDeleteChatAccount, isDeleteChatAccountVisible, onToggleFeedbackCard, onToggleCrmCard, isCrmCardVisible, isFeedbackCardVisible, onToggleHelpCard, setIstermCardVisible, onToggleTermCard, onTogglePrivacyCard, onToggleSidebar }) {
    return (
        <div className={`help-dropdown ${isDeleteChatAccountVisible || isCrmCardVisible || isFeedbackCardVisible ? 'hidden ' : 'flex'} ${isDeleteChatAccountVisible? 'blurred' : ''} `}>
            <div className="setting-title relative md:hidden text-center">
                <img src={backIcon} alt="back" className="absolute top-1.5 left-0 cursor-pointer" onClick={onToggleHelpCard} />
                <span className="text-[24px] font-[600] text-[#00142D]">Settings</span>
            </div>
            <div className={`setting-option flex flex-col gap-8 md:gap-2 ${ isCrmCardVisible || isFeedbackCardVisible ? 'hidden' : ''}`}>
                <div className='feedback' onClick={onToggleFeedbackCard}>
                    <img src={feedbackIcon} alt="Feedback" />
                    <span>Feedback</span>
                </div>
                <div className='privacy' onClick={onTogglePrivacyCard}>
                    <img src={privacyIcon} alt="privacy" />
                    <span>Privacy Policy</span>
                </div>
                <div className='terms' onClick={onToggleTermCard}>
                    <img src={termIcon} alt="Terms" />
                    <span>Terms of Use</span>
                </div>
                <div className='CRM' onClick={() => { onToggleCrmCard(); onToggleSidebar(); }}>
                    <img src={crmIcon} alt="Terms" />
                    <span>Crm Connection Detail</span>
                </div>
                <div className='clean' onClick={onToggleDeleteChatAccount}>
                    <img src={cleanIcon} alt="cleanicon" className='cleanicon' />
                    <span>Clean Chat</span>
                </div>
            </div>

        </div>
    );
}
export default HelpCard;