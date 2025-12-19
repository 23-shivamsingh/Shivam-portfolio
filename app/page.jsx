"use client";

import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Image from "next/image";
import SpotifyCard from "./components/SpotifyCard";
import HeroActions from "./components/HeroActions";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      <main
        id="top"
        className="bg-wave min-h-screen text-[#e5ddff] px-4 md:px-10"
      >
        <div className="relative z-10">
          {/* HERO */}
          <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* LEFT CONTENT */}
            <div className="w-full lg:w-1/2 flex flex-col">
              {/* Name */}
              <p className="order-1 text-4xl font-semibold text-white mb-3">
                I am Shivam
              </p>

              {/* Title */}
              <h1 className="order-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                <span className="block text-[#c4b5fd]">
                  Web Developer + UX Designer
                </span>
              </h1>

              {/* Image (mobile only) */}
              <div className="order-3 lg:hidden flex justify-center mb-4">
                <div className="relative w-[220px] aspect-[2/3] rounded-[28px] border border-purple-500/40 bg-gradient-to-b from-purple-900/40 via-black to-black overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.45)] rotate-2">
                  <Image
                    src="/hero.png"
                    alt="Portrait of Shivam"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Spotify Card (MOBILE ONLY – BELOW IMAGE) */}
              <div className="order-4 lg:hidden mb-6">
                <SpotifyCard />
              </div>

              {/* Description */}
              <p className="order-5 text-base sm:text-lg text-white max-w-xl">
                I break down complex user experience problems to create
                integrity focussed solutions that connect billions of people.
              </p>

              {/* Actions (Download CV / Instagram) */}
              <div className="order-6 pt-6">
                <HeroActions />
              </div>

              {/* Stats */}
              <div className="order-7 pt-6">
                <Stats
                  items={[
                    { id: "exp", value: 2, label: "Years of Experience" },
                    {
                      id: "projects",
                      value: 10,
                      label: "Project Completed",
                      showPlus: true,
                    },
                    { id: "clients", value: 4, label: "Happy Clients" },
                    { id: "tech", value: 12, label: "Technologies Mastered" },
                  ]}
                />
              </div>
            </div>

            {/* RIGHT IMAGE (desktop only – UNCHANGED) */}
            <div className="hidden lg:flex w-full lg:w-1/2 flex-col items-center gap-6">
              <div className="relative w-[340px] aspect-[2/3] rounded-[32px] border border-purple-500/40 bg-gradient-to-b from-purple-900/40 via-black to-black overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.45)] rotate-2">
                <Image
                  src="/hero.png"
                  alt="Portrait of Shivam"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="-mt-6 w-full max-w-xl relative">
                <div className="absolute -z-10 inset-0 blur-3xl bg-purple-500/20"></div>
                <SpotifyCard />
              </div>
            </div>
          </section>

          <Services />
          <Works />
          <Skills />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
