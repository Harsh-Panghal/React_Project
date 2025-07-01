
function RelationshipTable() {
    return (
        <div className="relationship-area md:w-[734px] md:max-w-[734px] flex flex-col gap-6 ">
            <h2 className="text-[18px] text-[#082343] font-[600]">Relationships</h2>
            <div className="relationship-table rounded-md w-[385px] md:w-full overflow-auto md:overflow-hidden hide-scrollbar shadow-[0px_2px_4px_0px_#00000014] border border-[#E6E6E6]">
                <table className="min-w-[750px] table-fixed border-separate border-spacing-0">
                    <thead className='bg-[#F4F4F4] h-[41px]'>
                        <tr>
                            <th className=" text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Target Entity</th>
                            <th className=" text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Referencing Entity </th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Schema Name</th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Display Name</th>
                            <th className="text-[14px] font-[400] text-[#81817C] text-left border border-[#E6E6E6] !px-4">Required Level</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white h-[42px] ">
                            <td colSpan={5} className='text-[14px] font-[400] text-[#81817C] border border-[#E6E6E6] !px-7 !py-3.5'>No relationship data found</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default RelationshipTable;