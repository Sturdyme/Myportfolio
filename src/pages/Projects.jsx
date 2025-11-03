import React, { useState } from 'react'
import Projectsprops from '../component/Projectsprops'
import { BiLeftArrowAlt, BiRightArrowAlt} from 'react-icons/bi'
import screenshot1 from '../assets/screenshot1.png';
import screenshot2 from '../assets/screenshot2.png';
import screenshot3 from '../assets/screenshot3.png';
import screenshot4 from '../assets/screenshot3.png';
import screenshot5 from '../assets/screenshot2.png';
import screenshot6 from '../assets/screenshot1.png';

const Projects = () => {

  const allProjects = [
    { id: 1, title: 'Voyager Flight Booking App', image: screenshot1, description: 'Flight booking app using Firebase.' },
    { id: 2, title: 'YossyVogue Ecom Store', image: screenshot2, description: 'E-commerce platform built with React + Node.js.' },
    { id: 3, title: 'DNK Shopping Store', image: screenshot3, description: 'Dynamic MERN stack store.' },
    { id: 4, title: 'TaskMaster App', image: screenshot4, description: 'Next.js task manager with MongoDB.' },
    { id: 5, title: 'FitLife Tracker', image: screenshot5, description: 'Workout data tracker using Chart.js.' },
    { id: 6, title: 'CryptoDashboard', image: screenshot6, description: 'Real-time cryptocurrency tracker.' },
  ];


  //Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  // Get current projects
  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(allProjects.length / projectsPerPage);

  // Handler
const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1 , totalPages));
const handlePageClick = (num) => setCurrentPage(num);

  return (
    <section
  id="projects"
  className="relative bg-black min-h-screen 
  [background-image:radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.2),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.15),transparent_50%)]
  bg-blend-screen
  px-4 sm:px-6 md:px-10 lg:px-16  xl:px-20
  pt-12 pb-20"
>
  {/* Section Header */}
  <div className="mb-10 text-center">
    <h1 className="text-3xl sm:text-4xl md:text-5xl md:ml-32 max-sm:ml-10 font-extrabold text-white tracking-tight bg-gradient-to-r from-blue-400 via-indigo-500 to-green-400 bg-clip-text text-transparent">
      Featured Projects
    </h1>
    <p className="text-gray-400 
    text-center text-xs 
    sm:text-sm md:text-base md:ml-32 lg:text-lg 
    mt-2 sm:mt-3
    max-sm:ml-14 lg:text-center 
    leading-relaxed">
      A showcase of my latest development works and creative builds.
    </p>
  </div>

  {/* Projects Grid */}
  <div className="max-w-7xl mx-auto">
    <Projectsprops projects={currentProjects} />
  </div>

  {/* Pagination Controls */}
  <div className="flex items-center justify-center gap-3 sm:gap-5 md:ml-32 mt-10 ml-12 flex-wrap px-4">
    {/* Left Arrow */}
    <button
    onClick={handlePrev}
    disabled={currentPage === 1}
      aria-label="Previous Page"
     className={`p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
          hover:from-indigo-600 hover:to-blue-500 shadow-md hover:shadow-lg transform hover:-translate-x-1 
          transition-all duration-500 ease-in-out ${currentPage === 1 ? 'opacity-40 cursor-not-allowed' : ''}`}
    >
      <BiLeftArrowAlt size={24} className="sm:size-6" />
    </button>

    {/* Page Buttons */}
    {[...Array(totalPages)].map((_, index) => (
      <button
        key={index + 1}
        onClick={() => handlePageClick(index + 1 )}
        className="px-4 sm:px-6  py-1.5 sm:py-2 text-base sm:text-lg font-semibold text-white rounded-lg 
        bg-gradient-to-r from-blue-400 to-indigo-500 
        hover:from-indigo-500 hover:to-blue-400 
        hover:scale-110 hover:shadow-lg 
        transition-all duration-500 ease-in-out"
      >
        {index + 1 }
      </button>
    ))}

    {/* Right Arrow */}
    <button
    onClick={handleNext}
    disabled={currentPage === totalPages}
      aria-label="Next Page"
     className={`p-2 sm:p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white 
          hover:from-indigo-600 hover:to-blue-500 shadow-md hover:shadow-lg transform hover:translate-x-1 
          transition-all duration-500 ease-in-out ${currentPage === totalPages ? 'opacity-40 cursor-not-allowed' : ''}`}
    >
      <BiRightArrowAlt size={24} className="sm:size-6" />
    </button>
  </div>
</section>

  )
}

export default Projects
