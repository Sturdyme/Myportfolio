import React from 'react'
import emmy from '../assets/emmy.png'
import { Typewriter } from 'react-simple-typewriter'

const Herosection = () => {
  return (
    <section className='relative flex flex-col items-center justify-center h-screen overflow-hidden bg-gradient-to-br from-black via-[#0B1120] to-blue-950 text-white'>
      {/* Animated gradient orbs (soft motion glow) */}
      <div className='absolute top-10 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl animate-pulse-slow'></div>
      <div className='absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-300'></div>

      {/* Profile image with gradient border */}
      <div className='relative w-72 h-72 flex items-center justify-center group'>
        {/* Rotating border ring */}
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-[3px] animate-spin-slow'></div>

        {/* Inner black circle for image */}
        <div className='relative w-68 h-68 rounded-full bg-black flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] group-hover:scale-105 transition-transform duration-500'>
          <img
            src={emmy}
            alt='profile'
            className='w-64 h-64 rounded-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out'
          />
        </div>
      </div>

      {/* Intro Text */}
      <div className='mt-10 text-center animate-fade-in-up'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'>
          Omowaye Emmanuel
        </h1>
        <p className='text-lg md:text-xl font-light text-gray-300 mt-3'>
          I’m a&nbsp;
          <span className='text-blue-400 font-medium'>
            <Typewriter
              words={[
                'Frontend Developer',
                'Backend Developer',
                'Full Stack Engineer',
                'Project Manager',
                'Problem Solver',
              ]}
              loop
              cursor
              cursorStyle='|'
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-10 animate-bounce'>
        <div className='w-[2px] h-10 bg-gradient-to-b from-blue-400 to-transparent mx-auto rounded-full'></div>
        <p className='text-xs text-gray-400 mt-2 tracking-wider'>Scroll Down</p>
      </div>
    </section>
  )
}

export default Herosection

