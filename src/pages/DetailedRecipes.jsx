import { useContext } from "react"
import { RecipeContext } from "../context/RecipeContext"
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';

export const DetailedRecipes = () => {
  const {data , setData} = useContext(RecipeContext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  const {register, handleSubmit } = useForm({
    defaultValues:{
      RName: recipe?.RName,
      CName: recipe?.CName,
      image: recipe?.image,
      desc: recipe?.desc,
      ingr: recipe?.ingr,
      inst: recipe?.inst,
    },
  });

  const SubmitHandler = (formData) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = {...copydata[index], ...formData};
    setData(copydata);
    toast.success("Recipe updated!");
    navigate("/recipes");
  };
  
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    setData(filterdata);
    toast.error("recipe deleted!");
    navigate("/recipes");
  };

  return (
    recipe ? <div>
      {/* ............for mobile............ */}
      <div className="md:hidden">
        <div className="mt-4 mb-4 flex justify-center items-center">
          <img 
            src={recipe.image} 
            alt={recipe.RName} 
            className="rounded-full w-50 h-50 object-cover shadow hover:scale-105 active:scale-95 transition-transform duration-300 "
          />
        </div>

        <h1 className="text-4xl font-bold text-center mb-1">{recipe.RName}</h1>
        <h2 className="mb-1 text-sm font-semibold text-gray-500 text-center">{recipe.CName}</h2>

        {recipe.desc && (
          <div className="mt-1 mb-1">
            <div className="border-2 border-gray-100"></div>
            <h2 className="text-lg font-semibold text-center">Description</h2>
            <div className="border-2 border-gray-100"></div>
            <p className="text-sm font-light p-2 text-center">{recipe.desc}</p>
          </div>
        )}

        <div className="border-2 border-gray-100"></div>
        <h2 className="mt-1 text-lg font-semibold text-center">Instruction</h2>
        <div className="border-2 border-gray-100"></div>
        <p className="p-2 text-sm font-light  mb-2">{recipe.inst}</p>

        <div className="border-2 border-gray-100"></div>
        <h2 className="text-lg font-semibold text-center">Ingredients</h2>
        <div className="border-2 border-gray-100"></div>
        <p className="text-sm font-light p-2 ">{recipe.ingr}</p>
        

        <form onSubmit={handleSubmit(SubmitHandler)}>
          <div className="border-2 border-gray-300"></div>
          <div className="p-2 mb-4 ">
            <label className="block mb-2 text-center font-bold">Recipe Name</label>
            <input {...register("RName")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2 text-center font-bold">Chef Name</label>
            <input {...register("CName")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2 text-center font-bold">Image URL</label>
            <input {...register("image")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2 text-center font-bold">Description</label>
            <input {...register("desc")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2 text-center font-bold">Ingredients</label>
            <textarea {...register("ingr")} className="w-full p-2 border rounded" rows="4"></textarea>
            
            <label className="block mb-2 mt-2 text-center font-bold">Instructions</label>
            <textarea {...register("inst")} className="w-full p-2 border rounded" rows="4"></textarea>
          </div>

          <div className="flex gap-6 justify-center items-center mt-4 mb-4">
            <button 
              type="button"
              className="bg-[#B99668] text-white px-2 rounded-sm shadow hover:scale-105 active:scale-95 transition-transform duration-300"
              onClick={DeleteHandler}
            >
              Delete Recipe
            </button>
            <button 
              type="submit"
              className="bg-[#B99668] text-white px-2 rounded-sm shadow hover:scale-105 active:scale-95 transition-transform duration-300">
              Update Recipe
            </button>
          </div>
        </form>
      </div>

      {/* .....for laptop ....... */}
      <div className="hidden md:block">
        <div className="flex flex-row gap-2">
          <div className="w-[40%] px-15 mt-15">
            <img 
              src={recipe.image} 
              alt={recipe.RName} 
              className="rounded-full h-75 object-cover hover:scale-105 active:scale-95 transition-transform duration-300"
            />
          </div>

          <div className="w-[60%] p-2">
            <div className="mt-3">
              <h1 className="text-4xl font-extrabold">{recipe.RName}</h1>
              <h2 className="text-sm font-extralight mb-8">{recipe.CName}</h2>
            </div>

            <div className="bg-[#a3968400] rounded-xl">
              {recipe.desc && (
                <div className="mt-2">
                  <h2 className="text-2xl font-bold">Description</h2>
                  <p className="text-sm font-light mb-3">{recipe.desc}</p>
                </div>
              )}
              
              <h2 className="text-2xl font-bold">Instructions</h2>
              <p className="text-sm font-light whitespace-pre-wrap mb-3">{recipe.inst}</p>

              <h2 className="text-2xl font-bold">Ingredients</h2>
              <p className="text-sm font-light whitespace-pre-wrap">{recipe.ingr}</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(SubmitHandler)}>
          <div className="p-10 mt-20 mb-4">
            <label className="block mb-2">Recipe Name</label>
            <input {...register("RName")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2">Chef Name</label>
            <input {...register("CName")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2">Image URL</label>
            <input {...register("image")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2">Description</label>
            <input {...register("desc")} type="text" className="w-full p-2 border rounded" />
            
            <label className="block mb-2 mt-2">Ingredients</label>
            <textarea {...register("ingr")} className="w-full p-2 border rounded" rows="4"></textarea>
            
            <label className="block mb-2 mt-2">Instructions</label>
            <textarea {...register("inst")} className="w-full p-2 border rounded" rows="4"></textarea>
          </div>

          <div className="flex items-center justify-center gap-5  mb-4">
            <button 
              type="button"
              className="bg-[#B99668] text-white px-2 shadow hover:scale-3d active:scale-95 transition-transform duration-300"
              onClick={DeleteHandler}
            >
              Delete
            </button>
            <button 
              type="submit"
              className="bg-[#B99668] text-white px-2 shadow hover:scale-3d active:scale-95 transition-transform duration-300">
              Update
            </button>
          </div>
        </form>
      </div>
    </div> : "Recipe not found !"
  )
}

export default DetailedRecipes