import React from "react";
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

  return (
    <section
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
            className="bg-[var(--color-2)] rounded-xl shadow-lg flex flex-col items-center p-8 w-full md:w-1/2 hover:scale-105 transition-transform duration-300"
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
