import { useState } from 'react';
import modelIcon02 from '../assets/model-0.2-icon.svg';
import modelIcon01 from '../assets/model-0.1-icon.svg';
import downIcon from '../assets/down-icon.svg';


const options = [
    {
        value: 'model-0.2',
        icon: modelIcon02,
        title: 'Model 0.2',
        subtitle: 'CRM Custom',
    },
    { value: 'model-0.1', icon: modelIcon01, title: 'Model 0.1', subtitle: 'Plugin track' },

];

function CustomModelSelector() {
    const [selected, setSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative w-[145px] h-fit !mr-[15px]">
            <div
                className="border border-[#E6E6E6] w-[106px] h-[32px]  !mt-[1px] rounded-md p-2 cursor-pointer bg-white flex items-center justify-around"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-[12px] font-[400] text-[#082343]">{selected.title}</span>
                <span><img src={downIcon} alt="" className="w-[14px] h-[7.98px]" /></span>
            </div>

            {isOpen && (
                <div className="w-[145px] absolute z-10 bg-white border !mt-0.5 border-[#E6E6E6] rounded-md shadow-md !px-[11.25px] !py-[5px]">
                    {options.map((opt) => (
                        <div
                            key={opt.value}
                            className="!p-1 rounded-sm hover:bg-gray-100 cursor-pointer flex gap-2 items-center"
                            onClick={() => {
                                setSelected(opt);
                                setIsOpen(false);
                            }}
                        >
                            {opt.icon && <img src={opt.icon} alt="" className="w-[18px] h-[18px]" />}
                            <div className="flex flex-col">
                                <span className="text-[12px] font-[400] text-[#082343]">{opt.title}</span>
                                {opt.subtitle && <span className="text-[12px] font-[300] text-[#808080]">{opt.subtitle}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CustomModelSelector;