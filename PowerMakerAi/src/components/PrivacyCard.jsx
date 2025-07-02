import backIcon from '../assets/back-icon.svg';
function PrivacyCard({ onTogglePrivacyCard }) {
    return (
        <div className="terms-condition-card md:w-[1200px] h-[100%] md:h-[650px] max-w[1200px] bg-white border border-[#E6E6E6CC] absolute md:top-[90px] md:left-[274px] !px-8 !py-6 rounded-md shadow-[0px_4px_12px_rgba(0,0,0,0.1)] z-60 overflow-hidden">
            <img src={backIcon} alt="back-icon" className="md:hidden absolute top-[30px] left-[23px] cursor-pointer w-[24px] h-[24px]" onClick={() => onTogglePrivacyCard()} />
            <h2 className="text-[20px] font-[600] text-[#082343] text-center md:text-start">Privacy Policy</h2>
            <div className='md:!mt-3 !mt-8 flex flex-col gap-2'>
                <h2 className='text-[16px] font-[600] text-[#01204E]'>Heading title here</h2>
                <p className='text-[12px] font-[400] text-[#576780] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /> <br />

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className='hidden md:!block text-[12px] font-[400] text-[#576780] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /> <br />

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='md:!mt-3 !mt-8 flex flex-col gap-2'>
                <h2 className='text-[16px] font-[600] text-[#01204E]'>Heading title here</h2>
                <p className='text-[12px] font-[400] text-[#576780] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /> <br />

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <p className='hidden md:!block text-[12px] font-[400] text-[#576780] '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br /> <br />

                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>
    );
}
export default PrivacyCard;