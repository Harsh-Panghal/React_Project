import tokenIcon from '../assets/token-icon.svg';
function ProfileTokenCard() {
    return (
        <div class="md:w-[138px] md:h-[42px] rounded-[8px] bg-[#FFFFFF66] border border-[#E6E6E6CC] absolute top-[2%] right-[2%] cursor-pointer !pl-[12px] !pr-[12px] !py-[12px] flex justify-between items-center gap-3  hover:border-sky-200">
            <span class="text-[16px] font-normal text-[#81817C] leading-[21px]">Tokens</span>
            <div class="flex items-center gap-[2px]">
                <img src={tokenIcon} alt="token-icon" />
                <span class="text-[16px] font-normal text-[#082343] leading-[21px]">569</span>
            </div>
        </div>
    );
}
export default ProfileTokenCard;