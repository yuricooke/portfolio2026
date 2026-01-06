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

// Different fonts for each letter - they will interchange
const FONTS = [
  "Helvetica, Arial, sans-serif",
  "Georgia, serif",
  "'Courier New', monospace",
  "Verdana, sans-serif",
  "'Times New Roman', serif",
  "Impact, sans-serif",
  "'Trebuchet MS', sans-serif",
  "'Comic Sans MS', cursive",
  "'Arial Black', sans-serif",
  "'Lucida Console', monospace",
];

function AirportPanelLetter({
  targetLetter,
  isActive,
  delay,
  totalLetters,
  letterIndex,
}: {
  targetLetter: string;
  isActive: boolean;
  delay: number;
  totalLetters: number;
  letterIndex: number;
}) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 /-";
  const [currentChar, setCurrentChar] = useState(" ");
  const [currentFontIndex, setCurrentFontIndex] = useState(
    letterIndex % FONTS.length
  );
  const intervalRef = useRef<NodeJS.Timeout>();
  const timeoutRef = useRef<NodeJS.Timeout>();
  const fontChangeIntervalRef = useRef<NodeJS.Timeout>();

  // Change font periodically for each letter
  useEffect(() => {
    // Each letter changes font at different intervals based on its index
    const fontChangeInterval = 2000 + letterIndex * 300; // Stagger font changes

    fontChangeIntervalRef.current = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % FONTS.length);
    }, fontChangeInterval);

    return () => {
      if (fontChangeIntervalRef.current) {
        clearInterval(fontChangeIntervalRef.current);
      }
    };
  }, [letterIndex]);

  useEffect(() => {
    // Clear any existing intervals/timeouts
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!isActive) {
      // Keep showing the target letter when animation stops - never disappear
      const targetIndex = chars.indexOf(targetLetter.toUpperCase());
      if (targetLetter === " ") {
        setCurrentChar(" ");
      } else {
        setCurrentChar(targetIndex !== -1 ? chars[targetIndex] : targetLetter);
      }
      return;
    }

    // Start rolling after delay (cascading effect)
    timeoutRef.current = setTimeout(() => {
      let iterations = 0;
      // All letters should finish around the same time, but start at different times
      const baseIterations = 20;
      const maxIterations = baseIterations + Math.floor(Math.random() * 10);
      const targetIndex = chars.indexOf(targetLetter.toUpperCase());

      intervalRef.current = setInterval(() => {
        iterations++;
        const randomIndex = Math.floor(Math.random() * chars.length);
        setCurrentChar(chars[randomIndex]);

        if (iterations >= maxIterations) {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          if (targetLetter === " ") {
            setCurrentChar(" ");
          } else {
            setCurrentChar(
              targetIndex !== -1 ? chars[targetIndex] : targetLetter
            );
          }
        }
      }, 60);
    }, delay * 100); // 100ms delay between each letter start

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, targetLetter, delay, totalLetters]);

  return (
    <span
      className="inline-block airport-letter"
      style={{ fontFamily: FONTS[currentFontIndex] }}
    >
      {currentChar}
    </span>
  );
}

