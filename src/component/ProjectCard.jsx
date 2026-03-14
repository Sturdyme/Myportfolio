import React from 'react'
import welcomepic from '../assets/welcomepic.png'
import { BiSolidRightArrowCircle } from 'react-icons/bi'
import { FaChartLine, FaGithub } from 'react-icons/fa'
import { MdOutlineShowChart } from 'react-icons/md'
import { BsStarFill } from 'react-icons/bs'

const ProjectCard = ({ title, description, image, demoLink, techStack, progress}) => {

  return (
   <article className="bg-[#0F172A] border border-blue-900/30 rounded-2xl shadow-xl overflow-hidden 
transition-all duration-500 hover:scale-[1.03] hover:shadow-blue-500/20 hover:border-blue-500/40 
flex flex-col justify-between max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl  mx-auto">
  
  {/* Image Section */}
  <div className="relative">
    <img
      src={image}
      alt={`${title} preview`}
      className="w-full h-48 sm:h-56 md:h-64 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
  </div>

  {/* Content Section */}
  <div className="p-4 sm:p-6 flex flex-col justify-between h-auto">
    <div className="space-y-3">
      {/* Title and Tag */}
      <div>
        <h2 className="text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wide">
          {title}
        </h2>
        <span className="flex gap-1.5 sm:gap-2 items-center text-yellow-600 text-[11px] sm:text-xs mt-1.5">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          Featured
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>

    {/* Tech Stack */}
    <div className="mt-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-white text-sm sm:text-base">Tech Stack</p>
        <span className="text-[10px] sm:text-xs text-blue-400 bg-blue-800 rounded-full px-2 py-1 flex items-center gap-1.5">
          <FaChartLine className="text-blue-400" />
         {progress}
        </span>
      </div>

      <ul className="flex flex-wrap gap-2 text-[10px] sm:text-xs text-blue-400 mt-4">
       {techStack.map((tech, index) => (
        <li key={index}
        className='bg-blue-800 px-2 py-1 sm:px-3 sm:py-1.5 rounded-md'> {tech}</li>
       ))}
       
      </ul>
    </div>

    {/* Buttons */}
    <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
      <a href={demoLink}
      target='_blank'
      rel='noopener noreferrer'> 
      <button className="group w-full sm:w-auto flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-blue-500">
        Live Demo
        <BiSolidRightArrowCircle
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
     </a>

      <button className="group w-full sm:w-auto flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold transition-all duration-300 hover:from-indigo-500 hover:to-blue-500">
        Source Code
        <FaGithub
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  </div>
</article>

  )
}

export default ProjectCard
