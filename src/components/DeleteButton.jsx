import { Trash } from "lucide-react";
import { useState } from "react";

export default function DeleteButton({ id, onDelete }) {
  const [error, setError] = useState(null);

  const deleteStudent = async () => {
    try {
      const response = await fetch(
        `https://crud-backend-react.onrender.com/usuarios/${id}`, 
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao deletar o estudante."); 
      }

      onDelete(id); 
    } catch (error) {
      setError(error.message); //
    }
  };

  return (
    <>
      <button onClick={deleteStudent}>
        <Trash />
      </button>
    </>
  );
}
