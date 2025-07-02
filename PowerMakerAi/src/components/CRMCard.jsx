import linkIcon from '../assets/link-icon.svg';
import eyeIcon from '../assets/eye-icon.svg';
import eyeSlashIcon from '../assets/eye-icon-slash.svg';
import React, { useState } from 'react';
import crossIcon from '../assets/cross-icon.svg';
import crmDeleteIcon from '../assets/crm-delete-icon.svg';

function CRMCard({ onToggleCrmCard, onToggleSidebar }) {
    const [connectionName, setConnectionName] = useState('');
    const isFilledConnectionName = connectionName !== '';
    const [tenantId, setTenantId] = useState('');
    const isFilledTenantId = tenantId !== '';
    const [clientId, setClientId] = useState('');
    const isFilledClientId = clientId !== '';
    const [clientSecret, setClientSecret] = useState('');
    const isFilledClientSecret = clientSecret !== '';
    const [resourceUrl, setResourceUrl] = useState('');
    const isFilledResourceUrl = resourceUrl !== '';
    const [defaultCRMSolution, setDefaultCRMSolution] = useState('');
    const isFilledDefaultCRMSolution = defaultCRMSolution !== '';

    const [isEyeIconClicked1, setIsEyeIconClicked1] = useState(false);
    const [isEyeIconClicked2, setIsEyeIconClicked2] = useState(false);
    const [isEyeIconClicked3, setIsEyeIconClicked3] = useState(false);



    return (
        <>
            <div className="CRM-popup z-11 md:z-0  max-w-[400px] md:max-w-[474px] md:w-[474px] md:min-h-[660px] absolute top-[45%] md:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border-2 border-[#E6E6E6] shadow-md rounded-md  bg-[#FFFFFF] flex flex-col gap-4 !px-4 !py-5 font-[Roboto]">
                <img src={crossIcon} alt="corss-icon" className="absolute top-[10px] right-[10px] cursor-pointer w-[12px] h-[12px]" onClick={() => {
                    onToggleCrmCard();
                    onToggleSidebar();
                }} />
                <h2 className="text-[18px] text-[#082343] font-[600]">Crm Connection Detail</h2>
                <p className="md:max-w-[410px] !ml-[10px] md:min-h-[38px] !px-[6px] !py-[5px] bg-[#0E518533] rounded-[3px] text-[#0E5185] text-[12px]
          font-[600] leading-[100%] text-center capitalize font-[Roboto]"> "Your connection information is protected with industry-standard encryption."</p>
                <div className="connection-info md:max-w-[431px] md:min-h-[59px] border-1 border-[#E6E6E6] rounded-md bg-[#F4F4F4] flex flex-col gap-2 !px-2 !py-1 relative">
                    <p className="text-[#0E5185] text-[12px] font-[500]">Currently Active</p>
                    <p className="text-[#082343] text-[16px] font-[500] !mt-[-4px]">SMYL Dev</p>

                    <img src={crmDeleteIcon} alt="linkIcon" className="absolute top-[15px] right-[10px] cursor-pointer" />
                </div>
                <div className=" md:max-w-[434px] border-1 border-[#E6E6E6]"></div>
                <div className="connection-add-area  rounded-md md:max-w-[430.45px]  flex flex-col gap-4">
                    <h2 className="text-[#000000] text-[16px] font-[500] font-[Roboto]">Add New Connection</h2>
                    <div className="connection-name relative md:w-[400px] ">
                        <input
                            type="text"
                            id="connectionName"
                            placeholder=" "
                            value={connectionName}
                            onChange={(e) => setConnectionName(e.target.value)}
                            className="peer w-[365px] md:max-w-[425px] md:w-[425px] min-h-[38px] pt-5 !pl-4 text-[#082343] text-[14px] font-[400] opacity-50 border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                        />
                        <label
                            htmlFor="connectionName"
                            className={`
          absolute left-4 bg-[#FFFFFF] text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledConnectionName ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Connection Name
                        </label>
                    </div>
                    <div className=" Tenant-id relative md:w-[400px] ">
                        <img src={isEyeIconClicked1 ? eyeSlashIcon : eyeIcon} alt="eyeIcon" className="absolute !left-[340px] top-2.5 md:top-[12px] md:!left-[400px] w-[14px] cursor-pointer z-10" onClick={() => setIsEyeIconClicked1(!isEyeIconClicked1)} />
                        <input
                            type={isEyeIconClicked1 ? "text" : "password"}
                            id="tenantId"
                            placeholder=" "
                            value={tenantId}
                            onChange={(e) => setTenantId(e.target.value)}
                            className="peer w-[365px] md:max-w-[425px] md:w-[425px] min-h-[38px] pt-5 !pl-4 text-[#082343] text-[14px] font-[400] opacity-50 border border-[#08234333] rounded-[6px] focus:outline-none transition-all "
                        />
                        <label
                            htmlFor="tenantId"
                            className={`
          absolute left-4 bg-[#FFFFFF] text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledTenantId ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Tenant ID
                        </label>
                    </div>
                    <div className="client-id relative md:w-[400px]">
                        <img src={isEyeIconClicked2 ? eyeSlashIcon : eyeIcon} alt="eyeIcon" className="absolute md:top-[12px] md:!left-[400px] w-[14px] cursor-pointer !left-[340px] top-2.5 z-10" onClick={() => setIsEyeIconClicked2(!isEyeIconClicked2)} />
                        <input
                            type={isEyeIconClicked2 ? "text" : "password"}
                            id="clientId"
                            placeholder=" "
                            value={clientId}
                            onChange={(e) => setClientId(e.target.value)}
                            className="peer w-[365px] md:max-w-[425px] md:w-[425px] min-h-[38px] pt-5 !pl-4 text-[#082343] text-[14px] font-[400] opacity-50 border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                        />
                        <label
                            htmlFor="clientId"
                            className={`
          absolute left-4 bg-[#FFFFFF] text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledClientId ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Client ID
                        </label>
                    </div>
                    <div className="client-secret relative md:w-[400px]">
                        <img src={isEyeIconClicked3 ? eyeSlashIcon : eyeIcon} alt="eyeIcon" className="absolute md:top-[12px] md:!left-[400px] !left-[340px] top-2.5 w-[14px] cursor-pointer z-10" onClick={() => setIsEyeIconClicked3(!isEyeIconClicked3)} />
                        <input
                            type={isEyeIconClicked3 ? "text" : "password"}
                            id="clientSecret"
                            placeholder=" "
                            value={clientSecret}
                            onChange={(e) => setClientSecret(e.target.value)}
                            className="peer w-[365px] md:max-w-[425px] md:w-[425px] min-h-[38px] pt-5 !pl-4 text-[#082343] text-[14px] font-[400] opacity-50 border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                        />
                        <label
                            htmlFor="clientSecret"
                            className={`
          absolute left-4 bg-[#FFFFFF] text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledClientSecret ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Client Secret
                        </label>
                    </div>
                    <div className=" resource-url relative md:w-[400px]">
                        <input
                            type="text"
                            id="resourceUrl"
                            placeholder=" "
                            value={resourceUrl}
                            onChange={(e) => setResourceUrl(e.target.value)}
                            className="peer w-[365px] md:max-w-[425px] md:w-[425px] min-h-[38px] pt-5 !pl-4 text-[#082343] text-[14px] font-[400] opacity-50 border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                        />
                        <label
                            htmlFor="resourceUrl"
                            className={`
          absolute left-4 bg-[#FFFFFF] text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledResourceUrl ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Resource (CRM URL)
                        </label>
                    </div>
                    <div className="default-crm relative md:w-[400px]">
                        <input
                            type="text"
                            id="add2"
                            placeholder=" "
                            value={defaultCRMSolution}
                            onChange={(e) => setDefaultCRMSolution(e.target.value)}
                            className="peer w-[365px] md:max-w-[425px] md:w-[425px] min-h-[38px] pt-5 !pl-4 text-[#082343] text-[14px] font-[400] opacity-50 border border-[#08234333] rounded-[6px] focus:outline-none transition-all"
                        />
                        <label
                            htmlFor="add2"
                            className={`
          absolute left-4 bg-[#FFFFFF] text-[#81817C]   transition-all duration-200 ease-in 
          ${isFilledDefaultCRMSolution ? 'top-[-0.7rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                        >
                            Default CRM Solution (Unmanaged Only)
                        </label>
                    </div>
                </div>
                <div className="crm-btn max-w-[] md:max-w-[431px] md:w-[431px] min-h-[45px] !mt-[8px] flex justify-between ">
                    <button className="border-[1px] font-[700] text-[#0E5185] border-[#0E5185] rounded-md w-[160px] md:max-w-[201px] md:w-[201px] md:h-[44px] text-[14px] cursor-pointer hover:scale-[1.01] transition-all duration-100 ease-in">Clear</button>
                    <button className="border-[1px] border-[#0E5185] rounded-md  w-[160px] md:max-w-[201px] md:w-[201px] md:h-[44px] bg-[#0E5185] text-[14px] text-[#FFFFFF] font-[700] hover:scale-[1.01] transition-all duration-100 ease-in cursor-pointer" >Save</button>
                </div>
            </div>
        </>
    );
}
export default CRMCard;