import React from "react";
import { useRouter } from "next/router";
import WaveDivider from "./waveDivider";

export default function Part1() {
  const router = useRouter();

  return (
    <div>
      <section
        className="flex flex-col md:flex-row min-h-screen fade-in"
        style={{
          background: "var(--color-2)",
          color: "var(--color-4)",
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        {/* Left Side */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-12 md:py-0 w-full md:w-1/2">
          <h2
            className="text-xl md:text-2xl font-semibold mb-4"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Fully custom, fully yours.
          </h2>
          <h1
            className="text-4xl md:text-7xl font-bold mb-4 tracking-tighter"
            style={{
              fontFamily: "Antonio, sans-serif",
              color: "var(--color-5)",
            }}
          >
            SMALL BUSINESS
            <br />
            WEBSITE SPECIALIST
          </h1>
          <p
            className="text-base md:text-lg mb-8 text-justify md:mr-40"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            We build custom websites, we create websites that bring your vision
            to life. Whether it’s your design or ours, we build exactly what you
            want and handle all the maintenance for you.
          </p>
          <button
            className="px-6 py-3 rounded-full font-bold transition w-full md:w-60 tracking-tighter hover:opacity-80"
            style={{
              background: "var(--color-5)",
              color: "black",
              fontFamily: "Antonio, sans-serif",
              letterSpacing: "0px",
            }}
            onClick={() => router.push("/contact")}
          >
            GET STARTED
          </button>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-center w-full md:w-1/2 bg-[var(--color-2)] py-8 md:py-0">
          <img
            src="/part1/pc.png"
            alt="Logo"
            className="w-3/4 md:w-4/5 max-w-[600px] h-auto float-slow"
          />
        </div>
      </section>
      <WaveDivider className="" flip />
    </div>
  );
}
