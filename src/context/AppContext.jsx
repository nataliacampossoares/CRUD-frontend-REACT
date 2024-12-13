import { createContext, useContext, useState } from "react";

const AppContext = createContext()

export function useAppContext(){
    try{
        const data = useContext(AppContext)
        return data
    } catch{
        throw new Error("useAppContext deve estar no appContextProvider.")
    }

}

export default function AppContextProvider({ children }){
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    function fetchUsers(){
        const fetchData = async () => {
            try {
              const response = await fetch(
                "https://crud-backend-react.onrender.com/usuarios"
              );
              if (!response.ok) {
                throw new Error("Erro ao buscar os usuários");
              }
              const data = await response.json();
              setUsers(data);
            } catch (error) {
              setError(error.message);
            } finally {
              setLoading(false);
            }
          };
      
          fetchData();
    }

    return(
        <AppContext.Provider value={{fetchUsers, users, loading, error}}>
            { children }
        </AppContext.Provider>
    )
}