import { useState } from "react";
import ModalForm from "../components/ModalForm";
import Sidebar from "../components/Sidebar";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

export default function Student() {
  const [addModalOpen, setAddModalOpen] = useState(false);

  function handleClick() {
    setAddModalOpen(true);
  }

  function close() {
    setAddModalOpen(false);
  }

  return (
    <div className="flex">
      <Sidebar />
      {addModalOpen && <ModalForm closeModal={close} />}
      <div className="ml-[280px] flex items-start p-4 gap-4 w-full relative">
        <SearchBar/>
        <div className="flex flex-col w-full pr-20 pt-3">
          <div className="flex justify-between items-center m-5 w-full h-fit pb-4 pt-6 border-solid border-b-2 border-whiteGray">
            <p className="font-bold text-xl">Students List</p>
            <button
              className="bg-darkYellow rounded-sm p-3 text-white w-60 h-fit text-sm font-semibold"
              onClick={handleClick}
            >
              ADD NEW STUDENT
            </button>
          </div>
          <div className="flex flex-col justify-center ml-6">
            <div className="grid grid-cols-4" style={{ gridTemplateColumns: "0.2fr 0.7fr 0.8fr 1fr" }}>
              <p></p>
              <p className="text-lightGray2 font-semibold text-sm">Name</p>
              <p className="text-lightGray2 font-semibold text-sm">E-mail</p>
              <p className="text-lightGray2 font-semibold text-sm">Phone</p>
            </div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
