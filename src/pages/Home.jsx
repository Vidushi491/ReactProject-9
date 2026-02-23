import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import chefImg from '../assets/chefimg.jpg'
import friesImg from '../assets/fries.jpg'
import burgerImg from '../assets/burger.jpg'
import tacoesImg from '../assets/tacoes.jpg'
import rollImg from '../assets/roll.jpg'
import sandwich2Img from '../assets/sandwich2.jpg'
import pizzaImg from '../assets/pizza.jpg'
import instagramIcon from '../assets/instagram.png'
import facebookIcon from '../assets/facebook.png'
import twitterIcon from '../assets/twitter.png'
import youtubeIcon from '../assets/youtube.png'

const Home = () => {
  const navigate = useNavigate()

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='bg-black text-white'>

      {/* ..............for mobile............ */}
<div className="md:hidden">

  {/* ---Scroll 1 --- */}

    <div className="flex flex-col items-center justify-center mt-5">
    <h1 className=" text-3xl mb-4 font-bold text-center text-[#B99668]">Recipe Book</h1>
    <h2 className=" text-sm font-bold mb-4">From Your Kitchen To your World </h2>
    <p className="text-sm font-extralight text-center px-6">Create Your Own Recipe This Is The Largets Hub Where People Share there  Recipies So that People Can Follow and Can Make There Own food Delicious Without Getting Confused...</p>
    </div>
    <div className="p-1">
    <img src={chefImg}
    onClick={() => navigate('/create-recipes')} 
    alt="Chef preparing food"
    className="w-full h-full object-top p-2 transition-transform hover:scale-105 cursor-pointer" />
    </div>

  {/* ---Scroll 2 --- */}

    <div className="h-screen flex items-center flex-col mt-10">
    <h2 className="text-3xl font-bold mb-2">Italian Tiramisu </h2>
    <div className=''>
    <div className="flex-3 rounded-2xl overflow-hidden">
    <img src={friesImg}
    alt="Delicious fries"
    className="object-contain h-75 w-full transition-transform hover:scale-105" />
    <p className="mt-3 text-sm font-extralight text-center mb-4">In a bowl, whip heavy cream until stiff peaks form.,In another bowl, mix mascarpone cheese and sugar until smooth.,Gently fold the whipped cream into the mascarpone mixture.</p>
    </div>
    {/* bottom part */}
    <div className='p-2 flex flex-wrap justify-center gap-4 bg-black'>
    <div 
    onClick={() => navigate('/recipes')} 
    className="bg-white text-black w-35 h-40 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer ">
    Cookie
    <p className="font-extralight text-sm p-1">It's a delecious cookie with choco chips</p>
    </div> 
    <div 
    onClick={() => navigate('/recipes')} 
    className="bg-white text-black w-35 h-40 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
    Blueberry
    <p className="font-extralight text-sm p-1">The shake in purple with garnishing of chocolates</p>
    </div>
    <div 
    onClick={() => navigate('/recipes')} 
    className="bg-white text-black w-35 h-40 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
    Mango Lassi
    <p className="font-extralight text-sm p-1">The little pices of mangos in yellow flavour lassi</p>
    </div>
    <div 
    onClick={() => navigate('/recipes')} 
    className="bg-white text-black w-35 h-40 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
    Tiramasu
    <p className="font-extralight text-sm p-1">The Italian dessert with coffee and mascarpone</p>
    </div>
    </div>
    </div>
    </div>
  
  {/* scroll 3 */}

  <div>
  
  </div>

</div>


      {/* ..............for Laptop............ */}

      <div className="hidden md:flex flex-col ">

        {/* ---- scroll 1 ----*/}

          <div className=" h-screen flex ">
          {/* Left Side */}
          <div className="w-2/5 p-1">
          <img src={chefImg}
          onClick={() => navigate('/create-recipes')} 
          alt="Chef preparing food"
          className="w-full h-full object-top p-2 transition-transform hover:scale-105 cursor-pointer" />
          </div>
          {/* Right Side */}
          <div className="w-3/5 flex flex-col items-center p-4 mt-18">
          <h1 className=" text-5xl font-bold text-center mb-8 text-[#B99668]">Recipe Book</h1>
          <h2 className=" text-2xl font-bold mb-2">From Your Kitchen To your World </h2>
          <p className="text-sm font-light text-center px-13">Create Your Own Recipe And Submit Heare to Help Others If You Really Want To This Is The Largets Hub Where People Share there Different Recipies So that People Can Follow and Can Make There Own food Delicious Without Getting Confused...</p>
          </div>
          </div>

        {/* ---- scroll 2 ----*/}

          <div className="h-screen flex flex-col justify-center">
          <div className="flex flex-row justify-between items-center px-10 mt-15">
          {/* left side */}
          <div className=" flex flex-col flex-5 items-center p-2">
          <h2 className="text-3xl font-bold mb-4">Italian Tiramisu </h2>
          <p className="mt-3 text-sm font-extralight text-center">In a bowl, whip heavy cream until stiff peaks form.,In another bowl, mix mascarpone cheese and sugar until smooth.,Gently fold the whipped cream into the mascarpone mixture.</p>
          </div>
          {/* right side */}
          <div className="flex-3 rounded-2xl overflow-hidden">
          <img src={friesImg}
          alt="Delicious fries"
          className="object-contain h-75 w-full transition-transform hover:scale-105" />
          </div>
          </div>
          {/* bottom part */}
          <div className="flex gap-10 text-black justify-center items-center mt-15 px-10">
          <div 
          onClick={() => navigate('/recipes')} 
          className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
          Cookie
          <p className="font-extralight text-sm p-2">It's a delecious cookie with choco chips</p>
          </div>
          <div 
          onClick={() => navigate('/recipes')} 
          className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
          Blueberry
          <p className="font-extralight text-sm p-2">The shake in purple with garnishing of chocolates</p>
          </div>
          <div 
          onClick={() => navigate('/recipes')} 
          className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
          Mango Lassi
          <p className="font-extralight text-sm p-2">The little pices of mangos in yellow flavour lassi</p>
          </div>
          <div 
          onClick={() => navigate('/recipes')} 
          className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2 cursor-pointer">
          Tiramasu
          <p className="font-extralight text-sm p-2">The Italian dessert with coffee and mascarpone</p>
          </div>
          </div>
          </div>

        {/* ---- scroll 3 ----*/}

          <div className="h-screen flex flex-col justify-center mt-15">
          <h1 className="font-bold text-4xl text-center">Try At Your Home </h1>
          <p className="font-light text-sm mt-2 text-center">This are some of our best recipes for you to try at home!</p>
          <div className="flex flex-wrap gap-10 px-10 py-10 justify-center mt-10">
          <div className="w-50 h-70 transition-transform hover:scale-105 active:scale-100 text-center">
          <img 
          src={burgerImg} 
          alt="Burger" 
          onClick={() => navigate('/recipes')} 
          className="w-full h-50 object-cover "/>
          Burger
          <p className="text-xs mt-1 w-50">A juicy patty layered with fresh veggies and cheese inside a soft bun</p>
          </div>
          <div className="w-50 h-70 transition-transform hover:scale-105 active:scale-100 text-center">
          <img 
          src={tacoesImg} alt="Tacoes" 
          onClick={() => navigate('/recipes')} 
          className="w-full h-50 object-center" />
          Tacoes 
          <p className="text-xs mt-1 w-50">A flavorful Mexican dish made with crispy or soft tortillas filled with meat, veggies, and sauces.</p>
          </div>
          <div className="w-50 h-70 transition-transform hover:scale-105 active:scale-100 text-center">
          <img src={rollImg} 
          alt="Roll" 
          onClick={() => navigate('/recipes')} 
          className="w-full h-50 object-cover" />
          Roll 
          <p className="text-xs mt-1 w-50">A tasty wrap filled with veggies, meat, or paneer and rolled in soft flatbread.</p>
          </div>
          <div className="w-50 h-70 transition-transform hover:scale-105 active:scale-100 text-center">
          <img 
          src={sandwich2Img} alt="Sandwich" 
          onClick={() => navigate('/recipes')} 
          className="w-full h-50 object-cover" />
          Sandwich 
          <p className="text-xs mt-1 w-50">A quick and easy meal made by placing fillings between slices of bread.</p>
          </div>
          </div>
          </div>

        {/* --- scroll 4 --- */}

          <div className="h-screen flex flex-col justify-center">
          <div className="flex flex-row justify-between items-center px-10 mt-15">
          {/* left side */}
          <div 
          onClick={() => navigate('/recipe/detail/1')}
          className="flex-2 overflow-hidden transition-transform hover:scale-105 active:scale-100 px-4">
          <img src={pizzaImg}
          alt="Italian Pizza"
          className="object-contain h-full w-full" />
          </div>
          {/* right side */}
          <div className=" flex flex-col flex-5 items-center ">
          <h2 className="text-3xl font-bold mb-4">Italian Pizza</h2>
          <p className="mt-3 text-sm font-extralight text-center px-16">
          Preheat the oven to 475°F (245°C),
          Roll out the pizza dough and spread tomato sauce evenly,
          Top with slices of fresh mozzarella and fresh basil leaves,
          Drizzle with olive oil and season with salt and pepper,
          Bake in the preheated oven for 12-15 minutes or until the crust is golden brown,
          Slice and serve hot.</p>
          </div>
          </div>
          {/* bottom part */}
          <div className="flex flex-row bg-white text-black mt-5 gap-10 justify-center items-center px-10">
          <div className="w-full h-40 font-bold text-lg p-2">Recipe Book
          </div>
          <div className="w-full h-40 font-bold text-lg p-2">Info
          <p 
          onClick={() => navigate('/about')}
          className="font-extralight text-sm cursor-pointer">About us</p>
          <p 
          onClick={() => navigate('/about')}
          className="font-extralight text-sm cursor-pointer">Contact us</p>
          </div>
          <div className="w-full h-40 font-bold text-lg p-2">Category
          <p className="font-extralight text-sm">Primary Meal</p>
          <p className="font-extralight text-sm">Snacks</p>
          <p className="font-extralight text-sm">Soup</p>
          <p className="font-extralight text-sm">Dessert</p>
          <p className="font-extralight text-sm">Soft Drinks</p>
          </div>
          <div className="flex flex-col w-full h-40 font-bold text-lg p-2">follow us
          <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-cover inline-block mx-8 mb-2" />
          <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-cover inline-block mx-8 mb-2" />
          <img src={twitterIcon} alt="Twitter" className="w-5 h-5 object-cover inline-block mx-8 mb-2" />
          <img src={youtubeIcon} alt="YouTube" className="w-5 h-5 object-cover inline-block mx-8 mb-2" />
          </div>
          </div>
          </div>
          </div>
          </div>
      
  )
}

export default Home