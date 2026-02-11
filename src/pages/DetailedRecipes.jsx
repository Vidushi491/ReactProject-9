import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useParams } from "react-router-dom";

export const DetailedRecipes = () => {
  const {data} = useContext(RecipeContext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  return (
recipe ? <div>
             {/* ............for mobile............ */}
    <div className="md:hidden">
      <div className="mt-4 mb-4 flex justify-center items-center">
      <img 
      src={recipe.image} 
      alt={recipe.RName} 
      className="rounded-full w-50 h-50  object-cover shadow hover:scale-105 active:scale-95 transition-transform duration-300 "/>
      </div>

      <h1 className="text-2xl font-bold text-center mb-1">{recipe.RName}</h1>
      <h2 className="mb-1 text-sm font-semibold text-gray-500 text-center
      ">{recipe.CName}</h2>
      <div className="border-2 border-gray-100"></div>
      <h2 className="mt-1 text-lg font-semibold text-center">Instruction</h2>
      <div className="border-2 border-gray-100"></div>
      <p className="p-2 text-sm font-light text-center mb-2">{recipe.inst}</p>

      <div className="border-2 border-gray-100"></div>
      <h2 className="text-lg font-semibold text-center">Ingredients</h2>
      <div className="border-2 border-gray-100"></div>
      <p className="text-sm font-light p-2 text-center">{recipe.ingr}</p>

     </div>
                {/* .....for laptop ....... */}
  <div className="hidden md:block">
     <div className="mt-3">
        <h1 className="text-4xl font-extrabold text-center">{recipe.RName}</h1>
        <h2 className="text-sm font-extralight mb-8 text-center">{recipe.CName}</h2>
      </div>

    <div className="flex flex-row gap-4">
        <div className="w-[40%] px-14 mt-5 ">
        <img 
        src={recipe.image} 
        alt={recipe.RName} 
        className="rounded-full h-75 object-cover hover:scale-105 active:scale-95 transition-transform duration-300"/>
        </div>

      <div className="w-[60%] p-4"> 

        <div className="bg-[#a3968400] rounded-xl p-4">
        {recipe.desc && (
        <div className="mt-2">
        <h2 className="text-2xl font-bold">Description</h2>
        <p className="text-sm font-light mb-3">{recipe.desc}</p>
        </div>)}
        
        <h2 className="text-2xl font-bold">Instructions</h2>
        <p className="text-sm font-light whitespace-pre-wrap mb-3">{recipe.inst}</p>

        <h2 className="text-2xl font-bold">Ingredients</h2>
        <p className="text-sm font-light whitespace-pre-wrap mb-3">{recipe.ingr}</p>
        </div>

      </div>
    </div>
  </div>
</div> : "Recipe not found !"
  )
}

export default DetailedRecipes