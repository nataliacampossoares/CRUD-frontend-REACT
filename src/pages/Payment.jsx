import Sidebar from "../components/Sidebar";

export default function Payment(){
    return(
        <div className="flex">
          <Sidebar />

          <div className="absolute top-0 right-0 flex justify-between items-center p-4 w-50  h-10  z-10">
    
            <div className="flex items-center mt-10 px-4 py-2 w-4/5 border border-gray-500 rounded-lg m-10">

              <input
                type="text"
                placeholder="Search..."
                className="ml-2 w-full bg-transparent focus:outline-none text-gray-700"
              />
              <span className="material-icons text-gray-500">search</span>
            </div>

            <div className="flex items-center ">
              <span className="material-icons text-gray-500 hover:text-gray-800">notifications</span>
            </div>
          </div>

          
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