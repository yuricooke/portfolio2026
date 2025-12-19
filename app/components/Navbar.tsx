"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        // Always show at top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full pt-4 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{ zIndex: 99999 }}
    >
      <div className="max-w-6xl mx-auto rounded-3xl bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="hero-tagline text-gray-600 text-2xl md:text-2xl"
          >
            Yuri Cooke
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-teal-500 transition-colors"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-500 transition-colors"
              >
                Back to Home
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-blue-950"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            {isHomePage ? (
              navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block py-2 text-gray-700 hover:text-teal-500 transition-colors"
                >
                  {link.label}
                </a>
              ))
            ) : (
              <Link
                href="/"
                onClick={handleLinkClick}
                className="block py-2 text-gray-700 hover:text-teal-500 transition-colors"
              >
                Back to Home
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
