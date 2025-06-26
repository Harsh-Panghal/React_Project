import { useState } from "react";
import bellIcon from '../assets/bell-icon.svg';

function NotificationBell() {
    const [hasNotification, setHasNotification] = useState(false);
    const toggleNotification = () => setHasNotification(!hasNotification);

    return (
        <div className="relative w-fit">
            <img
                src={bellIcon}
                alt="Bell"
                className="bellicon max-w-[20px]"
            />
            {hasNotification && (
                <span className="absolute top-0 right-0 w-[8px] h-[8px] bg-[#1FA2D0] rounded-full border border-white"></span>
            )}
        </div>
    );
}
export default NotificationBell;