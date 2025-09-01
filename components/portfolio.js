import React, { useRef, useEffect, useState } from "react";
import { WaveDividerMoreWaves } from "./waveDivider";

export default function Portfolio() {
  const portfolioItems = [
    {
      title: "Mr. Beard Waffle",
      description:
        "Premium Belgian waffle business website featuring menu showcase and location information for authentic waffle experiences",
      url: "https://www.mrbeard-waffle.com/",
      image: "/portfolio/mrBeardWebsite.png", // Website screenshot
      tech: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Hostilio",
      description:
        "Professional web hosting service platform with modern design, service packages, and customer portal for reliable hosting solutions",
      url: "https://hostilio.vercel.app/",
      image: "/portfolio/hostilioWebsite.png", // Website screenshot
      tech: ["Next.js", "Vercel", "Tailwind CSS"],
    },
  ];

  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        portfolioItems.forEach((_, i) => {
          setTimeout(() => {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }, i * 350); // 350ms delay between cards
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center py-16 px-4"
        style={{
          background: "var(--color-1)",
          color: "var(--color-4)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <h2
          className="text-3xl md:text-5xl font-bold mb-4 text-center"
          style={{ fontFamily: "Antonio, sans-serif", color: "var(--color-5)" }}
        >
          OUR PORTFOLIO
        </h2>
        <p className="text-lg mb-12 text-center max-w-2xl">
          Take a look at some of the websites we've built for our clients. Each
          project is crafted with attention to detail and tailored to meet
          specific business needs.
        </p>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className={`
                bg-[var(--color-2)] rounded-xl shadow-lg flex flex-col p-6 w-full md:w-1/2 
                hover:scale-105 hover:shadow-2xl transform-gpu will-change-transform
                transition-all duration-500 ease-out
                ${
                  visibleCards[idx]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
              style={{
                transitionDelay: `${idx * 350}ms`,
                transitionDuration: "700ms",
              }}
            >
              <div className="mb-6 flex justify-center overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500 ease-out"
                />
              </div>

              <h3
                className="text-xl font-bold mb-3 text-center"
                style={{
                  fontFamily: "Antonio, sans-serif",
                  color: "var(--color-5)",
                }}
              >
                {item.title}
              </h3>

              <p className="text-sm text-center mb-4 flex-grow">
                {item.description}
              </p>

              <div className="mb-4">
                <div className="flex flex-wrap justify-center gap-2">
                  {/* {item.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2 py-1 text-xs rounded-full"
                      style={{
                        background: "var(--color-1)",
                        color: "var(--color-4)",
                      }}
                    >
                      {tech}
                    </span>
                  ))} */}
                </div>
              </div>

              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full font-bold transition-all duration-300 text-center hover:opacity-80 hover:scale-105 transform-gpu"
                style={{
                  background: "var(--color-5)",
                  color: "black",
                  fontFamily: "Antonio, sans-serif",
                  letterSpacing: "1px",
                  textDecoration: "none",
                }}
              >
                VIEW SITE
              </a>
            </div>
          ))}
        </div>
      </section>
      <WaveDividerMoreWaves className="" />
    </div>
  );
}
