import { Trash } from "lucide-react";

export default function DeleteButton(){

    const deleteStudent = async (req, res) => {
        
    
        try {
          const response = await fetch(
            "https://crud-backend-react.onrender.com/usuarios",
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
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

    return(
        <>
        <button><Trash/></button>
        </>
    )
}