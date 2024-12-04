import { X } from "lucide-react";

export default function ModalForm({ closeModal }) {


  return (
    <div className="fixed w-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-darkYellow border-2 border-solid border-darkYellow flex flex-col justify-center items-center gap-4 p-8 rounded-md">
      <div className="flex items-baseline h-10 gap-2">
        <p className="font-bold text-white text-xl">Add New Student</p>
        <button onClick={closeModal}>
          <X color="white" strokeWidth={3} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Name"
          className="border border-lightGray rounded-md h-2 text-sm p-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-lightGray rounded-md h-2 text-sm p-3"
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border border-lightGray rounded-md h-2 text-sm p-3"
        />
      </div>
      <button className="bg-white rounded-md p-3 text-darkYellow w-32 h-fit text-sm font-semibold border-1 border-solid border-lightYellow">
        Add
      </button>
    </div>
  );
}
