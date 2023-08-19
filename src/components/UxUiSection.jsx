import uiProjectsData from "../data/uiProjectsData"

const UxUiSection = () => {

  const uiProjectsElement = uiProjectsData.map(uiProjectData => {
    return (
      <UiProject {...uiProjectData} key={uiProjectData.id}/>
    )
  })

  return (
    <section className="mb-32">
      <h2 className=" text-center mt-32 mb-14">
        <span className="text-3xl font-medium border-b-8 border-b-teal-300">UX/UI Projects</span>
        <p className="my-10 text-yellow-500 text-lg">Click image or Text below to view!</p>
      </h2>
      <section className="flex flex-row flex-wrap items-start justify-center gap-14">
        {uiProjectsElement}

      </section>
    </section>
  )
}

export default UxUiSection


function UiProject(props) {
  return (
    <a href={props.link} target="_blank" className=" flex flex-col items-center justify-center hover:scale-125 active:scale-100 duration-300">
      <img
        className="h-40 border border-black mb-2"
        src={`./assets/${props.img}`}
        alt=""
      />
      <span className='cursor-pointer text-teal-500 dark:text-teal-300 underline underline-offset-4 hover:underline-offset-8 duration-300'>
        {props.software}
      </span>
      {
        props.unavailable && <p className="max-w-[15ch] text-center text-red-400 text-[10px] mt-2">Unavailable (Client Privacy)</p>
      }
    </a>
  )
}