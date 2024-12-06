import Sidebar from "../components/Sidebar";

export default function Payment(){
    return(
        <div className="flex">
          <Sidebar />
          <div className="ml-[280px] flex items-start p-4 gap-4 w-full relative">
          <div className="flex flex-col w-full pr-20">
            <div className="flex justify-between items-center m-5 w-full h-fit pb-4  border-solid border-b-2 border-whiteGray">
              <p className="font-bold text-xl">Payment Details</p>
            </div>
            <div className="flex justify-between m-2 w-full h-fit p-2">
              <p className="text-lightGray2 font-semibold text-xs w-[15%]">Name</p>
              <p className="text-lightGray2 font-semibold text-xs w-[20%]">Payment Schedule</p>
              <p className="text-lightGray2 font-semibold text-xs w-[15%]">Bill Number</p>
              <p className="text-lightGray2 font-semibold text-xs w-[15%]">Amount Paid</p>
              <p className="text-lightGray2 font-semibold text-xs w-[20%]">Balance Amount</p>
              <p className="text-lightGray2 font-semibold text-xs w-[15%]">Day</p>
             </div>
            </div>
          </div>
        </div>
  );
    
}