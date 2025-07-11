import React from "react";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();

  return (
    <footer
      className="w-full relative overflow-hidden"
      style={{
        background: "var(--color-2)",
        color: "var(--color-4)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 py-12 gap-12 md:gap-0">
        {/* Left Side */}
        <div className="flex flex-col items-start w-full md:w-1/2 md:pl-28">
          <div className="flex items-center mb-4">
            <img
              src="/logo/logoWhite.png"
              alt="Logo"
              className="h-40 w-auto mr-6" // Bigger logo
            />
            <div>
              <div
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "Antonio, sans-serif" }}
              >
                ZYTELY
              </div>
              <div
                className="text-2xl md:text-3xl"
                style={{ fontFamily: "Antonio, sans-serif" }}
              >
                WEB STUDIO
              </div>
            </div>
          </div>
          <div className="mb-6 text-lg md:text-xl md:w-1/2">
            From simple to custom websites, we build solutions that fit your
            business.
          </div>
          <button
            className="px-6 py-3 rounded-full font-bold transition hover:opacity-80"
            style={{
              background: "var(--color-5)",
              color: "black",
              fontFamily: "Antonio, sans-serif",
              letterSpacing: "1px",
            }}
            onClick={() => router.push("/contact")}
          >
            GET STARTED TODAY
          </button>
        </div>
        {/* Right Side */}
        <div className="flex flex-col items-start w-full md:w-1/3">
          <div
            className="text-xl font-bold mb-4"
            style={{
              fontFamily: "Antonio, sans-serif",
              color: "var(--color-5)",
            }}
          >
            CONTACT
          </div>
          <div className="flex items-center mb-3">
            <img
              src="/footer/clock.png"
              alt="24/7"
              className="h-6 w-auto mr-2"
            />
            <span>24/7</span>
          </div>
          <div className="flex items-center">
            <img
              src="/footer/mail.png"
              alt="Email"
              className="h-6 w-auto mr-2"
            />
            <span>devtoadd@hotmail.com</span>
          </div>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="relative">
        {/* Wave Mountain in Bottom Right */}
        <div
          className="absolute bottom-0 right-0 z-0 pointer-events-none"
          style={{ width: "320px", height: "80px" }}
        >
          <svg
            viewBox="0 0 320 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              d="M0,80 Q80,0 160,50 Q240,100 320,0 L320,80 Z"
              fill="var(--color-1)"
            />
          </svg>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-16 py-6 border-t border-[var(--color-3)] text-sm relative z-10">
          <div className="w-full md:w-1/2 text-left mb-2 md:mb-0">
            © Copyright 2025 Zytely Web Studio
          </div>
          <div className="w-full md:w-1/2 text-right flex gap-6 justify-end">
            <a
              href="/privacyPolicy"
              className="hover:underline hover:text-[var(--color-5)] transition relative z-10"
            >
              Privacy Policy
            </a>
            <a
              href="/termsOfService"
              className="hover:underline hover:text-[var(--color-5)] transition relative z-10"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
