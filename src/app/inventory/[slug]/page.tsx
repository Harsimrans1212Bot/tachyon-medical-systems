import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Machine database - in a real app, this would come from a database
const allMachines = [
  // CT Scanners
  {
    slug: "ge-optima-660",
    name: "GE Optima 660",
    category: "CT Scanners",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "64-Slice",
      "Gantry Aperture": "70 cm",
      "Reconstruction Time": "< 1 second",
      "kVp Range": "80, 100, 120, 140 kVp",
      "Scan Time": "0.35 - 4 seconds",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description: "The GE Optima 660 is a premium 64-slice CT scanner offering exceptional image quality with reduced dose. Features advanced reconstruction algorithms and high-speed scanning capabilities for improved patient throughput.",
    features: [
      "ASiR (Adaptive Statistical iterative Reconstruction)",
      "Smart mA automatic exposure control",
      "VolumeShuttle for cardiac imaging",
      "Organ dose modulation",
      "One-button protocols",
    ],
  },
  {
    slug: "ge-brightspeed-8",
    name: "GE BrightSpeed 8",
    category: "CT Scanners",
    price: "$120,000 - $180,000",
    condition: "Refurbished - Very Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "8-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 100, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description: "The GE BrightSpeed 8 delivers reliable 8-slice CT imaging with excellent image quality. Ideal for routine examinations with proven clinical performance and cost-effective operation.",
    features: [
      "Smart mA dose modulation",
      "HiLight Advantage detector",
      "Fast reconstruction times",
      "Comprehensive protocols library",
      "User-friendly interface",
    ],
  },
  {
    slug: "ge-brightspeed-16",
    name: "GE BrightSpeed 16",
    category: "CT Scanners",
    price: "$150,000 - $220,000",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "16-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 100, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description: "The GE BrightSpeed 16 provides enhanced 16-slice imaging capability with superior image quality and faster scan times. Perfect for mid-volume imaging centers.",
    features: [
      "Smart mA dose optimization",
      "HiLight Advantage detector technology",
      "Advanced reconstruction algorithms",
      "Comprehensive cardiac capabilities",
      "Streamlined workflow",
    ],
  },
  {
    slug: "ge-lightspeed-8",
    name: "GE LightSpeed 8",
    category: "CT Scanners",
    price: "$80,000 - $130,000",
    condition: "Refurbished - Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "8-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description: "The GE LightSpeed 8 is a dependable 8-slice helical CT scanner offering consistent image quality for routine clinical applications. Cost-effective solution for small to mid-size facilities.",
    features: [
      "Helical and axial scanning modes",
      "HiLight detector system",
      "User-friendly operation",
      "Reliable performance",
      "Established clinical protocols",
    ],
  },
  {
    slug: "ge-lightspeed-16",
    name: "GE LightSpeed 16",
    category: "CT Scanners",
    price: "$100,000 - $160,000",
    condition: "Refurbished - Very Good",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "16-Slice",
      "Gantry Aperture": "70 cm",
      "Rotation Time": "0.5 - 2 seconds",
      "kVp Range": "80, 120, 140 kVp",
      "Max Scan Length": "1800 mm",
      "Table Weight Capacity": "204 kg (450 lbs)",
    },
    description: "The GE LightSpeed 16 provides enhanced multi-slice imaging with improved scan speed and image quality. Reliable platform for diverse clinical applications.",
    features: [
      "16-slice helical scanning",
      "HiLight detector technology",
      "Cardiac and vascular imaging",
      "Efficient patient workflow",
      "Proven reliability",
    ],
  },
  {
    slug: "ge-revolution-act",
    name: "GE Revolution ACT",
    category: "CT Scanners",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "256-Slice",
      "Coverage": "160 mm",
      "Rotation Time": "0.28 seconds",
      "kVp Range": "80-140 kVp with GSI",
      "Detector": "Gemstone detector",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description: "The GE Revolution ACT represents breakthrough CT technology with ultra-fast scanning and exceptional image quality. Features advanced cardiac and spectral imaging capabilities.",
    features: [
      "Revolution detector technology",
      "ASiR-V iterative reconstruction",
      "Spectral imaging capabilities",
      "Single heartbeat cardiac imaging",
      "Ultra-low dose protocols",
    ],
  },
  {
    slug: "ge-revolution-evo",
    name: "GE Revolution EVO",
    category: "CT Scanners",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "256-Slice",
      "Coverage": "160 mm",
      "Rotation Time": "0.28 seconds",
      "kVp Range": "80-140 kVp",
      "Detector": "Revolutionary detector",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description: "The GE Revolution EVO delivers premium CT imaging with advanced reconstruction and dose optimization. Ideal for high-volume facilities requiring exceptional image quality.",
    features: [
      "Revolutionary detector system",
      "ASiR-V reconstruction",
      "Smart Workflow protocols",
      "Dose optimization technology",
      "Advanced cardiac imaging",
    ],
  },
  {
    slug: "ge-revolution-gsi",
    name: "GE Revolution GSI",
    category: "CT Scanners",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/ct-scanner.jpg",
    specifications: {
      "Slice Count": "256-Slice",
      "Coverage": "160 mm",
      "Rotation Time": "0.28 seconds",
      "Spectral Imaging": "Gemstone Spectral Imaging",
      "Detector": "Gemstone detector",
      "Table Weight Capacity": "227 kg (500 lbs)",
    },
    description: "The GE Revolution GSI combines advanced CT technology with Gemstone Spectral Imaging, providing unprecedented tissue characterization and material decomposition capabilities.",
    features: [
      "Gemstone Spectral Imaging (GSI)",
      "Material decomposition",
      "Monochromatic imaging",
      "ASiR-V reconstruction",
      "Advanced spectral applications",
    ],
  },
  // MRI Systems
  {
    slug: "ge-1-5t-mri",
    name: "GE 1.5T MRI",
    category: "MRI Systems",
    price: "$200,000 - $350,000",
    condition: "Refurbished - Very Good",
    image: "/mri.jpg",
    specifications: {
      "Field Strength": "1.5 Tesla",
      "Bore Size": "60 cm",
      "Gradient Strength": "33 mT/m",
      "Slew Rate": "120 T/m/s",
      "RF System": "Multi-channel",
      "Table Weight Capacity": "250 kg (550 lbs)",
    },
    description: "Reliable 1.5T MRI system providing excellent image quality for routine neurological, musculoskeletal, and body imaging applications.",
    features: [
      "High-resolution imaging",
      "Fast scanning protocols",
      "Multiple coil configurations",
      "User-friendly interface",
      "Comprehensive pulse sequences",
    ],
  },
  {
    slug: "ge-3-0t-mri",
    name: "GE 3.0T MRI",
    category: "MRI Systems",
    price: "$400,000 - $650,000",
    condition: "Refurbished - Excellent",
    image: "/mri.jpg",
    specifications: {
      "Field Strength": "3.0 Tesla",
      "Bore Size": "60 cm",
      "Gradient Strength": "50 mT/m",
      "Slew Rate": "200 T/m/s",
      "RF System": "Multi-channel with parallel imaging",
      "Table Weight Capacity": "250 kg (550 lbs)",
    },
    description: "High-field 3.0T MRI system delivering superior image quality and advanced imaging capabilities for research and clinical applications.",
    features: [
      "Superior signal-to-noise ratio",
      "Advanced parallel imaging",
      "Functional and spectroscopy imaging",
      "High-resolution protocols",
      "Research-grade capabilities",
    ],
  },
  // Add more machines as needed...
  {
    slug: "philips-fd-10-10",
    name: "Philips FD 10/10",
    category: "Cath Labs",
    price: "Contact for Pricing",
    condition: "Refurbished - Excellent",
    image: "/cath-lab.jpg",
    specifications: {
      "Detector Type": "Flat Panel Detector",
      "Image Matrix": "1024 x 1024",
      "C-arm Coverage": "10\" x 10\"",
      "Angular Range": "120° + / -60°",
      "Table Movement": "Longitudinal, lateral, height",
      "Weight Capacity": "250 kg (550 lbs)",
    },
    description: "The Philips FD 10/10 is a state-of-the-art cardiac catheterization system providing exceptional image quality for interventional cardiology procedures.",
    features: [
      "Flat panel detector technology",
      "Advanced imaging algorithms",
      "Dose management tools",
      "Flexible positioning",
      "Comprehensive cardiac protocols",
    ],
  },
  // Default fallback for unlisted machines
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getMachineBySlug(slug: string) {
  return allMachines.find(machine => machine.slug === slug) || {
    slug: slug,
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: "Medical Equipment",
    price: "Contact for Pricing",
    condition: "Refurbished",
    image: "/ct-scanner.jpg",
    specifications: {
      "Model": "Professional Medical Equipment",
      "Condition": "Refurbished",
      "Warranty": "Available upon request",
    },
    description: "Professional medical equipment available in our inventory. Contact us for detailed specifications and availability.",
    features: [
      "Professional grade equipment",
      "Thoroughly tested and refurbished",
      "Full technical documentation",
      "Installation support available",
      "Training and support included",
    ],
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);
  
  return {
    title: `${machine.name} | Tachyon Medical Systems Inventory`,
    description: `${machine.name} - ${machine.description.substring(0, 150)}...`,
  };
}

