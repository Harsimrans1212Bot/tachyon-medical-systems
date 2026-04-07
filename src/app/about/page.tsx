import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Us | Tachyon Medical Systems",
  description: "Learn about Tachyon Medical Systems — over 30 years of expertise in medical equipment solutions since 1992.",
  alternates: { canonical: "https://www.tachyonmed.com/about" },
  openGraph: { url: "https://www.tachyonmed.com/about" },
};

const milestones = [
  { year: "1992", title: "Company Founded", desc: "Established in Karnal, Haryana with a vision to make quality medical equipment accessible." },
  { year: "2000", title: "International Expansion", desc: "Began import/export operations, connecting healthcare providers globally." },
  { year: "2010", title: "Full-Service Provider", desc: "Expanded to offer complete lifecycle services including installation and maintenance." },
  { year: "2020", title: "Digital Transformation", desc: "Modernized operations and expanded reach to serve healthcare facilities worldwide." },
  { year: "Today", title: "Industry Leader", desc: "Trusted by healthcare facilities across 20+ countries with 500+ systems installed." },
];

const values = [
  {
    title: "Quality First",
    desc: "Every piece of equipment meets the highest standards before reaching our clients.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Customer Focus",
    desc: "Your success is our success. We go above and beyond to deliver exceptional service.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Integrity",
    desc: "Transparent dealings, honest assessments, and fair pricing — always.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Innovation",
    desc: "Constantly evolving our processes and capabilities to serve you better.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.tachyonmed.com/"}, {name:"About",url:"https://www.tachyonmed.com/about"}]} />
      {/* Hero */}
      <section className="pt-28 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-light-cyan mb-3">About Us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">Three Decades of Medical Excellence</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Since 1992, Tachyon Medical Systems has been at the forefront of medical equipment solutions, combining deep industry expertise with unwavering commitment to quality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Our Story</p>
              <h2 className="text-3xl font-extrabold text-deep-blue dark:text-white">Built on Expertise, Driven by Purpose</h2>
              <div className="space-y-4 mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  Founded in 1992, Tachyon Medical Systems Pvt. Ltd. began with a clear mission: to bridge the gap between world-class medical technology and healthcare providers who need it most.
                </p>
                <p>
                  Over three decades, we have grown from a small operation in Karnal, Haryana, to a globally recognized name in medical equipment solutions. Our journey has been defined by an unwavering commitment to quality, integrity, and customer satisfaction.
                </p>
                <p>
                  Today, we offer comprehensive services spanning the entire equipment lifecycle — from sourcing and refurbishment to installation, maintenance, and eventual decommissioning.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/logo-header.png"
                alt="Tachyon Medical Systems Pvt. Ltd."
                width={1280}
                height={187}
                className="w-full max-w-md bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Our Mission</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-deep-blue dark:text-white">People First</h2>
          </div>
          <div className="space-y-5 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            <p>
              Since 1992, Tachyon Medical has been guided by a single mission rooted in the Gurbani teaching <em>&ldquo;Maanas ki Jaat sabeh eke pehchaan ho&rdquo;</em> — recognize the human race as one. These aren&rsquo;t just words to us.
            </p>
            <p>
              This belief drives everything we do. As a team, we&rsquo;ve built a culture focused on extending the life of radiology equipment so our clients can extend the lives of their patients.
            </p>
            <p className="text-deep-blue dark:text-light-cyan font-semibold text-xl italic border-l-4 border-light-cyan pl-6">
              Following our mission and belief that people come first, our team provides a second chance at life for imaging equipment — and people.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Leadership</p>
            <h2 className="text-3xl font-extrabold text-deep-blue dark:text-white">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {[
              { role: "Chief Executive Officer", name: "Harkesh Singh", bio: "With over 30 years of experience in the medical equipment industry, Harkesh Singh founded Tachyon Medical Systems in 1992 with a vision to make world-class medical imaging technology accessible to healthcare providers across the globe.", gradient: "from-deep-blue to-deep-blue/80" },
              { role: "Director", name: "Harsimran Singh", bio: "Bringing fresh perspective and modern business strategy to Tachyon Medical Systems, Harsimran Singh oversees day-to-day operations and drives the company's expansion into new markets.", gradient: "from-light-cyan to-deep-blue" },
            ].map((person) => (
              <div key={person.name} className="bg-white dark:bg-white/[0.03] rounded-xl overflow-hidden border border-gray-100 dark:border-white/5 card-hover">
                <div className={`h-48 bg-gradient-to-br ${person.gradient} flex items-center justify-center`}>
                  <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold text-light-cyan uppercase tracking-wider">{person.role}</p>
                  <h3 className="text-xl font-extrabold text-deep-blue dark:text-white mt-1">{person.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-light-cyan mb-3">Our Values</p>
            <h2 className="text-3xl font-extrabold text-deep-blue dark:text-white">What Drives Us Forward</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white dark:bg-white/[0.03] p-7 rounded-xl border border-gray-100 dark:border-white/5 text-center card-hover">
                <div className="w-11 h-11 rounded-lg bg-light-cyan/10 text-light-cyan flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-base font-bold text-deep-blue dark:text-white">{value.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-3">Our Journey</p>
            <h2 className="text-3xl font-extrabold text-deep-blue dark:text-white">Milestones</h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-white/10 hidden sm:block" />
            <div className="space-y-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-deep-blue flex items-center justify-center text-white font-bold text-sm relative z-10">
                    {m.year}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-base font-bold text-deep-blue dark:text-white">{m.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Partner With Us</h2>
          <p className="text-gray-400 mb-8">Join hundreds of healthcare facilities worldwide who trust Tachyon Medical Systems for their equipment needs.</p>
          <Link href="/contact" className="inline-flex px-8 py-3.5 bg-light-cyan text-white font-semibold rounded-lg hover:bg-light-cyan/90 transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
