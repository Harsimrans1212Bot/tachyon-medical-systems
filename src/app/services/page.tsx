import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | Tachyon Medical Systems",
  description: "Comprehensive medical equipment services including refurbishment, buying & selling, import/export, installation, and maintenance.",
};

const services = [
  {
    title: "Equipment Refurbishment",
    description: "Our expert engineers restore pre-owned medical equipment to original manufacturer specifications. Every system undergoes rigorous testing, cosmetic restoration, and software updates to ensure it performs like new.",
    features: ["Full cosmetic restoration", "Software upgrades & calibration", "Component replacement", "Quality assurance testing", "Warranty coverage"],
    icon: "🔧",
    color: "bg-light-cyan/10 text-light-cyan",
  },
  {
    title: "Buy & Sell Equipment",
    description: "Whether you're looking to acquire new or pre-owned medical equipment, or sell your existing systems, we offer fair market valuations and connect buyers with sellers worldwide.",
    features: ["Fair market valuations", "Global buyer/seller network", "Equipment appraisals", "Trade-in programs", "Flexible financing options"],
    icon: "🤝",
    color: "bg-orange/10 text-orange",
  },
  {
    title: "Import & Export",
    description: "Navigate the complexities of international medical equipment trade with our experienced logistics team. We handle customs clearance, documentation, and compliance across borders.",
    features: ["Customs documentation", "International shipping", "Regulatory compliance", "Freight management", "Insurance coordination"],
    icon: "🌍",
    color: "bg-deep-blue/10 text-deep-blue",
  },
  {
    title: "Installation & Deinstallation",
    description: "Professional installation and deinstallation services by certified engineers. We ensure your equipment is properly set up, calibrated, and ready for clinical use from day one.",
    features: ["Site planning & preparation", "Professional installation", "Safe deinstallation", "System calibration", "Staff training"],
    icon: "⚙️",
    color: "bg-light-cyan/10 text-light-cyan",
  },
  {
    title: "Maintenance & Support",
    description: "Keep your medical equipment operating at peak performance with our preventive maintenance programs and responsive technical support services.",
    features: ["Preventive maintenance", "Emergency repairs", "Spare parts supply", "Remote diagnostics", "Service contracts"],
    icon: "🛡️",
    color: "bg-orange/10 text-orange",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Services</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Full Lifecycle Solutions</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              From acquisition to decommissioning, we provide comprehensive services to keep your medical facility running at its best.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <div key={service.title} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.color} text-3xl mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-deep-blue">{service.title}</h2>
                  <p className="text-gray-500 mt-4 leading-relaxed">{service.description}</p>
                  <ul className="mt-6 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-gray-600">
                        <svg className="w-5 h-5 text-light-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="h-72 rounded-2xl equipment-placeholder flex items-center justify-center">
                    <span className="text-6xl opacity-30">{service.icon}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Every healthcare facility has unique requirements. Let us design a tailored service package that meets your specific needs and budget.
          </p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Request a Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
