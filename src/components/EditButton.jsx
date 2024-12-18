import { Edit, X } from "lucide-react";
import { useState } from "react";
import { validatePhone, validateEmail } from "../components/Validate";
import { useAppContext } from "../context/AppContext";

export default function EditButton({ id, currentData = {}}) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: currentData.nome,
    email: currentData.email,
    celular: currentData.celular,
  });
  const { fetchUsers } = useAppContext()

  function handleInputChange(event) {
    const target = event.target;
    const { name, value } = target;
  
    let maskedValue = value;
  
    if (name === "celular") {
      maskedValue = validatePhone(value); 
    }
  
    setFormData((prev) => ({ ...prev, [name]: maskedValue }));
  }

  async function updateStudent() {

    if (!formData.nome || !formData.email || !formData.celular) {
      alert("Please, fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      alert("Please, enter a valid email.");
      return;
    }


    try {
      const response = await fetch(
        `https://crud-backend-react.onrender.com/usuarios/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao atualizar o estudante.");
      } else {
        fetchUsers()
      }

      setEditing(false);
    } catch (error) {
      console.error("Erro:", error.message);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      updateStudent();
    }
  }

  return (
    <>
      {editing ? (
        <div onKeyDown={handleKeyDown} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-darkYellow border-2 border-solid border-darkYellow flex flex-col justify-center items-center gap-4 p-8 rounded-md w-[400px] h-[350px]">
            <div className="flex items-baseline h-10 gap-2">
              <p className="font-bold text-white text-xl">Edit Student</p>
            </div>
            <div className="flex flex-col gap-3">
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Name"
                className="border border-lightGray rounded-md text-sm p-3"
              />
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="E-mail"
                className="border border-lightGray rounded-md text-sm p-3"
              />
              <input
                type="tel"
                name="celular"
                value={formData.celular}
                onChange={handleInputChange}
                placeholder="Phone"
                className="border border-lightGray rounded-md text-sm p-3"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={updateStudent}
                className="bg-white rounded-md p-3 text-darkYellow w-32 h-fit text-sm font-semibold border-1 border-solid border-lightYellow"
              >
                Save
              </button>
              <button
                onClick={() => setEditing(false)}
                className="bg-white rounded-md p-3 text-darkYellow w-32 h-fit text-sm font-semibold border-1 border-solid border-lightYellow"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setEditing(true)}>
          <Edit />
        </button>
      )}
    </>
  );
}
