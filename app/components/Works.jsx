"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Dr. Appointment System",
    tech: "Next.js • Tailwind CSS • NeonDB • Node.js • Clerk",
    image: "/works/VaidyaMeet.png",
    link: "https://vaidyameet.vercel.app/",
  },
  {
    title: "Ai Resume Builder",
    tech: "MongoDb • Express.js • React.js • Node.js • OpenAI API",
    image: "/works/Ai_resume.jpeg",
    link: "https://ai-resume-builder-ecru-alpha.vercel.app/",
  },
  {
    title: "Tic-Tac-Toe Game",
    tech: "Html • CSS • JavaScript",
    image: "/works/Game.png",
    link: "https://23-shivamsingh.github.io/PRODIGY_WD_03/",
  },
  {
    title: "Weather App",
    tech: "Html • CSS • JavaScript • OpenWeather API",
    image: "/works/Weather.png",
    link: "https://23-shivamsingh.github.io/Weather/",
  },
  {
    title: "Currency Converter",
    tech: "Html • CSS • JavaScript",
    image: "/works/Currency_Converter.png",
    link: "https://23-shivamsingh.github.io/Currency_Converter/",
  },
  {
    title: "Todo List App",
    tech: "Html • CSS • JavaScript",
    image: "/works/Todo.png",
    link: "https://23-shivamsingh.github.io/TODO_APP/",
  },
];

export default function Works() {
  return (
    <section id="works" className="pt-26 pb-22">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-purple-300/80">
            Recent Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            Take a look at my <br />
            <span className="text-[#c4b5fd]">recent Design Ventures</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const offset =
              index % 3 === 1
                ? "lg:translate-y-12"
                : index % 3 === 2
                ? "lg:-translate-y-8"
                : "";

            return (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block ${offset}`}
              >
                <div className="relative rounded-2xl bg-black/30 border border-white/10 backdrop-blur-lg overflow-hidden">
                  <div className="relative h-64 w-full flex items-center justify-center bg-black/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-md shadow-pink-500/40 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-1">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-white/60">{project.tech}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
