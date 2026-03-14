
import { FaCss3Alt, FaGithub, FaHtml5, FaNodeJs, FaPhp, FaReact } from 'react-icons/fa';
import { SiAmazonapigateway, SiDocker, SiExpress, SiFirebase, SiJavascript, SiLaravel, SiMongodb, SiMysql, SiNextdotjs, SiPhp, SiPostgresql, SiPostman, SiPython, SiTailwindcss, SiTypescript, SiVercel } from 'react-icons/si';
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { VscVscode } from 'react-icons/vsc';
import { FiFigma } from 'react-icons/fi';

const skillSection = [
     { name: "React", icon: <FaReact className="text-sky-500" />, category: "Frontend" },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, category: "Frontend" },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, category: "Frontend" },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, category: "Backend" },

    { name: "PHP", icon: <FaPhp className="text-green-600" />, category: "Backend" },
  
  { name: "FireBase", icon: <SiFirebase className="text-green-500" />, category: "Database" },
  { name: "Postgresql", icon: <SiPostgresql className="text-green-500" />, category: "Database" },
  { name: "MYSQL", icon: <SiMysql className="text-sky-700" />, category: "Database" },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" />, category: "Frontend" },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, category: "Frontend" },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, category: "Frontend" },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 dark:text-white" />, category: "Tools" },
  { name: "Express", icon: <SiExpress className="text-orange-400" />, category: "Backend" },
   { name: "VS Code", icon: <VscVscode className="text-sky-400" />, category: "Tools" },
   { name: "Vercel", icon: <SiVercel className="text-sky-400" />, category: "Tools" },
   { name: "Figma", icon: <FiFigma className="text-sky-400" />, category: "Tools" },
   { name: "Postman", icon: <SiPostman className="text-sky-400" />, category: "Tools" },
  { name: "Laravel", icon: <SiLaravel className="text-sky-400" />, category: "Others" },


];





const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const  [selectedCategory, setSelectedCategory] = useState("All")

const filteredSkills = selectedCategory === "All"
  ? skillSection
   : skillSection.filter(skill => skill.category === selectedCategory);

  return (
   <section
  id="skills"
  className="bg-black min-h-screen overflow-hidden [background-image:radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.2),transparent_50%),radial-gradient(circle_at_50%_80%,rgba(34,197,94,0.15),transparent_50%)] bg-blend-screen"
>
  <article
    ref={ref}
    className="max-w-6xl mx-auto py-12 px-4 sm:px-6 md:px-10 lg:px-16"
    style={{ width: "90%" }} // ensures it stays within 90% when sidebar takes 10%
  >
    {/* Section Header */}
    <h2 className="text-3xl sm:text-4xl ml-[35px] md:text-5xl md:ml-32 max-sm:ml-10 font-extrabold text-center bg-gradient-to-r from-blue-500 via-indigo-500 to-green-500 bg-clip-text text-transparent mb-10">
      Skills & Technologies
    </h2>

    {/* Filter Buttons */}
    <div className="flex flex-wrap justify-center gap-3 mb-12 px-2 max-sm:ml-12 md:ml-32">
      {["All", "Frontend", "Backend", "Database", "Tools", "Others"].map(
        (category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`border px-4 py-2 sm:px-5  sm:py-2  md:px-6 md:py-3  rounded-lg text-sm sm:text-base md:text-lg font-medium capitalize transition-all duration-200 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-md shadow-blue-500/30"
                : "bg-blue-900/50 text-gray-200 border-blue-700 hover:bg-blue-700/70"
            }`}
          >
            {category}
          </button>
        )
      )}
    </div>

    {/* Skills Grid */}
    <div
      className="
      ml-[40px]
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-3
        lg:grid-cols-6 
        md:ml-20
        gap-5 
        sm:gap-6 
        md:gap-4
        max-sm:ml-14
      "
    >
      {filteredSkills.map((skill, index) => (
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          className="
            flex flex-col 
            items-center 
            justify-center 
            p-4 
            sm:p-5 
            md:p-6 
            bg-white/10 
            backdrop-blur-md 
            border 
            border-blue-500/20 
            shadow-md 
            rounded-xl 
            hover:shadow-blue-500/20 
            transition 
            duration-300 
            transform 
            hover:-translate-y-2
          "
        >
          <div className="text-3xl sm:text-4xl md:text-5xl mb-3">
            {skill.icon}
          </div>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg font-semibold text-center">
            {skill.name}
          </p>
        </motion.div>
      ))}
    </div>
  </article>
</section>

  );
}

export default Skills
