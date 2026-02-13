"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const featuredProducts = [
  { name: "GE Revolution EVO", category: "CT Scanner", desc: "Advanced computed tomography with superior image quality" },
  { name: "GE Signa HDxt 1.5T", category: "MRI", desc: "High-definition MRI system for precise diagnostics" },
  { name: "Philips FD 10/10", category: "Cath Lab", desc: "State-of-the-art cardiac catheterization laboratory" },
  { name: "Hologic 3D", category: "Mammography", desc: "3D mammography for early breast cancer detection" },
];

const stats = [
  { value: "30+", label: "Years of Experience" },
  { value: "500+", label: "Systems Installed" },
  { value: "20+", label: "Countries Served" },
  { value: "100%", label: "Client Satisfaction" },
];

const services = [
  { title: "Refurbishment", desc: "Complete restoration of medical equipment to original specifications with rigorous quality testing", icon: "🔧" },
  { title: "Buy & Sell", desc: "Trusted marketplace for pre-owned and new medical imaging equipment worldwide", icon: "🤝" },
  { title: "Import & Export", desc: "Global logistics, customs clearance, and compliance for medical equipment trade", icon: "🌍" },
  { title: "Installation", desc: "Professional installation, deinstallation, and relocation services by certified engineers", icon: "⚙️" },
];

function useScrollFade() {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(1);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (windowHeight * 0.5)));
      setOpacity(1 - scrollProgress);
      setTranslateY(scrollProgress * 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { ref, opacity, translateY };
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function Home() {
  const hero = useScrollFade();
  const servicesReveal = useReveal();
  const productsReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-light-cyan/5 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-orange/5 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/5" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5" />
          {/* Floating particles */}
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-light-cyan/20 animate-pulse" />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-orange/30 animate-ping" />
          <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-white/10 animate-pulse" />
        </div>
        <div
          ref={hero.ref}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10 transition-none"
          style={{ opacity: hero.opacity, transform: `translateY(${hero.translateY}px)` }}
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-light-cyan mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-light-cyan animate-pulse" />
              Trusted Since 1992
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
              Premium Medical<br />
              <span className="text-light-cyan">Equipment</span> Solutions
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
              Top-notch customer service, extensive medical expertise, and unwavering dedication to your Medical Equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Link href="/products" className="px-8 py-4 bg-light-cyan text-deep-blue font-bold rounded-full hover:bg-white transition-all hover:shadow-xl text-center">
                Explore Equipment
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl font-black text-deep-blue mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - NOW FIRST */}
      <section className="py-24 bg-white">
        <div
          ref={servicesReveal.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${servicesReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Comprehensive Services</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">End-to-end medical equipment solutions covering every stage of the equipment lifecycle.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-deep-blue group transition-all duration-300 card-hover border border-gray-100 hover:border-deep-blue"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-deep-blue group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 mt-3 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-deep-blue text-deep-blue font-bold rounded-full hover:bg-deep-blue hover:text-white transition-all">
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products - NOW SECOND */}
      <section className="py-24 bg-gray-50">
        <div
          ref={productsReveal.ref}
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${productsReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Equipment</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Featured Products</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">World-class medical imaging and diagnostic equipment, meticulously refurbished to meet the highest standards.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, i) => (
              <div
                key={product.name}
                className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="h-48 equipment-placeholder flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-16 h-16 mx-auto text-deep-blue/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                    <span className="text-xs font-semibold text-deep-blue/30 mt-2 block">{product.category}</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-light-cyan uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-lg font-bold text-deep-blue mt-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mt-2">{product.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-4 bg-deep-blue text-white font-bold rounded-full hover:bg-deep-blue/90 transition-all hover:shadow-xl">
              View All Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-light-cyan/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-orange/10 blur-3xl" />
        </div>
        <div
          ref={ctaReveal.ref}
          className={`max-w-4xl mx-auto px-4 text-center relative z-10 transition-all duration-700 ${ctaReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Need to Upgrade or Set Up<br />Your Medical Facility?
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Whether you&apos;re building a new imaging center or upgrading existing equipment, our team of experts will help you find the perfect solution — from sourcing to installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl text-lg">
              Get a Free Quote
            </Link>
            <a href="tel:+919215291291" className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg">
              Call +91-9215291291
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
