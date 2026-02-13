import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products | Tachyon Medical Systems",
  description: "Browse our extensive range of medical imaging equipment including CT Scanners, MRI, PET-CT, Cath Labs, and Mammography.",
};

const categories = [
  {
    name: "CT Scanners",
    description: "Advanced computed tomography systems from leading manufacturers",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    products: [
      { name: "GE Optima 660", specs: "64-Slice CT Scanner" },
      { name: "GE BrightSpeed 8", specs: "8-Slice CT Scanner" },
      { name: "GE BrightSpeed 16", specs: "16-Slice CT Scanner" },
      { name: "GE LightSpeed 8", specs: "8-Slice CT Scanner" },
      { name: "GE LightSpeed 16", specs: "16-Slice CT Scanner" },
      { name: "GE Revolution ACT", specs: "Advanced CT Technology" },
      { name: "GE Revolution EVO", specs: "Premium CT Scanner" },
      { name: "GE Revolution GSI", specs: "Gemstone Spectral Imaging" },
    ],
  },
  {
    name: "MRI Systems",
    description: "High-field magnetic resonance imaging for precise diagnostics",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12a3 3 0 116 0 3 3 0 01-6 0z" />
      </svg>
    ),
    products: [
      { name: "GE 1.5T MRI", specs: "1.5 Tesla MRI System" },
      { name: "GE 3.0T MRI", specs: "3.0 Tesla MRI System" },
      { name: "GE Signa HDxt 1.5T", specs: "High-Definition 1.5T" },
      { name: "GE Excite HD 1.5T", specs: "HD Excite Platform" },
      { name: "Philips 1.5T MRI", specs: "1.5 Tesla MRI System" },
      { name: "Philips 3.0T MRI", specs: "3.0 Tesla MRI System" },
    ],
  },
  {
    name: "PET-CT",
    description: "Combined PET and CT for advanced molecular imaging",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    products: [
      { name: "PET CT Scanner", specs: "Integrated PET/CT System" },
    ],
  },
  {
    name: "Cath Labs",
    description: "Cardiac catheterization laboratories for interventional cardiology",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    products: [
      { name: "Philips FD 10/10", specs: "Flat Detector Cath Lab" },
    ],
  },
  {
    name: "Mammography",
    description: "Advanced breast imaging systems for early detection",
    icon: (
      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    products: [
      { name: "Hologic 3 Dimensions", specs: "3D Mammography System" },
    ],
  },
];

export default function Products() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Our Portfolio</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Medical Equipment</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Explore our comprehensive range of premium medical imaging and diagnostic equipment from world-renowned manufacturers.
            </p>
          </div>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {categories.map((cat) => (
              <div key={cat.name} id={cat.name.toLowerCase().replace(/\s+/g, "-")}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-light-cyan">{cat.icon}</div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-deep-blue">{cat.name}</h2>
                    <p className="text-gray-500 text-sm mt-1">{cat.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                  {cat.products.map((product) => (
                    <div key={product.name} className="bg-white rounded-2xl overflow-hidden card-hover border border-gray-100 group">
                      <div className="h-40 equipment-placeholder flex items-center justify-center">
                        <div className="text-deep-blue/20 group-hover:text-deep-blue/30 transition-colors">
                          {cat.icon}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-deep-blue">{product.name}</h3>
                        <p className="text-xs text-gray-400 mt-1">{product.specs}</p>
                        <Link href="/contact" className="inline-flex items-center gap-1 text-sm font-semibold text-light-cyan mt-4 hover:text-orange transition-colors">
                          Request Quote
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-deep-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Don&apos;t See What You Need?</h2>
          <p className="text-gray-300 mb-8">We have access to a wide network of equipment. Contact us with your requirements and we&apos;ll find the right solution.</p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
