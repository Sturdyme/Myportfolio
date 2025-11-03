import React, { useEffect, useState } from 'react';
import img1 from '../assets/emmy.png';
import img2 from '../assets/emmy2.png';
import img3 from '../assets/emmy3.png';
import { FaUserGraduate } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { VscCodeReview } from 'react-icons/vsc';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CiCalendar } from 'react-icons/ci';
import { FaLocationPin } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { motion, useAnimation} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));

    }, 10);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

const About = () => {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('experience'); // default tab

  // AOS init once
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [images.length]);
  const controls = useAnimation();
  const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2});

  useEffect(() => {
    if(inView) {
      controls.start({
        x: 0,
        opacity: 1, 
        transition: {type: "spring", stiffness: 100, damping: 10},
      })
    }
  }, [inView, controls])

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-gradient-to-br from-black via-[#0B1120] to-blue-950 text-white px-6 md:px-16"
    >
      {/* decorative orbs */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-blue-700/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-10 right-20 w-[28rem] h-[28rem] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-300" />

      {/* Title + Tabs */}
      <div data-aos="fade-up" data-aos-duration="800" className="relative z-10 text-center mt-5">
        <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-l from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-4 sm:ml-8 md:ml-32 ">
          About Me
        </h1>

        <motion.div
        ref={ref}
        animate={controls}
        initial={{x: -200, opacity: 0}}
         className="flex justify-center gap-4 mt-6 ml-4 sm:ml-8 md:ml-32 max-sm:ml-12 max-sm:gap-2 ">
          <button
            onClick={() => setActiveTab('experience')}
            className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
          >
            Experience
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                : 'border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white'
            }`}
          >
            Education
          </button>
        </motion.div>
      </div>

      {/* EXPERIENCE */}
      {activeTab === 'experience' && (
        <>
      <p
  data-aos="fade-up"
  data-aos-duration="800"
  className="max-w-3xl mt-6 text-gray-300 text-sm sm:text-base md:text-lg  max-sm:ml-12 leading-relaxed ml-4 sm:ml-20 md:ml-32 lg:ml-24"
>
  I'm a <span className="text-blue-400 font-medium ">Full Stack Web Developer</span> passionate about building
  scalable, efficient, and user-focused applications. With a strong foundation in both front-end and back-end
  technologies, I love bridging design and functionality to deliver seamless digital experiences.
</p>



          {/* rotating images */}
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="relative w-72 h-72 md:w-80 md:h-80 mt-10 mb-10 max-sm:ml-16 md:ml-28 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-blue-700/30"
          >
            {images.map((img, i) => (
              <img
              loading='lazy'
                key={i}
                src={img}
                alt={`about-${i}`}
                className={`absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-1000 ease-in-out ${
                  i === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* stats */}
   <motion.div
   ref={ref}
        animate={controls}
        initial={{x: -200, opacity: 0}}
  data-aos="fade-up"
  data-aos-duration="800"
  className="
    w-[90%] sm:w-[85%] md:w-[90%] 
    max-w-md sm:max-w-3xl md:max-w-4xl
    mx-auto
    grid grid-cols-1 sm:grid-cols-3
    gap-6 sm:gap-8 md:gap-12
    mt-6 md:mt-12
    max-sm:ml-24
    bg-gradient-to-r from-blue-900/30 via-indigo-900/30 to-blue-900/30
    backdrop-blur-md rounded-2xl
    px-4 sm:px-6 md:px-10 
    py-6 sm:py-8 md:py-14
    md:ml-20 sm:ml-20 lg:ml-56
    
    border border-blue-800/40
    shadow-lg shadow-blue-900/40
  
  "
>
  <div className="flex flex-col items-center space-y-3 md:space-y-4">
    <FaUserGraduate size={42} className="text-blue-400 md:text-blue-300" />
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
      Years of Experience
    </h3>
    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-300">
      +<Counter end={3} duration={2000} />
    </p>
  </div>

  <div className="flex flex-col items-center space-y-3 md:space-y-4">
    <AiOutlineFundProjectionScreen size={42} className="text-blue-400 md:text-blue-300" />
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
      Completed Projects
    </h3>
    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-300">
      +<Counter end={35} duration={2500} />
    </p>
  </div>

  <div className="flex flex-col items-center space-y-3 md:space-y-4">
    <VscCodeReview size={42} className="text-blue-400 md:text-blue-300" />
    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white text-center">
      Client Reviews
    </h3>
    <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-300">
      +<Counter end={20} duration={2200} />
    </p>
  </div>
</motion.div>

        </>
      )}

      {/* EDUCATION */}
    
   <div className='mb-6 md:ml-24  max-md:ml-20 max-sm:ml-14'> 
    {activeTab === 'education' && (
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    className="
    relative 
    text-center
     max-w-2xl mx-auto max-md:w-96
     mt-12 p-8 rounded-2xl
     bg-gradient-to-br from-blue-900/30
      via-indigo-900/30 to-blue-900/30 
      backdrop-blur-lg border border-blue-800/40 
      shadow-[0_0_30px_rgba(59,130,246,0.25)]
       text-gray-300 
       sm: px-8 sm:py-10
       max-sm:w-80
       max-sm:text-xs
       "
  >

    <div className="space-y-4">
      {/* University Info */}
      <div className="space-y-2">
        <p className="text-2xl font-semibold text-white">University of Ibadan</p>
        <p className="text-lg text-blue-300">Bachelor’s in Computer Science</p>
        <p className="text-sm text-gray-400 italic">Electronics & Communication Engineering</p>
      </div>

      {/* Timeline and Location */}
      <div className="flex justify-center items-center gap-8 text-sm text-gray-400 mt-6">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-blue-400 text-lg" />
          <span className='max-sm:text-xs'>July 2023 – Present</span>
        </div>

        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-blue-400 text-lg" />
          <span className='max-sm:text-xs'>Lagos, Nigeria</span>
        </div>
      </div>
    </div>
     <p
  className="inline-block mt-6 px-4 py-1 text-sm font-medium bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-blue-900/30 backdrop-blur-lg border border-blue-800/40 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.25)] text-gray-300"
>
  In Progress
</p>

<p className='mt-2'> Currently pursuing a Bachelor's degree in Computer Science, specializing in software engineering and data-driven problem-solving</p>

  </div>
)}

 {activeTab === 'education' && (
  <div
    data-aos="fade-up"
    data-aos-duration="800"
    className="relative text-center max-w-2xl mx-auto mt-12 p-8 max-md:w-96 rounded-2xl bg-gradient-to-br
     from-blue-900/30 via-indigo-900/30 to-blue-900/30 backdrop-blur-lg border border-blue-800/40 
     shadow-[0_0_30px_rgba(59,130,246,0.25)] text-gray-300
      sm: px-8 sm:py-10
       max-sm:w-80
         max-sm:px-4 max-sm:py-6
         max-sm:text-xs"
       
  >


    <div className="space-y-4">
      {/* University Info */}
      <div className="space-y-2">
        <p className="text-2xl font-semibold text-white">Polytechnic Of Ibadan </p>
        <p className="text-lg text-blue-300">National Diploma in Banking and Finance</p>
        <p className="text-sm text-gray-400 italic">Business Administration</p>
      </div>

      {/* Timeline and Location */}
      <div className="flex justify-center items-center gap-8 text-sm text-gray-400 mt-6">
        <div className="flex items-center gap-2 ">
          <CiCalendar className="text-blue-400 text-lg" />
          <span className='max-sm:text-xs'>December 2019 – Oct 2022 </span>
        </div>

        <div className="flex items-center gap-2">
          <IoLocationOutline className="text-blue-400 text-lg" />
          <span className='max-sm:text-xs'>Lagos, Nigeria</span>
        </div>
      </div>
    </div>
        <p
  className="inline-block mt-6 px-4 py-1 text-sm font-medium bg-gradient-to-br from-blue-900/30 via-indigo-900/30 to-blue-900/30 backdrop-blur-lg border border-blue-800/40 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.25)] text-gray-300"
>
  Graduated
</p>

<p className='mt-2'> Completed National Diploma in Banking and Finance with the focus on Managment and Development of a monetized organization</p>
  </div>
)}
 </div> 
    </section>
  );
};

export default About;
