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
      <p className="p-2 text-sm font-light text-center mb-2 text-black">{recipe.inst}</p>

      <div className="border-2 border-gray-100"></div>
      <h2 className="text-lg font-semibold text-center ">Ingredients</h2>
      <div className="border-2 border-gray-100"></div>
      <p className="text-sm font-light p-2 text-center text-black">{recipe.ingr}</p>

     </div>
                {/* .....for laptop ....... */}
  <div className="hidden md:block">

    <div className="flex gap-3 mt-3">
      <div className="w-[40%] px-6 mt-12">
      <img 
      src={recipe.image} 
      alt={recipe.RName} 
      className="rounded-full object-cover shadow hover:scale-95 active:scale-95 transition-transform duration-300"/>
      </div>

      <div className="w-[60%] px-10 py-4">
        <div>
        <h1 className="text-4xl font-extrabold text-center">{recipe.RName}</h1>
        {/* <h2 className="text-lg font-semibold text-black text-center">{recipe.CName}</h2> */}

        </div>
        <div className="mt-15">
        <h2 className="text-2xl font-bold mb-2 ">Instructions</h2>
        <p className="text-sm font-light whitespace-pre-wrap text-black">{recipe.inst}</p>
        </div>

        <div className="mt-3 ">
        <h2 className="text-2xl font-bold mb-2 ">Ingredients</h2>
        <p className="text-sm font-light whitespace-pre-wrap text-black mb-3">{recipe.ingr}</p>
        </div>

        <div className="flex justify-start items-center gap-8 ">
        <button 
        // onClick={}
        className="bg-[#442D1D] text-[#E1D2C1] p-1 text-sm font-bold shadow hover:scale-95 active:scale-95 transition-transform duration-300">
        Update Recipe
        </button>
        <button 
        // onClick={}
        className="bg-[#442D1D] text-[#E1D2C1] p-1 text-sm font-bold shadow hover:scale-95 active:scale-95 transition-transform duration-300">
        Delete Recipe
        </button>
        </div>

      </div>
    </div>
  </div>
</div> : "Recipe not found !"
  )
}

export default DetailedRecipes;