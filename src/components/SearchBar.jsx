import Circle from "../assets/arrowcircle-left.png";

export default function SearchBar() {
  return (


    <div className="absolute top-0 right-0 flex justify-between items-center p-4 w-full h-10 z-10 m-5">

      <div className="flex items-center ml-80">
        
      </div>

      
      <div className="flex items-center gap-4">
        <div className="flex items-center px-4 py-2 w-4/5 border border-lightGray3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="ml-2 w-full bg-transparent focus:outline-none text-black"
          />
          <span className="material-icons text-lightGray3">search</span>
        </div>
        
        <div className="flex items-center">
          <span className="material-icons text-lightGray3 hover:text-gray-500">notifications</span>
        </div>
      </div>
    </div>
  );
}
