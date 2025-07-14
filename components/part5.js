import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Part5() {
  const router = useRouter();

  const pricing = [
    {
      title: "FREE",
      subtitle: "Portfolio Project Offer",
      description:
        "I'm building my portfolio and would love to help you with your website for free. No hidden costs, no strings attached—just a great site and a chance for me to showcase my work.",
      highlights: [
        "Custom design & development",
        "No payment required",
        "Showcase your business online",
        "Limited time offer",
      ],
      button: "GET STARTED",
      note: "You get a professional website, I get a portfolio project. Win-win!",
    },
  ];

  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([false]);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        pricing.forEach((_, i) => {
          setTimeout(() => {
            setVisibleCards((prev) => {
              const updated = [...prev];
              updated[i] = true;
              return updated;
            });
          }, i * 350);
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-16 px-4 pb-28 md:pb-60"
      style={{
        background: "var(--color-1)",
        color: "var(--color-4)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <h2
        className="text-3xl md:text-5xl font-bold mb-12"
        style={{ fontFamily: "Antonio, sans-serif", color: "var(--color-4)" }}
      >
        SPECIAL OFFER
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
        {pricing.map((plan, idx) => (
          <div
            key={idx}
            className={`
              bg-[var(--color-2)] rounded-2xl shadow-2xl flex flex-col items-center p-10 w-full
              transition-all duration-700
              ${
                visibleCards[idx]
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-[120vw]"
              }
            `}
            style={{ transitionDelay: `${idx * 350}ms` }}
          >
            <h3
              className="text-2xl md:text-4xl font-bold mb-2 text-center"
              style={{
                fontFamily: "Antonio, sans-serif",
                color: "var(--color-5)",
              }}
            >
              {plan.title}
            </h3>
            <div className="text-lg md:text-xl font-semibold mb-4 text-center">
              {plan.subtitle}
            </div>
            <p className="mb-6 text-base text-center">{plan.description}</p>
            <ul className="mb-6 text-base text-left list-disc list-inside">
              {plan.highlights.map((feature, i) => (
                <li key={i} className="mb-1">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mb-6 italic text-center text-[var(--color-5)]">
              {plan.note}
            </div>
            <button
              className="px-8 py-3 rounded-full font-bold transition w-full md:w-48 hover:opacity-80"
              style={{
                background: "var(--color-5)",
                color: "black",
                fontFamily: "Antonio, sans-serif",
                letterSpacing: "1px",
              }}
              onClick={() => router.push("/contact")}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
