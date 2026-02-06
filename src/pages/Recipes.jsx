import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
    
const {data} = useContext(RecipeContext);

const renderrecipes = data.map((recipes) => (
  <RecipeCard key={recipes.id} recipe={recipes}/>
));
    return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">{renderrecipes}</div>
    ) 
}
export default Recipes;