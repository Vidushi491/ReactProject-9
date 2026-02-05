import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Create from '../pages/Create';
import Recipes from '../pages/Recipes';

const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="/create-recipes" element={<Create/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  )
}

export default MainRoutes;