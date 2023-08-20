import {FaMoon, FaSun} from 'react-icons/fa'


const Header = (props) => {
  
  return (
    <nav id='header' className='relative py-8 md:mb-32 flex justify-between items-center'>
      <h2 className='text-xl font-Poppins font-bold cursor-pointer border-b-2 border-b-transparent hover:border-b-teal-400'>
        <a href="/">xxxLONGxxx</a>
      </h2>
      <ul className='flex items-center'>
        <li
          onClick={props.toggleDarkMode}
          className='mr-4 sm:mr-8 text-3xl cursor-pointer relative hover:scale-125 duration-500'
        >
          {
              props.isDark? <FaMoon /> :  <FaSun className=' animate-spin'/>
          }
        </li>
        <li className=' hover:scale-110 active:scale-100 duration-300'>
          <a
            href="https://drive.google.com/file/d/1LKCMBp7CMNExT2v60Rv82fTP42WzRsFZ/view?usp=sharing"
            target='_blank'
            className='btn btn-animated'
          >
            <span className={`${props.isDark? 'dark' : 'light'}`}>Resume</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header