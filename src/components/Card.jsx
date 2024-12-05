import { useEffect, useState } from "react";

export default function Card() {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
  const [error, setError] = useState(null); // Estado para erros

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://crud-backend-react.onrender.com/usuarios"
        ); // URL do backend
        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários
      } catch (error) {
        setError(error.message); // Armazena a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };

    fetchUsers(); // Chama a função de busca
  }, []); // O array vazio faz com que a requisição ocorra apenas uma vez após a montagem

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        {users.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum usuário encontrado.
          </p>
        ) : (
          <div className="flex flex-col w-full">
            {users.map((user, index) => (

              <div
                key={user.id}
                className="bg-white p-6 border-b-2 border-t-2 border-lightYellow flex justify-between"
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
      {/* <img src="" alt="" />
      <p>Nome</p>
      <p>Email</p>
      <p>Telefone</p> */}
    </div>
  );
}
