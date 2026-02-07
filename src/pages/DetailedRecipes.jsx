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

      <h1 className="text-2xl font-bold text-center mb-2">{recipe.RName}</h1>

      <div className="border-2 border-gray-100"></div>
      <h2 className="mt-1 text-lg font-semibold text-center">Instruction</h2>
      <div className="border-2 border-gray-100"></div>
      <p className="p-2 text-sm font-light text-center mb-2">{recipe.inst}</p>

      <div className="border-2 border-gray-100"></div>
      <h2 className="text-lg font-semibold text-center">Ingredients</h2>
      <div className="border-2 border-gray-100"></div>
      <p className="text-sm font-light p-2 text-center">{recipe.ingr}</p>

      <h2 className=" text-xl font-semibold text-gray-500 text-center
      ">{recipe.CName}</h2>
     </div>
                {/* .....for laptop ....... */}
  <div className="hidden md:block">

    <div className="flex gap-4 mt-2">
      <div className="w-[60%] mt-16 px-20 flex justify-center items-center flex-col">
      <h1 className="text-4xl font-extrabold">{recipe.RName}</h1>
      <h2 className="text-lg font-semibold text-gray-600 mt-2">By:- {recipe.CName}</h2>
      </div>
      <div className="w-[40%] mt-6 px-14">
      <img 
      src={recipe.image} 
      alt={recipe.RName} 
      className="rounded-full object-cover  shadow hover:scale-105 active:scale-95 transition-transform duration-300"/>
      </div>
    </div>
      
    <div className="flex gap-4 mt-4">
      <div className="w-[60%] mt-2">
      <h2 className="text-2xl font-bold mb-2 text-center">Instructions</h2>
      <div className="p-6 rounded-lg">
      <p className="text-sm font-light whitespace-pre-wrap">{recipe.inst}</p>
      </div>
      </div>
      <div className="w-[40%] mt-2">
      <h2 className="text-2xl font-bold mb-2 text-center">Ingredients</h2>
      <div className="p-6 rounded-lg">
      <p className="text-sm font-light whitespace-pre-wrap">{recipe.ingr}</p>
      </div>
      </div>
      </div>
      </div>

    </div> : "Recipe not found !"
  )
}

export default DetailedRecipes