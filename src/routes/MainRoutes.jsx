import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Create from '../pages/Create';
import Recipes from '../pages/Recipes';
import { DetailedRecipes } from '../pages/DetailedRecipes';

const MainRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/recipes" element={<Recipes/>}/>
    <Route path="/create-recipes" element={<Create/>}/>
    <Route path="/recipe/detail/:id" element={<DetailedRecipes/>}/>
    <Route path="/about" element={<About/>}/>
  </Routes>
  )
}

export default MainRoutes;