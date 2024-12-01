import {
  BadgeDollarSign,
  GraduationCap,
  Home,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const getEstilo = (props) => {
    let estilo = `
      flex items-center gap-4
      px-3 py-3 w-full 
      hover:bg-darkYellow
      rounded-md`;
      
    let ativo = "border-solid border-r-4 border-darkYellow rounded-md";

    let final = props.isActive ? estilo + ativo : estilo;

    return final;}

  return (
    <div className="flex flex-col items-center justify-between min-w-[180px] max-w-[270px] h-screen bg-beige">
      <div className="pt-4">
        <div className="border-l-4 border-lightYellow pl-1">
          <p className="font-bold text-xl">CRUD OPERATIONS</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="../public/_.jpeg" className="rounded-full w-40 h-40" />
        <p className="font-bold text-lg mt-4">Harry Styles</p>
        <p className="text-darkYellow font-semibold text-sm">Admin</p>
      </div>
      <nav className="flex flex-col gap-5">
        <NavLink to="/home" className={getEstilo}>
          <div className="flex gap-2 items-center">
            <Home size={20} />
            <p className="text-md font-medium">Home</p>
          </div>
        </NavLink>
        <NavLink to="/student" className={getEstilo}>
          <div className="flex gap-2 items-center">
            <GraduationCap size={20} />
            <p className="text-md font-medium">Students</p>
          </div>
        </NavLink>
        <NavLink to="/payment" className={getEstilo}>
          <div className="flex gap-2 items-center">
            <BadgeDollarSign size={20} />
            <p className="text-md font-medium">Payment</p>
          </div>
        </NavLink>
      </nav>
      <div className="flex gap-2 items-center pb-2 mb-2">
        <p className="text-md font-medium">Logout</p>
        <LogOut size={20} />
      </div>
    </div>
  );
}
