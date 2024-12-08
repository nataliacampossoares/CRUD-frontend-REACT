import { useState } from "react";

export default function EditButton({ id, currentData = {}, onUpdate }) {
    const [editing, setEditing] = useState(false); // Controle de edição
    const [formData, setFormData] = useState({
      nome: currentData.nome || "",
      email: currentData.email || "",
      celular: currentData.celular || "",
    }); // Dados editados
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
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
            body: JSON.stringify(formData), // Enviando os dados atualizados
          }
        );
  
        if (!response.ok) {
          throw new Error("Erro ao atualizar o estudante.");
        }
  
        const updatedData = await response.json();
        onUpdate(id, updatedData); // Atualizando a lista local
        setEditing(false); // Saindo do modo de edição
      } catch (error) {
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
  }
  