import React from 'react'

const Project = (props) => {
  const isEven = props.id % 2;
  return (
    <div className='flex flex-col md:flex-row md:justify-center justify-center items-center gap-10 md:gap-20 mb-20 '>
      <div  className= {`${!isEven ? 'md:order-2' : ''}  sm:hover:scale-125 duration-300`}>
        <img
          className='max-w-xs sm:max-w-md w-full'
          src={props.img}
          alt="project 1"
        />
      </div>
      <div className={` max-w-[45ch]`}>
        <h3 className='text-2xl font-medium text-teal-500 dark:text-teal-300'>
          {props.title}
        </h3>
        <p className='text-xl text-gray-600 dark:text-gray-300 mb-4'>
          {props.description}
        </p>
        <h3 className='text-xl mb-2'>
          Tool : <span className='font-medium'>{props.tool}</span>
        </h3>
        <h3 className='text-xl text-teal-500 dark:text-teal-300 cursor-pointer'>
          <span className='underline underline-offset-4 hover:underline-offset-8 duration-300'>
            <a href={props.viewLive} target='_blank'>View Live</a>
          </span> | <span className='underline underline-offset-4 hover:underline-offset-8 duration-300'>
            <a href={props.github} target='_blank'>GitHub</a>
          </span>  
          {
            props.figma 
            && 
            <span>  |  <span className='underline underline-offset-4 hover:underline-offset-8 duration-300'>
                        <a href={props.figma} target='_blank'>Figma</a>
                      </span>
            </span>
          }
        </h3>
      </div>
    </div>
  )
}

export default Project