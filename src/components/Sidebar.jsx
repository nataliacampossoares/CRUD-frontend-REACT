import {
  BadgeDollarSign,
  GraduationCap,
  HardHat,
  Home,
  LogOut,
  LucideSchool,
  School,
  School2,
  School2Icon,
  SchoolIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex flex-col items-center min-w-[180px] max-w-[270px] h-screen bg-beige">
      <div className="pt-4">
        <div className="border-l-4 border-lightYellow pl-1">
          <p className="font-bold text-xl">CRUD OPERATIONS</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <img src="../public/_.jpeg" className="rounded-full w-40 h-40 mt-16" />
        <p className="font-bold text-lg mt-4">Harry Styles</p>
        <p className="text-darkYellow font-semibold text-sm">Admin</p>
      </div>
      <nav>
        <NavLink to="/home">
          <div className="flex gap-2">
            <Home size={20} />
            <p>Home</p>
          </div>
        </NavLink>
        <NavLink to="/student">
          <div className="flex gap-2">
            <GraduationCap size={20} />
            <p>Students</p>
          </div>
        </NavLink>
        <NavLink to="/payment">
          <div className="flex gap-2">
            <BadgeDollarSign size={20} />
            <p>Payment</p>
          </div>
        </NavLink>
      </nav>
      <div className="flex gap-2">
        <p>Logout</p>
        <LogOut size={20} />
      </div>
    </div>
  );
}
