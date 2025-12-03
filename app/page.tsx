"use client";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import { Footer } from "./components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
