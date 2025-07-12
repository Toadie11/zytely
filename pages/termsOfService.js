import React from "react";

export default function TermsOfService() {
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
        Terms of Service
      </h1>
      <div className="mb-2 text-sm">Last updated: 30/06/2025</div>
      <p className="mb-6">
        Welcome to Zytely! By working with us or using our services, you agree
        to the following terms and conditions. Please read them carefully.
      </p>
      <ol className="mb-6 list-decimal list-inside space-y-4">
        <li>
          <strong>Services</strong>
          <br />
          We provide custom website design and development services, as well as
          related services such as maintenance, hosting, and small updates as
          agreed upon.
        </li>
        <li>
          <strong>Payment Terms</strong>
          <br />
          Payment terms and pricing are outlined in your proposal or contract.
          <br />
          Payments must be made on time as agreed.
          <br />
          If applicable, hosting and maintenance fees are billed monthly or
          annually.
          <br />
          Additional pages, features, or major changes may incur extra charges.
        </li>
        <li>
          <strong>Project Timeline</strong>
          <br />
          We will provide an estimated timeline for your project. This may
          change based on feedback, revisions, or delays in providing necessary
          materials (such as text, images, or branding assets).
        </li>
        <li>
          <strong>Client Responsibilities</strong>
          <br />
          You agree to provide all required content, feedback, and approvals in
          a timely manner to avoid delays in the project.
        </li>
        <li>
          <strong>Revisions and Edits</strong>
          <br />
          We include a reasonable number of revisions as part of our service.
          Significant changes or additional requests beyond the agreed scope may
          require additional payment.
        </li>
        <li>
          <strong>Ownership and Rights</strong>
          <br />
          Once full payment is received, you own the final website design and
          content we created for you.
          <br />
          We reserve the right to display the completed work in our portfolio
          and marketing materials unless you request otherwise in writing.
        </li>
        <li>
          <strong>Maintenance and Support</strong>
          <br />
          If included, maintenance covers small updates and technical support as
          outlined in your plan. Major design or structural changes are not
          included and will be quoted separately.
        </li>
        <li>
          <strong>Termination</strong>
          <br />
          Either party may terminate the agreement in writing. Fees for work
          completed up to the termination date remain payable.
        </li>
        <li>
          <strong>Liability</strong>
          <br />
          We are not liable for any indirect, incidental, or consequential
          damages resulting from the use or inability to use your website. We do
          not guarantee uninterrupted or error-free performance but will work to
          resolve issues as quickly as possible.
        </li>
        <li>
          <strong>Changes to Terms</strong>
          <br />
          We may update these Terms of Service from time to time. Changes will
          be posted on our website with the updated date.
        </li>
        <li>
          <strong>Governing Law</strong>
          <br />
          These terms are governed by the laws of [Your Country/State], and any
          disputes will be resolved in the appropriate courts of that
          jurisdiction.
        </li>
      </ol>
      <h2
        className="text-xl font-bold mb-2"
        style={{ fontFamily: "Antonio, sans-serif" }}
      >
        Contact Us
      </h2>
      <p>
        If you have any questions about these terms, please contact us at:
        <br />
        <br />
        <span className="font-bold">Zytely Web Studio</span>
        <br />
        E-mail: <span className="font-bold">contact@zytely.com</span>
      </p>
    </div>
  );
}
