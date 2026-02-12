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
      className="inline-block airport-letter rainbow-letter"
      style={{
        fontFamily: FONTS[currentFontIndex],
        animationDelay: `${letterIndex * 0.12}s`,
      }}
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

// Simplified particle system - optimized for performance
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  hue: number;
}

function MagicalParticles({
  mousePosition,
  isMouseMoving,
  isMobile,
}: {
  mousePosition: { x: number; y: number };
  isMouseMoving: boolean;
  isMobile: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: mousePosition.x, y: mousePosition.y });
  const prevMouseRef = useRef({ x: mousePosition.x, y: mousePosition.y });
  const animationFrameRef = useRef<number>();

  // Update mouse position
  useEffect(() => {
    prevMouseRef.current = { ...mouseRef.current };
    mouseRef.current = { x: mousePosition.x, y: mousePosition.y };
  }, [mousePosition]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = particlesRef.current;
    const maxParticles = isMobile ? 20 : 25; // More particles on mobile

    const createParticle = (x: number, y: number, vx: number, vy: number) => {
      const hue = (Date.now() * 0.05 + Math.random() * 60) % 360;
      // Create particles with 6 size variations: 1x, 2x, 3x, 4x, 5x, 6x
      const rand = Math.random();
      const sizeMultiplier = 
        rand < 0.17 ? 1 : 
        rand < 0.33 ? 2 : 
        rand < 0.5 ? 3 : 
        rand < 0.67 ? 4 : 
        rand < 0.83 ? 5 : 6;
      const baseSize = Math.random() * 15 + 10;
      
      // Moderate spread on mobile, more on desktop
      const spreadMultiplier = isMobile ? 0.8 : 1.5;
      const randomSpread = isMobile ? 4 : 8;
      
      return {
        x,
        y,
        // Controlled spread: moderate on mobile, more on desktop
        vx: vx * spreadMultiplier + (Math.random() - 0.5) * randomSpread,
        vy: vy * spreadMultiplier + (Math.random() - 0.5) * randomSpread,
        size: baseSize * sizeMultiplier,
        life: 1,
        hue,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isMouseMoving) {
        const dx = mouseRef.current.x - prevMouseRef.current.x;
        const dy = mouseRef.current.y - prevMouseRef.current.y;
        const speed = Math.sqrt(dx * dx + dy * dy);

        // Create particles - more generous on mobile
        if (speed > (isMobile ? 0.5 : 1) && particles.length < maxParticles) {
          const particleCount = isMobile 
            ? Math.min(Math.floor(speed / 6), 3) // More particles on mobile
            : Math.min(Math.floor(speed / 8), 2);
          
          for (let i = 0; i < particleCount; i++) {
            const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * (isMobile ? 1.2 : 2);
            const velocity = isMobile 
              ? speed * 0.2 + Math.random() * 3 // Moderate speed on mobile
              : speed * 0.3 + Math.random() * 5;
            
            // Moderate spread in initial position
            const positionSpread = isMobile ? 35 : 50;
            particles.push(
              createParticle(
                mouseRef.current.x + (Math.random() - 0.5) * positionSpread,
                mouseRef.current.y + (Math.random() - 0.5) * positionSpread,
                Math.cos(angle) * velocity,
                Math.sin(angle) * velocity
              )
            );
          }
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Simple friction
        p.vx *= 0.95;
        p.vy *= 0.95;

        // Smoother, gentler attraction to mouse (only when particle is still visible enough)
        // Stop attracting when life is low to avoid "blink" effect - increased threshold
        if (isMouseMoving && p.life > 0.5) {
          const dx = mouseRef.current.x - p.x;
          const dy = mouseRef.current.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist > 0 && dist < 200) {
            // Much gentler force to avoid color flickering
            const force = 0.03 / (dist * 0.01 + 1);
            p.vx += (dx / dist) * force;
            p.vy += (dy / dist) * force;
          }
        }

        // Update life (much slower decay on mobile for longer, smoother fade)
        p.life -= isMobile ? 0.004 : 0.008;

        // Draw simple particle with glow
        // Only draw if alpha is meaningful to avoid drawing invisible particles
        const alpha = p.life * 0.6;
        if (alpha > 0.05) {
          ctx.save();
          ctx.globalAlpha = alpha;
          ctx.fillStyle = `hsl(${p.hue}, 80%, 65%)`;
          ctx.shadowBlur = p.size * 0.8;
          ctx.shadowColor = `hsl(${p.hue}, 100%, 70%)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        // Remove dead particles (also remove if too transparent to avoid flicker)
        if (p.life <= 0 || alpha <= 0.05 || p.x < -100 || p.x > canvas.width + 100 || p.y < -100 || p.y > canvas.height + 100) {
          particles.splice(i, 1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isMouseMoving, isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{
        zIndex: 2,
        opacity: isMouseMoving ? 1 : 0,
        transition: "opacity 0.5s ease-out",
      }}
    />
  );
}

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [waveShift, setWaveShift] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const blobTargetRef = useRef({ x: 0, y: 0 });
  const blobRafRef = useRef<number>();
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

  // Initialize mouse position on mount
  useEffect(() => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const centered = {
        x: rect.width / 2,
        y: rect.height / 2,
      };
      setMousePosition(centered);
      setBlobPosition(centered);
      blobTargetRef.current = centered;
    }
  }, []);

  useEffect(() => {
    blobTargetRef.current = mousePosition;
  }, [mousePosition]);

  useEffect(() => {
    const animateBlob = () => {
      setBlobPosition((prev) => ({
        x: prev.x + (blobTargetRef.current.x - prev.x) * 0.18,
        y: prev.y + (blobTargetRef.current.y - prev.y) * 0.18,
      }));
      blobRafRef.current = requestAnimationFrame(animateBlob);
    };
    blobRafRef.current = requestAnimationFrame(animateBlob);
    return () => {
      if (blobRafRef.current) {
        cancelAnimationFrame(blobRafRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const top = sectionRef.current.offsetTop;
      const height = sectionRef.current.offsetHeight || 1;
      const localScroll = Math.max(0, Math.min(window.scrollY - top, height));
      // Stronger horizontal drift for clearer parallax between layers.
      setWaveShift(Math.sin(localScroll * 0.009) * 420);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const isTouchingRef = useRef(false);
  const touchIntervalRef = useRef<NodeJS.Timeout>();
  const lastTouchPositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });

        setIsMouseMoving(true);

        if (mouseMoveTimeoutRef.current) {
          clearTimeout(mouseMoveTimeoutRef.current);
        }

        const timeout = isMobile ? 1500 : 300;
        mouseMoveTimeoutRef.current = setTimeout(() => {
          setIsMouseMoving(false);
        }, timeout);
      }
    };

    const createParticlesAtPosition = (x: number, y: number) => {
      setMousePosition({ x, y });
      setIsMouseMoving(true);
      
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
      mouseMoveTimeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 2200);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (sectionRef.current && e.touches.length > 0) {
        const rect = sectionRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        // Store last touch position
        lastTouchPositionRef.current = { x, y };
        
        // Always create particles on touch move
        createParticlesAtPosition(x, y);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (sectionRef.current && e.touches.length > 0) {
        const rect = sectionRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        
        // Store initial touch position
        lastTouchPositionRef.current = { x, y };
        isTouchingRef.current = true;
        
        // Always create particles on touch start
        createParticlesAtPosition(x, y);
        
        // Create particles continuously while touching
        if (touchIntervalRef.current) {
          clearInterval(touchIntervalRef.current);
        }
        touchIntervalRef.current = setInterval(() => {
          if (isTouchingRef.current && sectionRef.current) {
            // Use the last known touch position
            const pos = lastTouchPositionRef.current;
            createParticlesAtPosition(pos.x, pos.y);
          }
        }, 100); // Create particles every 100ms while touching
      }
    };

    const handleTouchEnd = () => {
      isTouchingRef.current = false;
      
      if (touchIntervalRef.current) {
        clearInterval(touchIntervalRef.current);
        touchIntervalRef.current = undefined;
      }
      
      if (mouseMoveTimeoutRef.current) {
        clearTimeout(mouseMoveTimeoutRef.current);
      }
      // Keep particles visible a bit longer after touch ends
      mouseMoveTimeoutRef.current = setTimeout(() => {
        setIsMouseMoving(false);
      }, 2200);
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
        if (touchIntervalRef.current) {
          clearInterval(touchIntervalRef.current);
        }
      };
    }
  }, [isMobile]);

  return (
    <section
      ref={sectionRef}
      className="bg-white relative overflow-hidden"
      style={{ height: "130vh", zIndex: 1 }}
    >
      {/* Blob animado de fundo (rainbow/morph) seguindo o mouse */}
      <div
        className="absolute pointer-events-none"
        style={{
          left: `${blobPosition.x}px`,
          top: `${blobPosition.y}px`,
          width: isMobile ? "520px" : "980px",
          height: isMobile ? "520px" : "980px",
          transform: "translate(-50%, -50%)",
          opacity: isMouseMoving ? 1 : 0,
          zIndex: 1,
          transition: isMobile ? "opacity 0.7s ease-out" : "opacity 0.35s ease-out",
          willChange: "left, top, transform",
        }}
      >
        <div className="blob-container">
          <div className="blob-window" />
        </div>
      </div>

      {/* Conteúdo sticky no topo - fica fixo */}
      <div className="sticky top-0 h-screen flex justify-center items-center px-6" style={{ zIndex: 2 }}>
        <div className="max-w-6xl w-full">
          <div className="text-left flex flex-col fixed top-40" style={{ zIndex: 1 }}>
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
              className="mt-20 flex items-center w-full justify-center gap-2 relative hidden"
            >
              <TypewriterText />
            </div>
          </div>
        </div>
      </div>

      {/* Ondas que sobem como cortinas - cobrem o conteúdo */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ zIndex: 3 }}>
        <div
          className="absolute left-0 w-full"
          style={{
            bottom: 0,
            height: "260px",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 72%, rgba(255,255,255,1) 100%)",
            zIndex: -1,
          }}
        />
        {/* Soft Wave Shapes - 5 camadas orgânicas e suaves como na referência */}
      {/* Camada 5 - Backmost fixa, preenchendo ate o fundo do Hero */}
      <svg
        className="absolute pointer-events-none"
        style={{
          bottom: "0px",
          zIndex: 0,
          height: "360px",
          left: "-160vw",
          width: "420vw",
          transform: `translate3d(${waveShift * 0.25}px, 0, 0)`,
          willChange: "transform",
        }}
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,250 C120,230 190,170 280,150 C360,132 430,165 500,185 C585,208 660,190 740,150 C805,118 875,120 940,158 C995,190 1060,195 1120,170 C1190,140 1270,128 1340,146 C1390,160 1420,170 1440,175 L1440,360 L0,360 Z"
          fill="white"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.08))",
          }}
        />
      </svg>

      {/* Camada 4 - Ondulações médias e suaves */}
      <svg
        className="absolute pointer-events-none"
        style={{
          bottom: "80px",
          zIndex: 2,
          height: "200px",
          left: "-160vw",
          width: "420vw",
          transform: `translate3d(${-waveShift * 0.35}px, 0, 0)`,
          willChange: "transform",
        }}
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,185 C80,150 140,110 210,105 C275,100 320,128 370,138 C430,150 500,128 570,100 C630,78 690,82 745,112 C790,136 840,138 895,122 C960,102 1020,82 1080,85 C1140,88 1190,112 1235,128 C1285,145 1340,150 1440,140 L1440,200 L0,200 Z"
          fill="white"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.08))",
          }}
        />
      </svg>

      {/* Camada 3 - Ondulações mais frequentes mas suaves */}
      <svg
        className="absolute pointer-events-none"
        style={{
          bottom: "40px",
          zIndex: 3,
          height: "180px",
          left: "-160vw",
          width: "420vw",
          transform: `translate3d(${waveShift * 0.45}px, 0, 0)`,
          willChange: "transform",
        }}
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,170 C70,140 125,108 185,102 C245,96 285,120 330,132 C385,146 445,134 505,110 C560,88 615,86 670,108 C710,124 760,128 810,118 C865,102 920,82 975,84 C1030,86 1075,106 1115,120 C1160,136 1210,138 1270,126 C1330,114 1380,116 1440,122 L1440,180 L0,180 Z"
          fill="white"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.08))",
          }}
        />
      </svg>

      {/* Camada 2 - Ondulações frequentes e suaves */}
      <svg
        className="absolute pointer-events-none"
        style={{
          bottom: "20px",
          zIndex: 4,
          height: "170px",
          left: "-160vw",
          width: "420vw",
          transform: `translate3d(${-waveShift * 0.55}px, 0, 0)`,
          willChange: "transform",
        }}
        viewBox="0 0 1440 170"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160 C55,132 105,102 160,96 C215,90 250,112 292,124 C340,138 390,130 445,110 C495,92 545,90 595,108 C635,122 680,126 725,118 C775,106 825,90 875,92 C925,94 965,110 1000,122 C1040,136 1085,136 1135,124 C1185,112 1230,112 1280,120 C1330,128 1380,128 1440,124 L1440,170 L0,170 Z"
          fill="white"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.08))",
          }}
        />
      </svg>

      {/* Camada 1 - Frontmost, ondulações mais frequentes mas sempre suaves */}
      <svg
        className="absolute pointer-events-none"
        style={{
          bottom: "0px",
          zIndex: 5,
          height: "160px",
          left: "-160vw",
          width: "420vw",
          transform: `translate3d(${waveShift * 0.7}px, 0, 0)`,
          willChange: "transform",
        }}
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,150 C45,126 88,98 136,92 C184,86 214,104 250,116 C292,130 336,124 382,106 C426,90 472,88 516,104 C552,118 592,122 632,116 C676,104 720,90 764,92 C808,94 842,108 874,118 C910,130 950,132 994,122 C1038,112 1076,112 1116,120 C1160,128 1200,128 1242,120 C1288,112 1330,112 1370,118 C1400,122 1420,124 1440,126 L1440,160 L0,160 Z"
          fill="white"
          style={{
            filter: "drop-shadow(0 6px 12px rgba(0, 0, 0, 0.12)) drop-shadow(0 3px 6px rgba(0, 0, 0, 0.08))",
          }}
        />
      </svg>
      </div>
    </section>
  );
}
