import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="flex">
     
      <Sidebar />

      
      <div className="flex items-start p-4 gap-4 w-full">
      
        <div className="bg-blue-500 bg-opacity-30 w-56 h-48 rounded-lg"></div>

     
        <div className="bg-pink-500 bg-opacity-30 w-56 h-48 rounded-lg"></div>

        
        <div className="bg-orange-500 bg-opacity-30 w-56 h-48 rounded-lg"></div>

        
        <div className="bg-yellow-400 w-56 h-48 rounded-lg"></div>
      </div>
    </div>
  );
}
