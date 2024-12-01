import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

export default function Student() {
//   const [users, setUsers] = useState([]); // Estado para armazenar os usuários
//   const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
//   const [error, setError] = useState(null); // Estado para erros

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const response = await fetch(
//           "https://crud-backend-react.onrender.com/usuarios"
//         ); // URL do backend
//         if (!response.ok) {
//           throw new Error("Erro ao buscar os usuários");
//         }
//         const data = await response.json();
//         setUsers(data); // Atualiza o estado com os usuários
//       } catch (error) {
//         setError(error.message); // Armazena a mensagem de erro
//       } finally {
//         setLoading(false); // Finaliza o estado de carregamento
//       }
//     };

//     fetchUsers(); // Chama a função de busca
//   }, []); // O array vazio faz com que a requisição ocorra apenas uma vez após a montagem

    function handleClick(){
        console.log("oi")
    }


  return (
    <div className="flex">
      <Sidebar />
      <div className="flex h-screen w-full">
        <div className="flex flex-col w-full pr-20">
          <div className="flex justify-between items-center m-5 w-full h-fit pb-4 pt-6 border-solid border-b-2 border-whiteGray">
            <p className="font-bold text-xl">Students List</p>
            <button className="bg-darkYellow rounded-sm p-3 text-white w-60 h-fit text-sm font-semibold" onClick={handleClick}>ADD NEW STUDENT</button>
          </div>
          <div className="flex gap-72 justify-end">
            <p className="text-lightGray2 font-semibold text-sm">Name</p>
            <p className="text-lightGray2 font-semibold text-sm">E-mail</p>
            <p className="text-lightGray2 font-semibold text-sm">Phone</p>
          </div>
        </div>
      </div>
    </div>
  );
}
