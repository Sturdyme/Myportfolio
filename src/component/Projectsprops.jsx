import React from 'react';
import ProjectCard from './ProjectCard'; // if you have a separate card component
import screenshot1 from '../assets/screenshot1.png'
import screenshot2 from '../assets/screenshot2.png'
import screenshot3 from  '../assets/screenshot3.png'
const Projectsprops = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-16">
     <ProjectCard 
     title= "Voyager Flight Booking App"
     description="Flight booking App"
     image={screenshot1}
     demoLink="http://localhost:5173/"
     techStack={["React", "Typescript","Javascript", "Framer", "Tailwind CSS"]}
     progress="Completed"
     />

        <ProjectCard 
     title= "YossyVogue"
     description="Ecommerce store"
     image={screenshot2}
     demoLink="https://ecommercestore-nu-three.vercel.app/"
     techStack={["React", "Typescript", "PHP", "Tailwind CSS", "Javascript", "Rest API"]}
     progress="In progress"
     />

        <ProjectCard 
     title= "Dwell Application Form"
     description="Home-care Job Application form"
     image={screenshot3}
     demoLink="https://application-form-frontend.onrender.com/"
     techStack={["React", "Laravel", "PHP", "Tailwind CSS", "Javascript","Postgresql"]}
     progress="Completed"
     />
     
    </div>
  );
};

export default Projectsprops;
