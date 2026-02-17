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
          <div className="w-1/2 flex flex-col justify-center p-2">
            <h1 className=" text-5xl font-bold mt-4 px-2 text-center">From Your Kitchen To The World </h1>
            <img src="/src/assets/chefimg.jpg"
              alt="oops!!"
              className="w-[40%] h-[40%] object-top rounded-lg px-2 py-2" />
          </div>
          {/* Right Side */}
          <div className="w-1/2 ">
            <img src="/src/assets/Burger.jpg"
              alt="oops!!"
              className="w-full h-full object-cover mb-10" />
          </div>
        </div>

        {/* ------------------------------- scroll 2 ----------------------------- */}
        <div className="h-screen flex flex-col justify-center">

        <div className="flex flex-row justify-between items-center px-10">
            {/* left side */}
            <div className=" flex flex-col flex-5 items-center p-2">
              <h2 className="text-3xl font-bold ">Italian Tiramisu </h2>
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
          <div className=" flex gap-8 text-black justify-center items-center mt-10 px-10">
            <div className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Cookie<p className="font-extralight text-sm p-2">It's a delecious cookie with choco chips</p></div>
            <div className="bg-white  w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Blueberry<p className="font-extralight text-sm p-2">The shake in purple with garnishing of chocolates</p></div>
            <div className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Mango Lassi<p className="font-extralight text-sm p-2">The little pices of mangos in yellow flavour lassi</p></div>
            <div className="bg-white w-48 h-30 rounded-2xl font-bold text-lg transition-transform hover:scale-105 text-center p-2">Tiramasu<p className="font-extralight text-sm p-2">The Italian dessert with coffee and mascarpone</p></div>
          </div>
        </div>

        {/* ------------------------------- scroll 3 ----------------------------- */}
        <div className="h-screen text-white bg-black flex flex-col justify-center">
          <h1 className="font-bold text-4xl text-center">Try At Your Home </h1>
          <p className="font-light text-sm mt-2 text-center">This are some of our best recipes for you to try at home!</p>
          <div className="flex flex-wrap p-10 divblack ">
            <div className="w-45 h-45 bg-white">Pizza</div>
            <div className="w-45 h-45 bg-white">Coffee</div>
            <div className="w-45 h-45 bg-white">Rolls</div>
            <div className="w-45 h-45 bg-white">IceCream</div>
            <div className="w-45 h-45 bg-white">Noodels</div>
            <div className="w-45 h-45 bg-white">Fries</div>
          </div>
        </div>
          {/* ------------------------------- scroll 4 ----------------------------- */}
  </div>
</div>
  )
}

export default Home