"use client";
import Link from "next/link";
import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionBackground from "@/components/SectionBackground";
import WaveDivider from "@/components/WaveDivider";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const productsCardsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero word-by-word split and fade out on scroll
      const heroWords = heroRef.current?.querySelectorAll(".hero-word");
      if (heroWords) {
        gsap.to(heroWords, {
          opacity: 0,
          y: -60,
          stagger: 0.05,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8,
          },
        });
      }

      // Hero sub-elements fade
      const heroSub = heroRef.current?.querySelectorAll(".hero-fade");
      if (heroSub) {
        gsap.to(heroSub, {
          opacity: 0,
          y: -40,
          stagger: 0.03,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "60% top",
            scrub: 0.6,
          },
        });
      }

      // Parallax orbs
      if (orb1Ref.current) {
        gsap.to(orb1Ref.current, {
          y: -200,
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }
      if (orb2Ref.current) {
        gsap.to(orb2Ref.current, {
          y: -80,
          scrollTrigger: { trigger: heroRef.current, start: "top top", end: "bottom top", scrub: true },
        });
      }

      // Stats counter animation
      const statEls = statsRef.current?.querySelectorAll(".stat-value");
      statEls?.forEach((el, i) => {
        const text = el.textContent || "";
        const isPercent = text.includes("%");
        const num = parseInt(text.replace(/[^0-9]/g, ""), 10);
        const suffix = text.replace(/[0-9]/g, "");
        const obj = { val: 0 };

        gsap.to(obj, {
          val: num,
          duration: 2,
          delay: i * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          onUpdate() {
            (el as HTMLElement).textContent = Math.round(obj.val) + suffix;
          },
        });
      });

      // Services section reveal
      ScrollTrigger.create({
        trigger: servicesSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(servicesSectionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        },
      });

      // Service cards staggered slide-in
      const serviceCards = servicesCardsRef.current?.querySelectorAll(".reveal-card");
      if (serviceCards?.length) {
        gsap.set(serviceCards, { opacity: 0, y: 60 });
        ScrollTrigger.create({
          trigger: servicesCardsRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(serviceCards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" });
          },
        });
      }

      // Products section reveal
      ScrollTrigger.create({
        trigger: productsSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(productsSectionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        },
      });

      // Product cards staggered slide-in
      const productCards = productsCardsRef.current?.querySelectorAll(".reveal-card");
      if (productCards?.length) {
        gsap.set(productCards, { opacity: 0, y: 60 });
        ScrollTrigger.create({
          trigger: productsCardsRef.current,
          start: "top 80%",
          onEnter: () => {
            gsap.to(productCards, { opacity: 1, y: 0, duration: 0.6, stagger: 0.12, ease: "power2.out" });
          },
        });
      }

      // CTA reveal
      ScrollTrigger.create({
        trigger: ctaRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Helper to split text into word spans
  const splitWords = (text: string, className = "hero-word") =>
    text.split(" ").map((word, i) => (
      <span key={i} className={`${className} inline-block mr-[0.3em]`}>
        {word}
      </span>
    ));

  const featuredProducts = [
    { name: "GE Revolution EVO", category: "CT Scanner", desc: "Advanced computed tomography with superior image quality", image: "/ct-scanner.jpg", href: "/inventory" },
    { name: "GE Signa HDxt 1.5T", category: "MRI", desc: "High-definition MRI system for precise diagnostics", image: "/mri.jpg", href: "/inventory" },
    { name: "Philips FD 10/10", category: "Cath Lab", desc: "State-of-the-art cardiac catheterization laboratory", image: "/cath-lab.jpg", href: "/inventory" },
    { name: "Hologic 3D", category: "Mammography", desc: "3D mammography for early breast cancer detection", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=400&h=300&fit=crop", href: "/inventory" },
  ];

  const stats = [
    { value: "30+", label: "Years of Experience" },
    { value: "1150+", label: "Machines Installed" },
    { value: "8+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const services = [
    { title: "Refurbishment", desc: "Complete restoration of medical equipment to original specifications with rigorous quality testing", icon: "🔧", href: "/services/refurbishment" },
    { title: "Installation", desc: "Professional installation, uninstallation, and relocation services by certified engineers", icon: "⚙️", href: "/services/installation" },
    { title: "Maintenance & Support", desc: "Preventive maintenance, emergency repairs, and responsive technical support services", icon: "🛡️", href: "/services" },
    { title: "Buy & Sell", desc: "Trusted marketplace for pre-owned and new medical imaging equipment worldwide", icon: "🤝", href: "/services/buy-sell" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Large glowing orbs with parallax */}
          <div ref={orb1Ref} className="absolute top-20 right-20 w-96 h-96 rounded-full bg-light-cyan/5 blur-3xl" />
          <div ref={orb2Ref} className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-orange/5 blur-3xl" />
          {/* MRI Bore Animation - Set A: outer 40px, middle 24px, inner 12px — touching each other */}
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full animate-[mri-spin-cw_10s_linear_infinite]" style={{ borderWidth: '40px', borderStyle: 'solid', borderColor: 'rgba(100, 200, 255, 0.04)', borderTopColor: 'rgba(100, 200, 255, 0.15)', borderRightColor: 'rgba(100, 200, 255, 0.08)' }} />
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full animate-[mri-spin-ccw_7s_linear_infinite]" style={{ borderWidth: '24px', borderStyle: 'solid', borderColor: 'rgba(255, 140, 50, 0.03)', borderBottomColor: 'rgba(255, 140, 50, 0.13)', borderLeftColor: 'rgba(255, 140, 50, 0.07)' }} />
          <div className="absolute top-1/2 left-1/2 w-[372px] h-[372px] sm:w-[572px] sm:h-[572px] rounded-full animate-[mri-spin-cw_4s_linear_infinite]" style={{ borderWidth: '12px', borderStyle: 'solid', borderColor: 'rgba(100, 200, 255, 0.03)', borderTopColor: 'rgba(100, 200, 255, 0.12)' }} />
          {/* MRI Bore Animation - Set B (offset for seamless infinite look) */}
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full animate-[mri-spin-cw_10s_linear_infinite]" style={{ borderWidth: '40px', borderStyle: 'solid', borderColor: 'rgba(100, 200, 255, 0.04)', borderTopColor: 'rgba(100, 200, 255, 0.15)', borderRightColor: 'rgba(100, 200, 255, 0.08)', animationDelay: '-5s' }} />
          <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] sm:w-[620px] sm:h-[620px] rounded-full animate-[mri-spin-ccw_7s_linear_infinite]" style={{ borderWidth: '24px', borderStyle: 'solid', borderColor: 'rgba(255, 140, 50, 0.03)', borderBottomColor: 'rgba(255, 140, 50, 0.13)', borderLeftColor: 'rgba(255, 140, 50, 0.07)', animationDelay: '-3.5s' }} />
          <div className="absolute top-1/2 left-1/2 w-[372px] h-[372px] sm:w-[572px] sm:h-[572px] rounded-full animate-[mri-spin-cw_4s_linear_infinite]" style={{ borderWidth: '12px', borderStyle: 'solid', borderColor: 'rgba(100, 200, 255, 0.03)', borderTopColor: 'rgba(100, 200, 255, 0.12)', animationDelay: '-2s' }} />
          {/* Floating shapes */}
          <div className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full border border-light-cyan/20 animate-float" />
          <div className="absolute top-[25%] right-[15%] w-24 h-24 rounded-full border border-orange/15 animate-float-delayed" />
          <div className="absolute bottom-[20%] left-[20%] w-10 h-10 rounded-full bg-light-cyan/10 animate-float-slow" />
          <div className="absolute top-[60%] right-[10%] w-14 h-14 rounded-full border border-white/10 animate-float" />
          <div className="absolute top-[10%] right-[40%] w-8 h-8 rounded-full bg-orange/10 animate-float-delayed" />
          <div className="absolute bottom-[30%] right-[30%] w-20 h-20 rounded-full border border-light-cyan/10 animate-float-slow" />
          <div className="absolute top-[40%] left-[5%] w-6 h-6 rounded-full bg-white/5 animate-float-delayed" />
          {/* Small particles */}
          <div className="absolute top-[20%] right-[25%] w-2 h-2 rounded-full bg-light-cyan/30 animate-pulse" />
          <div className="absolute top-[70%] left-[35%] w-1.5 h-1.5 rounded-full bg-orange/25 animate-ping" />
          <div className="absolute bottom-[40%] left-[15%] w-1.5 h-1.5 rounded-full bg-white/15 animate-pulse" />
          <div className="absolute top-[50%] right-[20%] w-1 h-1 rounded-full bg-light-cyan/20 animate-ping" />
        </div>
        <div
          ref={heroRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 relative z-10"
        >
          <div className="max-w-3xl">
            <div className="hero-fade inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-base font-semibold text-light-cyan mb-8 animate-fade-in">
              <span className="text-orange text-lg">★</span>
              Trusted Since 1992
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white leading-tight mb-6 animate-fade-in-up">
              {splitWords("Need to")}
              <span className="hero-word inline-block mr-[0.3em] text-orange">Upgrade</span>
              <br />
              {splitWords("or")}
              <span className="hero-word inline-block mr-[0.3em] text-light-cyan">Set Up</span>
              {splitWords("Your")}
              <br />
              {splitWords("Medical Facility?")}
            </h1>
            <p className="hero-fade text-lg sm:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
              Whether you&apos;re building a new imaging center or upgrading existing equipment, our team of experts will help you find the perfect solution — from sourcing to installation.
            </p>
            <div className="hero-fade flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
              <Link href="/contact/inventory" className="px-8 py-4 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/80 transition-all hover:shadow-xl text-center">
                Inventory Inquiries
              </Link>
              <Link href="/contact/services" className="px-8 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl text-center">
                Installation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white dark:bg-[#0d1b2a] border-b border-gray-100 dark:border-white/10 relative overflow-hidden">
        <WaveDivider flip />
        <SectionBackground variant="primary" />
        <div ref={statsRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-value text-3xl sm:text-4xl font-black text-deep-blue dark:text-white dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a] relative overflow-hidden">
        <SectionBackground variant="primary" />
        <div
          ref={servicesSectionRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">End to End Medical Equipment Solutions</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Comprehensive services covering every stage of the equipment lifecycle.</p>
          </div>
          <div ref={servicesCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="reveal-card block p-8 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-deep-blue group transition-all duration-300 card-hover border border-gray-100 dark:border-white/10 hover:border-deep-blue cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-deep-blue dark:text-white group-hover:text-white transition-colors">{service.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 mt-3 transition-colors">{service.desc}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-deep-blue dark:border-white/30 text-deep-blue dark:text-white font-bold rounded-full hover:bg-deep-blue hover:text-white transition-all">
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240] relative overflow-hidden">
        <WaveDivider flip />
        <SectionBackground variant="secondary" />
        <div
          ref={productsSectionRef}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Equipment</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Featured Inventory</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">World-class medical imaging and diagnostic equipment, meticulously refurbished to meet the highest standards.</p>
          </div>
          <div ref={productsCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="reveal-card block bg-white dark:bg-white/5 rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-white/10"
              >
                <div className="h-48 relative overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-light-cyan uppercase tracking-wider">{product.category}</span>
                  <h3 className="text-lg font-bold text-deep-blue dark:text-white mt-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{product.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/inventory" className="inline-flex items-center gap-2 px-8 py-4 bg-deep-blue text-white font-bold rounded-full hover:bg-deep-blue/90 transition-all hover:shadow-xl">
              View All Inventory
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <WaveDivider flip />
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-light-cyan/10 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-orange/10 blur-3xl" />
        </div>
        <div
          ref={ctaRef}
          className="max-w-4xl mx-auto px-4 text-center relative z-10 opacity-0 translate-y-10"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Premium Medical<br /><span className="text-light-cyan">Equipment</span> Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Top-notch customer service, extensive medical expertise, and unwavering dedication to your Medical Equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl text-lg">
              Contact Us
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
