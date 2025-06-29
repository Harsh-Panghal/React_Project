import React, { useState } from "react";

function AttributeTable({ setIsAttributeSideDrawerOpen }) {
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    return (
        <div className="attribute-area md:w-[734px] md:max-w-[734px] flex flex-col gap-6  ">
            <h2 className="text-[18px] text-[#082343] font-[600]">Attributes</h2>
            <div className="attribute-table rounded-md overflow-hidden shadow-[0px_2px_4px_0px_#00000014] border border-[#E6E6E6]">
                <table className="w-full table-fixed border-separate border-spacing-0">
                    <thead className="bg-[#F4F4F4] h-[41px]">
                        <tr>
                            <th className="w-[140px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Display Name</th>
                            <th className="w-[140px] text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Schema Name</th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Data Type</th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Format</th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Description</th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-2">Required Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white h-[82px]">
                            <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Authentication Type</td>
                            <td className="w-[140px] text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4 break-words whitespace-normal">dev_authentication_type</td>
                            <td
                                className="text-[14px] font-[400] text-[#0E5185] underline cursor-pointer border border-[#E6E6E6] !px-4"
                                onClick={() => {
                                    setIsAttributeSideDrawerOpen(true);
                                    setTimeout(() => setIsDrawerVisible(true), 300);
                                }}
                            >
                                Option Set
                            </td>

                            <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Text</td>
                            <td className="text-[14px] font-[400] text-[#81817C] border border-[#E6E6E6] !px-4">(null)</td>
                            <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Optional</td>
                        </tr>
                        <tr className="bg-white h-[82px]">
                            <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Authentication Type</td>
                            <td className="w-[140px] text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4 break-words whitespace-normal">dev_authentication_type</td>
                            <td
                                className="text-[14px] font-[400] text-[#0E5185] underline cursor-pointer border border-[#E6E6E6] !px-4"
                                onClick={() => {
                                    setIsAttributeSideDrawerOpen(true);
                                    setTimeout(() => setIsDrawerVisible(true), 300);
                                }}
                            >
                                Option Set
                            </td>
                            <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Text</td>
                            <td className="text-[14px] font-[400] text-[#81817C] border border-[#E6E6E6] !px-4">(null)</td>
                            <td className="text-[14px] font-[400] text-[#082343] border border-[#E6E6E6] !px-4">Optional</td>
                        </tr>
                    </tbody>
                </table>
            </div>


        </div>
    )
}
export default AttributeTable;