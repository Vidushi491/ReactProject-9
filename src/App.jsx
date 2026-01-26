import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import  Product from "./components/Product"
import Service from "./components/Service"
import About from "./components/About"

const App = () => {
  return (
  <div>
    <Nav/>
     <Routes>
    <Route path="/" element={<Home/>}/>
     <Route path="/product" element={<Product/>}/>
      <Route path="/service" element={<Service/>}/>
       <Route path="/about" element={<About/>}/>
   </Routes>
  </div>
  )
}

export default App