import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
    const [data, setData] = useState([ 
        {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "id": 1,
        "Recipe Name": "Classic Margherita Pizza",
        "Description": 
        [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
        ],
        "instructions": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
        ],
        "ingredients": 
        [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
        ],
        "Chef Name": "Pankaj Sharma",
    },
])
    
  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider