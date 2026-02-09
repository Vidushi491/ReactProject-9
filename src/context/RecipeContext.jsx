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
     {
      "id": 7,
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
      "RName": "Classic Margherita Pizza",
      "desc":[
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
      ],
       "inst": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
       "ingr": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
       "CName": "Anjali Verma",
    },
     {
      "id": 8,
       "image": "https://cdn.dummyjson.com/recipe-images/8.webp",
      "RName": "Beef and Broccoli Stir-Fry",
      "desc": [
         "Stir until everything is coated and heated through.",
        "Serve over cooked white rice."
      ],
       "inst": [
        "In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce.",
        "In a wok, stir-fry thinly sliced beef until browned. Remove from the wok.",
        "Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok.",
        "Add the cooked beef back to the wok and pour the sauce over the mixture.",
        "Stir until everything is coated and heated through.",
        "Serve over cooked white rice."
      ],
       "ingr": [
        "Beef sirloin, thinly sliced",
        "Broccoli florets",
        "Soy sauce",
        "Oyster sauce",
        "Sesame oil",
        "Garlic, minced",
        "Ginger, minced",
        "Cornstarch",
        "Cooked white rice for serving"
      ],
        "CName": "Anjali Verma",
    },
     {
      "id": 9,
      "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
      "RName": "Caprese Salad",
      "desc": [
        "Drizzle with balsamic glaze and extra virgin olive oil.",
        "Season with salt and pepper to taste.",
      ],
      "inst": [
        "Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.",
        "Tuck fresh basil leaves between the slices.",
        "Drizzle with balsamic glaze and extra virgin olive oil.",
        "Season with salt and pepper to taste.",
        "Serve immediately as a refreshing salad."
      ],
       "ingr": [
        "Tomatoes, sliced",
        "Fresh mozzarella cheese, sliced",
        "Fresh basil leaves",
        "Balsamic glaze",
        "Extra virgin olive oil",
        "Salt and pepper to taste"
      ],
        "CName": "Anjali Verma",
    },
       {
      "id": 10,
       "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
      "RName": "Shrimp Scampi Pasta",
      "desc":[
      "Cook linguine pasta according to package instructions.",
        "In a skillet, sauté minced garlic in olive oil until fragrant.",
      ],
       "inst": [
        "Cook linguine pasta according to package instructions.",
        "In a skillet, sauté minced garlic in olive oil until fragrant.",
        "Add shrimp and cook until pink and opaque.",
        "Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.",
        "Season with red pepper flakes, salt, and pepper.",
        "Toss cooked linguine in the shrimp scampi sauce.",
        "Garnish with chopped fresh parsley before serving."
      ],
       "ingr": [
        "Linguine pasta",
        "Shrimp, peeled and deveined",
        "Garlic, minced",
        "White wine",
        "Lemon juice",
        "Red pepper flakes",
        "Fresh parsley, chopped",
        "Salt and pepper to taste"
      ],
        "CName": "Anjali Verma",
    },
    {
      "id": 11,
      "image": "https://cdn.dummyjson.com/recipe-images/11.webp",
      "RName": "Chicken Biryani",

       "inst": [
        "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.",
        "In a pot, sauté sliced onions until golden brown. Remove half for later use.",
        "Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.",
        "Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.",
        "Cover and cook on low heat until the rice is fully cooked and aromatic.",
        "Serve hot, garnished with additional coriander and mint leaves."
      ],
       "ingr": [
        "Basmati rice",
        "Chicken, cut into pieces",
        "Onions, thinly sliced",
        "Tomatoes, chopped",
        "Yogurt",
        "Ginger-garlic paste",
        "Biryani masala",
        "Green chilies, sliced",
        "Fresh coriander leaves",
        "Mint leaves",
        "Ghee",
        "Salt to taste"
      ],
        "CName": "Anjali Verma",
    },
     {
      "id": 12,
       "image": "https://cdn.dummyjson.com/recipe-images/12.webp",
      "RName": "Chicken Karahi",
      "desc":[
        "In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.",
        "Add chicken pieces and cook until browned on all sides.",
      ],
       "inst": [
        "In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.",
        "Add chicken pieces and cook until browned on all sides.",
        "Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.",
        "Cover and simmer until the chicken is tender and the oil separates from the masala.",
        "Garnish with fresh coriander leaves and serve hot with naan or rice."
      ],
      "ingr": [
        "Chicken, cut into pieces",
        "Tomatoes, chopped",
        "Green chilies, sliced",
        "Ginger, julienned",
        "Garlic, minced",
        "Coriander powder",
        "Cumin powder",
        "Red chili powder",
        "Garam masala",
        "Cooking oil",
        "Fresh coriander leaves",
        "Salt to taste"
      ],
       "CName": "Anjali Verma",
    },
     {
      "id": 13,
       "image": "https://cdn.dummyjson.com/recipe-images/13.webp",
      "name": "Aloo Keema",
       "instructions": [
        "In a pan, heat cooking oil and sauté chopped onions until golden brown.",
        "Add ginger-garlic paste and sauté until fragrant.",
        "Add ground beef and cook until browned. Drain excess oil if needed.",
        "Add diced potatoes, chopped tomatoes, and spices. Mix well.",
        "Cover and simmer until the potatoes are tender and the masala is well-cooked.",
        "Garnish with fresh coriander leaves and serve hot with naan or rice."
      ],
       "ingredients": [
        "Ground beef",
        "Potatoes, peeled and diced",
        "Onions, finely chopped",
        "Tomatoes, chopped",
        "Ginger-garlic paste",
        "Cumin powder",
        "Coriander powder",
        "Turmeric powder",
        "Red chili powder",
        "Cooking oil",
        "Fresh coriander leaves",
        "Salt to taste"
      ],
       },
    {
      "id": 14,
      "image": "https://cdn.dummyjson.com/recipe-images/14.webp",
      "name": "Chapli Kebabs",
       "instructions": [
        "In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.",
        "Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.",
        "Add an egg to bind the mixture and form into round flat kebabs.",
        "Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.",
        "Serve hot with naan or mint chutney."
      ],
       "ingredients": [
        "Ground beef",
        "Onions, finely chopped",
        "Tomatoes, finely chopped",
        "Green chilies, chopped",
        "Coriander leaves, chopped",
        "Pomegranate seeds",
        "Ginger-garlic paste",
        "Cumin powder",
        "Coriander powder",
        "Red chili powder",
        "Egg",
        "Cooking oil",
        "Salt to taste"
      ],
       },
    {
      "id": 15,
       "image": "https://cdn.dummyjson.com/recipe-images/15.webp",
      "name": "Saag (Spinach) with Makki di Roti",
       "instructions": [
        "Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.",
        "In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.",
        "Add the greens paste and cook until it thickens.",
        "Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).",
        "Cook the rotis on a griddle until golden brown.",
        "Serve hot saag with makki di roti and a dollop of ghee."
      ],
       "ingredients": [
        "Mustard greens, washed and chopped",
        "Spinach, washed and chopped",
        "Cornmeal (makki ka atta)",
        "Onions, finely chopped",
        "Green chilies, chopped",
        "Ginger, grated",
        "Ghee",
        "Salt to taste"
      ],
       },
    {
      "id": 16,
       "image": "https://cdn.dummyjson.com/recipe-images/16.webp",
      "name": "Japanese Ramen Soup",
       "instructions": [
        "Cook ramen noodles according to package instructions and set aside.",
        "In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.",
        "Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.",
        "Divide the cooked noodles into serving bowls and ladle the hot broth over them.",
        "Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.",
        "Serve hot and enjoy the authentic Japanese ramen!"
      ],
       "ingredients": [
        "Ramen noodles",
        "Chicken broth",
        "Soy sauce",
        "Mirin",
        "Sesame oil",
        "Shiitake mushrooms, sliced",
        "Bok choy, chopped",
        "Green onions, sliced",
        "Soft-boiled eggs",
        "Grilled chicken slices",
        "Norwegian seaweed (nori)"
      ],
       },
    {
      "id": 17,
       "image": "https://cdn.dummyjson.com/recipe-images/17.webp",
      "name": "Moroccan Chickpea Tagine",
       "instructions": [
        "In a tagine or large pot, sauté chopped onions and minced garlic until softened.",
        "Add diced carrots, chopped tomatoes, and cooked chickpeas.",
        "Season with cumin, coriander, cinnamon, and paprika. Stir to coat.",
        "Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.",
        "Stir in olives and garnish with fresh cilantro before serving.",
        "Serve this flavorful Moroccan dish with couscous or crusty bread."
      ],
       "ingredients": [
        "Chickpeas, cooked",
        "Tomatoes, chopped",
        "Carrots, diced",
        "Onions, finely chopped",
        "Garlic, minced",
        "Cumin",
        "Coriander",
        "Cinnamon",
        "Paprika",
        "Vegetable broth",
        "Olives",
        "Fresh cilantro, chopped"
      ],
       },
    {
      "id": 18,
      "image": "https://cdn.dummyjson.com/recipe-images/18.webp",
      "name": "Korean Bibimbap",
       "instructions": [
        "Arrange cooked white rice in a bowl.",
        "Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.",
        "Place a fried egg on top and drizzle with gochujang and sesame oil.",
        "Sprinkle with toasted sesame seeds before serving.",
        "Mix everything together before enjoying this delicious Korean bibimbap!",
        "Feel free to customize with additional vegetables or protein."
      ],
       "ingredients": [
        "Cooked white rice",
        "Beef bulgogi (marinated and grilled beef slices)",
        "Carrots, julienned and sautéed",
        "Spinach, blanched and seasoned",
        "Zucchini, sliced and grilled",
        "Bean sprouts, blanched",
        "Fried egg",
        "Gochujang (Korean red pepper paste)",
        "Sesame oil",
        "Toasted sesame seeds"
      ],
       },
    {
      "id": 19,
      "name": "Greek Moussaka",
       "instructions": [
        "Preheat oven to 375°F (190°C).",
        "Sauté sliced eggplants in olive oil until browned. Set aside.",
        "In the same pan, cook chopped onions and minced garlic until softened.",
        "Add ground lamb or beef and brown. Stir in crushed tomatoes, red wine, and spices.",
        "In a separate saucepan, make béchamel sauce: melt butter, whisk in flour, add milk, and cook until thickened.",
        "Remove from heat and stir in Parmesan cheese and egg yolks.",
        "In a baking dish, layer eggplants and meat mixture. Top with béchamel sauce.",
        "Bake for 40-45 minutes until golden brown. Let it cool before slicing.",
        "Serve slices of moussaka warm and enjoy this Greek classic!"
      ],
       "ingredients": [
        "Eggplants, sliced",
        "Ground lamb or beef",
        "Onions, finely chopped",
        "Garlic, minced",
        "Tomatoes, crushed",
        "Red wine",
        "Cinnamon",
        "Allspice",
        "Nutmeg",
        "Olive oil",
        "Milk",
        "Flour",
        "Parmesan cheese",
        "Egg yolks"
      ],
])
    
  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider