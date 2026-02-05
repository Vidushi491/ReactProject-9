import { Link } from "react-router-dom";


const RecipeCard = (props) => {
    const{id, recipeName, image, description, ingredients, instructions ,chefName} = props.recipe;
  return (
    <div className="">
        <Link to ={ `/recipe/detail/${id}`} 
        className="">
        <img src={image} alt={recipeName} className="" />
        <h1>{recipeName}</h1>
        <small>{chefName}</small>
        <p className="px-2 pb-2">{description.slice(0, 100)}...{""}
            <small className="text-blue-500">...more</small>
        </p>
        </Link>
    </div>
  )
}

export default RecipeCard