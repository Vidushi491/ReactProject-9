import Home from '../pages/Home';
import Product from '../pages/Product';
import About from '../pages/About';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from '../pages/ProductDetails';
import Create from '../pages/Create';

const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/product" element={<Product/>}/>
    <Route path="/product/detail/:name" element={<ProductDetails/>}/>
    <Route path="/create" element={<Create/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  )
}

export default MainRoutes;