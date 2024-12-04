import Sidebar from "../components/Sidebar";
import Graduation from "../assets/graduation.png"
import Bookmark from "../assets/bookmark.png"
import Usdsquare from "../assets/usd-square.png"
import Vector from "../assets/vector.png"

export default function Home() {
  return (
    <div className="flex">
     
      <Sidebar />

      
      <div className="flex items-start p-4 gap-4 w-full">
      
        <div className="bg-blue-500 bg-opacity-50 w-56 h-48 rounded-lg">
          <img src={Graduation} alt="graduation.pg" className="ml-10 mt-10" />
          <p className="text-sm">Students</p>
          <div className="bottom-0 right-0 font-bold text-lg">243</div>
        </div>

     
        <div className="bg-pink-500 bg-opacity-30 w-56 h-48 rounded-lg">
          <img src={Bookmark} alt="bookmark.pg" className="ml-10 mt-10" />
          <p className="text-sm">Course</p>
          <div className=" flez justify-end items-end font-bold text-lg">13</div>
        </div> 

        
        <div className="bg-orange-500 bg-opacity-30 w-56 h-48 rounded-lg">
          <img src={Vector} alt="vector.pg" className="ml-10 mt-10" />
          <p className="text-sm">Payments</p> 
          <div className="">
            <div className="font-bold text-sm">IRN</div>
            <div className="font-bold text-lg">556,00</div>
          </div>
          
        </div>

        
        <div className="from-yellow-400 to-yellow-600 w-56 h-48 rounded-lg">
          <img src={Vector} alt="vector.pg" className="ml-10 mt-10" />
          <p className="text-sm">Users</p>
          <div className="font-bold text-lg">3</div> 
        </div>
      </div>
    </div>
  );
}
