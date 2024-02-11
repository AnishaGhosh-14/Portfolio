import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
export default function Navbar() {
  return (
    <header className="header ">
  <NavLink to='/' className=" w-14 h-14 items-center justify-center flex font-bold">
    <img src={logo} alt="logo" className=" h-18 w-18"/>
  </NavLink>
  <nav className="flex text-lg gap-7 font-medium">
    <NavLink to='/about' className={({isActive})=>isActive?'text-orange-500':'text-black'}>
      About
    </NavLink>
    <NavLink to='/projects' className={({isActive})=>isActive?'text-orange-500':'text-black'}>
      Projects
    </NavLink>
  </nav>
</header>
  )
}
