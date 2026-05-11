import Four from '../assets/Four.jpg'

const Fourofour = () => {
  return (
    <div className='relative h-screen flex justify-center items-center overflow-hidden'>
        <div className='absolute z-10 text-white text-6xl font-extrabold text-center
        sm:text-4xl
        md:text-6xl
        lg:text-7xl

        px-4'>Page Not Found
            <h4 className='absolute 
            z-10
             text-white 
            text-sm font-light 
            mt-2 
            mx-35 
        sm:text-2xl
        md:text-3xl
        lg:text-3xl

        px-4'>Oop's  This  page  does  not  exist.</h4>
        </div>
        <img src={Four} alt="404 not found" className=' absolute 
        opacity-20 
        object-bottom 
        backdrop-blur-lg scale-110
         sm:w-[75%]
          md:w-[65%]
          lg:w-[55%]
          max-w-[800px]'/>
    </div>
  )
}

export default Fourofour