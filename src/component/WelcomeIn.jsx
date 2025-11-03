import React, { useState } from 'react'
import welcomepic from '../assets/welcomepic.png'
import background from '../assets/background.png'
import Spinner from './utilities/Spinner';
import { useNavigate } from 'react-router-dom';

const WelcomeIn = () => {
  const [loading, setLoading] = useState  (false);
  const [ name, setName] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  if (name.trim() === '') return alert('Please enter your name');
  navigate('/Sidebar', { state: { username: name } });
  e.preventDefault();
  setLoading(true);
  await new Promise(resolve => setTimeout(resolve, 2000));
  setLoading(false);
};


  return (
   <section className="h-screen p-10 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
<div className="flex justify-center gap-5">
  <h1 className="bg-gradient-to-l from-red-600 to-red-800 bg-clip-text text-transparent text-3xl  py-14 font-serif overflow-hidden text-center whitespace-nowrap animate-typing">
🚀 Welcome to my portfolio.🚀  <br/> <span className="bg-gradient-to-l from-blue-400 to-blue-600 bg-clip-text text-transparent">
  I’m Omowaye Emmanuel. Crafting modern web experiences as Sturdyme.
</span>

  </h1>
</div>

<div className='flex justify-between items-center p-16'> 
    <div> 
    <label className='flex flex-col gap-2'> 
        <h1 className='text-white text-2xl font-extralight'>Enter your name:</h1>
        <input type='text' 
        placeholder='Enter your name'
        value={name}
        onChange={(e) => setName(e.target.value)}
         className="w-[600px] h-[50px] border border-gray-400 rounded px-4 py-1"/>
    </label>
      <button
        className='p-3 text-white bg-blue-400 w-36 rounded-lg mt-2 flex items-center justify-center hover:bg-red-900 transition-colors duration-1000 ease-in-out'
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? <Spinner /> : "submit"}
      </button>
    
</div>

 <> 
    <img src={welcomepic}
    className='w-80 h-80 rounded-lg hover:animate-shake'/>
    </>
</div>
 
</section>

  )
}

export default WelcomeIn
