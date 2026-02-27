import React, { useState, useEffect } from "react";
import background from "../assets/background.png";
import Spinner from "./utilities/Spinner";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const WelcomeIn = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name before submitting.");
      return;
    }

    setLoading(true);

    localStorage.setItem("portfolio-username", name);

    // Better UX (shorter delay)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setLoading(false);
    navigate("/home");
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center
      bg-gradient-to-br from-indigo-900 via-purple-900 to-black
      relative overflow-hidden"
    >
      {/* Optional background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${background})` }}
      />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">

        {/* Heading */}
        <div data-aos="fade-down">
          <h1
            className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
            bg-clip-text text-transparent
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold leading-snug"
          >
            🚀 Welcome to my portfolio
          </h1>

          <p className="mt-4 text-gray-300 text-lg sm:text-xl">
            I’m <span className="font-semibold text-white">Omowaye Emmanuel</span>,
            crafting modern web experiences as{" "}
            <span className="text-purple-400 font-semibold">Sturdyme</span>.
          </p>
        </div>

        {/* Glass Card */}
        <div
          data-aos="zoom-in"
          className="mt-12 bg-white/10 backdrop-blur-xl
          border border-white/20
          p-8 rounded-2xl shadow-2xl"
        >
          <label className="flex flex-col gap-3 text-left">
            <span className="text-gray-200 text-lg">
              Enter your name:
            </span>

            <input
              type="text"
              placeholder="Your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full h-12 rounded-lg px-4
              bg-white/20 text-white placeholder-gray-300
              border border-white/30
              focus:outline-none focus:ring-2 focus:ring-purple-500
              transition-all duration-300"
            />
          </label>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="mt-6 w-full h-12 rounded-lg
            bg-gradient-to-r from-purple-600 to-pink-600
            hover:scale-105 hover:shadow-xl
            transition-all duration-300
            text-white font-semibold
            flex items-center justify-center"
          >
            {loading ? <Spinner /> : "Enter Portfolio"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WelcomeIn;