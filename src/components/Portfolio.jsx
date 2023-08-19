import React from 'react'

const Portfolio = () => {
  return (
    <section className='max-w-6xl pb-20 mx-auto overflow-x-hidden'>
          <div className='text-center'>
            <h2 className='inline-block mx-auto text-4xl font-medium my-10 border-b-8 border-b-teal-300'>
              Portfolio
            </h2>
          </div>
          <div className='max-w-[55ch] text-center mx-auto text-2xl'>
            <p className=' text-xl text-gray-600 dark:text-white'>
              <div>The current website that you are scrolling.</div>
              The purpose is to create my personal website and improve my React JS
              and Tailwind CSS skills after learning the basics from YouTube courses.
            </p>
            <h3 className='mt-6 mb-4'>
              Tool : <span className='font-medium'>HTML, React JS, Tailwind CSS, Figma</span>
            </h3>
            <h3 className='cursor-pointer text-teal-500 dark:text-teal-300'>
              <span className='underline underline-offset-4 hover:underline-offset-8 duration-300'>
                GitHub CODE
              </span>
            </h3>
          </div>
    </section>
  )
}

export default Portfolio