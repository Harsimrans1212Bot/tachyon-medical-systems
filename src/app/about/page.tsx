import type { Metadata } from "next";
import Link from "next/link";

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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-orange">Our Story</span>
              <h2 className="text-3xl font-black text-deep-blue mt-3">Built on Expertise, Driven by Purpose</h2>
              <div className="space-y-4 mt-6 text-gray-500 leading-relaxed">
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
            <div className="h-96 rounded-2xl equipment-placeholder flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-black text-deep-blue/10">Since</div>
                <div className="text-8xl font-black text-deep-blue/20">1992</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Values</span>
            <h2 className="text-3xl font-black text-deep-blue mt-3">What Drives Us Forward</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl border border-gray-100 card-hover text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-deep-blue">{value.title}</h3>
                <p className="text-sm text-gray-500 mt-3">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">Our Journey</span>
            <h2 className="text-3xl font-black text-deep-blue mt-3">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden sm:block" />
            <div className="space-y-12">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {m.year}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-bold text-deep-blue">{m.title}</h3>
                    <p className="text-gray-500 mt-1">{m.desc}</p>
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
