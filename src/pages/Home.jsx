const Home = () => {
 return (
<div className=''>

                                          {/* ..............for mobile............ */}
  <div className="md:hidden">

  </div>


                                          {/* ..............for mobile............ */}

  <div className="hidden md:flex bg-white h-screen w-screen">
    <div className="flex bg-black h-[80%] w-screen">
    <div className="w-[60%]">
    <h1 className="text-white text-6xl font-bold mt-10 px-15 text-center">From Your Kitchen To The World </h1>
    <img src="/src/assets/.jpg"></img>
    </div>
    <div className="w-[40%]">
    <img src="/src/assets/burger.jpg" 
    alt="oops!!" 
    className="w-full h-full flex-col items-end justify-end object-cover" />
    </div>
    </div>
  </div>

</div>
)
}

export default Home