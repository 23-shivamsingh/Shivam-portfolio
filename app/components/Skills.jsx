import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-26 pb-22 bg-transparent"
      aria-label="Skills"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-wider text-purple-300/80">
            My Skills
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            Skills & technologies{" "}
            <span className="text-[#c4b5fd]">I work with</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-300 leading-relaxed">
            I specialize in building responsive, user-friendly web applications
            using modern frontend technologies. My focus is on clean UI, smooth
            user experience, performance optimization, and writing maintainable
            code.
          </p>
        </div>

        {/* Skills Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Honeycomb Image */}
          <div className="flex justify-center">
            <img
              src="/skill.png"
              alt="Skills Honeycomb"
              className="w-[340px] sm:w-[420px] md:w-[480px] lg:w-[460px] xl:w-[480px] animate-float"
            />
          </div>

          {/* Right: Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">
              A modern, versatile tech stack
            </h3>

            <p className="mt-5 text-gray-300 leading-relaxed max-w-xl">
              I work across the full development lifecycle — from crafting clean
              and intuitive user interfaces to building scalable backend
              systems. My stack includes modern JavaScript frameworks, backend
              tools, databases, and design utilities that help me deliver fast,
              reliable, and visually polished applications.
            </p>

            <p className="mt-4 text-gray-400 text-sm">
              Always learning, always improving — focused on performance,
              security, and great user experience.
            </p>

            <div className="mt-8">
              <a
                href="#works"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition-transform"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
