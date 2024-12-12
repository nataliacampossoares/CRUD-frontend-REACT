import { useEffect, useState } from "react";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { useAppContext } from "../context/AppContext";

export default function Card() {
  const { fetchUsers, users } = useAppContext()

  function handleUpdate (id, updatedUser) {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? updatedUser : user))
    );
  };

  useEffect(() => {
    fetchUsers()
  }, []);

  function handleDelete(id){
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto p-6">
        {users && users.length === 0 ? (
          <p className="text-center text-gray-500">
            Nenhum usuário encontrado.
          </p>
        ) : (
          <div className="flex flex-col w-full">
            {users && users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-6 border-t-2 border-lightYellow grid grid-cols-4 items-center gap-4"
                style={{ gridTemplateColumns: "1fr 2fr 1fr 1fr" }}
              >
                <p className="text-black">{user.nome}</p>
                <p className="text-black">{user.email}</p>
                <p className="text-black">{user.celular}</p>
                <div className="flex justify-end items-center gap-4">
                  <DeleteButton id={user.id} onDelete={handleDelete} />
                  <EditButton
                    id={user.id}
                    currentData={{
                      nome: user.nome,
                      email: user.email,
                      celular: user.celular,
                    }}
                    onUpdate={handleUpdate}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
