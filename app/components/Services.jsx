"use client";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive websites with Next.js, React and modern UI patterns.",
      icon: "code",
    },
    {
      title: "UI / UX Design",
      desc: "Design systems, wireframes and pixel-perfect implementations.",
      icon: "design",
    },
    {
      title: "Frontend Performance Optimization",
      desc: "Improve loading speed and user experience through image optimization, smaller bundles, and better Core Web Vitals.",
      icon: "performance",
    },
    {
      title: "Security Audits & Vulnerability Testing",
      desc: "Identify security weaknesses through vulnerability scanning, threat analysis, and best-practice hardening.",
      icon: "security",
    },
  ];

  const Icon = ({ name }) => {
    // small inline SVG icons — simple, no external deps
    switch (name) {
      case "code":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M8 17l-5-5 5-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 7l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 4l-4 16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "design":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle
              cx="12"
              cy="7"
              r="3"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M5 21c3-4 6-6 7-6s4 2 7 6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "performance":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 3a9 9 0 100 18 9 9 0 000-18z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 12l4-2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="12" cy="12" r="1.2" fill="currentColor" />
          </svg>
        );
      case "security":
        return (
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 12l2 2 4-4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <section
      id="services"
      className="pt-26 pb-22 bg-transparent"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-wider text-purple-300/80">
            What I do
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">
            Services I <span className="text-[#c4b5fd]">offer</span>
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-300">
            I create modern, fast, and secure web experiences with a strong
            focus on UI/UX, frontend performance, and best-practice development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="relative group bg-white/3 border border-white/6 rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
              aria-labelledby={`service-${i}`}
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#2b1650] to-[#3b1f6a] flex items-center justify-center text-purple-100 shadow-sm">
                <Icon name={s.icon} />
              </div>

              <div>
                <h3 id={`service-${i}`} className="text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
              </div>

              <div className="mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-medium mt-3"
                >
                  <span className="text-purple-300">Talk about a project</span>
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
