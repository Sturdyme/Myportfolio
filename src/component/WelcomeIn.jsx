import React, { useState } from 'react'
import background from '../assets/background.png'
import Spinner from './utilities/Spinner';
import { useNavigate } from 'react-router-dom';

const WelcomeIn = () => {
  const [loading, setLoading] = useState  (false);
  const [ name, setName] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  if (name.trim() === '') {
    alert('Please enter your name before submitting');
    return;
  }

  if (name.trim() === '') {
   alert('Please enter your name before submitting.')
  }

  setLoading(true);

  // Save the name to localStorage
  localStorage.setItem('portfolio-username', name);
  await new Promise(resolve => setTimeout(resolve, 8000));
   setLoading(false);
  navigate('/home');

};


  return (
   <section className="h-screen p-4 sm:p-6 md:p-10 lg:p-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
<div className="flex justify-center items-center px-2 sm:px-4 md:px-6 lg:px-10 text-center">
  <h1 className="bg-gradient-to-l from-red-600 to-red-800 bg-clip-text text-transparent
      text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl
      py-4 sm:py-6 md:py-10 lg:py-14 font-serif overflow-hidden
      whitespace-normal leading-relaxed">
🚀 Welcome to my portfolio.🚀  <br/> <span className="font-bold text-blue-700 dark:text-blue-400">
  I’m Omowaye Emmanuel. Crafting modern web experiences as Sturdyme.
</span>

  </h1>
</div>

<div className='lex flex-col-reverse md:flex-row justify-between items-center gap-6 sm:gap-8 md:gap-10 lg:gap-16 mt-6 sm:mt-10 md:mt-14'> 
    <div> 
    <label className='flex flex-col gap-2'> 
        <h1 className='text-white text-2xl font-extralight'>Enter your name:</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="  w-full
    max-w-[350px]
    sm:max-w-[500px]
    md:max-w-[650px]
    h-[40px]
    sm:h-[45px]
    md:h-[50px]
    border border-gray-400
    rounded
    px-3 sm:px-4
    py-2
    text-base md:text-lg
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    transition-all
    duration-300"
        />
    </label>
      <button
        className="p-2 sm:p-3 max-w-[150px] md:p-3 lg:p-4 text-white bg-blue-400 w-full sm:w-36 md:w-40 lg:w-44 rounded-lg mt-3 flex items-center justify-center hover:bg-red-900 transition-colors duration-700 ease-in-out text-sm sm:text-base md:text-lg"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? <Spinner loading="lazy" /> : "Submit"}
      </button>
    
</div>

 
</div>
 
</section>

  )
}

export default WelcomeIn
