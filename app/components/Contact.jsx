"use client";

import { useState } from "react";
import { Facebook, Linkedin, Instagram, Github, Mail } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="pt-26 pb-22 ">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1fr_0.95fr] gap-32 items-start">
        {/* LEFT */}
        <div>
          <p className="text-sm uppercase tracking-wider text-purple-300/80 pb-2 ">
            CONTACT US
          </p>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
            Let’s <span className="text-[#c4b5fd]">work together!</span>
          </h2>

          <p className="pt-4 max-w-md text-gray-300">
            I design and code beautifully simple things and I love what I do.
            Just simple like that!
          </p>

          <form onSubmit={handleSubmit} className="mt-14 space-y-10">
            <input
              type="hidden"
              name="subject"
              value="New Portfolio Contact 🚀"
            />
            <input type="hidden" name="from_name" value="Portfolio Website" />

            {[
              { name: "first", label: "First name" },
              { name: "last", label: "Last name" },
              { name: "email", label: "Email address", type: "email" },
              { name: "phone", label: "Phone number" },
            ].map((item) => (
              <input
                key={item.name}
                type={item.type || "text"}
                name={item.name}
                placeholder={item.label}
                required
                className="w-full bg-transparent border-b border-white/25 text-white text-sm focus:outline-none focus:border-purple-400 py-2"
              />
            ))}

            <textarea
              name="message"
              placeholder="Message"
              rows={3}
              required
              className="w-full bg-transparent border-b border-white/25 text-white text-sm focus:outline-none focus:border-purple-400 py-2 resize-none"
            />

            <button
              type="submit"
              className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm hover:scale-105 transition"
            >
              {status === "sending"
                ? "Sending..."
                : status === "success"
                ? "Message Sent ✅"
                : status === "error"
                ? "Failed ❌"
                : "Send Message →"}
            </button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="relative flex flex-col items-center pt-8">
          {/* Availability Text */}
          <div className="text-center max-w-sm">
            <p className="text-gray-300">
              I'm now open to accepting new projects, so don’t hesitate to reach
              out if there's something you'd like to discuss with me. You can
              get in touch anytime, as I'm available 24/7.
            </p>

            <div className="mt-2 space-y-1 text-sm text-gray-400">
              <p>📍 India</p>
              <p>
                📧{" "}
                <a
                  href="mailto:thakurshivam2307@gmail.com"
                  className="hover:text-violet-300 transition"
                >
                  thakurshivam2307@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Avatar */}
          <div className="relative mt-8 hidden md:block">
            {/* Glow */}
            <div className="absolute -inset-6 rounded-full blur-2xl opacity-60 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 animate-pulse" />
            {/* Avatar Images */}
            <div className="group relative w-64 cursor-pointer select-none animate-float">
              <img
                src="/avatar/idle.png"
                alt="Shivam Avatar"
                className="w-full transition-opacity duration-300 group-hover:opacity-0"
              />
              <img
                src="/avatar/wave.png"
                alt="Shivam Waving"
                className="absolute inset-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center gap-2">
            {[
              {
                icon: Facebook,
                link: "https://www.facebook.com/profile.php?id=100055345294360",
              },
              {
                icon: Linkedin,
                link: "https://www.linkedin.com/in/shivam-singh-5a5232280/",
              },
              {
                icon: Instagram,
                link: "https://www.instagram.com/_singh__shivam/",
              },
              { icon: Github, link: "https://github.com/23-shivamsingh" },
              { icon: Mail, link: "mailto:thakurshivam2307@gmail.com" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-violet-500/80 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-50 hover:shadow-[0_0_20px_rgba(167,139,250,0.7)] transition"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
