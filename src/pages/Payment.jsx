import { useState } from "react";
import Sidebar from "../components/Sidebar";
import SearchBar from "../components/SearchBar";
import ModalPaymentForm from "../components/ModalForm2";
import SortIcon from "../assets/sort 1.png";

export default function Payment() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex">
      <Sidebar />
      <SearchBar />

      <div className="ml-[280px] flex items-start p-4 gap-4 w-full relative m-10">
        <div className="flex flex-col w-full pr-20">
          <div className="flex justify-between items-center m-5 w-full h-fit pb-4 border-solid border-b-2 border-whiteGray">
            <p className="font-bold text-xl">Payment Details</p>
            <button
              onClick={openModal}
              className=" p-3 rounded-lg"
            >
              <img 
                src={SortIcon} 
                alt="Add Payment"
              />
            </button>
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

    
      {isModalOpen && <ModalPaymentForm closeModal={closeModal} />}
    </div>
  );
}
