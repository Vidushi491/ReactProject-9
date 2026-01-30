import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png";
const Nav = () => {

const [open, setOpen] = useState(false)

  return (
  <div>
                       {/* FOR MOBILE VIEW  */}
    <div className="flex justify-between items-center p-4 bg-[--c1]">
        <img src={logo} alt="logo" className="w-12 h-12"/>
        <h1 className="font-bold text-4xl">My Recipes</h1>
    </div>












  </div>
   
  )
}

export default Nav
        // <Link to="/">Home</Link>
        // <Link to="/product">Product</Link>
        // <Link to="/service">Service</Link>
        // <Link to="/about">About</Link>