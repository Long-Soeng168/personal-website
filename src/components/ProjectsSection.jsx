import Project from './Project'
import projectsData from '../data/projectsData'

const ProjectsSection = () => {

  const projectElement = projectsData.map((project) => {
    return <Project {...project} key = {project.id} />
  })

  return (
    <section className='max-w-6xl mb-20 mx-auto overflow-x-hidden'>
          <div className='text-center mb-6'>
            <h2 className='inline-block mx-auto text-4xl font-medium my-16 border-b-8 border-b-teal-300'>
              Projects
            </h2>
          </div>
          {projectElement}
    </section>
  )
}

export default ProjectsSection