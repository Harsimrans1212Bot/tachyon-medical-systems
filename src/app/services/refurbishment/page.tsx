import type { Metadata } from "next";
import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Equipment Refurbishment | Tachyon Medical Systems",
  description: "Professional medical equipment refurbishment services for CT Scanners, MRI, PET-CT, Cath Labs, Mammography, Sonography, ECG, and Multi-Parameter Monitors. OEM-equivalent parts and full warranty.",
  alternates: { canonical: "https://www.tachyonmed.com/services/refurbishment" },
  openGraph: { url: "https://www.tachyonmed.com/services/refurbishment" },
};

const steps = [
  { num: "01", title: "Inspection", desc: "Comprehensive assessment of all mechanical, electrical, and software components. Detailed report on system condition." },
  { num: "02", title: "Disassembly", desc: "Systematic disassembly in our climate-controlled facility. Every component cataloged and evaluated." },
  { num: "03", title: "Component Refurbishment", desc: "Worn components replaced or reconditioned using OEM-equivalent parts. Precision machining and calibration." },
  { num: "04", title: "Reassembly", desc: "Expert reassembly following manufacturer specifications. New cables, seals, and consumables installed." },
  { num: "05", title: "Testing", desc: "Rigorous QA testing including phantom scans, dose measurements, image quality verification, and safety checks." },
  { num: "06", title: "Certification", desc: "IEC 60601 electrical safety certification. Full documentation package and warranty issued." },
];

