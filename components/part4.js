import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Part4() {
  const router = useRouter();

  const pricing = [
    {
      title: "ONCE",
      features: [
        "Design and development",
        "€25/month hosting",
        "€50 per page after 5",
        "Includes 12 months edits",
        "24/7 support",
      ],
      price: "€850",
      priceSubtext: "+ 25/month hosting",
      button: "GET STARTED",
    },
    {
      title: "MONTHLY",
      features: [
        "Design and development",
        "Includes hosting",
        "€50 per page after 5",
        "Includes lifetime edits",
        "24/7 support",
      ],
      price: "€60",
      priceSubtext: "per month",
      button: "GET STARTED",
    },
  ];

  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([false, false]);

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
        background: "var(--color-1)",
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
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl justify-center ">
        {pricing.map((plan, idx) => (
          <div
            key={idx}
            className={`
              bg-[var(--color-2)] rounded-xl shadow-lg flex flex-col items-center p-8 w-full md:w-1/2
              hover:scale-105 transition-transform duration-300
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
