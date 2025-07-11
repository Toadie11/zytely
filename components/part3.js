import React, { useRef, useEffect, useState } from "react";
import { WaveDividerMoreWaves } from "./waveDivider";

export default function Part3() {
  const cards = [
    {
      img: "/part3/responsive.png",
      title: "FULLY RESPONSIVE",
      desc: "Your website will fit beautifully on desktop, tablet, and mobile, delivering a consistent, professional look and smooth performance on every device.",
    },
    {
      img: "/part3/maintenance.png",
      title: "MAINTENANCE",
      desc: "Your website will be fully maintained, and you can request small updates whenever you need them. You won’t have to worry about a thing.",
    },
    {
      img: "/part3/dollar.png",
      title: "START RISK-FREE",
      desc: "We start for free. You'll receive an initial design at no cost. If you like what you see, we continue building your perfect website together.",
    },
  ];

  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        // Fade in cards one by one with delay
        cards.forEach((_, i) => {
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
          background: "var(--color-2)",
          color: "var(--color-4)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl justify-center">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`bg-[var(--color-1)] rounded-xl shadow-lg flex flex-col items-center p-8 w-full md:w-1/3 hover:scale-105 hover:scale-105
                transition-opacity duration-700
                ${visibleCards[idx] ? "opacity-100" : "opacity-0"}
              `}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <img src={card.img} alt="Logo" className="h-20 w-auto mb-6" />
              <h3
                className="text-xl font-bold mb-4 text-center"
                style={{
                  fontFamily: "Antonio, sans-serif",
                  color: "var(--color-5)",
                }}
              >
                {card.title}
              </h3>
              <p className="text-base text-center">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <WaveDividerMoreWaves className="" flip />
    </div>
  );
}
