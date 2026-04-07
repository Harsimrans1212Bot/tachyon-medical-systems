"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleEsc = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    document.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/inventory", label: "Inventory" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 dark:bg-[#0d1b2a]/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Tachyon Medical Systems"
              width={44}
              height={44}
              className="h-10 w-10 object-contain dark:bg-white dark:rounded-md dark:p-0.5"
              priority
            />
            <div className="flex flex-col leading-tight">
              <span className={`text-lg font-extrabold tracking-tight ${scrolled ? "text-deep-blue dark:text-white" : "text-white"}`}>
                TACHYON
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase ${scrolled ? "text-gray-500 dark:text-gray-400" : "text-gray-300"}`}>
                Medical Systems
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${scrolled ? "text-gray-700 dark:text-gray-300 hover:text-deep-blue dark:hover:text-white" : "text-white/80 hover:text-white"}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/inventory"
              className="ml-4 px-5 py-2.5 bg-light-cyan text-white text-sm font-semibold rounded-lg hover:bg-light-cyan/90 transition-all"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`p-2 rounded-lg transition-colors ${scrolled ? "text-deep-blue dark:text-white hover:bg-gray-100 dark:hover:bg-white/10" : "text-white hover:bg-white/10"}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-12 w-56 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 overflow-hidden animate-fade-in z-50">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors border-b border-gray-50 dark:border-gray-800 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="p-3">
                  <Link
                    href="/contact/inventory"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center px-4 py-2.5 bg-light-cyan text-white text-sm font-semibold rounded-lg hover:bg-light-cyan/90 transition-all"
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
