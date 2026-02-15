import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import SectionBackground from "@/components/SectionBackground";

export const metadata: Metadata = {
  title: "About Us | Tachyon Medical Systems",
  description: "Learn about Tachyon Medical Systems — over 30 years of expertise in medical equipment solutions since 1992.",
};

const milestones = [
  { year: "1992", title: "Company Founded", desc: "Established in Karnal, Haryana with a vision to make quality medical equipment accessible." },
  { year: "2000", title: "International Expansion", desc: "Began import/export operations, connecting healthcare providers globally." },
  { year: "2010", title: "Full-Service Provider", desc: "Expanded to offer complete lifecycle services including installation and maintenance." },
  { year: "2020", title: "Digital Transformation", desc: "Modernized operations and expanded reach to serve healthcare facilities worldwide." },
  { year: "Today", title: "Industry Leader", desc: "Trusted by healthcare facilities across 20+ countries with 500+ systems installed." },
];

const values = [
  { title: "Quality First", desc: "Every piece of equipment meets the highest standards before reaching our clients.", icon: "⭐" },
  { title: "Customer Focus", desc: "Your success is our success. We go above and beyond to deliver exceptional service.", icon: "🎯" },
  { title: "Integrity", desc: "Transparent dealings, honest assessments, and fair pricing — always.", icon: "🤝" },
  { title: "Innovation", desc: "Constantly evolving our processes and capabilities to serve you better.", icon: "💡" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">About Us</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Three Decades of Medical Excellence</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Since 1992, Tachyon Medical Systems has been at the forefront of medical equipment solutions, combining deep industry expertise with unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a] relative overflow-hidden">
        <SectionBackground variant="primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-orange">Our Story</span>
              <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Built on Expertise, Driven by Purpose</h2>
              <div className="space-y-4 mt-6 text-gray-500 dark:text-gray-400 leading-relaxed">
                <p>
                  Founded in 1992, Tachyon Medical Systems Pvt. Ltd. began with a clear mission: to bridge the gap between world-class medical technology and healthcare providers who need it most.
                </p>
                <p>
                  Over three decades, we have grown from a small operation in Karnal, Haryana, to a globally recognized name in medical equipment solutions. Our journey has been defined by an unwavering commitment to quality, integrity, and customer satisfaction.
                </p>
                <p>
                  Today, we offer comprehensive services spanning the entire equipment lifecycle — from sourcing and refurbishment to installation, maintenance, and eventual decommissioning. Our team of experienced engineers and industry professionals ensures that every system we deliver meets the highest standards of performance and reliability.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo-header.png"
                alt="Tachyon Medical Systems Pvt. Ltd."
                width={1280}
                height={187}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240] relative overflow-hidden">
        <SectionBackground variant="primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">Leadership</span>
            <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Meet Our Team</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">The experienced professionals behind Tachyon Medical Systems&apos; three decades of excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* CEO */}
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover">
              <div className="h-64 bg-gradient-to-br from-deep-blue to-deep-blue/80 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl text-white/50">📷</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-light-cyan uppercase tracking-wider">Chief Executive Officer</span>
                <h3 className="text-2xl font-black text-deep-blue dark:text-white mt-2">Harkesh Singh</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                  With over 30 years of experience in the medical equipment industry, Harkesh Singh founded Tachyon Medical Systems in 1992 with a vision to make world-class medical imaging technology accessible to healthcare providers across the globe. Under his leadership, the company has grown from a regional operation to an internationally recognized name, serving facilities in over 20 countries.
                </p>
              </div>
            </div>
            {/* Manager */}
            <div className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover">
              <div className="h-64 bg-gradient-to-br from-light-cyan/80 to-deep-blue flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                  <span className="text-4xl text-white/50">📷</span>
                </div>
              </div>
              <div className="p-8">
                <span className="text-xs font-bold text-orange uppercase tracking-wider">Manager</span>
                <h3 className="text-2xl font-black text-deep-blue dark:text-white mt-2">Harsimran Singh</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                  Bringing fresh perspective and modern business strategy to Tachyon Medical Systems, Harsimran Singh oversees day-to-day operations and drives the company&apos;s expansion into new markets. With a focus on building strong client relationships and leveraging technology, he is shaping the next chapter of the company&apos;s growth story.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative overflow-hidden py-24 bg-gray-50 dark:bg-[#112240]">
        <SectionBackground variant="secondary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Values</span>
            <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">What Drives Us Forward</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-100 dark:border-white/10 card-hover text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-deep-blue dark:text-white">{value.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative overflow-hidden py-24 bg-white dark:bg-[#0d1b2a]">
        <SectionBackground variant="secondary" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">Our Journey</span>
            <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" />
            <div className="space-y-12">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {m.year}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-bold text-deep-blue dark:text-white">{m.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 hero-gradient">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Partner With Us</h2>
          <p className="text-gray-300 mb-8">Join hundreds of healthcare facilities worldwide who trust Tachyon Medical Systems for their equipment needs.</p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
