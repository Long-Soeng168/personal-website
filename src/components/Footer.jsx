import { FaTwitter, FaLinkedin, FaTelegram, FaGithub, FaChevronUp } from 'react-icons/fa'
import { Link } from 'react-scroll'


const Footer = () => {
  return (
    <footer className='pt-52 dark:bg-slate-950'>
      <h3 className='text-2xl text-center text-teal-500 dark:text-white font-medium mb-4'>
        Contact
      </h3>
      <div className='flex justify-center gap-x-10 text-4xl text-slate-600 dark:text-slate-300 py-2 mb-20'>
        <a
          href="https://t.me/longsoeng" target='_blank' className='hover:scale-150  transition-all'>
          <FaTelegram className='hover:fill-teal-500' />
        </a>
        <a href="#" target='_blank' className='hover:scale-150 transition-all'>
          <FaTwitter className='hover:fill-blue-500' />
        </a>
        <a href="" target='_blank' className='hover:scale-150 transition-all'>
          <FaLinkedin className='hover:fill-sky-700' />
        </a>
        <a href="" target='_blank' className='hover:scale-150 transition-all'>
          <FaGithub className='hover:fill-black' />
        </a>
      </div>

        <Link
            className='dark:text-white text-2xl flex items-center justify-center md:justify-end mx-8 gap-6 mb-6 hover:underline cursor-pointer'
            to="header" spy={true} smooth={true} offset={0} duration={999}
          >
            BACK TO TOP <FaChevronUp className='animate-bounce'/>
        </Link>

      <div className='relative bg-slate-900'>

        <h2 className='text-xl w-full p-3 text-white text-center align-middle'>
          Design by Long Soeng
          <div className='text-lg'>❤️‍🔥2023❤️‍🔥</div>
        </h2>

        
      </div>

    </footer>
  )
}

export default Footer