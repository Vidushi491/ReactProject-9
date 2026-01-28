import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";
const Nav = () => {

const [open, setOpen] = useState(false)

  return (
    <div className="bg-(--c1)  flex justify-between items-center p-4 text-black font-bold">
     <img src={logo} className="w-10 h-10 object-cover" />
      <p className="font-bold text-2xl text-black">My Recipies</p>
      <button 
      className="md:hidden text-2xl "
      onClick={ () =>
        setOpen(true)
      }>☰</button>
      {open && (
        <div
        className="fixed inset-0 bg-black/40"
          onClick={() =>
            setOpen(false)}>
        </div>

      )}
        <Link to="/">Home</Link>
         <Link to="/product">Product</Link>
          <Link to="/service">Service</Link>
           <Link to="/about">About</Link>
           
    </div>
  )
}

export default Nav