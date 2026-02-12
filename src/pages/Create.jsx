import { useForm } from "react-hook-form";
import BlurText from "../pages/BlurText";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { RecipeContext } from "../context/RecipeContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { data, setData } = useContext(RecipeContext);
  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("Recipe Created Successfully 😊");
    reset();
    navigate("/recipes");
  };

  return (
    <div>
      {/* for mobile view  & Laptop View*/}
      <div className="min-h-screen  p-4 md:p-10 ">
        <h1 className="mb-5 flex justify-center">
          <BlurText
            text="Create Recipes"
            animateBy="words"
            direction="top"
            delay={200}
            className=" font-bold text-2xl md:text-3xl  "
          />
        </h1>
        <form
          onSubmit={handleSubmit(SubmitHandler)}
          className=" p-4 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 "
        >
          <div>
            <label className="block text-sm font-medium mb-1">Image</label>
            <input
              {...register("image")}
              className="w-full border rounded-lg px-3 py-2 focus:ring-1 outline-none bg-white"
              type="file"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Recipe Name
            </label>
            <input
              {...register("RName")}
              type="text"
              className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-1 outline-none bg-white"
              placeholder="Dal Makhani"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              {...register("desc")}
              className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-1 outline-none bg-white"
              rows={4}
              placeholder="Dal Makhani  North Indian Punjabi dish ..."
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Instruction
            </label>
            <textarea
              {...register("inst")}
              className="w-full border rounded-lg px-3 py-2 resize-none focus:ring-1 outline-none bg-white"
              rows={4}
              placeholder="1. Rinse the whole black lentils and red kidney beans under cold water until the water runs clear..."
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              ingredients
            </label>
            <textarea
              {...register("ingr")}
              className="w-full border rounded-xl px-3 py-2 resize-none focus:ring-1 outline-none bg-white"
              rows={6}
              placeholder="whole black lentils and red kidney beans , slow-cooked with tomatoes, ginger, garlic, and onions ..."
            ></textarea>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">
              Category
            </label>
            <select
              {...register("cat")}
              className="w-full border rounded-xl px-3 py-2 resize-none focus:ring-1 outline-none bg-white">
              <option value = "">Select Category</option>
              <option value = "Primary Meal">Primary Meal</option>
              <option value = "Snacks">Snacks</option>
              <option value = "Soup">Soup</option>
              <option value = "Desserts">Desserts</option>
              <option value = "Soft Drinks">Soft Drinks</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium mb-1">Chef Name</label>
            <textarea
              {...register("CName")}
              className="w-full border rounded-xl px-2 py-2 resize-none focus:ring-1 outline-none bg-white"
              placeholder="Garima Arora"
            ></textarea>
          </div>

<div className="md:col-span-2"> <button className=" border rounded-xl w-full bg-[#B99668] font-semibold px-2 py-2 active:scale-95 transition" type="submit" > Add Recipe </button> </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
