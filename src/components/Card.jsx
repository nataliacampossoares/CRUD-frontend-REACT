import { useEffect, useState } from "react";

export default function Card() {
  const [users, setUsers] = useState([]); //
  const [loading, setLoading] = useState(true); // 
  const [error, setError] = useState(null); // 
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://crud-backend-react.onrender.com/usuarios"
        ); // 
        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }
        const data = await response.json();
        setUsers(data); //
      } catch (error) {
        setError(error.message); // 
      } finally {
        setLoading(false); // 
      }
    };

    fetchUsers(); // 
  }, []); // 

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        {users.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum usuário encontrado.
          </p>
        ) : (
          <div className="flex flex-col w-full">
            {users.map((user) => (

              <div
                key={user.id}
                className="bg-white p-6 border-t-2 border-lightYellow flex justify-around gap-24"
              >
                <h2 className="text-black">
                  {user.nome}
                </h2>
                <p className="text-black">
                  {user.email}
                </p>
                <p className="text-black">
                  {user.celular}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
