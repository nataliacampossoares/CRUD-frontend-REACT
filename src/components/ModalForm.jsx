import { X } from "lucide-react";
import { useState } from "react";

export default function ModalForm({ closeModal }) {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [error, setError] = useState("");

  function handleInputName(event) {
    setInputName(event.target.value);
  }

  function handleInputEmail(event) {
    setInputEmail(event.target.value);
  }
  function handleInputPhone(event) {
    setInputPhone(event.target.value);
  }

  const addStudent = async () => {
    const studentData = {
      nome: inputName,
      email: inputEmail,
      celular: inputPhone,
    };

    try {
      const response = await fetch(
        "https://crud-backend-react.onrender.com/usuarios",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(studentData),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao adicionar o estudante.");
      }


      setInputName("");
      setInputEmail("");
      setInputPhone("");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-darkYellow border-2 border-solid border-darkYellow flex flex-col justify-center items-center gap-4 p-8 rounded-md w-[400px] h-[350px]">
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
            className="border border-lightGray rounded-md text-sm p-3"
            value={inputName}
            onChange={handleInputName}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-lightGray rounded-md text-sm p-3"
            value={inputEmail}
            onChange={handleInputEmail}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border border-lightGray rounded-md text-sm p-3"
            value={inputPhone}
            onChange={handleInputPhone}
          />
        </div>
        <button
          className="bg-white rounded-md p-3 text-darkYellow w-32 h-fit text-sm font-semibold border-1 border-solid border-lightYellow"
          onClick={addStudent}
        >
          Add
        </button>
      </div>
    </div>
  );
}
