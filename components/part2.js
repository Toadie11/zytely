import React, { useRef, useEffect, useState } from "react";
import WaveDivider from "./waveDivider";

export default function Part2() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="flex flex-col text-center min-h-[40vh] px-4 py-16"
        style={{
          background: "var(--color-1)",
          color: "var(--color-4)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <div
          className={`transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2
            className="text-xl md:text-2xl font-bold mb-8"
            style={{
              fontFamily: "Antonio, sans-serif",
              color: "var(--color-4)",
            }}
          >
            WHAT WE OFFER
          </h2>
          <h3
            className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tighter"
            style={{ fontFamily: "Antonio, sans-serif" }}
          >
            NO SATISFACTION
            <br />
            NO PAYMENT
          </h3>
          <p className="text-base md:text-lg text-center ">
            If you’re not fully satisfied with the website we create, there’s no
            payment required. It’s 100% risk-free for you.
          </p>
        </div>
      </section>
      <WaveDivider className="" />
    </div>
  );
}
