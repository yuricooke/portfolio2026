"use client";

import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProjectDetail } from "../../components/ProjectDetail";

export default function ProjectPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <ProjectDetail />
      <Footer />
    </div>
  );
}


