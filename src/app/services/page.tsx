import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services | Tachyon Medical Systems",
  description: "Comprehensive medical equipment services including refurbishment, buying & selling, import/export, installation, and maintenance.",
  alternates: { canonical: "https://www.tachyonmed.com/services" },
  openGraph: { url: "https://www.tachyonmed.com/services" },
};

const serviceIcons: Record<string, { bg: string; svg: React.ReactElement }> = {
  "Equipment Refurbishment": {
    bg: "bg-[#E8651A]",
    svg: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A2 2 0 015 10.15V6a2 2 0 012-2h10a2 2 0 012 2v4.15a2 2 0 01-1.036 1.83l-5.384 3.19a2 2 0 01-2.16 0zM14.5 7.5L12 9l-2.5-1.5M12 9v4" /></svg>,
  },
  "Installation": {
    bg: "bg-[#0077B6]",
    svg: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
  },
  "Maintenance & Support": {
    bg: "bg-[#E8651A]",
    svg: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  "Buy & Sell Equipment": {
    bg: "bg-[#0077B6]",
    svg: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
  },
  "Import & Export": {
    bg: "bg-[#003366]",
    svg: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  },
};

const services = [
  {
    title: "Equipment Refurbishment",
    description: "Our expert engineers restore pre-owned medical equipment to original manufacturer specifications. Every system undergoes rigorous testing, cosmetic restoration, and software updates to ensure it performs like new.",
    features: ["Full cosmetic restoration", "Software upgrades & calibration", "Component replacement", "Quality assurance testing", "Warranty coverage"],
    href: "/services/refurbishment",
    image: "/refurbishment.jpg",
  },
  {
    title: "Installation",
    description: "Professional installation and uninstallation services by certified engineers. We ensure your equipment is properly set up, calibrated, and ready for clinical use from day one.",
    features: ["Site planning & preparation", "Professional installation", "Safe uninstallation", "System calibration", "Staff training"],
    href: "/services/installation",
    image: "/installation.jpg",
  },
  {
    title: "Maintenance & Support",
    description: "Keep your medical equipment operating at peak performance with our preventive maintenance programs and responsive technical support services.",
    features: ["Preventive maintenance", "Emergency repairs", "Spare parts supply", "Remote diagnostics", "Service contracts"],
    href: "/contact?service=maintenance",
    image: "/maintenance.jpg",
  },
  {
    title: "Buy & Sell Equipment",
    description: "Whether you're looking to acquire new or pre-owned medical equipment, or sell your existing systems, we offer fair market valuations and connect buyers with sellers worldwide.",
    features: ["Fair market valuations", "Global buyer/seller network", "Equipment appraisals", "Trade-in programs", "Flexible financing options"],
    href: "/services/buy-sell",
    image: "/buy-sell.jpg",
  },
  {
    title: "Import & Export",
    description: "Navigate the complexities of international medical equipment trade with our experienced logistics team. We handle customs clearance, documentation, and compliance across borders.",
    features: ["Customs documentation", "International shipping", "Regulatory compliance", "Freight management", "Insurance coordination"],
    href: "/services/import-export",
    image: "/import-export.jpg",
  },
];

export default function Services() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.tachyonmed.com/"}, {name:"Services",url:"https://www.tachyonmed.com/services"}]} />
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
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => {
              const iconData = serviceIcons[service.title];
              return (
                <div key={service.title} className={`flex flex-col lg:flex-row gap-12 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                  <div className="flex-1">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${iconData?.bg || 'bg-[#0077B6]'} text-white mb-6`}>
                      {iconData?.svg}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-deep-blue dark:text-white">{service.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">{service.description}</p>
                    <div className="flex flex-row gap-4 mt-6">
                      <ul className="space-y-3 flex-1 min-w-0">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <svg className="w-4 h-4 text-light-cyan flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Image beside bullet points on mobile */}
                      <div className="w-36 sm:w-44 lg:hidden flex-shrink-0">
                        {service.image ? (
                          <div className="relative h-full min-h-[160px] rounded-xl overflow-hidden">
                            <Image src={service.image} alt={service.title} fill className="object-cover object-center" sizes="176px" />
                          </div>
                        ) : (
                          <div className="h-full min-h-[160px] rounded-xl equipment-placeholder flex items-center justify-center">
                            <div className={`w-10 h-10 rounded-lg ${iconData?.bg || 'bg-[#0077B6]'} text-white flex items-center justify-center opacity-30`}>
                              {iconData?.svg}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    {service.href && (
                      <Link href={service.href} className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/80 transition-all hover:shadow-lg text-sm">
                        Learn More
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                      </Link>
                    )}
                  </div>
                  {/* Desktop side image */}
                  <div className="hidden lg:block flex-1 w-full">
                    {service.image ? (
                      <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden">
                        <Image src={service.image} alt={service.title} fill className="object-cover object-center" sizes="50vw" />
                      </div>
                    ) : (
                      <div className="h-72 rounded-2xl equipment-placeholder flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-xl ${iconData?.bg || 'bg-[#0077B6]'} text-white flex items-center justify-center opacity-30`}>
                          {iconData?.svg}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue dark:text-white mb-4">Need a Custom Solution?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
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
