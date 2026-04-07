import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation Services | Tachyon Medical Systems",
  description: "Professional medical equipment installation and uninstallation services. CT Scanner, MRI, PET-CT, Cath Lab, Mammography with site planning and training.",
  alternates: { canonical: "https://www.tachyonmed.com/services/installation" },
  openGraph: { url: "https://www.tachyonmed.com/services/installation" },
};

const pricingIcons: Record<string, { bg: string; label: string }> = {
  "CT Scanner":   { bg: "bg-[#0077B6]", label: "CT" },
  "MRI System":   { bg: "bg-[#E8651A]", label: "MRI" },
  "PET-CT":       { bg: "bg-[#0077B6]", label: "PET" },
  "Cath Lab":     { bg: "bg-[#E8651A]", label: "CATH" },
  "Mammography":  { bg: "bg-[#0077B6]", label: "MAM" },
};

const pricing = [
  { equipment: "CT Scanner", range: "$50,000 - $150,000", includes: "Site prep, rigging, shielding, installation, calibration, training" },
  { equipment: "MRI System", range: "$100,000 - $300,000", includes: "RF cage, magnet installation, cryogen fill, shimming, training" },
  { equipment: "PET-CT", range: "$75,000 - $200,000", includes: "Shielding, installation, normalization, calibration, training" },
  { equipment: "Cath Lab", range: "$80,000 - $250,000", includes: "Structural reinforcement, installation, image chain setup, training" },
  { equipment: "Mammography", range: "$15,000 - $40,000", includes: "Installation, QC testing, MQSA compliance, training" },
];

const phaseIcons: React.ReactElement[] = [
  // Phase 1 - Site Planning (ruler/compass)
  <svg key="p1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  // Phase 2 - Structural (building)
  <svg key="p2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
  // Phase 3 - Electrical (lightning bolt)
  <svg key="p3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  // Phase 4 - Rigging (cube/box)
  <svg key="p4" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
  // Phase 5 - Calibration (chart bar)
  <svg key="p5" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  // Phase 6 - Training (academic cap)
  <svg key="p6" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>,
];

const phases = [
  {
    title: "Site Planning & Assessment",
    items: ["Floor loading analysis and structural engineering", "Room dimension and layout optimization", "HVAC requirements and climate control planning", "Electrical capacity assessment (3-phase power, UPS)", "Network and PACS connectivity planning"],
  },
  {
    title: "Structural Preparation",
    items: ["Floor reinforcement for heavy equipment (MRI: 10,000+ lbs)", "Radiation shielding - lead-lined walls, doors, and glass", "RF shielding (Faraday cage) for MRI suites", "Vibration isolation for sensitive imaging systems", "Control room construction and window installation"],
  },
  {
    title: "Electrical & Mechanical",
    items: ["Dedicated power supply installation (480V/3-phase for MRI)", "Uninterruptible power supply (UPS) setup", "Chilled water supply for CT and MRI cooling", "Medical gas connections where required", "Emergency power and grounding systems"],
  },
  {
    title: "Rigging & Placement",
    items: ["Specialized rigging for heavy components (MRI magnets up to 15 tons)", "Precision placement using air bearings and hydraulic systems", "Gantry assembly and alignment", "Patient table installation and leveling", "Component interconnection and cable routing"],
  },
  {
    title: "Calibration & Testing",
    items: ["Full system calibration per manufacturer specifications", "Phantom image quality testing", "Radiation dose measurement and optimization", "Safety interlock and emergency stop verification", "DICOM connectivity and PACS integration testing"],
  },
  {
    title: "Training & Handover",
    items: ["Operator training for radiologists and technologists", "Basic maintenance training for biomedical engineers", "Safety procedures and emergency protocols", "Documentation package and user manuals", "Warranty activation and support contact setup"],
  },
];

export default function InstallationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.tachyonmed.com/"}, {name:"Services",url:"https://www.tachyonmed.com/services"}, {name:"Installation",url:"https://www.tachyonmed.com/services/installation"}]} />
      <ServiceJsonLd name="Medical Equipment Installation" description="Professional installation and deinstallation of CT, MRI, PET-CT, Cath Lab, and Mammography systems." url="https://www.tachyonmed.com/services/installation" />
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-light-cyan/70 hover:text-light-cyan text-sm font-medium transition-colors">
              &larr; Back to Services
            </Link>
            <span className="block text-sm font-bold tracking-wider uppercase text-light-cyan mt-6">Installation Services</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Professional Installation</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              From site planning to staff training, our certified engineers ensure your medical imaging equipment is installed safely, calibrated precisely, and ready for clinical use.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Investment Guide</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Installation Cost Estimates</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Transparent pricing to help you plan your equipment investment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((item) => {
              const iconData = pricingIcons[item.equipment];
              return (
                <div key={item.equipment} className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 card-hover border border-gray-100 dark:border-white/10">
                  <div className={`w-12 h-12 rounded-lg ${iconData?.bg || 'bg-[#0077B6]'} text-white flex items-center justify-center font-bold text-xs mb-4`}>
                    {iconData?.label || ""}
                  </div>
                  <h3 className="text-xl font-black text-deep-blue dark:text-white">{item.equipment}</h3>
                  <p className="text-2xl font-black text-light-cyan mt-2">{item.range}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">{item.includes}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-10 bg-orange/5 dark:bg-orange/10 border border-orange/20 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <span className="font-bold text-orange">Note:</span> Prices are estimates and vary based on site conditions, geographic location, equipment configuration, and local regulations. Contact us for a detailed, customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Phases */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Installation Phases</h2>
          </div>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={phase.title} className="bg-white dark:bg-white/5 rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${i % 2 === 0 ? 'bg-[#E8651A]' : 'bg-[#0077B6]'} text-white flex-shrink-0`}>
                    {phaseIcons[i]}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-light-cyan uppercase">Phase {i + 1}</span>
                    <h3 className="text-xl font-black text-deep-blue dark:text-white">{phase.title}</h3>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 text-light-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Uninstallation */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-orange">Also Available</span>
              <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Uninstallation Services</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Safe, professional removal of medical imaging equipment. Our team ensures proper disconnection, cryogen recovery (MRI), component protection, and site restoration.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Safe system shutdown and disconnection",
                  "MRI helium recovery and magnet ramp-down",
                  "Component disassembly and protective packaging",
                  "Rigging and removal from facility",
                  "Site restoration and cleanup",
                  "Radiation survey and clearance (if applicable)",
                  "Documentation and chain of custody records",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-80 rounded-2xl equipment-placeholder flex items-center justify-center">
              <svg className="w-20 h-20 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.573-1.066z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue dark:text-white mb-4">Plan Your Installation</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a detailed site assessment and installation quote tailored to your facility. Our engineering team is ready to help.
          </p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Request a Site Assessment
          </Link>
        </div>
      </section>
    </>
  );
}
