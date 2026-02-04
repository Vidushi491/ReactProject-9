import { createContext, useState } from "react"



export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [data, setData] = useState([])
  return (
    <recipecontext.Provider Value={{data, setData}}>
        {props.children}
        </recipecontext.Provider>

  )
}

export default RecipeContext