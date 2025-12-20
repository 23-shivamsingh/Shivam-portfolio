"use client";

import { FiDownload, FiMail } from "react-icons/fi";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const socials = [
  {
    icon: FaFacebookF,
    href: "https://www.facebook.com/profile.php?id=100055345294360",
    label: "Facebook",
  },
  {
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/shivam-singh-5a5232280/",
    label: "LinkedIn",
  },
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/_singh__shivam/",
    label: "Instagram",
  },
  {
    icon: FaGithub,
    href: "https://github.com/23-shivamsingh",
    label: "GitHub",
  },
  {
    icon: FiMail,
    href: "mailto:thakurshivam2307@gmail.com",
    label: "Email",
  },
];

export default function HeroActions() {
  return (
    <div className="w-full flex flex-col items-center gap-4 lg:flex-row lg:items-center lg:justify-start">
      {/* Download CV */}
      <a
        href="https://drive.google.com/uc?export=download&id=1gVgWpAdvLOp4PaC2hOJTFIcXADTfZwQ0"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 rounded-full border border-violet-500/80 px-8 py-3 text-sm font-semibold tracking-[0.15em] uppercase text-violet-200 hover:border-violet-400 hover:bg-violet-500/10 hover:shadow-[0_0_25px_rgba(167,139,250,0.6)] transition"
      >
        <span>Download CV</span>
        <FiDownload className="text-lg transition-transform group-hover:translate-y-0.5" />
      </a>
      {/* Social Icons */}
      <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-violet-500/80 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10 hover:text-violet-50 hover:shadow-[0_0_20px_rgba(167,139,250,0.7)] transition"
          >
            <Icon className="text-lg" />
          </a>
        ))}
      </div>
    </div>
  );
}
