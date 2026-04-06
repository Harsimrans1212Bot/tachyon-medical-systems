import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionBackground from "@/components/SectionBackground";
import { getMachineBySlug, allMachines } from "@/data/inventory";

interface PageProps {
  params: Promise<{ slug: string }>;
}

function getMachineOrFallback(slug: string) {
  return getMachineBySlug(slug) || {
    slug: slug,
    name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: "Medical Equipment",
    manufacturer: "Various",
    price: "Contact for Pricing",
    condition: "Refurbished",
    warranty: "Available upon request",
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
  const machine = getMachineOrFallback(slug);

  return {
    title: `${machine.name} | Tachyon Medical Systems Inventory`,
    description: `${machine.name} - ${machine.description.substring(0, 150)}...`,
  };
}

export default async function MachinePage({ params }: PageProps) {
  const { slug } = await params;
  const machine = getMachineOrFallback(slug);

  if (!machine && !allMachines.find(m => m.slug === slug)) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="relative overflow-hidden pt-28 pb-8 bg-gray-50 dark:bg-[#112240]">
        <SectionBackground variant="primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-light-cyan">Home</Link>
            <span>/</span>
            <Link href="/inventory" className="hover:text-light-cyan">Inventory</Link>
            <span>/</span>
            <span className="text-deep-blue dark:text-white font-medium">{machine.name}</span>
          </nav>
        </div>
      </section>

      {/* Machine Details */}
      <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-[#112240]">
        <SectionBackground variant="primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="inline-flex px-3 py-1 bg-light-cyan text-white text-xs font-bold rounded-full">
                    {machine.condition}
                  </span>
                  {machine.warranty && (
                    <span className="inline-flex px-3 py-1 bg-orange text-white text-xs font-bold rounded-full">
                      {machine.warranty}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">
                  {machine.category}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">|</span>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {machine.manufacturer}
                </span>
              </div>
              <h1 className="text-4xl font-black text-deep-blue dark:text-white mb-4">{machine.name}</h1>
              <div className="text-3xl font-bold text-orange mb-6">{machine.price}</div>

              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">{machine.description}</p>

              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {machine.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-light-cyan mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href={`/contact/inventory?equipment=${encodeURIComponent(machine.name)}`}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/90 transition-all hover:shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Request Quote
                </Link>
                <Link
                  href="/contact/services"
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
      <section className="relative overflow-hidden py-16 bg-white dark:bg-[#0d1b2a]">
        <SectionBackground variant="secondary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-deep-blue dark:text-white mb-8">Technical Specifications</h2>
          <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(machine.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-white/10 last:border-0">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">{key}:</span>
                  <span className="text-gray-600 dark:text-gray-300">{value}</span>
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
                href={`/contact/inventory?equipment=${encodeURIComponent(machine.name)}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/90 transition-all hover:shadow-lg"
              >
                Contact for Inventory Inquiries
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Installation CTA */}
            <div className="bg-white/10 rounded-2xl p-8 text-left">
              <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Installation Services</h3>
              <p className="text-gray-300 mb-6 text-sm">
                Professional installation, uninstallation, relocation, and maintenance services for your medical equipment.
              </p>
              <Link
                href="/contact/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-lg"
              >
                Contact for Installation Services
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
