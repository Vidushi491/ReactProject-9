const Home = () => {
  return (
    <div className=''>

      {/* ..............for mobile............ */}
      <div className="md:hidden">

      </div>


      {/* ..............for Laptop............ */}

      <div className="hidden md:flex flex-col bg-black text-white">
        {/* ------------------------------- scroll 1 ----------------------------- */}
        <div className=" h-screen bg-black text-white flex ">
          {/* Left Side */}
          <div className="w-2/5 p-1">
            <img src="/src/assets/chefimg.jpg"
              alt="oops!!"
              className="w-99 h-99 object-top p-2" />
          </div>
          {/* Right Side */}
          <div className="w-3/5 flex flex-col items-center p-4 mt-18">
             <h1 className=" text-5xl font-bold text-center mb-8 text-[#B99668]">Recipe Book</h1>
            <h2 className=" text-2xl font-bold mb-2">From Your Kitchen To your World </h2>
            <p className="text-sm font-light text-center px-13">Create Your Own Recipe And Submit Heare to Help Others If You Really Want To This Is The Largets Hub Where People Share there Different Recipies So that People Can Follow and Can Make There Own food Delicious Without Getting Confused...</p>
          </div>
        </div>

        {/* ------------------------------- scroll 2 ----------------------------- */}
        <div className="h-screen flex flex-col justify-center">

        <div className="flex flex-row justify-between items-center px-10 mt-15">
            {/* left side */}
            <div className=" flex flex-col flex-5 items-center p-2">
              <h2 className="text-3xl font-bold mb-4">Italian Tiramisu </h2>
              <p className="mt-3 text-sm font-extralight text-center">In a bowl, whip heavy cream until stiff peaks form.,In another bowl, mix mascarpone cheese and sugar until smooth.,Gently fold the whipped cream into the mascarpone mixture.</p>
            </div>
            {/* right side */}
            <div className="flex-3 rounded-2xl overflow-hidden">
              <img src="/src/assets/fries.jpg"
                alt="oops!!"
                className=" object-contain h-75 w-full"/>
            </div>
          </div>

          {/* bottom part */}
          <div className=" flex gap-8 text-black justify-center items-center mt-15 px-10">
            <div className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Cookie<p className="font-extralight text-sm p-2">It's a delecious cookie with choco chips</p></div>
            <div className="bg-white  w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Blueberry<p className="font-extralight text-sm p-2">The shake in purple with garnishing of chocolates</p></div>
            <div className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Mango Lassi<p className="font-extralight text-sm p-2">The little pices of mangos in yellow flavour lassi</p></div>
            <div className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Tiramasu<p className="font-extralight text-sm p-2">The Italian dessert with coffee and mascarpone</p></div>
          </div>
        </div>

        {/* ------------------------------- scroll 3 ----------------------------- */}
        <div className="h-screen text-white bg-black flex flex-col justify-center mt-15">
          <h1 className="font-bold text-4xl text-center">Try At Your Home </h1>
          <p className="font-light text-sm mt-2 text-center">This are some of our best recipes for you to try at home!</p>
          <div className="flex flex-wrap px-10 py-10 space-x-10 space-y-10 justify-center mt-10">

            <div className="w-50 h-70 bg-black transition-transform hover:scale-105 active:scale-100 text-center">
              <img src="/src/assets/burger.jpg" alt="oops!!" className="w-full h-50 object-cover"/>
                Burger<p className="text-xs mt-1 w-50">A juicy patty layered with fresh veggies and cheese inside a soft bun</p>
            </div>

            <div className="w-50 h-70 bg-black transition-transform hover:scale-105 active:scale-100 text-center">
              <img src="/src/assets/tacoes.jpg" alt="oops!!" className="w-full h-50 object-center"/>
               Tacoes <p className="text-xs mt-1 w-50">A flavorful Mexican dish made with crispy or soft tortillas filled with meat, veggies, and sauces.</p>
            </div>

            <div className="w-50 h-70 bg-black transition-transform hover:scale-105 active:scale-100 text-center">
              <img src="/src/assets/roll.jpg" alt="oops!!" className="w-full h-50 object-cover"/>
              Roll <p className="text-xs mt-1 w-50">A tasty wrap filled with veggies, meat, or paneer and rolled in soft flatbread.</p>
            </div>

            <div className="w-50 h-70 bg-black transition-transform hover:scale-105 active:scale-100 text-center">
              <img src="/src/assets/sandwich2.jpg" alt="oops!!" className="w-full h-50 object-cover"/>
              SandWich <p className="text-xs mt-1 w-50">A quick and easy meal made by placing fillings between slices of bread.</p>
            </div>

          </div>
        </div >
          {/* ------------------------------- scroll 4 ----------------------------- */}
         <div className="h-screen flex flex-col justify-center">

        <div className="flex flex-row justify-between items-center px-10 mt-15">
            {/* left side */}
            <div className="flex-3 rounded-2xl overflow-hidden">
              <img src="/src/assets/pizza.jpg"
                alt="oops!!"
                className=" object-contain h-75 w-full"/>
            </div>
            {/* right side */}
            <div className=" flex flex-col flex-5 items-center p-2">
              <h2 className="text-3xl font-bold mb-4">Italian Pizza</h2>
              <p className="mt-3 text-sm font-extralight text-center">
              Preheat the oven to 475°F (245°C),
              Roll out the pizza dough and spread tomato sauce evenly,
              Top with slices of fresh mozzarella and fresh basil leaves,
              Drizzle with olive oil and season with salt and pepper,
              Bake in the preheated oven for 12-15 minutes or until the crust is golden brown,
              Slice and serve hot.</p>
            </div>
          </div>

          {/* bottom part */}
          <div className=" flex text-black justify-center items-center mt-15 ">
            <div className="bg-white w-full h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Cookie<p className="font-extralight text-sm p-2">It's a delecious cookie with choco chips</p>
          </div>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Home