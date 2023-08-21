import { FaGit, FaGithub, FaJava } from "react-icons/fa"
import {TbBrandCpp} from "react-icons/tb"
import {SiMicrosoftoffice} from "react-icons/si"

const MySkills = () => {
  return (
    <section className="pb-20 mt-40">
      <h2 className="w-full text-center mb-20">
        <span className="text-4xl font-medium border-b-8 border-b-teal-400">My Skills💻</span>
      </h2>
      <div className="flex justify-center items-center mx-auto flex-wrap gap-10 md:gap-16 max-w-5xl">
        <Skill img='html.png' name='HTML' />
        <Skill img='css.png' name='CSS' />
        <Skill img='javascript.png' name='JavaScript' />
        <Skill img='reactJS.png' name='React JS' />
        <Skill img='tailwindCSS.webp' name='TailwindCSS' />
        <Skill img='figma.png' name='Figma' />
        <Skill img='adobeXD.png' name='Adobe XD' />
        <Skill img='canva.png' name='Canva' />
        <Skill img='photoshop.png' name='Photoshop' />
      </div>
      <div className="text-center mt-24">
        <h3 className="text-3xl font-medium mb-4">
          <span className="border-b-8 border-b-teal-400">Other basic skills</span>
        </h3>
        <div className="text-4xl text-gray-700 dark:text-white flex justify-center gap-x-20 gap-y-10 flex-wrap mt-10">
          <FaGit />
          <FaGithub />
          <TbBrandCpp />
          <FaJava />
          <SiMicrosoftoffice />
        </div>
      </div>
    </section>
  )
}

export default MySkills

function Skill(props) {
  return (
<div className="flex flex-col items-center w-36 hover:scale-150 duration-300">
          <img
            className="h-20 p-4 mb-2"
            src={`./assets/${props.img}`}
            alt="my skills"
          />
          <h3 className="text-xl font-medium">{props.name}</h3>
        </div>
  )
}