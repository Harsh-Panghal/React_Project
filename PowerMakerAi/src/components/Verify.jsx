import logo from '../assets/logo.svg';
function Verify() {
    return (
        <div className="signIn-card">
            <img src={logo} alt="Logo" className="logo" />
            <h2>Verify your Email</h2>
            <p className="signIn-description">Please enter verification code sent on *****gmail.com</p>
            <div className="codeInput-card max-w-[323px] h-auto flex justify-center flex-wrap gap-3 mt-[2rem]">
                <input type="number"  required min='0' max='9'className='md:w-[48px] max-w-[48px] min-h-[56px] border border-[#0823431A] rounded-[9px] focus:outline-none focus:border-[#0E5185] text-center' />
                <input type="number"  required min='0' max='9' className='md:w-[48px] max-w-[48px] min-h-[56px] border border-[#0823431A] rounded-[9px] focus:outline-none focus:border-[#0E5185] text-center' />
                <input type="number" required min='0' max='9' className='md:w-[48px] max-w-[48px] min-h-[56px] border border-[#0823431A] rounded-[9px] focus:outline-none focus:border-[#0E5185] text-center'/>
                <input type="number"  required min='0' max='9' className='md:w-[48px] max-w-[48px] min-h-[56px] border border-[#0823431A] rounded-[9px] focus:outline-none focus:border-[#0E5185] text-center'/>
                <p className='text-[#81817C] font-[400] text-[16px]'>Didn't receive? <span className='text-[#0E5185] cursor-pointer font-[400] text-[16px]'>Resend code</span></p>
            </div>
             <button type="submit" className="signIn-button">Verify</button>
        </div>
    );
}
export default Verify;