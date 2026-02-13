import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Import & Export Services | Tachyon Medical Systems",
  description: "Global medical equipment import and export services. Customs clearance, freight logistics, regulatory compliance across USA, India, Middle East, and UK.",
};

const routes = [
  { from: "🇺🇸 USA", to: "🇮🇳 India", desc: "CT, MRI, and PET-CT systems" },
  { from: "🇮🇳 India", to: "🇦🇪 UAE", desc: "Refurbished imaging equipment" },
  { from: "🇮🇳 India", to: "🇸🇦 Saudi Arabia", desc: "Hospital equipment packages" },
  { from: "🇮🇳 India", to: "🇬🇧 United Kingdom", desc: "Specialty diagnostic systems" },
  { from: "🇺🇸 USA", to: "🇦🇪 Middle East", desc: "Premium imaging solutions" },
  { from: "🇬🇧 UK", to: "🇮🇳 India", desc: "Decommissioned hospital systems" },
];

const services = [
  {
    title: "Customs Clearance",
    icon: "📋",
    desc: "Expert handling of customs documentation, duty classification, and clearance procedures. We navigate complex import regulations for medical devices in every destination country.",
    points: ["HS code classification for medical equipment", "Import license and permit coordination", "Duty optimization and exemption applications", "Port clearance and inspection management"],
  },
  {
    title: "Freight Logistics",
    icon: "🚢",
    desc: "End-to-end freight management for sensitive medical equipment. Sea freight, air freight, and multimodal transport solutions tailored to your timeline and budget.",
    points: ["Containerized sea freight (20ft/40ft)", "Air freight for urgent deliveries", "Door-to-door and port-to-port options", "Real-time shipment tracking"],
  },
  {
    title: "Regulatory Compliance",
    icon: "⚖️",
    desc: "Full regulatory compliance management to ensure your equipment meets all destination country requirements before shipping.",
    points: ["FDA 510(k) clearance documentation (USA)", "AERB licensing and type approval (India)", "CE marking verification (Europe/UK)", "SFDA registration support (Saudi Arabia)", "MOH requirements (UAE)"],
  },
  {
    title: "Specialized Packaging",
    icon: "📦",
    desc: "Custom crating and packaging engineered for sensitive medical equipment. Climate-controlled and shock-resistant solutions for safe transport.",
    points: ["Custom wooden crating with foam inserts", "Vibration dampening for sensitive detectors", "Climate-controlled packaging for MRI components", "Helium dewar specialized containers"],
  },
  {
    title: "Insurance Coverage",
    icon: "🛡️",
    desc: "Comprehensive cargo insurance covering all risks during transit. We work with specialist marine insurers who understand high-value medical equipment.",
    points: ["All-risk marine cargo insurance", "Coverage from warehouse to final destination", "High-value equipment specialist underwriters", "Quick claims processing and support"],
  },
];

const countries = [
  { flag: "🇺🇸", name: "United States", detail: "FDA regulated" },
  { flag: "🇮🇳", name: "India", detail: "AERB licensed" },
  { flag: "🇦🇪", name: "UAE", detail: "MOH approved" },
  { flag: "🇸🇦", name: "Saudi Arabia", detail: "SFDA registered" },
  { flag: "🇬🇧", name: "United Kingdom", detail: "CE/UKCA marked" },
  { flag: "🇩🇪", name: "Germany", detail: "CE marked" },
  { flag: "🇳🇬", name: "Nigeria", detail: "NAFDAC cleared" },
  { flag: "🇰🇪", name: "Kenya", detail: "PPB registered" },
  { flag: "🇧🇩", name: "Bangladesh", detail: "DGDA approved" },
  { flag: "🇱🇰", name: "Sri Lanka", detail: "NMRA registered" },
  { flag: "🇳🇵", name: "Nepal", detail: "DDA approved" },
  { flag: "🇴🇲", name: "Oman", detail: "MOH registered" },
];

export default function ImportExportPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-light-cyan/70 hover:text-light-cyan text-sm font-medium transition-colors">
              ← Back to Services
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Global Network</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Active Trade Routes</h2>
            <p className="text-gray-500 mt-4">Our established corridors ensure reliable and efficient equipment delivery worldwide.</p>
          </div>

          {/* SVG Route Map */}
          <div className="relative bg-deep-blue/5 rounded-2xl p-8 mb-8 overflow-hidden">
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
              <text x="150" y="210" textAnchor="middle" className="text-xs" fill="#003366" fontWeight="bold" fontSize="14">🇺🇸 USA</text>
              {/* India */}
              <circle cx="520" cy="200" r="30" fill="#E8651A" opacity="0.15" />
              <circle cx="520" cy="200" r="8" fill="#E8651A" />
              <text x="520" y="250" textAnchor="middle" className="text-xs" fill="#E8651A" fontWeight="bold" fontSize="14">🇮🇳 India</text>
              {/* UAE */}
              <circle cx="460" cy="280" r="25" fill="#00A8E8" opacity="0.15" />
              <circle cx="460" cy="280" r="6" fill="#00A8E8" />
              <text x="460" y="320" textAnchor="middle" className="text-xs" fill="#00A8E8" fontWeight="bold" fontSize="14">🇦🇪 UAE</text>
              {/* Saudi */}
              <circle cx="420" cy="240" r="25" fill="#00A8E8" opacity="0.15" />
              <circle cx="420" cy="240" r="6" fill="#00A8E8" />
              <text x="380" y="260" textAnchor="middle" className="text-xs" fill="#00A8E8" fontWeight="bold" fontSize="12">🇸🇦 Saudi</text>
              {/* UK */}
              <circle cx="350" cy="100" r="25" fill="#003366" opacity="0.15" />
              <circle cx="350" cy="100" r="6" fill="#003366" />
              <text x="350" y="80" textAnchor="middle" className="text-xs" fill="#003366" fontWeight="bold" fontSize="14">🇬🇧 UK</text>
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
              <div key={i} className="bg-gray-50 rounded-2xl p-6 card-hover border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-lg">{route.from}</span>
                  <svg className="w-5 h-5 text-light-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-lg">{route.to}</span>
                </div>
                <p className="text-sm text-gray-500">{route.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">What We Handle</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Comprehensive Trade Services</h2>
          </div>
          <div className="space-y-8">
            {services.map((svc) => (
              <div key={svc.title} className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <div className="flex items-start gap-6">
                  <span className="text-4xl flex-shrink-0">{svc.icon}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-deep-blue">{svc.title}</h3>
                    <p className="text-gray-500 mt-2 leading-relaxed">{svc.desc}</p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {svc.points.map((p) => (
                        <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Worldwide Reach</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Countries We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {countries.map((c) => (
              <div key={c.name} className="bg-gray-50 rounded-2xl p-6 text-center card-hover border border-gray-100">
                <span className="text-4xl block mb-3">{c.flag}</span>
                <h4 className="font-bold text-deep-blue">{c.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{c.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue mb-4">Need to Ship Medical Equipment?</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
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
