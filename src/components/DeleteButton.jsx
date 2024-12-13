import { Trash } from "lucide-react";
import { useState } from "react";
import { useAppContext } from "../context/AppContext";

export default function DeleteButton({ id }) {
  const [error, setError] = useState(null);
  const { fetchUsers } = useAppContext()

  async function deleteStudent () {
    try {
      const response = await fetch(
        `https://crud-backend-react.onrender.com/usuarios/${id}`, 
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao deletar o estudante."); 
      } else {
        fetchUsers()
      }

    } catch (error) {
      setError(error.message); 
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
