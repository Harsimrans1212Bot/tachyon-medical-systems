import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Import & Export Services | Tachyon Medical Systems",
  description: "Global medical equipment import and export services. Customs clearance, freight logistics, regulatory compliance across USA, India, Middle East, and UK.",
  alternates: { canonical: "https://www.tachyonmed.com/services/import-export" },
  openGraph: { url: "https://www.tachyonmed.com/services/import-export" },
};

const countryBadge: Record<string, { code: string; bg: string }> = {
  "USA":            { code: "US", bg: "bg-[#0077B6]" },
  "India":          { code: "IN", bg: "bg-[#E8651A]" },
  "UAE":            { code: "AE", bg: "bg-[#0077B6]" },
  "Saudi Arabia":   { code: "SA", bg: "bg-[#E8651A]" },
  "United Kingdom": { code: "GB", bg: "bg-[#003366]" },
  "Middle East":    { code: "ME", bg: "bg-[#0077B6]" },
  "UK":             { code: "GB", bg: "bg-[#003366]" },
  "United States":  { code: "US", bg: "bg-[#0077B6]" },
};

function CountryBadge({ name }: { name: string }) {
  const data = countryBadge[name];
  if (!data) return <span className="font-bold">{name}</span>;
  return (
    <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${data.bg} text-white text-xs font-bold`}>
      {data.code}
    </span>
  );
}

function CountryLabel({ label }: { label: string }) {
  // Parse "USA", "India", etc. from route strings like "USA", "India"
  const name = label.trim();
  const data = countryBadge[name];
  if (!data) return <span className="text-lg font-semibold">{name}</span>;
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`inline-flex items-center justify-center w-8 h-8 rounded-lg ${data.bg} text-white text-xs font-bold`}>
        {data.code}
      </span>
      <span className="font-semibold text-deep-blue dark:text-white">{name}</span>
    </span>
  );
}

const routes = [
  { from: "USA", to: "India", desc: "CT, MRI, and PET-CT systems" },
  { from: "India", to: "UAE", desc: "Refurbished imaging equipment" },
  { from: "India", to: "Saudi Arabia", desc: "Hospital equipment packages" },
  { from: "India", to: "United Kingdom", desc: "Specialty diagnostic systems" },
  { from: "USA", to: "Middle East", desc: "Premium imaging solutions" },
  { from: "UK", to: "India", desc: "Decommissioned hospital systems" },
];

const serviceIcons: React.ReactElement[] = [
  // Customs Clearance - clipboard
  <svg key="s1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
  // Freight Logistics - truck
  <svg key="s2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg>,
  // Regulatory Compliance - scale
  <svg key="s3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>,
  // Specialized Packaging - box
  <svg key="s4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  // Insurance Coverage - shield
  <svg key="s5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
];

const services = [
  {
    title: "Customs Clearance",
    desc: "Expert handling of customs documentation, duty classification, and clearance procedures. We navigate complex import regulations for medical devices in every destination country.",
    points: ["HS code classification for medical equipment", "Import license and permit coordination", "Duty optimization and exemption applications", "Port clearance and inspection management"],
  },
  {
    title: "Freight Logistics",
    desc: "End-to-end freight management for sensitive medical equipment. Sea freight, air freight, and multimodal transport solutions tailored to your timeline and budget.",
    points: ["Containerized sea freight (20ft/40ft)", "Air freight for urgent deliveries", "Door-to-door and port-to-port options", "Real-time shipment tracking"],
  },
  {
    title: "Regulatory Compliance",
    desc: "Full regulatory compliance management to ensure your equipment meets all destination country requirements before shipping.",
    points: ["FDA 510(k) clearance documentation (USA)", "AERB licensing and type approval (India)", "CE marking verification (Europe/UK)", "SFDA registration support (Saudi Arabia)", "MOH requirements (UAE)"],
  },
  {
    title: "Specialized Packaging",
    desc: "Custom crating and packaging engineered for sensitive medical equipment. Climate-controlled and shock-resistant solutions for safe transport.",
    points: ["Custom wooden crating with foam inserts", "Vibration dampening for sensitive detectors", "Climate-controlled packaging for MRI components", "Helium dewar specialized containers"],
  },
  {
    title: "Insurance Coverage",
    desc: "Comprehensive cargo insurance covering all risks during transit. We work with specialist marine insurers who understand high-value medical equipment.",
    points: ["All-risk marine cargo insurance", "Coverage from warehouse to final destination", "High-value equipment specialist underwriters", "Quick claims processing and support"],
  },
];

const countries = [
  { code: "IN", name: "India", bg: "bg-[#E8651A]" },
  { code: "US", name: "United States", bg: "bg-[#0077B6]" },
  { code: "SA", name: "Saudi Arabia", bg: "bg-[#E8651A]" },
  { code: "AE", name: "UAE", bg: "bg-[#0077B6]" },
  { code: "GB", name: "United Kingdom", bg: "bg-[#003366]" },
];

export default function ImportExportPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.tachyonmed.com/"}, {name:"Services",url:"https://www.tachyonmed.com/services"}, {name:"Import & Export",url:"https://www.tachyonmed.com/services/import-export"}]} />
      <ServiceJsonLd name="Medical Equipment Import & Export" description="Global medical equipment import and export with customs clearance and logistics." url="https://www.tachyonmed.com/services/import-export" />
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-light-cyan/70 hover:text-light-cyan text-sm font-medium transition-colors">
              &larr; Back to Services
            </Link>
            <span className="block text-sm font-bold tracking-wider uppercase text-light-cyan mt-6">Import & Export</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Global Trade Solutions</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Seamless cross-border medical equipment trade. We handle customs, logistics, compliance, and delivery so you can focus on patient care.
            </p>
          </div>
        </div>
      </section>

      {/* Trade Routes Visualization */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Global Network</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Active Trade Routes</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Our established corridors ensure reliable and efficient equipment delivery worldwide.</p>
          </div>

          {/* SVG Route Map */}
          <div className="relative bg-deep-blue/5 dark:bg-white/5 rounded-2xl p-8 mb-8 overflow-hidden">
            <svg viewBox="0 0 800 400" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Animated route lines */}
              <defs>
                <style>{`
                  @keyframes dash { to { stroke-dashoffset: -20; } }
                  .route-line { stroke-dasharray: 8 6; animation: dash 1.5s linear infinite; fill: none; stroke-width: 2; }
                `}</style>
              </defs>
              {/* USA */}
              <circle cx="150" cy="160" r="30" fill="#003366" opacity="0.15" />
              <circle cx="150" cy="160" r="8" fill="#003366" />
              <rect x="130" y="195" width="40" height="22" rx="4" fill="#0077B6" />
              <text x="150" y="211" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">US</text>
              {/* India */}
              <circle cx="520" cy="200" r="30" fill="#E8651A" opacity="0.15" />
              <circle cx="520" cy="200" r="8" fill="#E8651A" />
              <rect x="504" y="235" width="32" height="22" rx="4" fill="#E8651A" />
              <text x="520" y="251" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">IN</text>
              {/* UAE */}
              <circle cx="460" cy="280" r="25" fill="#00A8E8" opacity="0.15" />
              <circle cx="460" cy="280" r="6" fill="#00A8E8" />
              <rect x="443" y="300" width="34" height="22" rx="4" fill="#0077B6" />
              <text x="460" y="316" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">AE</text>
              {/* Saudi */}
              <circle cx="420" cy="240" r="25" fill="#00A8E8" opacity="0.15" />
              <circle cx="420" cy="240" r="6" fill="#00A8E8" />
              <rect x="370" y="250" width="32" height="22" rx="4" fill="#E8651A" />
              <text x="386" y="266" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">SA</text>
              {/* UK */}
              <circle cx="350" cy="100" r="25" fill="#003366" opacity="0.15" />
              <circle cx="350" cy="100" r="6" fill="#003366" />
              <rect x="334" y="65" width="32" height="22" rx="4" fill="#003366" />
              <text x="350" y="81" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">GB</text>
              {/* Routes */}
              <path d="M158 160 Q 340 100 512 200" className="route-line" stroke="#00A8E8" />
              <path d="M520 208 Q 490 250 466 274" className="route-line" stroke="#E8651A" />
              <path d="M512 205 Q 470 225 426 238" className="route-line" stroke="#E8651A" />
              <path d="M512 192 Q 430 140 358 105" className="route-line" stroke="#003366" />
              <path d="M158 168 Q 300 290 454 280" className="route-line" stroke="#00A8E8" />
              <path d="M344 106 Q 430 160 514 196" className="route-line" stroke="#003366" />
            </svg>
          </div>

          {/* Route Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, i) => (
              <div key={i} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 card-hover border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <CountryLabel label={route.from} />
                  <svg className="w-5 h-5 text-light-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <CountryLabel label={route.to} />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">What We Handle</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Comprehensive Trade Services</h2>
          </div>
          <div className="space-y-8">
            {services.map((svc, i) => (
              <div key={svc.title} className="bg-white dark:bg-white/5 rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 dark:border-white/10">
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-lg ${i % 2 === 0 ? 'bg-[#E8651A]' : 'bg-[#0077B6]'} text-white flex items-center justify-center flex-shrink-0`}>
                    {serviceIcons[i]}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-deep-blue dark:text-white">{svc.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{svc.desc}</p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {svc.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                          <svg className="w-4 h-4 text-light-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Served */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Worldwide Reach</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Countries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-6 text-center card-hover border border-gray-100 dark:border-white/10">
                <div className={`w-14 h-14 rounded-xl ${c.bg} text-white flex items-center justify-center mx-auto mb-3 text-lg font-bold`}>
                  {c.code}
                </div>
                <h4 className="font-bold text-deep-blue dark:text-white">{c.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue dark:text-white mb-4">Need to Ship Medical Equipment?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let our logistics team handle the complexities of international medical equipment trade. Get a shipping quote today.
          </p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Get a Shipping Quote
          </Link>
        </div>
      </section>
    </>
  );
}
