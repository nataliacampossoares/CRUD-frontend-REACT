import Sidebar from "../components/Sidebar";
import Graduation from "../assets/graduation.png";
import Bookmark from "../assets/bookmark.png";
import Usdsquare from "../assets/usd-square.png";
import Vector from "../assets/vector.png";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex items-start p-4 gap-4 w-full">
        <div className="relative bg-blue-500 bg-opacity-30 w-56 h-48 rounded-lg">
          <img
            src={Graduation}
            alt="graduation"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Students</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">243</div>
        </div>

        <div className="relative bg-pink-500 bg-opacity-30 w-56 h-48 rounded-lg">
          <img
            src={Bookmark}
            alt="bookmark"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Course</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">13</div>
        </div>

        <div className="relative bg-orange-500 bg-opacity-30 w-56 h-48 rounded-lg">
          <img
            src={Vector}
            alt="vector"
            className="absolute top-4 left-4 w-12 h-12"
          />
          <p className="mt-16 ml-4 text-sm">Payments</p>
          <div className="absolute bottom-4 right-4 text-right">
            <div className="font-bold text-sm">IRN</div>
            <div className="font-bold text-2xl">556,00</div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-600 bg-opacity-30 w-56 h-48 rounded-lg">
          <img
            src={Usdsquare}
            alt="users"
            className="absolute top-4 left-4"
          />
          <p className="mt-16 ml-4 text-sm">Users</p>
          <div className="absolute bottom-4 right-4 font-bold text-2xl">3</div>
        </div>
      </div>
    </div>
  );
}
