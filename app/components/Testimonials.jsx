"use client";

import React from "react";

const testimonials = [
  {
    name: "Ashish Singh",
    role: "Director of AAD TECH O&M",
    image: "/testimonials/Ashish.png",
    message:
      "Shivam is dedicated, reliable, and consistently delivers quality work. His structured approach and attention to detail made collaboration smooth and effective.",
  },
  // {
  //   name: "Dinesh Kabra",
  //   role: "Founder of  RHB’s Desi Zaika",
  //   image: "/testimonials/Dinesh.png",
  //   message:
  //     "Shivam built a modern, well-crafted UI that met our expectations perfectly. His efficient communication and attention to detail ensured a smooth experience.",
  // },

    {
    name: "Monish Bhatkaar",
    role: "Director of AAD TECH O&M",
    image: "/testimonials/Monish.png",
    message:
      "Shivam is dedicated, reliable, and consistently delivers quality work. His structured approach and attention to detail made collaboration smooth and effective.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="pt-26 pb-22 overflow-hidden"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-wider text-purple-300/80">
            Testimonials
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            What people <span className="text-[#c4b5fd]">say about me</span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-sm text-gray-300">
            Feedback from collaborators, mentors, and teammates.
          </p>
        </div>

        {/* Moving Track */}
        <div className="relative">
          <div className="flex gap-8 animate-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={index}
                className="min-w-[340px] max-w-[340px] rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur hover:border-purple-500/40 transition"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  “{item.message}”
                </p>

                <div className="mt-6 flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border border-white/20"
                  />

                  <div>
                    <p className="text-white font-medium">{item.name}</p>
                    <p className="text-gray-400 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
