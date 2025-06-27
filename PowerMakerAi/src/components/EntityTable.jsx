import downIcon from '../assets/down-icon.svg';
import upIcon from '../assets/up-icon.svg';
import { useState } from 'react';
function EntityTable() {

    const [isSeeLessClicked, setIsSeeLessClicked] = useState(true);
    const [schemaName, setSchemaName] = useState('dev_apiconnection');
    const isFilledSchemaName = schemaName !== '';
    const [displayName, setDisplayName] = useState('API Connection');
    const isFilledDisplayName = displayName !== '';
    const [pluralName, setPluralName] = useState('');
    const isFilledPluralName = pluralName !== '';
    const [pmaAction, setPmaAction] = useState('');
    const isFilledPmaAction = pmaAction !== '';
    const [ownership, setOwnership] = useState('');
    const isFilledOwnership = ownership !== '';
    const [description, setDescription] = useState('');
    const isFilledDescription = description !== '';

    const [iconStates, setIconStates] = useState([false, false, false]); // false = upIcon
    const toggleIcon = (index) => {
        setIconStates((prev) =>
            prev.map((item, i) => (i === index ? !item : item))
        );
    };

    return (
        <div className="entity-area md:w-[734px] md:max-w-[734px] flex flex-col gap-6 ">
            <h2 className="text-[18px] text-[#082343] font-[600]">Entity Details</h2>
            <div className={`entity-table relative border-1 border-[#E6E6E6] w-full rounded-md 
    ${isSeeLessClicked ? 'h-[143px] overflow-hidden' : 'h-auto'} 
    bg-[#F4F4F4] shadow-[0px_2px_4px_0px_#00000014] !px-3 !py-3 
    grid grid-cols-[repeat(4,_minmax(100px,_1fr))] gap-x-5 gap-y-6`}>
                <div className="schemaName relative w-[160px] h-[38px] ">
                    <input
                        type="text"
                        id="schemaName"
                        placeholder=" "
                        value={schemaName}
                        onChange={(e) => setSchemaName(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="schemaName"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledSchemaName ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Schema Name
                    </label>
                </div>
                <div className="displayName relative w-[160px] h-[38px] ">
                    <input
                        type="text"
                        id="displayName"
                        placeholder=" "
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="displayName"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledDisplayName ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Display Name
                    </label>
                </div>
                <div className="pluralName relative w-[160px] h-[38px] ">
                    <input
                        type="text"
                        id="pluralName"
                        placeholder=" "
                        value={pluralName}
                        onChange={(e) => setPluralName(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="pluralName"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledPluralName ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Plural Name
                    </label>
                </div>
                <div className="PmaAction relative w-[160px] h-[38px] ">
                    <input
                        type="text"
                        id="pmaAction"
                        placeholder=" "
                        value={pmaAction}
                        onChange={(e) => setPmaAction(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="pmaAction"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledPmaAction ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        PMA Action
                    </label>
                </div>
                <div className="ownership relative w-[160px] h-[38px] ">
                    <input
                        type="text"
                        id="ownership"
                        placeholder=" "
                        value={ownership}
                        onChange={(e) => setOwnership(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="ownership"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledOwnership ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Ownership
                    </label>
                </div>
                <div className="description relative  h-[38px] col-start-2 col-end-5">
                    <input
                        type="text"
                        id="description"
                        placeholder=" "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="peer w-full min-h-[38px] md:min-h-[38px] !pl-3 text-[#082343] text-[14px] border border-[#08234333] rounded-[6px] outline-none transition-all"
                    />
                    <label
                        htmlFor="description"
                        className={`
          absolute left-4 text-[#81817C]  bg-[#F4F4F4] transition-all duration-200 ease-in 
          ${isFilledOwnership ? 'top-[-0.6rem] text-[12px]' : 'top-2 text-[14px]'} 
          peer-focus:top-2 peer-focus:text-[14px]
        `}
                    >
                        Description
                    </label>
                </div>
                {/* ----------------------------See Less---------------------------- */}
                <div className='col-start-1 col-end-5 !mt-[-20px] !ml-[1px]'>
                    <span
                        className="seeLess relative   text-[#0E5185] text-[12px] inline-block cursor-pointer group"
                        onClick={() => setIsSeeLessClicked(!isSeeLessClicked)}
                    >
                        {isSeeLessClicked ? 'See More' : 'See Less'}
                        <span className="absolute left-0 w-0 bottom-[2px] h-[1px] bg-[#0E5185] transition-all duration-300 group-hover:w-full"></span>
                    </span>
                </div>
                <div className="more-area relative !mt-[-20px] col-start-1 col-end-5 flex flex-col gap-3">
                    {[0, 1, 2].map((index) => (
                        <div key={index} className="relative w-full mb-6">
                            {/* Entity Definition Header */}
                            <div
                                className={`entity-definition relative z-10 flex items-center justify-between h-[38px] 
                  bg-[#FFFFFF] rounded-md !px-[16px] !py-[6px] transition-shadow duration-200
                  ${iconStates[index] ? 'shadow-[0px_2px_4px_0px_#00000014]' : ''}`}
                            >
                                <span className="font-[500] text-[14px] text-[#082343]">Entity Definition</span>
                                <img
                                    src={iconStates[index] ? downIcon : upIcon}
                                    alt="toggle-icon"
                                    className="cursor-pointer"
                                    onClick={() => toggleIcon(index)}
                                />
                            </div>

                            {/* Conditional Dropdown */}
                            {iconStates[index] && (
                                <div className=" !mt-[-10px] z-0 w-full h-[62px] bg-[#FFFFFF] border border-[#E6E6E6] rounded-md !px-[16px] !py-[6px] text-[#082343] text-[14px] flex justify-between">
                                    {[1, 2, 3].map((num) => (
                                        <div key={num} className="w-[106px] gap-2 flex items-center justify-center">
                                            <input type="checkbox" id={`option${index}-${num}`} className="peer hidden" />
                                            <label
                                                htmlFor={`option${index}-${num}`}
                                                className="relative w-[16px] h-[16px] border border-[#08234333] rounded-[3px] cursor-pointer 
                         peer-checked:bg-[#082343] peer-checked:after:content-['✔'] 
                         peer-checked:after:text-white peer-checked:after:absolute 
                         peer-checked:after:top-[0px] peer-checked:after:left-[2px] 
                         peer-checked:after:text-[12px] flex items-center justify-center"
                                            />
                                            <label htmlFor={`option${index}-${num}`} className="text-[#082343] text-[12px] cursor-pointer">
                                                Lorem Ipsum
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}
export default EntityTable;