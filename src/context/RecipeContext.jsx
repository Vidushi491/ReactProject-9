import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
    const [data, setData] = useState([ 
        {
        "id": 1,
        "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
        "RName": "Tomato Basil Bruschetta",
        "desc": 
        [
        "Preheat the oven to 375°F (190°C).",
        "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
        ],
        "inst": [
        "Preheat the oven to 375°F (190°C).",
        "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
        "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
        "Season with salt and pepper to taste.",
        "Top each toasted baguette slice with the tomato-basil mixture.",
        "Drizzle with balsamic glaze before serving."
        ],
        "ingr": 
        [
        "Baguette, sliced", 
        "Tomatoes, diced", 
        "Fresh basil, chopped", 
        "Garlic cloves, minced", 
        "Balsamic glaze", 
        "Olive oil",
        "Salt and pepper to taste"
        ],
        "CName": "Pankaj chamoli",
        },
        {
        "id": 2,
        "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
        "RName": "Vegetarian Stir-Fry",
        "desc":
        [
          "In a wok, heat sesame oil over medium-high heat.",
          "Add minced ginger and garlic, sauté until fragrant.",
        ],
        "inst": 
        [
          "In a wok, heat sesame oil over medium-high heat.",
          "Add minced ginger and garlic, sauté until fragrant.",
          "Add cubed tofu and stir-fry until golden brown.",
          "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
          "Pour soy sauce over the stir-fry and toss to combine.",
          "Serve over cooked rice."
        ],
        "ingr":
        [
          "Tofu, cubed",
          "Broccoli florets",
          "Carrots, sliced",
          "Bell peppers, sliced",
          "Soy sauce",
          "Ginger, minced",
          "Garlic, minced",
          "Sesame oil",
          "Cooked rice for serving"
        ],
        "CName": "Neha Gupta",
        },
        {
        "id": 3,
        "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
        "RName": "Chocolate Chip Cookies",
        "desc":
        [
          "In a bowl, cream together softened butter, brown sugar, and white sugar.",
          "Bake for 10-12 minutes or until edges are golden brown.",
        ],
        "inst": 
        [
          "Preheat the oven to 350°F (175°C).",
          "In a bowl, cream together softened butter, brown sugar, and white sugar.",
          "Beat in eggs one at a time, then stir in vanilla extract.",
          "Combine flour, baking soda, and salt. Gradually add to the wet ingredients.",
          "Fold in chocolate chips.",
          "Drop rounded tablespoons of dough onto ungreased baking sheets.",
          "Bake for 10-12 minutes or until edges are golden brown.",
          "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
        ],
        "ingr": 
        [
          "All-purpose flour",
          "Butter, softened",
          "Brown sugar",
          "White sugar",
          "Eggs",
          "Vanilla extract",
          "Baking soda",
          "Salt",
          "Chocolate chips"
        ],
        "CName": "Anjali Verma",
        },
         {
      "id": 4,
      "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
      "RName": "Chicken Alfredo Pasta",
      "desc": [
        "Cook fettuccine pasta according to package instructions.",
        "In a pan, sauté sliced chicken in butter until fully cooked.",
      ],
      "inst": [
        "Cook fettuccine pasta according to package instructions.",
        "In a pan, sauté sliced chicken in butter until fully cooked.",
        "Add minced garlic and cook until fragrant.",
        "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
        "Season with salt and pepper to taste.",
        "Combine the Alfredo sauce with cooked pasta.",
        "Garnish with fresh parsley before serving."
      ],
      "ingr": [
        "Fettuccine pasta",
        "Chicken breast, sliced",
        "Heavy cream",
        "Parmesan cheese, grated",
        "Garlic, minced",
        "Butter",
        "Salt and pepper to taste",
        "Fresh parsley for garnish"
      ],
      "CName": "Anjali Verma",
       },
    {
      "id": 5,
      "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
      "RName": "Mango Salsa Chicken",
      "desc": [
        "Season chicken thighs with salt and pepper.",
        "Grill or bake chicken until fully cooked.",
      ],
      "inst": [
        "Season chicken thighs with salt and pepper.",
        "Grill or bake chicken until fully cooked.",
        "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
        "Dice the cooked chicken and mix it with the mango salsa.",
        "Serve over cooked rice."
       ],
      "ingr": [
        "Chicken thighs",
        "Mango, diced",
        "Red onion, finely chopped",
        "Cilantro, chopped",
        "Lime juice",
        "Jalapeño, minced",
        "Salt and pepper to taste",
        "Cooked rice for serving"
      ],
      "CName": "Anjali Verma",
    },
    {
      "id": 6,
       "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
      "RName": "Quinoa Salad with Avocado",
      "desc": 
      [
        "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, and crumbled feta cheese.",
      ],
      "inst": 
      [
        "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
        "Drizzle with lemon vinaigrette dressing and toss to combine.",
        "Season with salt and pepper to taste.",
        "Chill in the refrigerator before serving."
      ],
      "ingr": 
      [
        "Quinoa, cooked",
        "Avocado, diced",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red bell pepper, diced",
        "Feta cheese, crumbled",
        "Lemon vinaigrette dressing",
        "Salt and pepper to taste"
      ],
      "CName": "Anjali Verma",
    },
])
    
  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider