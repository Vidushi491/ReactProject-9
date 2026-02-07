import { Link } from "react-router-dom";


const RecipeCard = (props) => {
    const{id, image, RName, desc, ingr, CName} = props.recipe;
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
        <h1 className="p-4 text-center font-bold text-lg">{RName}</h1>
        <p className="px-2 pb-2 text-center text-sm">{desc.slice(0, 100)}...<small className="text-blue-500">more</small></p>
        <small className="block p-4 text-center font-bold text-sm text-gray-500">{CName}</small>
        </Link>
        </div>
        

        {/* ................... For Laptop View   .................. */}
        <div className="hidden md:block">
        <Link to={`/recipe/detail/${id}`}
        className="block">
        <img 
        src={image} 
        alt={RName} 
        className="w-full h-40 object-cover" />
        <h1 className="p-3 text-center font-bold text-base">{RName}</h1>
        <p className="px-2 pb-2 text-center text-xs">{desc.slice(0, 80)}...<small className="text-blue-500">more</small></p>
        <small className="block p-2 font-bold text-center text-xs text-gray-500">{CName}</small>
        </Link>
        </div>
   </div>
  )
}

export default RecipeCard