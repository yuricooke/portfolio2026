"use client";

import { ArrowDown, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

function Title() {
  return (
    <h1 aria-label="Frontend and Designer" className="hero-title">
      <span className="hero-char-dark text-gray-700">FRONT</span>
      <span className="hero-char-light text-gray-400">ÆND</span>
      <span className="hero-char-dark text-gray-700">ESIGN</span>
    </h1>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const mouseMoveTimeoutRef = useRef<NodeJS.Timeout>();

  // Initialize blob position on mount
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setBlobPosition({
        x: rect.width / 2,
        y: rect.height / 2,
      });
    }
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        // Show blob when mouse moves
        setIsMouseMoving(true);

        // Clear existing timeout
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }

        // Hide blob after mouse stops moving for 500ms
        mouseMoveTimeoutRef.current = setTimeout(() => {
          setIsMouseMoving(false);
        }, 500);
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", () => {
        setIsMouseMoving(false);
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }
      });

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", () => {
          setIsMouseMoving(false);
        });
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }
      };
    }
  }, []);

  // Smooth blob following animation
  useEffect(() => {
    const animate = () => {
      setBlobPosition((prev) => {
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        // Smoother following with easing
        const speed = isMouseMoving ? 0.12 : 0.05;
        const newX = prev.x + dx * speed;
        const newY = prev.y + dy * speed;

        return {
          x: newX,
          y: newY,
        };
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Always animate for smooth transitions
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMouseMoving]);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex justify-center bg-white px-6 relative overflow-hidden"
    >
      {/* Animated Blob with effects */}
      <div
        ref={blobRef}
        className="absolute pointer-events-none transition-opacity duration-700 ease-out"
        style={{
          width: "400px",
          height: "400px",
          left: `${blobPosition.x}px`,
          top: `${blobPosition.y}px`,
          transform: "translate(-50%, -50%)",
          willChange: "transform, opacity",
          zIndex: 2,
          opacity: isMouseMoving ? 1 : 0,
          transition:
            "opacity 1.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.1s linear",
        }}
      >
        <div className="blob-container">
          <div className="blob-window" />
        </div>
      </div>
      <div className="max-w-6xl w-full pt-[8rem] relative z-10">
        <div className="text-left flex flex-col">
          {/* Title: FRONTÆNDESIGN */}

          <div className="mb-8">
            <Title />
          </div>

          <p className="text-gray-400 mb-10 max-w-2xl text-[1.25rem]">
            Where pixel-perfect design meets clean code. I create digital
            experiences that not only look stunning but perform flawlessly
            across every device.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button
              type="button"
              onClick={scrollToProjects}
              className="bg-gray-800 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition-all hover:shadow-lg hover:scale-105"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="border-2 bg-white border-gray-400 text-gray-600  px-8 py-3 rounded-full hover:bg-gray-200 hover:scale-105 transition-all"
            >
              Get in Touch
            </a>
          </div>
          <button
            type="button"
            onClick={scrollToProjects}
            className=" mt-20 flex items-center w-full justify-center gap-2 text-gray-500"
            aria-label="Scroll down"
          >
            <p className="text-gray-500">DIVE IN</p>
          </button>
        </div>
      </div>

      <div className="absolute bottom-[-10px] w-full flex items-center justify-center z-100">
        <Image
          src="/whale.png"
          alt="Portfolio Sketches"
          width={800}
          height={400}
          className="object-contain ml-10 opacity-80"
          priority
        />
      </div>
    </section>
  );
}
