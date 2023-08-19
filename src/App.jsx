import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import Portfolio from './components/Portfolio'
import UxUiSection from './components/UxUiSection'
import AboutMe from './components/AboutMe'
import MySkills from './components/MySkills'



function App() {
  const [isDark, setIsDark] = useState(localStorage.getItem('theme') || false)


  function toggleDarkMode() {
    setIsDark(preIsDark => {
      !preIsDark ? localStorage.setItem('theme', true) : localStorage.removeItem('theme');
      return !preIsDark;
    });
  }

  return (
    <main className={` font-Poppins ${isDark ? 'dark' : ''}`}>
      <div className='dark:bg-slate-950 dark:text-white sm:px-10 px-6 min-h-screen'>

        <Header
          toggleDarkMode={toggleDarkMode}
          isDark={isDark}
        />

        <Hero />

        <ProjectsSection />

        <Portfolio />

        <UxUiSection />

        <AboutMe />

        <MySkills />

      </div>

      <Footer />


    </main>
  )
}

export default App



