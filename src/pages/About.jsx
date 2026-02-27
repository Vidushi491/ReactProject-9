import { useEffect } from 'react'

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen ">
      {/* ---for mobile view--- */}
      <div className="md:hidden">

      </div>
      {/* ---for laptop view--- */}
      <div className="hidden md:flex flex-col">
        <h1 className='text-4xl font-bold text-center p-4'>About Us</h1>

      </div>
    </div>
  )
}

export default About