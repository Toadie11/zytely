import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    captcha: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const captchaAnswer = "7";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim()) {
      setError("Name is required.");
      return;
    }
    if (!validateEmail(form.email)) {
      setError("Valid email is required.");
      return;
    }
    if (!form.phone.trim()) {
      setError("Phone is required.");
      return;
    }
    if (!form.message.trim()) {
      setError("Message is required.");
      return;
    }
    if (form.captcha.trim() !== captchaAnswer) {
      setError("Captcha answer is incorrect.");
      return;
    }
    setError("");

    // EmailJS integration
    emailjs
      .send(
        "service_er3v6j7", // Replace with your EmailJS service ID
        "template_f5bdxj6", // Replace with your EmailJS template ID
        {
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
        },
        "uy9DpDJpVT8u4l4Gp" // Replace with your EmailJS public key
      )
      .then(
        () => {
          setSuccess("Your message has been sent!");
          setForm({
            name: "",
            email: "",
            phone: "",
            message: "",
            captcha: "",
          });
        },
        () => {
          setError("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div
      className="min-h-screen px-4 md:px-32 py-16 flex flex-col items-center"
      style={{
        background: "var(--color-2)",
        color: "var(--color-4)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <h1
        className="text-3xl md:text-5xl font-bold mb-4"
        style={{ fontFamily: "Antonio, sans-serif", color: "var(--color-5)" }}
      >
        Contact Us
      </h1>
      <p className="mb-8 text-lg text-center max-w-xl">
        Ready to bring your website to life? Contact us today to get started!
      </p>
      <div
        className="bg-[var(--color-1)] rounded-xl shadow-lg p-8 w-full max-w-lg"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <h2
          className="text-xl font-bold mb-6"
          style={{ fontFamily: "Antonio, sans-serif", color: "var(--color-5)" }}
        >
          Message Us
        </h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label>
            Name<span className="text-[var(--color-5)]">*</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-2 rounded mt-1 bg-[var(--color-2)] text-[var(--color-4)] border border-[var(--color-3)]"
              required
              minLength={2}
              maxLength={50}
            />
          </label>
          <label>
            Email<span className="text-[var(--color-5)]">*</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 rounded mt-1 bg-[var(--color-2)] text-[var(--color-4)] border border-[var(--color-3)]"
              required
              maxLength={100}
            />
          </label>
          <label>
            Phone<span className="text-[var(--color-5)]">*</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 rounded mt-1 bg-[var(--color-2)] text-[var(--color-4)] border border-[var(--color-3)]"
              required
              minLength={6}
              maxLength={20}
            />
          </label>
          <label>
            Message<span className="text-[var(--color-5)]">*</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-2 rounded mt-1 bg-[var(--color-2)] text-[var(--color-4)] border border-[var(--color-3)]"
              required
              minLength={10}
              maxLength={1000}
              rows={4}
            />
          </label>
          <label>
            Captcha: What is 3 + 4?
            <span className="text-[var(--color-5)]">*</span>
            <input
              type="text"
              name="captcha"
              value={form.captcha}
              onChange={handleChange}
              className="w-full p-2 rounded mt-1 bg-[var(--color-2)] text-[var(--color-4)] border border-[var(--color-3)]"
              required
              maxLength={2}
            />
          </label>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          {success && <div className="text-green-500 text-sm">{success}</div>}
          <button
            type="submit"
            className="px-6 py-3 rounded-full font-bold transition hover:opacity-80 mt-2"
            style={{
              background: "var(--color-5)",
              color: "black",
              fontFamily: "Antonio, sans-serif",
              letterSpacing: "1px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
