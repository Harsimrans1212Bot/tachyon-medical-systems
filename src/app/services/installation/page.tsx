import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Installation Services | Tachyon Medical Systems",
  description: "Professional medical equipment installation and uninstallation services. CT Scanner, MRI, PET-CT, Cath Lab, Mammography with site planning and training.",
};

const pricing = [
  { equipment: "CT Scanner", range: "$50,000 – $150,000", icon: "🏥", includes: "Site prep, rigging, shielding, installation, calibration, training" },
  { equipment: "MRI System", range: "$100,000 – $300,000", icon: "🧲", includes: "RF cage, magnet installation, cryogen fill, shimming, training" },
  { equipment: "PET-CT", range: "$75,000 – $200,000", icon: "⚛️", includes: "Shielding, installation, normalization, calibration, training" },
  { equipment: "Cath Lab", range: "$80,000 – $250,000", icon: "❤️", includes: "Structural reinforcement, installation, image chain setup, training" },
  { equipment: "Mammography", range: "$15,000 – $40,000", icon: "🩺", includes: "Installation, QC testing, MQSA compliance, training" },
];

const phases = [
  {
    title: "Site Planning & Assessment",
    icon: "📐",
    items: ["Floor loading analysis and structural engineering", "Room dimension and layout optimization", "HVAC requirements and climate control planning", "Electrical capacity assessment (3-phase power, UPS)", "Network and PACS connectivity planning"],
  },
  {
    title: "Structural Preparation",
    icon: "🏗️",
    items: ["Floor reinforcement for heavy equipment (MRI: 10,000+ lbs)", "Radiation shielding — lead-lined walls, doors, and glass", "RF shielding (Faraday cage) for MRI suites", "Vibration isolation for sensitive imaging systems", "Control room construction and window installation"],
  },
  {
    title: "Electrical & Mechanical",
    icon: "⚡",
    items: ["Dedicated power supply installation (480V/3-phase for MRI)", "Uninterruptible power supply (UPS) setup", "Chilled water supply for CT and MRI cooling", "Medical gas connections where required", "Emergency power and grounding systems"],
  },
  {
    title: "Rigging & Placement",
    icon: "🏋️",
    items: ["Specialized rigging for heavy components (MRI magnets up to 15 tons)", "Precision placement using air bearings and hydraulic systems", "Gantry assembly and alignment", "Patient table installation and leveling", "Component interconnection and cable routing"],
  },
  {
    title: "Calibration & Testing",
    icon: "📊",
    items: ["Full system calibration per manufacturer specifications", "Phantom image quality testing", "Radiation dose measurement and optimization", "Safety interlock and emergency stop verification", "DICOM connectivity and PACS integration testing"],
  },
  {
    title: "Training & Handover",
    icon: "🎓",
    items: ["Operator training for radiologists and technologists", "Basic maintenance training for biomedical engineers", "Safety procedures and emergency protocols", "Documentation package and user manuals", "Warranty activation and support contact setup"],
  },
];

export default function InstallationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-light-cyan/70 hover:text-light-cyan text-sm font-medium transition-colors">
              ← Back to Services
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Investment Guide</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Installation Cost Estimates</h2>
            <p className="text-gray-500 mt-4">Transparent pricing to help you plan your equipment investment.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricing.map((item) => (
              <div key={item.equipment} className="bg-gray-50 rounded-2xl p-8 card-hover border border-gray-100">
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-black text-deep-blue">{item.equipment}</h3>
                <p className="text-2xl font-black text-light-cyan mt-2">{item.range}</p>
                <p className="text-sm text-gray-500 mt-4">{item.includes}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-orange/5 border border-orange/20 rounded-2xl p-6 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-bold text-orange">⚠️ Disclaimer:</span> Prices are estimates and vary based on site conditions, geographic location, equipment configuration, and local regulations. Contact us for a detailed, customized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Phases */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue mt-3">Installation Phases</h2>
          </div>
          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div key={phase.title} className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-light-cyan/10 text-2xl flex-shrink-0">
                    {phase.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-light-cyan uppercase">Phase {i + 1}</span>
                    <h3 className="text-xl font-black text-deep-blue">{phase.title}</h3>
                  </div>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-orange">Also Available</span>
              <h2 className="text-3xl font-black text-deep-blue mt-3">Uninstallation Services</h2>
              <p className="text-gray-500 mt-4 leading-relaxed">
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
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-80 rounded-2xl equipment-placeholder flex items-center justify-center">
              <span className="text-7xl opacity-20">⚙️</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue mb-4">Plan Your Installation</h2>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
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
