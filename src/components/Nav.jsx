import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";
const Nav = () => {

const [open, setOpen] = useState(false)

  return (
    
    <div className="bg-(--c1)  flex justify-between items-center p-4 text-black font-bold">

      <div className="flex items-center gap-4">

      <img src={logo} className="w-12 h-12 object-cover" />

      <h1 className="font-bold text-2xl text-black">My Recipies</h1>
      </div>
      <ul className="hidden md:flex gap-6 font-bold">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        
      </ul>

      <button 
      className="md:hidden text-2xl "
      onClick={() => setOpen(true)}
      >☰</button>

      {open && (
        <div
        className="fixed inset-0 bg-black/40"
          onClick={() => setOpen(false)}>
        </div>
      )}

      <div className={`top-0 left-0 h-full w-64 bg-[--c2] z-50 transform ${open ? "translate-x-0": "-translate -x-full"} transition-transform duration-300 md:hidden`}>

      <button 
      className="p-4 font-bold"
      onClick={() => setOpen(false)}>
      ✖ 
      </button>

      <ul className="flex flex-col gap-4 p-6 font-bold">
        <li onClick={() => setOpen(false)}><Link to="/">Home</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/product">Product</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/service">Service</Link></li>
        <li onClick={() => setOpen(false)}><Link to="/about">About</Link></li>
      </ul>
      </div> 
    </div>
    
   
  )
}

export default Nav