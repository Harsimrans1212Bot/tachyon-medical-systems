"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  // Close menu on route change / escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-28">
          {/* Logo — small icon+text on mobile, full banner on desktop */}
          <Link href="/" className="flex items-center">
            {/* Mobile: compact logo */}
            <div className="sm:hidden flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Tachyon Medical Systems"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-black text-deep-blue tracking-tight">T<span className="text-orange">A</span>CHYON</span>
                <span className="text-[9px] font-semibold text-gray-500 tracking-wider uppercase">Medical Systems</span>
              </div>
            </div>
            {/* Desktop: full logo banner */}
            <Image
              src="/logo-header.png"
              alt="Tachyon Medical Systems Pvt. Ltd."
              width={600}
              height={110}
              className="hidden sm:block h-28 w-auto max-w-[500px] sm:max-w-[600px]"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-light-cyan transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-light-cyan after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 px-6 py-2.5 bg-orange text-white text-sm font-semibold rounded-full hover:bg-orange/90 transition-all hover:shadow-lg"
            >
              Get a Quote
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-deep-blue rounded-lg hover:bg-gray-100 transition-colors"
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

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-5 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-light-cyan transition-colors border-b border-gray-50 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="p-3">
                  <Link
                    href="/contact"
                    onClick={() => setMenuOpen(false)}
                    className="block text-center px-5 py-2.5 bg-orange text-white text-sm font-semibold rounded-full hover:bg-orange/90 transition-all"
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
