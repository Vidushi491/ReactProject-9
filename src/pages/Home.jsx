const Home = () => {
 return (
<div className=''>

                 {/* ..............for mobile............ */}
  <div className="md:hidden">

  </div>


                {/* ..............for Laptop............ */}

  <div className="hidden md:flex flex-col bg-white snap-y snap-mandatory h-screen overflow-y-scroll">
    {/* ------------------------------- scroll 1 ----------------------------- */}
    <div className="snap-start min-h-screen bg-black text-white flex ">
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
    className="w-full h-full object-cover" />
    </div>
    </div>

    {/* ------------------------------- scroll 2 ----------------------------- */}
    <div className=" snap-start min-h-screen text-black flex mt-6">
      {/* left side */}
    <div className="w-3/5 flex flex-col ">
    <h2 className="text-3xl font-bold text-center mt-14">Sweet Moments Diery Here </h2>
    <p className="mt-6 text-center text-sm px-20 font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto rerum labore eius excepturi itaque tempora modi obcaecati iste. Asperiores!</p>
    </div>
    {/* right side */}
    <div className="w-2/5 flex justify-center">
    <img src="/src/assets/cupcake.jpg"
     alt="oops!!" 
    className="w-[50%] h-[50%] object-cover" />
    </div>
    {/* bottom part */}
    <div className="mt-4">
    <div></div>
    <div></div>
    <div></div>
    </div>
    </div>

    {/* ------------------------------- scroll 3 ----------------------------- */}
    <div className=" snap-start min-h-screen text-white bg-black flex">

    </div>

    {/* ------------------------------- scroll 4 ----------------------------- */}

  </div>

</div>
)
}

export default Home