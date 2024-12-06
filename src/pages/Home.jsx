import Sidebar from "../components/Sidebar";
import Graduation from "../assets/graduation.png";
import Bookmark from "../assets/bookmark.png";
import Usdsquare from "../assets/usd-square.png";
import Vector from "../assets/vector.png";

export default function Home() {
  return (
    
    <div className="flex h-screen">
      
      <Sidebar />

      <div className="absolute top-0 right-0 flex justify-between items-center p-4 w-50  h-10  z-10">
    
        <div className="flex items-center mt-10 px-4 py-2 w-4/5 border border-gray-500 rounded-lg m-10">
  
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent focus:outline-none text-gray-700"
          />
          <span className="material-icons text-gray-500">search</span>
        </div>

        <div className="flex items-center ">
          <span className="material-icons text-gray-500 hover:text-gray-800">notifications</span>
        </div>
      </div>

      <div className="flex m-10 ml-auto p-4 gap-4">
        <div className="relative bg-blue-500 bg-opacity-20 w-56 h-48 rounded-lg">
          <img
            src={Graduation}
            alt="graduation"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Students</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">243</div>
        </div>
      
        <div className="relative bg-pink-500 bg-opacity-20 w-56 h-48 rounded-lg">
          <img
            src={Bookmark}
            alt="bookmark"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Course</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">13</div>
        </div>

        <div className="relative bg-yellow-500 bg-opacity-20 w-56 h-48 rounded-lg">
          <img
            src={Usdsquare}
            alt="vector"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Payments</p>
          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            <div className="font-bold text-sm">IRN</div>
            <div className="font-bold text-2xl">556,00</div>
          </div>

        </div>

        <div className="relative bg-gradient-to-r from-orange-400 to-yellow-400 bg-opacity-30 w-56 h-48 rounded-lg">
          <img
            src={Vector}
            alt="users"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-white t">Users</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">3</div>
        </div>
      </div>
    </div>
  );
}
