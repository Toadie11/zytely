import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const router = useRouter();

  return (
    <header
      className="flex items-center justify-between px-6 py-4 shadow-md slide-in-top"
      style={{
        background: "var(--color-1)",
        color: "var(--color-2)",
        fontFamily: "Montserrat, sans-serif", // Set default font
      }}
    >
      {/* Logo */}
      <div className="flex items-center hover:scale-110 transition-transform duration-300">
        <Link href="/" passHref>
          <img
            src="/logo/logoWhite.png"
            alt="Logo"
            className="h-20 w-auto cursor-pointer"
          />
        </Link>
      </div>

      {/* Right side button */}
      <div className="flex items-center">
        <button
          className="px-4 py-2 rounded-full transition font-bold hover:opacity-80"
          style={{
            background: "var(--color-5)",
            color: "black",
            fontFamily: "Antonio, sans-serif", // Antonio for button
            letterSpacing: "0px",
          }}
          onClick={() => router.push("/contact")}
        >
          GET STARTED
        </button>
      </div>
    </header>
  );
}
