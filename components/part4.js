import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Part4() {
  const router = useRouter();

  const pricing = [
    {
      title: "MONTHLY",
      features: [
        "Design and development",
        "Includes hosting",
        "Includes lifetime edits",
        "24/7 support",
      ],
      price: "€30",
      priceSubtext: "per month",
      button: "GET STARTED",
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
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-16 px-4 pb-28 md:pb-60"
      style={{
        background: "var(--color-2)",
        color: "var(--color-4)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <h2
        className="text-3xl md:text-5xl font-bold mb-12"
        style={{ fontFamily: "Antonio, sans-serif", color: "var(--color-4)" }}
      >
        PRICING
      </h2>
      <div className="flex justify-center w-full max-w-md">
        {pricing.map((plan, idx) => (
          <div
            key={idx}
            className={`
              bg-[var(--color-1)] rounded-xl shadow-lg flex flex-col items-center p-8 w-full
              hover:scale-105 transition-transform duration-300
              transition-all duration-700
              ${
                visibleCards[idx]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
            style={{ transitionDelay: `${idx * 350}ms` }}
          >
            <h3
              className="text-xl font-bold mb-6 text-center"
              style={{
                fontFamily: "Antonio, sans-serif",
                color: "var(--color-5)",
              }}
            >
              {plan.title}
            </h3>
            <ul className="mb-6 text-base text-center list-none p-0">
              {plan.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  {feature}
                </li>
              ))}
            </ul>
            <div className="text-2xl font-bold mb-6" style={{ color: "#fff" }}>
              {plan.price}
              <span style={{ fontSize: "14px", marginLeft: "4px" }}>
                {plan.priceSubtext}
              </span>
            </div>
            <button
              className="px-6 py-3 rounded-full font-bold transition w-full md:w-40 hover:opacity-80"
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
