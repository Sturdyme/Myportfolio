import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'
import { GiSkills, GiWorld } from 'react-icons/gi'
import { BiHome, BiMailSend } from 'react-icons/bi'
import { GoProject } from 'react-icons/go'
import { LuChevronsLeftRightEllipsis } from 'react-icons/lu'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsWhatsapp } from 'react-icons/bs'
import emmy from '../assets/emmy.png'
import { Typewriter } from 'react-simple-typewriter'
import background from '../assets/background.png'
import { FaStudiovinari } from 'react-icons/fa'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Footer from './Footer'
import { FcAbout } from 'react-icons/fc'
import Contact from './Contact'
const Sidebar = () => {
   
  const location = useLocation();
  const userName = localStorage.getItem('portfolio-username') || 'Guest';
  const scrollToAbout = (e) => {
    e.preventDefault()
    const el = document.getElementById('about')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  const scrollToSkills = (e) => {
    e?.preventDefault()
    const sk = document.getElementById('skills')
    if (sk) sk.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToProjects = (e) => {
    e?.preventDefault() 
    const pr = document.getElementById('projects')
    if (pr) pr.scrollIntoView({ behavior: 'smooth', block: 'start'})
  }

  const scrollToContact = (e) => {
    e?.preventDefault()
    const ct = document.getElementById('contact')
    if (ct) ct.scrollIntoView({ behavior: 'smooth', block: 'start'})

  }
   window.scrollTo({ top: 0, behavior: 'smooth' });



  return (
    <section>
      <article  className='flex flex-row'> 
  <div className='w-16 sm:w-20 md:w-28
  space-y-8
    max-sm:space-y-8 
    fixed top-0 left-0
     h-screen z-50 flex 
     flex-col items-center 
     p-4 bg-black bg-gradient-to-l
      from-black via-gray-900 to-blue-900'>
      <div>
  <h2 
    className="text-white tracking-[0.3em] font-extrabold text-base sm:text-lg 
             bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-700 
             bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(59,130,246,0.4)] 
             transition-transform duration-700 hover:scale-110"
    style={{
       writingMode: 'vertical-rl',
        textOrientation: 'upright',
        letterSpacing: '0.15em'
       }}
  >
    STURDYME
  </h2>
</div>

     <ul className='text-1xl mt-5 text-white'>
        <li className='flex gap-1 items-center'> <GiWorld/> EN </li>
        <li className='flex gap-1 items-center'> <GiWorld/> FN</li>
     </ul>

     <ul className='mt-20 cursor-pointer text-white flex flex-col gap-3'>
        <li>
          <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
          className='focus:outline-none'> <BiHome size={30}/> </button> </li>
          <li className='relative group'>
            <button onClick={scrollToAbout} aria-label="Scroll to About" className="focus:outline-none">
              <FcAbout size={30}/>
            </button>
            <span className="absolute left-14 -translate-x-1/2 mt-2 text-sm text-white bg-gray-800 px-2  rounded-md opacity-0 
    group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap"> About</span>
          </li>
   
    
         <li className='relative group'> 
          <button onClick={scrollToSkills} aria-label='Scroll to Skill ' className='focus:outline-none'> <GiSkills size={30} /> </button>
          <span className='absolute left-14 -translate-x-1/2 mt-2 text-sm text-white bg-gray-800 px-2  rounded-md opacity-0
          group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'> Skills</span>
           </li> 
           <li className='relative group'> 
            <button onClick={scrollToProjects} aria-label='Scroll to Skill' className='focus:outline-none'> <GoProject size={30}/> </button>
            <span className='absolute left-16 -translate-x-1/2 mt-2 text-sm text-white bg-gray-800 px-2  rounded-md opacity-0
          group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'> Projects </span>
            </li>

          <li className='relative group'>
             <button onClick={scrollToContact} aria-label='Scroll to contact' className='focus:outline-none'> <BiMailSend size={30} /> </button>
             <span className='absolute left-16 -translate-x-1/2 mt-2 text-sm text-white bg-gray-800 px-2 rounded-md
             opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap'> Contact</span>
          </li>
     </ul>


     <ul className='mt-20 flex flex-col gap-3 cursor-pointer text-white'>
        <li><a href='https://x.com/cash_o_u_t?s=21' 
        target='blank'><BsTwitterX size={25}/> </a></li>
      <li> <a href='https://www.linkedin.com/in/sturdy-me-433aab322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' target='blank'> <BsLinkedin size={25}/></a></li>
        <li> <a href='https://wa.link/dcpgi4'> <BsWhatsapp size={25}/> </a> </li>
        <li> <a> <BsInstagram size={25}/> </a> </li>
        <li><a href='https://github.com/Sturdyme' target='blank'> <BsGithub size={25}/></a></li>
     </ul>
      </div>


{/*Right side div*/}
    <div
  className="flex flex-col flex-1 h-screen bg-cover bg-center ml-16 sm:ml-20 md:ml-28"
  style={{ backgroundImage: `url(${background})` }}
>
  <div className="flex flex-col justify-center h-full px-4 sm:px-6 md:px-12 lg:px-16">
    {/* Text section */}
    <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-6">
      {/* Greeting */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-blue-600 font-bold whitespace-pre-line">
        Hi, <span className='text-blue-400 text-6xl'>{userName} </span>
      </h1>

      {/* Name */}
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-l from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
        I'm Emmanuel,
      </span>

      {/* Nickname */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 max-sm:gap-1">
        <span className="text-2xl  sm:text-3xl md:text-4xl font-bold bg-gradient-to-l from-teal-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
          popularly known as Sturdyme..
        </span>
      
      </div>

      {/* Typewriter Roles */}
      <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-14 min-h-[40px]">
        <span className="text-blue-400 font-extralight text-base sm:text-lg md:text-xl lg:text-2xl">
          <Typewriter
            words={[
              "A Frontend Developer",
              "Backend Developer",
              "Project Manager",
              "Problem Solver",
            ]}
            loop={true}
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 sm:gap-6 mt-10 sm:mt-14 md:mt-20">
        <Link 
          to="/resume"
          className="p-2 sm:p-3 md:p-4 w-28 sm:w-32 md:w-36 bg-blue-900 text-white font-semibold rounded-lg transition-colors duration-500 hover:bg-teal-800 flex items-center justify-center"
        >
          My Resume
        </Link>

        <button
          onClick={() =>
            (window.location = "mailto:emmanuel08135672350@gmail.com")
          }
          className="p-2 sm:p-3 md:p-4 w-28 sm:w-32 md:w-36 bg-blue-900 text-white font-semibold rounded-lg transition-colors duration-500 hover:bg-teal-800"
        >
          Hire Me
        </button>
      </div>
    </div>
         {/* Image + Typewriter column on the right */}
         <div className="flex flex-col items-center">
          
           {/* Typewriter under image */}
           {/* <div className="mt-6 text-center">
             <span className="text-blue-400 font-extralight text-2xl">
               <Typewriter
                 words={['Frontend Developer', 'Backend Developer', 'Project Manager', 'Problem Solver']}
                 loop={true}
                 typeSpeed={80}
                 deleteSpeed={50}
                 delaySpeed={1500}
               />
             </span>
           </div> */}
         </div>
       </div>
     </div>
      </article>
      <Skills/>
      <Projects/>
      <About/>
      <Footer/>
    </section>
    
  )
}

export default Sidebar
