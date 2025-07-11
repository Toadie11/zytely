import "@/styles/globals.css";
import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Footer from "@/components/footer";

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <main>
      <div>
        <Head>
          <title>Zytely - Custom build website</title>
          <link rel="icon" href="/logo/logoWhite.png" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  );
}