function TypewriterText() {
  const words = [
    "Frontend",
    "Barcelona",
    "UI/UX",
    "Design",
    "Web Developer",
    "Creativity",
    "Rio de Janeiro",
    "ART",
    "React",
    "Next.js",
    "Tailwind",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Start animation
    setIsAnimating(true);

    // After animation completes (~3.5s), keep word visible for 8 seconds, then move to next
    const timeout = setTimeout(() => {
      setIsAnimating(false);
      // Wait 8 seconds with word formed, then change to next word
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, 3500);
    }, 3500); // Time for all letters to finish forming

    return () => clearTimeout(timeout);
  }, [currentWordIndex, words.length]);

  const currentWord = words[currentWordIndex];
  const letters = currentWord.split("");

  return (
    <span className="inline-flex gap-0.5" style={{ zIndex: 1000 }}>
      {letters.map((letter, index) => (
        <AirportPanelLetter
          key={`${currentWordIndex}-${index}`}
          targetLetter={letter}
          isActive={isAnimating}
          delay={index}
          totalLetters={letters.length}
          letterIndex={index}
        />
      ))}
    </span>
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const mouseMoveTimeoutRef = useRef<NodeJS.Timeout>();

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

        // Hide blob after mouse stops moving (4s desktop, 3s mobile)
        const timeout = isMobile ? 3000 : 4000;
        mouseMoveTimeoutRef.current = setTimeout(() => {
          setIsMouseMoving(false);
        }, timeout);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (sectionRef.current && e.touches.length > 0) {
        const rect = sectionRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        setMousePosition({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        });

        // Show blob when touch moves
        setIsMouseMoving(true);

        // Clear existing timeout
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }

        // Hide blob after touch stops (3 seconds for mobile)
        mouseMoveTimeoutRef.current = setTimeout(() => {
          setIsMouseMoving(false);
        }, 3000);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (sectionRef.current && e.touches.length > 0) {
        const rect = sectionRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        setMousePosition({
          x: touch.clientX - rect.left,
          y: touch.clientY - rect.top,
        });
        // Show blob immediately on touch start
        setIsMouseMoving(true);
        // Clear any existing timeout
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }
        // Set initial timeout to keep blob visible (3 seconds for mobile)
        mouseMoveTimeoutRef.current = setTimeout(() => {
          setIsMouseMoving(false);
        }, 3000);
      }
    };

    const handleTouchEnd = () => {
      // Clear existing timeout
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
      // Keep blob visible on mobile after touch ends (3 seconds)
      // This gives time for the user to see the blob even after quick touch
      mouseMoveTimeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 3000);
    };

    const section = sectionRef.current;
    if (section) {
      // Mouse events
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("mouseleave", () => {
        setIsMouseMoving(false);
        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }
      });

      // Touch events
      section.addEventListener("touchstart", handleTouchStart, {
        passive: true,
      });
      section.addEventListener("touchmove", handleTouchMove, { passive: true });
      section.addEventListener("touchend", handleTouchEnd);
      section.addEventListener("touchcancel", handleTouchEnd);

      return () => {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("mouseleave", () => {
          setIsMouseMoving(false);
        });
        section.removeEventListener("touchstart", handleTouchStart);
        section.removeEventListener("touchmove", handleTouchMove);
        section.removeEventListener("touchend", handleTouchEnd);
        section.removeEventListener("touchcancel", handleTouchEnd);
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
        className="absolute pointer-events-none"
        style={{
          width: isMobile ? "550px" : "1200px",
          height: isMobile ? "550px" : "1200px",
          left: `${blobPosition.x}px`,
          top: `${blobPosition.y}px`,
          transform: "translate(-50%, -50%)",
          willChange: "transform, opacity",
          zIndex: 2,
          opacity: isMouseMoving ? 1 : 0,
          transition: isMouseMoving
            ? "opacity 0.3s ease-out, transform 0.1s linear"
            : isMobile
            ? "opacity 2s ease-out, transform 0.1s linear"
            : "opacity 0.5s ease-out, transform 0.1s linear",
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

          <p
            className="text-gray-400 mb-10 max-w-2xl text-[1rem] md:text-[1.25rem]"
            dangerouslySetInnerHTML={{
              __html:
                "Where pixel-perfect design meets clean code.<br /> Creating digital experiences that not only look stunning but perform flawlessly across every device.",
            }}
          />

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
          <div
            className="mt-20 flex items-center w-full justify-center gap-2 relative"
            style={{ zIndex: 1000 }}
          >
            <TypewriterText />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 lg:bottom-[-10px] w-full flex items-end justify-end pe-6 z-10">
        <Image
          src="/whale-big.png"
          alt="Portfolio Sketches"
          width={300}
          height={300}
          className="object-contain mr-10"
          priority
        />
      </div> */}
    </section>
  );
}