const equipmentIcons: Record<string, { bg: string; svg: React.ReactElement }> = {
  "CT Scanner Refurbishment": {
    bg: "bg-[#0077B6]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
  },
  "MRI Refurbishment": {
    bg: "bg-[#E8651A]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
  },
  "PET-CT Refurbishment": {
    bg: "bg-[#0077B6]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="12" cy="12" r="3" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.07-5.07l-2.83 2.83M9.76 14.24l-2.83 2.83m11.14 0l-2.83-2.83M9.76 9.76L6.93 6.93" /></svg>,
  },
  "Cath Lab Refurbishment": {
    bg: "bg-[#E8651A]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
  },
  "Mammography Refurbishment": {
    bg: "bg-[#0077B6]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  },
  "Sonography/Ultrasound Refurbishment": {
    bg: "bg-[#E8651A]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" /></svg>,
  },
  "ECG System Refurbishment": {
    bg: "bg-[#0077B6]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 12h3l3-9 4 18 3-9h3" /></svg>,
  },
  "Multi-Parameter Monitor Refurbishment": {
    bg: "bg-[#E8651A]",
    svg: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
  },
};

const equipment = [
  {
    title: "CT Scanner Refurbishment",
    items: [
      "X-ray tube replacement or reconditioning — lifespan assessment, anode/cathode inspection, housing replacement",
      "Detector array calibration — individual detector element testing, gain correction, geometric alignment",
      "Gantry bearing replacement — precision bearing installation, slip ring service, rotation speed verification",
      "Software updates — latest reconstruction algorithms, protocol optimization, security patches",
      "Cooling system maintenance — chiller service, coolant replacement, heat exchanger cleaning, pump testing",
      "High-voltage generator service — capacitor bank testing, inverter board replacement, kV/mA calibration",
    ],
  },
  {
    title: "MRI Refurbishment",
    items: [
      "Magnet re-shimming — passive and active shimming to restore field homogeneity within +/-1 ppm",
      "Gradient coil testing — linearity verification, eddy current compensation, acoustic noise assessment",
      "RF coil refurbishment — element testing, preamplifier replacement, tuning and matching optimization",
      "Cryogen (helium) system service — helium level assessment, leak detection, compressor line service",
      "Cold head replacement — Gifford-McMahon cycle cold head, vibration dampening, temperature monitoring",
      "Patient table service — motor replacement, positioning accuracy verification, weight capacity testing",
    ],
  },
  {
    title: "PET-CT Refurbishment",
    items: [
      "Crystal detector replacement — LSO/LYSO scintillator block inspection, energy resolution optimization",
      "PMT calibration — photomultiplier tube gain matching, timing alignment, coincidence window tuning",
      "CT component refurbishment — full CT subsystem service including tube, detectors, and DAS",
      "Normalization and calibration — blank scan acquisition, scatter correction, attenuation map verification",
      "Gantry integration testing — PET-CT alignment verification, fusion accuracy assessment",
    ],
  },
  {
    title: "Cath Lab Refurbishment",
    items: [
      "Flat panel detector refurbishment — pixel defect mapping, gain/offset calibration, DQE optimization",
      "C-arm mechanical service — bearing replacement, counterbalance adjustment, movement range verification",
      "Image chain calibration — automatic brightness control, edge enhancement, noise reduction tuning",
      "Table service — motor drive replacement, Bucky tray mechanism, carbon fiber top inspection",
      "Injector system integration — contrast injector interface testing, protocol synchronization",
    ],
  },
  {
    title: "Mammography Refurbishment",
    items: [
      "Compression paddle replacement — force calibration, parallel alignment, thickness accuracy verification",
      "Detector calibration — flat-field correction, pixel defect mapping, contrast-detail resolution testing",
      "X-ray tube replacement — molybdenum/rhodium target assessment, focal spot measurement, HVL verification",
      "AEC calibration — automatic exposure control optimization for various breast thicknesses and compositions",
      "Stereotactic biopsy attachment service — needle guidance accuracy, coordinate system verification",
    ],
  },
  {
    title: "Sonography/Ultrasound Refurbishment",
    items: [
      "Transducer refurbishment — element testing, lens replacement, acoustic impedance matching, cable repair",
      "Display system upgrade — monitor calibration, DICOM grayscale conformance, backlight replacement",
      "System board service — power supply testing, processor board diagnostics, memory upgrades",
      "Software updates — latest imaging presets, measurement packages, connectivity protocols",
      "Mechanical service — keyboard/trackball replacement, arm articulation, wheel and brake service",
    ],
  },
  {
    title: "ECG System Refurbishment",
    items: [
      "Amplifier calibration — gain accuracy, frequency response verification, CMRR testing",
      "Lead wire and cable replacement — impedance testing, connector inspection, shielding integrity",
      "Thermal printer service — print head replacement, paper feed mechanism, print quality calibration",
      "Algorithm updates — latest interpretation software, arrhythmia detection, measurement accuracy",
      "Battery and power system — cell replacement, charging circuit testing, runtime verification",
    ],
  },
  {
    title: "Multi-Parameter Monitor Refurbishment",
    items: [
      "Display panel replacement — LCD/LED screen, touchscreen digitizer, brightness and contrast calibration",
      "Module refurbishment — SpO2, ECG, NIBP, IBP, EtCO2, and temperature module testing and calibration",
      "Alarm system verification — audio and visual alarm testing, threshold accuracy, response time validation",
      "Network connectivity — HL7 interface testing, central station communication, wireless module service",
      "Battery and mounting — battery cell replacement, rail clamp service, wall mount bracket inspection",
    ],
  },
];

export default function RefurbishmentPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.tachyonmed.com/"}, {name:"Services",url:"https://www.tachyonmed.com/services"}, {name:"Refurbishment",url:"https://www.tachyonmed.com/services/refurbishment"}]} />
      <ServiceJsonLd name="Medical Equipment Refurbishment" description="Professional refurbishment of medical imaging equipment to OEM specifications." url="https://www.tachyonmed.com/services/refurbishment" />
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-light-cyan/70 hover:text-light-cyan text-sm font-medium transition-colors">
              &larr; Back to Services
            </Link>
            <span className="block text-sm font-bold tracking-wider uppercase text-light-cyan mt-6">Refurbishment Services</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Medical Equipment Refurbishment</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Our state-of-the-art refurbishment process restores pre-owned medical imaging equipment to OEM specifications — delivering like-new performance at a fraction of the cost.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Process</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Six-Step Refurbishment Process</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4 max-w-2xl mx-auto">Every system undergoes our rigorous six-step process to ensure it meets or exceeds original manufacturer specifications.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative bg-gray-50 dark:bg-white/5 rounded-2xl p-8 card-hover border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-full ${i % 2 === 0 ? 'bg-[#E8651A]' : 'bg-[#0077B6]'} text-white flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {step.num}
                  </div>
                  <span className="text-4xl font-black text-orange">{step.num}</span>
                </div>
                <h3 className="text-xl font-bold text-deep-blue dark:text-white">{step.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment-Specific Sections */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-orange">Equipment Specialties</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">What We Refurbish</h2>
          </div>
          <div className="space-y-12">
            {equipment.map((eq) => {
              const iconData = equipmentIcons[eq.title];
              return (
                <div key={eq.title} className="bg-white dark:bg-white/5 rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100 dark:border-white/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${iconData?.bg || 'bg-[#0077B6]'} text-white flex items-center justify-center flex-shrink-0`}>
                      {iconData?.svg}
                    </div>
                    <h3 className="text-2xl font-black text-deep-blue dark:text-white">{eq.title}</h3>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {eq.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <svg className="w-5 h-5 text-light-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Quality Assurance</span>
              <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Our Quality Commitment</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Every refurbished system undergoes comprehensive testing before leaving our facility. We use only OEM-equivalent or genuine parts, and back our work with a full warranty.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "IEC 60601 electrical safety compliance testing",
                  "Full phantom scan quality assurance",
                  "Dose measurement and optimization",
                  "OEM-equivalent replacement parts",
                  "Complete cosmetic restoration",
                  "12-month parts and labor warranty",
                  "Detailed refurbishment documentation",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="h-80 rounded-2xl equipment-placeholder flex items-center justify-center">
              <svg className="w-20 h-20 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.384-3.19A2 2 0 015 10.15V6a2 2 0 012-2h10a2 2 0 012 2v4.15a2 2 0 01-1.036 1.83l-5.384 3.19a2 2 0 01-2.16 0zM14.5 7.5L12 9l-2.5-1.5M12 9v4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue dark:text-white mb-4">Ready to Refurbish Your Equipment?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Get a detailed assessment and quote for your medical equipment refurbishment. Our team of certified engineers is ready to help.
          </p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
