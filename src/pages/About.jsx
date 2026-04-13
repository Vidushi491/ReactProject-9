import { useEffect } from 'react'

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen ">
      {/* ---for mobile view--- */}
      <div className="lg:hidden flex flex-col bg-black text-white min-h-screen">
        {/* scroll  1 */}
        <div className='gap-3 p-6 flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-center'>About Us</h1>
          <p className='text-sm text-gray-300 font-extralight text-center mt-3'>Welcome to our recipe website! We are passionate about sharing delicious and healthy recipes , anyone can make at home. Our goal is to inspire home cooks and food lovers with easy-to-follow instructions and creative ideas.</p>
        </div>
        <div className='flex flex-wrap gap-6 mt-8 items-center justify-center pb-8'>
          <img src="https://i.pinimg.com/1200x/62/4e/44/624e44d95575b3eb69c483c1440f5591.jpg" alt="About Us" className='object-cover h-40 w-40' />
          <img src="https://i.pinimg.com/736x/5f/8f/07/5f8f07afaba47d568590593f78e56138.jpg" alt="About Us" className='object-cover h-40 w-40' />
          <img src="https://i.pinimg.com/736x/73/ac/6a/73ac6a1b16cb636f106853cc89e231ba.jpg" alt="About Us" className='object-cover  h-40 w-40' />
          <img src="https://i.pinimg.com/736x/b8/87/70/b887709748c4ba816d779e638265936f.jpg" alt="About Us" className='object-cover h-40 w-40' />
        </div>
        {/* scroll  2 */}
        <div className='py-8'>
        <h1 className='text-2xl font-bold text-center mt-6 px-4'>We make sure your ideas and creation are delivered properly</h1>
        <div className='flex flex-col mt-8 items-center justify-center p-6'>
          <img src="https://i.pinimg.com/1200x/31/b3/4a/31b34ac37a8cb74f51fd52918c1b3e56.jpg" alt="About Us" className='object-cover items-center h-60 w-60 rounded-lg' />
          <p className='text-sm text-center mt-6 px-4 leading-relaxed text-gray-300'>Our platform provides small business owners with tools and resources to grow their businesses and reach more customers through our online presence and marketing support,Our platform provides small business owners with tools and resources to grow their businesses and reach more customers through our online presence and marketing support.</p>
        </div>
        </div>
        {/* scroll  3 */}
        <div className='flex flex-col justify-center items-center mt-8 p-6'>
          <h1 className='font-semibold text-lg text-center leading-relaxed'>We help business to grow faster and bigger</h1>
          <div className='text-sm font-normal text-center text-gray-300 mt-6 p-4 leading-relaxed'>Our platform provides small business owners with tools and resources to grow their businesses and reach more customers through our online presence and marketing support,Our platform provides small business owners with tools and resources to grow their businesses and reach more customers through our online presence and marketing support,Our platform provides small business owners with tools and resources to grow their businesses and reach more customers through our online presence and marketing support.</div>
        </div>
        <div className='flex flex-wrap gap-5 mt-8 text-black text-center mb-12 items-center justify-center pb-8'>
          <div className='w-40 h-30 bg-white p-2 rounded-lg flex flex-col justify-center'>
            <h1 className='text-sm font-semibold'>Pro Team</h1>
            <p className='text-xs mt-3 font-normal leading-relaxed'>We have a team of experienced professionals who help small businesses grow.</p>
          </div>
          <div className='w-40 h-30 bg-white p-2 rounded-lg flex flex-col justify-center'>
            <h1 className='text-sm font-semibold'>Target Oriented</h1>
            <p className='text-xs mt-3 font-normal leading-relaxed'>We focus on helping small businesses achieve their specific goals and targets.</p>
          </div>
          <div className='w-40 h-30 bg-white p-2 rounded-lg flex flex-col justify-center'>
            <h1 className='text-sm font-semibold'>Success Gurenty</h1>
            <p className='text-xs mt-3 font-normal leading-relaxed'>We guarantee success for small businesses that use our platform.</p>
          </div>
          <div className='w-40 h-30 bg-white p-2 rounded-lg flex flex-col justify-center'>
            <h1 className='text-sm font-semibold'>Customer satis.</h1>
            <p className='text-xs mt-3 font-normal leading-relaxed'>We are committed to providing excellent customer service and support to all our clients.</p>
          </div>
        </div>
        {/* scroll  4 */}

      </div>

      {/* ---for laptop view--- */}
      {/* scroll  1 */}
      <div className="hidden lg:flex flex-col bg-black text-white min-h-screen">
        <div className='gap-2 p-2 flex flex-col items-center justify-center'>
          <h1 className='text-3xl font-bold text-center'>About Us</h1>
          <p className='text-sm text-gray-300 font-extralight text-center px-30 mt-5'>Welcome to our recipe website! We are passionate about sharing delicious and healthy recipes that anyone can make at home. Our goal is to inspire home cooks and food lovers with easy-to-follow instructions and creative ideas.</p>
        </div>
        <div className='flex flex-row gap-10 mt-10 items-center justify-center'>
          <img src="https://i.pinimg.com/1200x/62/4e/44/624e44d95575b3eb69c483c1440f5591.jpg" alt="About Us" className='object-cover h-40 w-30' />
          <img src="https://i.pinimg.com/736x/5f/8f/07/5f8f07afaba47d568590593f78e56138.jpg" alt="About Us" className='object-cover h-30 w-20' />
          <img src="https://i.pinimg.com/736x/73/ac/6a/73ac6a1b16cb636f106853cc89e231ba.jpg" alt="About Us" className='object-cover  h-40 w-30' />
          <img src="https://i.pinimg.com/736x/b8/87/70/b887709748c4ba816d779e638265936f.jpg" alt="About Us" className='object-cover h-30 w-20' />
        </div>
        {/* scroll  2 */}
        <h1 className='text-2xl font-bold text-center mt-12 md:mt-6 lg:mt-29'>We make sure your ideas and creation are delivered properly</h1>
      </div>

    </div>
  )
}

export default About