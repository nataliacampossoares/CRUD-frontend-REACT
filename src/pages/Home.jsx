import Sidebar from "../components/Sidebar";
import Graduation from "../assets/graduation.png";
import Bookmark from "../assets/bookmark.png";
import Usdsquare from "../assets/usd-square.png";
import Vector from "../assets/vector.png";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    
    <div className="flex h-screen">
      
      <Sidebar />
      <SearchBar />

      <div className="flex ml-auto m-20 p-4 gap-4">
        <div className="relative bg-blue-500 bg-opacity-10 w-56 h-48 rounded-lg">
          <img
            src={Graduation}
            alt="graduation"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Students</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">243</div>
        </div>
      
        <div className="relative bg-pink-500 bg-opacity-10 w-56 h-48 rounded-lg">
          <img
            src={Bookmark}
            alt="bookmark"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Course</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">13</div>
        </div>

        <div className="relative bg-yellow-500 bg-opacity-10 w-56 h-48 rounded-lg">
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

        <div className="relative bg-gradient-to-r from-orange-400 to-yellow-400 bg-opacity-20 w-56 h-48 rounded-lg">
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
