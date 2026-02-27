import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiSkills, GiWorld } from "react-icons/gi";
import { BiHome, BiMailSend } from "react-icons/bi";
import { GoProject } from "react-icons/go";
import { BsGithub, BsLinkedin, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import { FcAbout } from "react-icons/fc";
import background from "../assets/background.png";
import Pdf from "../assets/certificate.pdf";

import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

const Sidebar = () => {
  const location = useLocation();
  const userName = localStorage.getItem("portfolio-username") || "Guest";

  /* Scroll to top on first load */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section>
      <article className="flex flex-row">

        {/* LEFT SIDEBAR */}
        <div
          className="w-16 sm:w-20 md:w-28 fixed top-0 left-0 h-screen z-50
          flex flex-col items-center p-4 space-y-8
          bg-gradient-to-b from-black via-gray-900 to-blue-950
          animate-slideIn"
        >
          {/* Branding */}
          <h2
            className="text-white font-extrabold text-base sm:text-lg
            bg-gradient-to-b from-blue-400 via-indigo-500 to-blue-700
            bg-clip-text text-transparent
            animate-float animate-glow"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              letterSpacing: "0.15em",
            }}
          >
            STURDYME
          </h2>

          {/* Language */}
          <ul className="text-white mt-6 space-y-2">
            <li className="flex gap-1 items-center">
              <GiWorld /> EN
            </li>
            <li className="flex gap-1 items-center">
              <GiWorld /> FN
            </li>
          </ul>

          {/* Navigation */}
          <ul className="mt-16 flex flex-col gap-5 text-white">
            <li>
              <button
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
                className="transition-transform duration-300 hover:scale-125 hover:text-blue-400"
              >
                <BiHome size={28} />
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollTo("about")}
                className="transition-transform duration-300 hover:scale-125 hover:text-blue-400"
              >
                <FcAbout size={28} />
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollTo("skills")}
                className="transition-transform duration-300 hover:scale-125 hover:text-blue-400"
              >
                <GiSkills size={28} />
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollTo("projects")}
                className="transition-transform duration-300 hover:scale-125 hover:text-blue-400"
              >
                <GoProject size={28} />
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollTo("contact")}
                className="transition-transform duration-300 hover:scale-125 hover:text-blue-400"
              >
                <BiMailSend size={28} />
              </button>
            </li>
          </ul>

          {/* Social Links */}
          <ul className="mt-16 flex flex-col gap-4 text-white">
            <li>
              <a
                href="https://x.com/cash_o_u_t?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <BsTwitterX size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sturdy-me-433aab322"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <BsLinkedin size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.link/dcpgi4"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <BsWhatsapp size={22} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Sturdyme"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <BsGithub size={22} />
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="flex flex-col flex-1 min-h-screen bg-cover bg-center
          ml-16 sm:ml-20 md:ml-28 animate-fadeIn"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="flex flex-col justify-center min-h-screen px-6 md:px-16">

            <h1 className="text-5xl md:text-6xl font-bold text-blue-600 animate-float">
              Hi, <span className="text-blue-400">{userName}</span>
            </h1>

            <h2 className="mt-4 text-4xl md:text-5xl font-extrabold
              bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-700
              bg-clip-text text-transparent">
              I'm Emmanuel
            </h2>

            <p className="mt-2 text-2xl font-semibold text-cyan-400">
              popularly known as Sturdyme..
            </p>

            {/* Typewriter */}
            <div className="mt-8 text-xl text-blue-300">
              <Typewriter
                words={[
                  "A Frontend Developer",
                  "Backend Developer",
                  "Project Manager",
                  "Problem Solver",
                ]}
                loop
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-6 mt-12">
              <Link
                to="/resume"
                className="px-6 py-3 bg-blue-900 text-white rounded-lg
                transition-all duration-500 hover:scale-110 hover:bg-teal-800 hover:shadow-xl"
              >
                My Resume
              </Link>

              <a
                href={Pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-900 text-white rounded-lg
                transition-all duration-500 hover:scale-110 hover:bg-teal-800 hover:shadow-xl"
              >
                Certificate
              </a>

              <button
                onClick={() =>
                  (window.location =
                    "mailto:emmanuel08135672350@gmail.com")
                }
                className="px-6 py-3 bg-blue-900 text-white rounded-lg
                transition-all duration-500 hover:scale-110 hover:bg-teal-800 hover:shadow-xl"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </article>

      <Skills />
      <Projects />
      <About />
      <Footer />
    </section>
  );
};

export default Sidebar;