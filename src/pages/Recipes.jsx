import { useContext } from 'react'
import { RecipeContext } from '../context/RecipeContext';

const Recipes = () => {
    
const {data} = useContext(RecipeContext);
console.log
const renderrecipes = data.map((recipes) => 
{
    return (   
    <div key = {recipes.id}>
    <h1>{recipes.recipeName} </h1>
    </div>
    )
})

  return (
    <div>{renderrecipes}</div>
  )
}

export default Recipes