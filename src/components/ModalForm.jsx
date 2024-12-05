import { X } from "lucide-react";
import { useState } from "react";

export default function ModalForm({ closeModal }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
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
    console.log("1");
    const studentData = {
      nome: inputName,
      email: inputEmail,
      celular: inputPhone,
    };
    console.log("2");

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


      setName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      setError(error.message);
    }
  };

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
          value={inputName}
          onChange={handleInputName}
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-lightGray rounded-md h-2 text-sm p-3"
          value={inputEmail}
          onChange={handleInputEmail}
        />
        <input
          type="tel"
          placeholder="Phone"
          className="border border-lightGray rounded-md h-2 text-sm p-3"
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
  );
}
