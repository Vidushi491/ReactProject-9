import { createContext, useState } from "react";

export const RecipeContext = createContext(null);

const RecipeProvider = ({ children }) => {
    const [data, setData] = useState([ 
        
    {
      "id": 1,
      "RName": "Classic Margherita Pizza",
      "CName": "Vidushi Vyas",
      "cat": "Snacks",
      "desc": "this is the healthiest and most delicious pizza you will ever have",
      "ingr": [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "inst": [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
    },
    {
      "id": 2,
      "RName": "Vegetarian Stir-Fry",
      "ingr": [
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
      "inst": [
        "In a wok, heat sesame oil over medium-high heat.",
        "Add minced ginger and garlic, sauté until fragrant.",
        "Add cubed tofu and stir-fry until golden brown.",
        "Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.",
        "Pour soy sauce over the stir-fry and toss to combine.",
        "Serve over cooked rice."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/2.webp",
    },
    {
      "id": 3,
      "RName": "Chocolate Chip Cookies",
      "ingr": [
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
      "inst": [
        "Preheat the oven to 350°F (175°C).",
        "In a bowl, cream together softened butter, brown sugar, and white sugar.",
        "Beat in eggs one at a time, then stir in vanilla extract.",
        "Combine flour, baking soda, and salt. Gradually add to the wet ingr.",
        "Fold in chocolate chips.",
        "Drop rounded tablespoons of dough onto ungreased baking sheets.",
        "Bake for 10-12 minutes or until edges are golden brown.",
        "Allow cookies to cool on the baking sheet for a few minutes before transferring to a wire rack."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/3.webp",
    },
    {
      "id": 4,
      "RName": "Chicken Alfredo Pasta",
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
      "inst": [
        "Cook fettuccine pasta according to package inst.",
        "In a pan, sauté sliced chicken in butter until fully cooked.",
        "Add minced garlic and cook until fragrant.",
        "Pour in heavy cream and grated Parmesan cheese. Stir until the cheese is melted.",
        "Season with salt and pepper to taste.",
        "Combine the Alfredo sauce with cooked pasta.",
        "Garnish with fresh parsley before serving."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/4.webp",
    },
    {
      "id": 5,
      "RName": "Mango Salsa Chicken",
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
      "inst": [
        "Season chicken thighs with salt and pepper.",
        "Grill or bake chicken until fully cooked.",
        "In a bowl, combine diced mango, chopped red onion, cilantro, minced jalapeño, and lime juice.",
        "Dice the cooked chicken and mix it with the mango salsa.",
        "Serve over cooked rice."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/5.webp",
    },
    {
      "id": 6,
      "RName": "Quinoa Salad with Avocado",
      "ingr": [
        "Quinoa, cooked",
        "Avocado, diced",
        "Cherry tomatoes, halved",
        "Cucumber, diced",
        "Red bell pepper, diced",
        "Feta cheese, crumbled",
        "Lemon vinaigrette dressing",
        "Salt and pepper to taste"
      ],
      "inst": [
        "In a large bowl, combine cooked quinoa, diced avocado, halved cherry tomatoes, diced cucumber, diced red bell pepper, and crumbled feta cheese.",
        "Drizzle with lemon vinaigrette dressing and toss to combine.",
        "Season with salt and pepper to taste.",
        "Chill in the refrigerator before serving."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/6.webp",
    },
    {
      "id": 7,
      "RName": "Tomato Basil Bruschetta",
      "ingr": [
        "Baguette, sliced",
        "Tomatoes, diced",
        "Fresh basil, chopped",
        "Garlic cloves, minced",
        "Balsamic glaze",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      "inst": [
        "Preheat the oven to 375°F (190°C).",
        "Place baguette slices on a baking sheet and toast in the oven until golden brown.",
        "In a bowl, combine diced tomatoes, chopped fresh basil, minced garlic, and a drizzle of olive oil.",
        "Season with salt and pepper to taste.",
        "Top each toasted baguette slice with the tomato-basil mixture.",
        "Drizzle with balsamic glaze before serving."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/7.webp",
    },
    {
      "id": 8,
      "RName": "Beef and Broccoli Stir-Fry",
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
      "inst": [
        "In a bowl, mix soy sauce, oyster sauce, sesame oil, and cornstarch to create the sauce.",
        "In a wok, stir-fry thinly sliced beef until browned. Remove from the wok.",
        "Stir-fry broccoli florets, minced garlic, and minced ginger in the same wok.",
        "Add the cooked beef back to the wok and pour the sauce over the mixture.",
        "Stir until everything is coated and heated through.",
        "Serve over cooked white rice."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/8.webp",
    },
    {
      "id": 9,
      "RName": "Caprese Salad",
      "ingr": [
        "Tomatoes, sliced",
        "Fresh mozzarella cheese, sliced",
        "Fresh basil leaves",
        "Balsamic glaze",
        "Extra virgin olive oil",
        "Salt and pepper to taste"
      ],
      "inst": [
        "Arrange alternating slices of tomatoes and fresh mozzarella on a serving platter.",
        "Tuck fresh basil leaves between the slices.",
        "Drizzle with balsamic glaze and extra virgin olive oil.",
        "Season with salt and pepper to taste.",
        "Serve immediately as a refreshing salad."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/9.webp",
    },
    {
      "id": 10,
      "RName": "Shrimp Scampi Pasta",
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
      "inst": [
        "Cook linguine pasta according to package inst.",
        "In a skillet, sauté minced garlic in olive oil until fragrant.",
        "Add shrimp and cook until pink and opaque.",
        "Pour in white wine and lemon juice. Simmer until the sauce slightly thickens.",
        "Season with red pepper flakes, salt, and pepper.",
        "Toss cooked linguine in the shrimp scampi sauce.",
        "Garnish with chopped fresh parsley before serving."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/10.webp",
    },
    {
      "id": 11,
      "RName": "Chicken Biryani",
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
      "inst": [
        "Marinate chicken with yogurt, ginger-garlic paste, biryani masala, and salt.",
        "In a pot, sauté sliced onions until golden brown. Remove half for later use.",
        "Layer marinated chicken, chopped tomatoes, half of the fried onions, and rice in the pot.",
        "Top with ghee, green chilies, fresh coriander leaves, mint leaves, and the remaining fried onions.",
        "Cover and cook on low heat until the rice is fully cooked and aromatic.",
        "Serve hot, garnished with additional coriander and mint leaves."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/11.webp",
    },
    {
      "id": 12,
      "RName": "Chicken Karahi",
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
      "inst": [
        "In a wok (karahi), heat cooking oil and sauté minced garlic until golden brown.",
        "Add chicken pieces and cook until browned on all sides.",
        "Add chopped tomatoes, green chilies, ginger, and spices. Cook until tomatoes are soft.",
        "Cover and simmer until the chicken is tender and the oil separates from the masala.",
        "Garnish with fresh coriander leaves and serve hot with naan or rice."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/12.webp",
    },
    {
      "id": 13,
      "RName": "Aloo Keema",
      "ingr": [
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
      "inst": [
        "In a pan, heat cooking oil and sauté chopped onions until golden brown.",
        "Add ginger-garlic paste and sauté until fragrant.",
        "Add ground beef and cook until browned. Drain excess oil if needed.",
        "Add diced potatoes, chopped tomatoes, and spices. Mix well.",
        "Cover and simmer until the potatoes are tender and the masala is well-cooked.",
        "Garnish with fresh coriander leaves and serve hot with naan or rice."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/13.webp",
    },
    {
      "id": 14,
      "RName": "Chapli Kebabs",
      "ingr": [
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
      "inst": [
        "In a large bowl, mix ground beef, chopped onions, tomatoes, green chilies, coriander leaves, and pomegranate seeds.",
        "Add ginger-garlic paste, cumin powder, coriander powder, red chili powder, and salt. Mix well.",
        "Add an egg to bind the mixture and form into round flat kebabs.",
        "Heat cooking oil in a pan and shallow fry the kebabs until browned on both sides.",
        "Serve hot with naan or mint chutney."
      ], 
      "image": "https://cdn.dummyjson.com/recipe-images/14.webp",
    },
    {
      "id": 15,
      "RName": "Saag with Makki di Roti",
      "ingr": [
        "Mustard greens, washed and chopped",
        "Spinach, washed and chopped",
        "Cornmeal (makki ka atta)",
        "Onions, finely chopped",
        "Green chilies, chopped",
        "Ginger, grated",
        "Ghee",
        "Salt to taste"
      ],
      "inst": [
        "Boil mustard greens and spinach until tender. Drain and blend into a coarse paste.",
        "In a pan, sauté chopped onions, green chilies, and grated ginger in ghee until golden brown.",
        "Add the greens paste and cook until it thickens.",
        "Meanwhile, knead cornmeal with water to make a dough. Roll into rotis (flatbreads).",
        "Cook the rotis on a griddle until golden brown.",
        "Serve hot saag with makki di roti and a dollop of ghee."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/15.webp",
    },
    {
      "id": 16,
      "RName": "Japanese Ramen Soup",
      "ingr": [
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
      "inst": [
        "Cook ramen noodles according to package inst and set aside.",
        "In a pot, combine chicken broth, soy sauce, mirin, and sesame oil. Bring to a simmer.",
        "Add sliced shiitake mushrooms and chopped bok choy. Cook until vegetables are tender.",
        "Divide the cooked noodles into serving bowls and ladle the hot broth over them.",
        "Top with green onions, soft-boiled eggs, grilled chicken slices, and nori.",
        "Serve hot and enjoy the authentic Japanese ramen!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/16.webp",
    },
    {
      "id": 17,
      "RName": "Moroccan Chickpea Tagine",
      "ingr": [
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
      "inst": [
        "In a tagine or large pot, sauté chopped onions and minced garlic until softened.",
        "Add diced carrots, chopped tomatoes, and cooked chickpeas.",
        "Season with cumin, coriander, cinnamon, and paprika. Stir to coat.",
        "Pour in vegetable broth and bring to a simmer. Cook until carrots are tender.",
        "Stir in olives and garnish with fresh cilantro before serving.",
        "Serve this flavorful Moroccan dish with couscous or crusty bread."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/17.webp",
    },
    {
      "id": 18,
      "RName": "Korean Bibimbap",
      "ingr": [
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
      "inst": [
        "Arrange cooked white rice in a bowl.",
        "Top with beef bulgogi, sautéed carrots, seasoned spinach, grilled zucchini, and blanched bean sprouts.",
        "Place a fried egg on top and drizzle with gochujang and sesame oil.",
        "Sprinkle with toasted sesame seeds before serving.",
        "Mix everything together before enjoying this delicious Korean bibimbap!",
        "Feel free to customize with additional vegetables or protein."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/18.webp",
    },
    {
      "id": 19,
      "RName": "Greek Moussaka",
      "ingr": [
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
      "inst": [
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
      "image": "https://cdn.dummyjson.com/recipe-images/19.webp",
    },
    {
      "id": 20,
      "RName": "Butter Chicken ",
      "ingr": [
        "Chicken thighs, boneless and skinless",
        "Yogurt",
        "Ginger-garlic paste",
        "Garam masala",
        "Kashmiri red chili powder",
        "Tomato puree",
        "Butter",
        "Heavy cream",
        "Kasuri methi (dried fenugreek leaves)",
        "Sugar",
        "Salt to taste"
      ],
      "inst": [
        "Marinate chicken thighs in a mixture of yogurt, ginger-garlic paste, garam masala, and Kashmiri red chili powder.",
        "In a pan, melt butter and sauté the marinated chicken until browned.",
        "Add tomato puree and cook until the oil separates. Stir in heavy cream.",
        "Sprinkle kasuri methi, sugar, and salt. Simmer until the chicken is fully cooked.",
        "Serve this creamy butter chicken over rice or with naan for an authentic Pakistani/Indian experience."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/20.webp",
    },
    {
      "id": 21,
      "RName": "Thai Green Curry",
      "ingr": [
        "Chicken thighs, boneless and skinless",
        "Green curry paste",
        "Coconut milk",
        "Fish sauce",
        "Sugar",
        "Eggplant, sliced",
        "Bell peppers, sliced",
        "Basil leaves",
        "Jasmine rice for serving"
      ],
      "inst": [
        "In a pot, simmer green curry paste in coconut milk.",
        "Add chicken, fish sauce, and sugar. Cook until chicken is tender.",
        "Stir in sliced eggplant and bell peppers. Simmer until vegetables are cooked.",
        "Garnish with fresh basil leaves.",
        "Serve hot over jasmine rice and enjoy this Thai classic!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/21.webp",
    },
    {
      "id": 22,
      "RName": "Mango Lassi",
      "ingr": [
        "Ripe mango, peeled and diced",
        "Yogurt",
        "Milk",
        "Honey",
        "Cardamom powder",
        "Ice cubes"
      ],
      "inst": [
        "In a blender, combine diced mango, yogurt, milk, honey, and cardamom powder.",
        "Blend until smooth and creamy.",
        "Add ice cubes and blend again until the lassi is chilled.",
        "Pour into glasses and garnish with a sprinkle of cardamom.",
        "Enjoy this refreshing Mango Lassi!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/22.webp",
    },
    {
      "id": 23,
      "RName": "Italian Tiramisu",
      "ingr": [
        "Espresso, brewed and cooled",
        "Ladyfinger cookies",
        "Mascarpone cheese",
        "Heavy cream",
        "Sugar",
        "Cocoa powder"
      ],
      "inst": [
        "In a bowl, whip heavy cream until stiff peaks form.",
        "In another bowl, mix mascarpone cheese and sugar until smooth.",
        "Gently fold the whipped cream into the mascarpone mixture.",
        "Dip ladyfinger cookies into brewed espresso and layer them in a serving dish.",
        "Spread a layer of the mascarpone mixture over the cookies.",
        "Repeat layers and finish with a dusting of cocoa powder.",
        "Chill in the refrigerator for a few hours before serving.",
        "Indulge in the decadence of this classic Italian Tiramisu!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/23.webp",
    },
    {
      "id": 24,
      "RName": "Turkish Kebabs",
      "ingr": [
        "Ground lamb or beef",
        "Onions, grated",
        "Garlic, minced",
        "Parsley, finely chopped",
        "Cumin",
        "Coriander",
        "Red pepper flakes",
        "Salt and pepper to taste",
        "Flatbread for serving",
        "Tahini sauce"
      ],
      "inst": [
        "In a bowl, mix ground meat, grated onions, minced garlic, chopped parsley, and spices.",
        "Form the mixture into kebab shapes and grill until fully cooked.",
        "Serve the kebabs on flatbread with a drizzle of tahini sauce.",
        "Enjoy these flavorful Turkish Kebabs with your favorite sides."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/24.webp",
    },
    {
      "id": 25,
      "RName": "Blueberry Banana Smoothie",
      "ingr": [
        "Blueberries, fresh or frozen",
        "Banana, peeled and sliced",
        "Greek yogurt",
        "Almond milk",
        "Honey",
        "Chia seeds (optional)"
      ],
      "inst": [
        "In a blender, combine blueberries, banana, Greek yogurt, almond milk, and honey.",
        "Blend until smooth and creamy.",
        "Add chia seeds for extra nutrition and blend briefly.",
        "Pour into a glass and enjoy this nutritious Blueberry Banana Smoothie!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/25.webp",
    },
    {
      "id": 26,
      "RName": "Mexican Street Corn ",
      "ingr": [
        "Corn on the cob",
        "Mayonnaise",
        "Cotija cheese, crumbled",
        "Chili powder",
        "Lime wedges"
      ],
      "inst": [
        "Grill or roast corn on the cob until kernels are charred.",
        "Brush each cob with mayonnaise, then sprinkle with crumbled Cotija cheese and chili powder.",
        "Serve with lime wedges for squeezing over the top.",
        "Enjoy this delicious and flavorful Mexican Street Corn!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/26.webp",
    },
    {
      "id": 27,
      "RName": "Russian Borscht",
      "ingr": [
        "Beets, peeled and shredded",
        "Cabbage, shredded",
        "Potatoes, diced",
        "Onions, finely chopped",
        "Carrots, grated",
        "Tomato paste",
        "Beef or vegetable broth",
        "Garlic, minced",
        "Bay leaves",
        "Sour cream for serving"
      ],
      "inst": [
        "In a pot, sauté chopped onions and garlic until softened.",
        "Add shredded beets, cabbage, diced potatoes, grated carrots, and tomato paste.",
        "Pour in broth and add bay leaves. Simmer until vegetables are tender.",
        "Serve hot with a dollop of sour cream on top.",
        "Enjoy the hearty and comforting flavors of Russian Borscht!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/27.webp",
    },
    {
      "id": 28,
      "RName": "South Indian Masala Dosa",
      "ingr": [
        "Dosa batter (fermented rice and urad dal batter)",
        "Potatoes, boiled and mashed",
        "Onions, finely chopped",
        "Mustard seeds",
        "Cumin seeds",
        "Curry leaves",
        "Turmeric powder",
        "Green chilies, chopped",
        "Ghee",
        "Coconut chutney for serving"
      ],
      "inst": [
        "In a pan, heat ghee and add mustard seeds, cumin seeds, and curry leaves.",
        "Add chopped onions, green chilies, and turmeric powder. Sauté until onions are golden brown.",
        "Mix in boiled and mashed potatoes. Cook until well combined and seasoned.",
        "Spread dosa batter on a hot griddle to make thin pancakes.",
        "Place a spoonful of the potato mixture in the center, fold, and serve hot.",
        "Pair with coconut chutney for a delicious South Indian meal."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/28.webp",
    },
    {
      "id": 29,
      "RName": "Lebanese Falafel Wrap",
      "ingr": [
        "Falafel balls",
        "Whole wheat or regular wraps",
        "Tomatoes, diced",
        "Cucumbers, sliced",
        "Red onions, thinly sliced",
        "Lettuce, shredded",
        "Tahini sauce",
        "Fresh parsley, chopped"
      ],
      "inst": [
        "Warm falafel balls according to package inst.",
        "Place a generous serving of falafel in the center of each wrap.",
        "Top with diced tomatoes, sliced cucumbers, red onions, shredded lettuce, and fresh parsley.",
        "Drizzle with tahini sauce and wrap tightly.",
        "Enjoy this Lebanese Falafel Wrap filled with fresh and flavorful ingr!"
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/29.webp",
    },
    {
      "id": 30,
      "RName": "Brazilian Caipirinha",
      "ingr": [
        "Cachaça (Brazilian sugarcane spirit)",
        "Lime, cut into wedges",
        "Granulated sugar",
        "Ice cubes"
      ],
      "inst": [
        "In a glass, muddle lime wedges with granulated sugar to release the juice.",
        "Fill the glass with ice cubes.",
        "Pour cachaça over the ice and stir well.",
        "Sip and enjoy the refreshing taste of the Brazilian Caipirinha!",
        "Adjust sugar and lime to suit your taste preferences."
      ],
      "image": "https://cdn.dummyjson.com/recipe-images/30.webp",
    }
  ],
    );
    
  return (
    <RecipeContext.Provider value={{ data, setData }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider