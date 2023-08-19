import { FaChevronRight } from "react-icons/fa"

const AboutMe = () => {
  return (
    <section className="mb-20 flex flex-wrap justify-center gap-x-20 gap-y-10">
      <div className="max-w-[62ch]">
        <h2 className='inline-block text-4xl font-medium mb-10 border-b-4 border-b-teal-300'>
          About Me❤️‍🔥
        </h2>
        <p className="text-lg mb-6 "><p>Hello again! Thanks for scrolling this far.</p>
          My name is <span className="whitespace-nowrap">Long Soeng</span>nd I am a second-year student majoring in Information Technology.💻 </p>
        <p className="text-lg mb-2">I am passionate about web development and UX/UI design. My goal is to become a full-stack web developer who can do Frontend, Backend and UX/UI.</p>
        <a href="#" className="text-lg">Check out my 
          <span className=" text-teal-600 dark:text-teal-300 underline ml-2 hover:ml-4 duration-300">
            Resume or CV <FaChevronRight className="inline text-sm"/>
          </span>
        </a>
      </div>
      <div className="relative flex justify-center">
        <img
          className="w-64 mx-auto rounded-md bg-slate-100 hover:bg-teal-100 shadow-2xl p-4 pb-20"
          src="./assets/myImage.jpg"
          alt=""
        />
        <p className="absolute bottom-6 text-2xl font-Pacifico text-black ">
          Long Soeng
        </p>
      </div>
    </section>
  )
}

export default AboutMe