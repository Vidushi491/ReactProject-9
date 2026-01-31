import { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png";
import BlurText from "./BlurText";

const Nav = () => {

const [open, setOpen] = useState(false)

  return (
  <div className="w-full">
                       {/* FOR MOBILE VIEW  */}
    <div className="md:hidden relative">

        <div className=" flex items-center justify-between px-2 h-16 bg-black  shadow">

        <div className="flex items-center gap-16">
        <img 
        src={logo} 
        alt="logo" 
        className="w-14 h-14 object-cover"
        />
        <BlurText
        text="My Recipe"
        animateBy="words"
        direction="top"
        delay={200}
        className="font-bold text-lg"
        />
        </div>
        <button 
        onClick={() => setOpen(true)}
        className="text-2xl font-bold "
        >
         ☰
        </button>
        </div>

        {open && (
          <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={()=> setOpen(false)}
          ></div>
        )}
        <div
        className={`fixed top-0 right-0 h-full w-50 bg-black z-50 transform ${ open ? "translate-x-0" : "translate-x-full"} transition-transform duration-300`}>
        <button
        className="p-2 font-bold text-4xl"
        onClick={()=>setOpen(false)}
        >
        Close
        </button>
        <ul className="flex mt-6 p-2 flex-col gap-8 font-extrabold text-2xl">
          <li onClick={()=>setOpen(false)}>
          <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/'>Home</NavLink>
          </li>
          <li onClick={()=>setOpen(false)}>
          <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/product'>Product</NavLink>
          </li>
          <li onClick={()=>setOpen(false)}>
          <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/service'>Service</NavLink>
          </li>
          <li onClick={()=>setOpen(false)}>
          <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/about'>About</NavLink>
          </li>
        </ul>
        </div>
    </div>
                 {/* FOR DESKTOP VIEW  */}
    <div>
      <div className="hidden md:flex items-center justify-between px-3 py-2 bg-black shadow">
        <div className="flex items-center gap-3">
        <img 
        src={logo} 
        alt="logo" 
        className="w-10 h-10 object-cover rounded-full"
        />
        <BlurText
        text="My Recipe"
        animateBy="words"
        direction="top" 
        delay={120}
        className="font-bold text-lg"
        />
        </div>

        <div className="flex gap-5 font-semibold text-xl">
        <NavLink className = {(e) => (e.isActive ? "text-yellow-600 " : "")} 
        to = '/'>        
        Home       
        </NavLink>
        <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/product'>
        Product        
        </NavLink>        
        <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/service'>        
        Service     
        </NavLink>
        <NavLink className = {(e) => (e.isActive ? "text-yellow-600" : "")} to = '/about'>
        About
        </NavLink>
        </div>
      </div>
  </div>











</div>
   
  )
}

export default Nav
        