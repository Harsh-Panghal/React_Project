import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Sidebar2 from '../components/Sidebar2.jsx';
import MainContent from '../components/MainContent.jsx';
import DeleteChatAccount from '../components/DeleteChatAccount.jsx';
import InviteCard from '../components/InviteCard.jsx';
import ProfileCard from '../components/ProfileCard.jsx';
import '../App.css';
import moreIcon from '../assets/more-icon.svg';
import uploadIcon from '../assets/upload-icon.svg';
import { useEffect } from 'react';
import { FaStar } from "react-icons/fa";

function LandingPage() {
  const [isSidebar2Visible, setIsSidebar2Visible] = useState(false);
  const [isProfileCardVisible, setIsProfileCardVisible] = useState(false);
  const [isInviteCardVisible, setIsInviteCardVisible] = useState(false);
  const [isDeleteChatAccountVisible, setIsDeleteChatAccountVisible] = useState(false);

  const handleToggleSidebar = () => setIsSidebar2Visible(prev => !prev);
  const handleToggleProfileCard = () => setIsProfileCardVisible(prev => !prev);
  const handleToggleInviteCard = () => setIsInviteCardVisible(prev => !prev);
  const handleToggleDeleteChatAccount = () => setIsDeleteChatAccountVisible(prev => !prev);

  const [preview, setPreview] = useState(null);
   const [selectedStar, setSelectedStar] = useState(0);   // Stores selected rating
  const [hoveredStar, setHoveredStar] = useState(null);  // Stores hover state

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imageURL = URL.createObjectURL(file);
      setPreview(imageURL);
    }
  };

  // Clean up old URL when preview changes or component unmounts
  useEffect(() => {
    return () => {
      if (preview) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  return (
    <>
      {isSidebar2Visible ? (
        <Sidebar2
          isDeleteChatAccountVisible={isDeleteChatAccountVisible}
          isInviteCardVisible={isInviteCardVisible}
          onToggleSidebar={handleToggleSidebar}
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
        />
      ) : (
        <Sidebar
          isDeleteChatAccountVisible={isDeleteChatAccountVisible}
          isInviteCardVisible={isInviteCardVisible}
          onToggleInviteCard={handleToggleInviteCard}
        />
      )}

      <MainContent
        isDeleteChatAccountVisible={isDeleteChatAccountVisible}
        isInviteCardVisible={isInviteCardVisible}
        issidebar2Visible={isSidebar2Visible}
        onToggleSidebar={handleToggleSidebar}
        onToggleProfileCard={handleToggleProfileCard}
      />

      {isDeleteChatAccountVisible && (
        <DeleteChatAccount
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
          isProfileCardVisible={isProfileCardVisible}
        />
      )}

      {isProfileCardVisible && (
        <ProfileCard
          isInviteCardVisible={isInviteCardVisible}
          onToggleInviteCard={handleToggleInviteCard}
          onToggleDeleteChatAccount={handleToggleDeleteChatAccount}
        />
      )}

      {isInviteCardVisible && <InviteCard onToggleInviteCard={handleToggleInviteCard} />}
      <div className="feedback-card max-w-[423px] w-[423px] min-h-[594px] bg-[#FFFFFF] rounded-xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-[1px] border-[#E6E6E6] shadow-md !px-4 !py-6 flex flex-col  gap-2">
        <h2 className="text-xl font-[700] text-[#082343] tracking-[-4%]">Send Feedback</h2>
        <p className="text-[#81817C] text-[14px] font-[400]">What do you think about us!</p>
        <textarea
          name="feedback"
          id="feedback-area"
          placeholder="Write your feedback here..."
          className="border-[1px] border-[#81817C] border-solid outline-none focus:!border-[#81817C] focus:!border-[1px] focus:!border-solid rounded-md max-w-[381px] min-h-[135px] text-[#81817C] text-[16px] font-[400] resize-none !px-4 !py-4"
        />

        <div className=" relative feedback-type max-w-[381px]  flex flex-col">
          <span className="text-[14px] font-[400] text-[#082343]">Feedback Type</span>
          <select name="feedback-type" id="feedback-type " className=" appearance-none text-[#082343] border-[1px] border-[#81817C] focus:outline-none rounded-[6px] min-h-[44px] !px-4 cursor-pointer">
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="compliment" selected>Compliment</option>
            <option value="other">Other</option>
          </select>
          <img src={moreIcon} alt="dropdown-icon" className=" w-[17px] absolute right-3 top-[65%] transform -translate-y-1/2 text-gray-600 text-lg  cursor-pointer" />
        </div>
        <div className="feedback-img-area max-w-[381px] min-h-[135px]  border-[1px] border-[#1FA2D0] border-dashed rounded-[6px] flex items-center justify-center flex-col relative p-4">
          {/* Hidden File Input */}
          <input
            type="file"
            name="feedback-img"
            id="feedback-img"
            accept="image/*"
            className="hidden"
            onChange={handleFileChange}
          />

          {/* Label triggers input whether or not preview exists */}
          <label htmlFor="feedback-img" className="flex flex-col items-center justify-center cursor-pointer">
            {preview ? (
              <img
                src={preview}
                alt="Uploaded Preview"
                className="max-h-[100px] object-contain rounded-md mb-2 hover:opacity-80 transition"
              />
            ) : (
              <>
                <img src={uploadIcon} alt="upload-icon" className="mb-2" />
                <span className="text-[#1FA2D0] text-[16px] font-[400]">Upload Image</span>
              </>
            )}
            {preview && (
              <span className="text-[#1FA2D0] text-[14px] font-[400] underline">Change Image</span>
            )}
          </label>
        </div>

        <div className="rate-area flex flex-col">
          <span className="text-[14px] font-[400] text-[#082343]">Rate us</span>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer transition-colors duration-200 text-[28px] ${(hoveredStar ?? selectedStar) >= star ? "text-[#FFC107]" : "text-[#D1D1D6]"
                  }`}
                onClick={() => setSelectedStar(star)}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(null)}
              />
            ))}
          </div>
        </div>
        <button className="bg-[#0E5185] !px-[130px] !py-[15px] rounded-md text-[#FFFFFF] text-[14px] font-[700] !mt-2 cursor-pointer hover:scale-[1.01] transition-all ">Submit</button>
      </div>
    </>
  );
}

export default LandingPage;
