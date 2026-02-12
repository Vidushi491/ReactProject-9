import { Link } from "react-router-dom";


const RecipeCard = (props) => {
    const{id, image, RName, ingr, inst} = props.recipe;
  return (
   <div className="bg-white overflow-hidden rounded-xl shadow hover:scale-105 active:scale-95 transition-transform duration-300">
         {/* ................... For Mobile View   .................. */}
         <div className="md:hidden">
        <Link to={`/recipe/detail/${id}`}
        className="block">
        <img 
        src={image} 
        alt={RName} 
        className="w-full h-40 object-cover"/>
        <h1 className="p-4 font-bold text-lg">{RName}</h1>
        <p className="px-2 pb-2 text-sm">{inst?.slice(0, 30) || "No instruction"}...<small className="text-blue-500">more</small></p>
        </Link>
        </div>
        

        {/* ................... For Laptop View   .................. */}
        <div className="hidden md:block h-85">
        <Link to={`/recipe/detail/${id}`}
        className="block">
        <img 
        src={image} 
        alt={RName} 
        className="w-full h-40 object-cover" />
        <h1 className="p-3 font-bold text-base">{RName}</h1>
        <p className="mt-2 px-2 pb-2 text-xs">{inst?.slice(0, 2) || "No instruction"}...<small className="text-blue-500">more</small></p>
        </Link>
        </div>
   </div>
  )
}

export default RecipeCard