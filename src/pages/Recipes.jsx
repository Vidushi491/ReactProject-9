import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
    
const {data} = useContext(RecipeContext);
    return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.length > 0 ? data.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe}/>
      )) : "No Recipes Found !"}
    </div>
    ) 
}
export default Recipes;