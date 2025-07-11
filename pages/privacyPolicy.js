import React from "react";

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen px-4 md:px-32 py-16"
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
        Privacy Policy
      </h1>
      <div className="mb-2 text-sm">Last updated: 30/06/2025</div>
      <p className="mb-6">
        At Zytely Web Studio, we are committed to protecting your privacy. This
        Privacy Policy explains how we collect, use, and protect your personal
        information when you work with us.
      </p>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Information We Collect
      </h2>
      <ul className="mb-6 list-disc list-inside">
        <li>
          Name and contact details (such as email address, phone number, and
          business address)
        </li>
        <li>Project details and preferences you provide</li>
        <li>Payment and billing information</li>
        <li>Any content or assets you share with us to build your website</li>
      </ul>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        How We Use Your Information
      </h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Communicate with you about your project</li>
        <li>Design, build, and deliver your website</li>
        <li>Provide support and maintenance services</li>
        <li>Process payments and manage invoices</li>
        <li>Improve our services</li>
      </ul>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Sharing Your Information
      </h2>
      <p className="mb-6">
        We do not sell or share your personal information with third parties,
        except:
      </p>
      <ul className="mb-6 list-disc list-inside">
        <li>When required by law</li>
        <li>
          With service providers who help us deliver our services (such as
          hosting or payment processors), under strict confidentiality
        </li>
      </ul>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Data Security
      </h2>
      <p className="mb-6">
        We take reasonable measures to protect your personal information against
        unauthorized access, loss, or misuse.
      </p>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Your Rights
      </h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Access, update, or delete your personal information</li>
        <li>Withdraw consent for us to use your information</li>
      </ul>
      <p className="mb-6">
        To exercise these rights, please contact us at{" "}
        <span className="font-bold">devtoadd@hotmail.com</span>.
      </p>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Changes to This Policy
      </h2>
      <p className="mb-6">
        We may update this Privacy Policy from time to time. We will notify you
        of any significant changes by updating the date at the top of this page.
      </p>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Contact Us
      </h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at:
        <br />
        <br />
        <span className="font-bold">Zytely Web Studio</span>
        <br />
        E-mail: <span className="font-bold">devtoadd@hotmail.com</span>
      </p>
    </div>
  );
}
