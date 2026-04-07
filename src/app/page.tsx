"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const servicesSectionRef = useRef<HTMLDivElement>(null);
  const servicesCardsRef = useRef<HTMLDivElement>(null);
  const productsSectionRef = useRef<HTMLDivElement>(null);
  const productsCardsRef = useRef<HTMLDivElement>(null);
  const whySectionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content fade-in
      const heroEls = heroRef.current?.querySelectorAll(".hero-reveal");
      if (heroEls) {
        gsap.from(heroEls, {
          opacity: 0,
          y: 40,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.3,
        });
      }

      // Stats counter animation
      const statEls = statsRef.current?.querySelectorAll(".stat-value");
      statEls?.forEach((el) => {
        const text = el.textContent || "";
        const num = parseInt(text.replace(/[^0-9]/g, ""), 10);
        const suffix = text.replace(/[0-9]/g, "");
        const obj = { val: 0 };

        gsap.to(obj, {
          val: num,
          duration: 2,
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

      // Why section reveal
      ScrollTrigger.create({
        trigger: whySectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(whySectionRef.current, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        },
      });

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

  const featuredProducts = [
    { name: "GE Revolution EVO", category: "CT Scanner", desc: "Advanced computed tomography with superior image quality", image: "/ct-scanner.jpg", href: "/inventory", warranty: "12-Month Warranty" },
    { name: "Philips FD 10/10", category: "Cath Lab", desc: "State-of-the-art cardiac catheterization laboratory", image: "/cath-lab.jpg", href: "/inventory", warranty: "12-Month Warranty" },
    { name: "Hologic 3D", category: "Mammography", desc: "3D mammography for early breast cancer detection", image: "/mammography.jpg", href: "/inventory", warranty: "12-Month Warranty" },
  ];

  const stats = [
    { value: "32+", label: "Years in Business" },
    { value: "1150+", label: "Systems Installed" },
    { value: "15+", label: "Countries Served" },
    { value: "99%", label: "Client Satisfaction" },
  ];

  const services = [
    {
      title: "Refurbishment",
      desc: "Complete restoration of medical equipment to original specifications with rigorous quality testing",
      href: "/services/refurbishment",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A2 2 0 015 10.15V6a2 2 0 012-2h10a2 2 0 012 2v4.15a2 2 0 01-1.036 1.83l-5.384 3.19a2 2 0 01-2.16 0zM14.5 7.5L12 9l-2.5-1.5M12 9v4" />
        </svg>
      ),
      bg: "bg-[#E8651A]",
    },
    {
      title: "Installation",
      desc: "Professional installation, uninstallation, and relocation services by certified engineers",
      href: "/services/installation",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bg: "bg-[#0077B6]",
    },
    {
      title: "Maintenance & Support",
      desc: "Preventive maintenance, emergency repairs, and responsive technical support services",
      href: "/services",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      bg: "bg-[#E8651A]",
    },
    {
      title: "Buy & Sell",
      desc: "Trusted marketplace for pre-owned and new medical imaging equipment worldwide",
      href: "/services/buy-sell",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bg: "bg-[#0077B6]",
    },
  ];

  const vendors = [
    { name: "GE HealthCare", filter: "GE" },
    { name: "Philips", filter: "Philips" },
    { name: "Siemens", filter: "Siemens" },
    { name: "Hologic", filter: "Hologic" },
    { name: "Toshiba", filter: "Toshiba" },
  ];

  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-mri.jpg"
            alt="Medical imaging equipment"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001a33]/95 via-[#001a33]/85 to-[#001a33]/60" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 w-full">
          <div className="max-w-3xl">
            {/* Trusted badge */}
            <div className="hero-reveal inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-base sm:text-lg font-bold text-white tracking-wide">Trusted Since 1992</span>
              <span className="text-base sm:text-lg font-bold text-[#4FC3F7]">&middot; 30+ Years</span>
            </div>

            <h1 className="hero-reveal text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
              Refurbished Medical Imaging Equipment{" "}
              <span className="text-[#4FC3F7]">You Can Rely On</span>
            </h1>

            <p className="hero-reveal text-lg sm:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl">
              Whether you&apos;re building a new imaging center or upgrading existing equipment, our team of experts will help you find the perfect solution — from sourcing to installation.
            </p>

            <div className="hero-reveal flex flex-col sm:flex-row gap-4">
              <Link
                href="/inventory"
                className="px-8 py-4 bg-white text-[#003366] font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-xl text-center"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-[#0077B6] text-white font-bold rounded-full hover:bg-[#0077B6]/90 transition-all hover:shadow-xl text-center border border-[#0077B6]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Logos Trust Bar */}
      <section className="py-10 bg-white dark:bg-[#0d1b2a] border-b border-gray-100 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
            Equipment from World-Leading Manufacturers
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {vendors.map((v) => (
              <Link
                key={v.name}
                href={`/inventory?manufacturer=${encodeURIComponent(v.filter)}`}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg border border-gray-200 dark:border-white/10 text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400 hover:border-[#0077B6] hover:text-[#0077B6] dark:hover:text-[#4FC3F7] hover:bg-[#0077B6]/5 transition-all duration-200"
              >
                {v.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 dark:bg-[#112240]">
        <div ref={statsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="stat-value text-3xl sm:text-4xl font-black text-[#0077B6] dark:text-[#4FC3F7] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div
          ref={servicesSectionRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-[#E8651A]">What We Do</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#003366] dark:text-white mt-3">
              End to End Medical Equipment Solutions
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              Comprehensive services covering every stage of the equipment lifecycle.
            </p>
          </div>
          <div ref={servicesCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="reveal-card block p-8 rounded-2xl bg-gray-50 dark:bg-white/5 hover:bg-[#003366] group transition-all duration-300 border border-gray-100 dark:border-white/10 hover:border-[#003366] hover:shadow-lg cursor-pointer"
              >
                <div className={`w-12 h-12 rounded-lg ${service.bg} text-white flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#003366] dark:text-white group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-300 mt-3 transition-colors">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#003366] dark:border-white/30 text-[#003366] dark:text-white font-bold rounded-full hover:bg-[#003366] hover:text-white transition-all"
            >
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Equipment */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div
          ref={productsSectionRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-[#0077B6]">Our Equipment</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#003366] dark:text-white mt-3">Featured Inventory</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
              World-class medical imaging and diagnostic equipment, meticulously refurbished to meet the highest standards.
            </p>
          </div>
          <div ref={productsCardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="reveal-card block bg-white dark:bg-white/5 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow border border-gray-100 dark:border-white/10"
              >
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#0077B6] text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    {product.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#003366] dark:text-white">{product.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{product.desc}</p>
                  <div className="flex items-center gap-1 mt-3">
                    <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-xs font-semibold text-green-600 dark:text-green-400">{product.warranty}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/inventory"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#003366] text-white font-bold rounded-full hover:bg-[#003366]/90 transition-all hover:shadow-xl"
            >
              View All Inventory
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Tachyon */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div
          ref={whySectionRef}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 opacity-0 translate-y-10"
        >
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-[#E8651A]">Why Choose Us</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#003366] dark:text-white mt-3">
              Why Tachyon Medical Systems
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <div className="w-14 h-14 rounded-xl bg-[#E8651A] text-white flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003366] dark:text-white mb-3">OEM-Equivalent Quality</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Every system is refurbished using OEM-equivalent or genuine parts, tested rigorously, and backed by a full warranty.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <div className="w-14 h-14 rounded-xl bg-[#0077B6] text-white flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003366] dark:text-white mb-3">Global Reach</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                Serving 15+ countries with offices in the US and India. We handle customs, logistics, and compliance seamlessly.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
              <div className="w-14 h-14 rounded-xl bg-[#E8651A] text-white flex items-center justify-center mx-auto mb-5">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#003366] dark:text-white mb-3">Dedicated Support</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                From initial consultation to post-installation training, our team provides end-to-end support for your facility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex gap-1 justify-center text-[#E8651A] mb-6">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="text-xl sm:text-2xl text-gray-700 dark:text-gray-200 leading-relaxed italic mb-8">
            &ldquo;Tachyon delivered a fully refurbished GE BrightSpeed 16 that exceeded our expectations. The installation was seamless and the team was incredibly professional.&rdquo;
          </blockquote>
          <div>
            <p className="font-bold text-[#003366] dark:text-white">Dr. Rajesh Sharma</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Director, City Diagnostic Centre &mdash; New Delhi, India</p>
          </div>
        </div>
      </section>

      {/* CTA with background image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/mri.jpg" alt="MRI equipment" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-[#001a33]/90" />
        </div>
        <div
          ref={ctaRef}
          className="relative z-10 max-w-4xl mx-auto px-4 text-center opacity-0 translate-y-10"
        >
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-6">
            Premium Medical<br />
            <span className="text-[#4FC3F7]">Equipment</span> Solutions
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            Top-notch customer service, extensive medical expertise, and unwavering dedication to your Medical Equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 bg-[#E8651A] text-white font-bold rounded-full hover:bg-[#E8651A]/90 transition-all hover:shadow-xl text-lg"
            >
              Contact Us
            </Link>
            <a
              href="tel:+919215291291"
              className="px-10 py-4 border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg"
            >
              Call +91-9215291291
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