export default async function MachinePage({ params }: PageProps) {
  const { slug } = await params;
  const machine = getMachineBySlug(slug);

  if (!machine && !allMachines.find(m => m.slug === slug)) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="pt-28 pb-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-light-cyan">Home</Link>
            <span>/</span>
            <Link href="/inventory" className="hover:text-light-cyan">Inventory</Link>
            <span>/</span>
            <span className="text-deep-blue font-medium">{machine.name}</span>
          </nav>
        </div>
      </section>

      {/* Machine Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Image */}
            <div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex px-3 py-1 bg-light-cyan text-white text-xs font-bold rounded-full">
                    {machine.condition}
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-4">
                <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">
                  {machine.category}
                </span>
              </div>
              <h1 className="text-4xl font-black text-deep-blue mb-4">{machine.name}</h1>
              <div className="text-3xl font-bold text-orange mb-6">{machine.price}</div>
              
              <p className="text-gray-600 mb-8 leading-relaxed">{machine.description}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-deep-blue mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {machine.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-light-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/contact?subject=Inventory%20Inquiry&machine="
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/90 transition-all hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get Quote
                </Link>
                <Link
                  href="/contact?subject=Installation%20Services&machine="
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Installation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-deep-blue mb-8">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(machine.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200 last:border-0">
                  <span className="font-semibold text-gray-700">{key}:</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTAs */}
      <section className="py-20 bg-deep-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to Move Forward?</h2>
          <p className="text-gray-300 mb-12">
            Get in touch with our team for pricing, availability, or to discuss installation and service options.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inventory Inquiries CTA */}
            <div className="bg-white/10 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-light-cyan rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Inventory Inquiries</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Get pricing, check availability, request specifications, or discuss customization options for this equipment.
              </p>
              <Link
                href={`/contact?subject=Inventory%20Inquiry&machine=${encodeURIComponent(machine.name)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/90 transition-all hover:shadow-lg"
              >
                Contact for Inventory Inquiries
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Installation/Deinstallation CTA */}
            <div className="bg-white/10 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Installation/Deinstallation Services</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Professional installation, deinstallation, relocation, and maintenance services for your medical equipment.
              </p>
              <Link
                href={`/contact?subject=Installation%20Services&machine=${encodeURIComponent(machine.name)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-lg"
              >
                Contact for Installation/Deinstallation Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}