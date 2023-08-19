import profile from '../assets/personal-profile.webp'
import {FaChevronDown} from 'react-icons/fa'

const Hero = () => {
  return (
    <section className=' max-w-6xl mx-auto'>
      <div className='flex flex-wrap items-center justify-center'>
        <div className=''>
          <h2 className='lg:text-5xl text-4xl font-medium lg:mb-8 mb-4 text-teal-500 dark:text-teal-300'>
            <span className='text-3xl'>Hello! My name is</span> <span className='font-bold whitespace-nowrap'>Long Soeng. <span className='wave cursor-help'>👋</span></span>
          </h2>
          <h2 className='text-2xl font-medium sm:mb-8 mb-4 text-teal-500 dark:text-teal-300'>
            A Web Developer <span className='text-gray-600 font-light dark:text-gray-300'>and</span> <span className='whitespace-nowrap'>UX/UI Designer</span>
          </h2>
          <p className='text-xl leading-8 mb-10 text-gray-600 dark:text-gray-300 max-w-[60ch]'>
            I am a second-year student who is passionate about <span className='whitespace-nowrap'>web development. </span>
            <p>My goal is to become a full-stack web developer.</p>
          </p>
        </div>
        <div className='relative bg-gradient-to-b from-yellow-200 dark:bg-teal-200 transition-all duration-500 rounded-full w-64 h-64 mx-auto my-4 lg:translate-x-16'>
          <img className='w-full h-full object-cover  scale-125 hover:scale-150 transition-all  duration-500' src={profile} alt="profile" />
        </div>
      </div>
      <div className='flex justify-center text-3xl animate-bounce md:my-32'>
        <FaChevronDown className='fill-teal-600 dark:fill-teal-300' />
      </div>
    </section>
  )
}

export default Hero