import React, { useState } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import emailjs from "emailjs-com";
const Footer = () => {
  const [email, setEmail] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    if(!email) {
      alert("Please enter your email before sending");
      return;
    }

    emailjs.send(
   "service_wr08jyc",
   "template_2trfgoj",
   {user_email: email},
   "w2WgNaVwkOWJwgh9_"
    )
    .then(() => {
      alert("Email sent successfully!");
      setEmail("");

    })
    .catch((error) => console.log("Failed to send email:", error));
  }
  return (
   <div>
  <section
    id="contact"
    className="bg-gradient-to-r from-gray-900 via-blue-950 to-black text-white py-10 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24"
  >
    {/* ===== Title & Socials ===== */}
    <div className="text-center mb-10">
      <h1 className="text-3xl sm:text-4xl md:text-5xl md:ml-32 max-sm:ml-10 font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
        Let’s Connect
      </h1>

      {/* Social Icons */}
      <div className="flex justify-center flex-wrap gap-5 max-sm:ml-10 md:ml-32 sm:gap-6 mt-6 text-2xl sm:text-3xl">
        <a
          href="#"
          className="hover:text-pink-500 transition-transform duration-300 hover:scale-125"
        >
          <FaInstagram />
        </a>
        <a
          href="#"
          className="hover:text-blue-600 transition-transform duration-300 hover:scale-125"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="hover:text-gray-300 transition-transform duration-300 hover:scale-125"
        >
          <FaXTwitter />
        </a>
        <a
          href="#"
          className="hover:text-green-500 transition-transform duration-300 hover:scale-125"
        >
          <FaWhatsapp />
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition-transform duration-300 hover:scale-125"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* ===== Footer Content ===== */}
    <div className="text-center max-sm:ml-10 md:ml-32 mb-6 sm:mb-8">
      <p className="text-base sm:text-lg md:text-xl font-medium text-gray-300">
        Sturdyme{" "}
        <i className="fa-solid fa-star text-yellow-400 mx-1"></i> Web Designer
      </p>
    </div>

    {/* ===== Contact Prompt ===== */}
    <div className="mb-6 max-sm:ml-12 md:ml-32 text-center">
      <p className="text-sm sm:text-base md:text-lg italic text-gray-300">
        Drop in your email ID and I will get back to you.
      </p>
    </div>

    {/* ===== Email Input Section ===== */}
    <div className="flex flex-col max-sm:ml-14 md:ml-16 sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-10 px-2">
      <h4 className="text-base sm:text-lg font-semibold text-blue-400">
        Contact Me:
      </h4>
      <div className="flex w-full sm:w-auto justify-center">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="px-3 sm:px-4 py-2 rounded-l-lg outline-none text-gray-800 w-[80%] sm:w-64 md:w-80 focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={sendEmail}
          id="subscribe-btn"
          className="px-4 sm:px-5 py-2 rounded-r-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 font-semibold transition-all duration-500 hover:scale-105"
        >
          Send
        </button>
      </div>
    </div>

    {/* ===== Copyright ===== */}
    <h5 className="text-center text-xs max-sm:ml-12 md:ml-32 sm:text-sm md:text-base text-gray-400">
      &copy; 2026{" "}
      <span className="text-blue-400 font-semibold">
        Omowaye Emmanuel (Sturdyme)
      </span>
      . All rights reserved.
    </h5>
  </section>
</div>

  )
}

export default Footer
