import { Edit } from "lucide-react";
import { useState } from "react";

export default function EditButton({ id, currentData = {}, onUpdate }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    nome: currentData.nome,
    email: currentData.email,
    celular: currentData.celular,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const updateStudent = async () => {
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
  
      console.log("Response status:", response.status); // Verifica o status
  
      if (!response.ok) {
        throw new Error("Erro ao atualizar o estudante.");
      }
  
      // Chama o onUpdate mesmo sem dados retornados
      if (response.status === 204) {
        console.log("Nenhum dado retornado, assumindo sucesso na atualização.");
        onUpdate(id, formData); // Usa os dados locais para atualizar a interface
      } else {
        const updatedData = await response.json();
        console.log("Updated data:", updatedData);
        onUpdate(id, updatedData); // Atualiza com os dados retornados
      }
  
      setEditing(false);
    } catch (error) {
      console.log("oiiiiiiii fofa ta dando errado");
      console.error("Erro:", error.message);
    }
  };
  
  
  return (
    <>
      {editing ? (
        <div>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
          <input
            type="tel"
            name="celular"
            value={formData.celular}
            onChange={handleInputChange}
            placeholder="Celular"
          />
          <button onClick={updateStudent}>Salvar</button>
          <button onClick={() => setEditing(false)}>Cancelar</button>
        </div>
      ) : (
        <button onClick={() => setEditing(true)}>
          <Edit />
        </button>
      )}
    </>
  );
  };


