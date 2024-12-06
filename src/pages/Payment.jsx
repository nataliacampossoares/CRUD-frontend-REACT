import Sidebar from "../components/Sidebar";

export default function Payment(){
    return(
        <div className="flex">
          <Sidebar />
          <div className="ml-[280px] flex items-start p-4 gap-4 w-full relative">
            <div className="flex flex-col w-full pr-20">
            <div className="flex justify-between items-center m-5 w-full h-fit pb-4 pt-6 border-solid border-b-2 border-whiteGray">
               <p className="font-bold text-xl">Paymentes Details</p>
               
            </div>
            <div className="flex gap-72 justify-end">
               <p className="text-lightGray2 font-semibold text-sm">Name</p>
               <p className="text-lightGray2 font-semibold text-sm">E-mail</p>
               <p className="text-lightGray2 font-semibold text-sm">Phone</p>
            </div>
            </div>
          </div>
        </div>
  );
    
}