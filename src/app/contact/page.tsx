import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Tachyon Medical Systems",
  description: "Get in touch with Tachyon Medical Systems for medical equipment inquiries, quotes, and support.",
  alternates: { canonical: "https://www.tachyonmed.com/contact" },
  openGraph: { url: "https://www.tachyonmed.com/contact" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Tachyon Medical Systems Pvt. Ltd.",
  image: "https://www.tachyonmed.com/logo-header.png",
  url: "https://www.tachyonmed.com",
  telephone: "+91-9215291291",
  email: "admin@tachyonmedical.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Nyaypuri, Minar Road, Near Karan Stadium",
    addressLocality: "Karnal",
    addressRegion: "Haryana",
    postalCode: "132001",
    addressCountry: "IN",
  },
  foundingDate: "1992",
  description: "Full lifecycle medical equipment company — refurbishment, buying/selling, import/export, installation.",
};

export default function Contact() {
  return (
    <>
      <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.tachyonmed.com/"}, {name:"Contact",url:"https://www.tachyonmed.com/contact"}]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      {/* Hero */}
      <section className="pt-28 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold tracking-widest uppercase text-light-cyan mb-3">Contact Us</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">How Can We Help You?</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Choose the best way to get in touch based on your specific needs. Our team is ready to provide personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inventory Card */}
            <Link
              href="/contact/inventory"
              className="group bg-white dark:bg-white/[0.03] rounded-xl p-8 border border-gray-100 dark:border-white/5 hover:border-light-cyan/30 transition-all duration-200 card-hover"
            >
              <div className="w-11 h-11 bg-light-cyan/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-light-cyan group-hover:text-white text-light-cyan transition-all duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-3 group-hover:text-light-cyan transition-colors">
                Inventory Inquiries
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Get pricing, check availability, request specifications, or discuss equipment options from our inventory.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-light-cyan group-hover:gap-3 transition-all">
                Get Equipment Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>

            {/* Services Card */}
            <Link
              href="/contact/services"
              className="group bg-white dark:bg-white/[0.03] rounded-xl p-8 border border-gray-100 dark:border-white/5 hover:border-accent/30 transition-all duration-200 card-hover"
            >
              <div className="w-11 h-11 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white text-accent transition-all duration-200">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-3 group-hover:text-accent transition-colors">
                Installation Services
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Professional installation, uninstallation, relocation, and maintenance services for medical equipment.
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:gap-3 transition-all">
                Request Service Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Offices */}
          <div className="mt-16">
            <h3 className="text-xl font-bold text-deep-blue dark:text-white mb-8 text-center">Our Offices</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* India */}
              <div className="bg-white dark:bg-white/[0.03] rounded-xl p-8 border border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-md bg-deep-blue/10 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-deep-blue dark:text-white">IN</div>
                  <h4 className="text-base font-bold text-deep-blue dark:text-white">India Headquarters</h4>
                </div>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <p>Tachyon Medical Systems Pvt. Ltd.<br />1 Nyaypuri, Minar Road<br />Karnal-132001, Haryana</p>
                  <div className="space-y-1">
                    <a href="tel:+911842270291" className="block hover:text-light-cyan transition-colors">+91 184 2270291</a>
                    <a href="tel:+919215291291" className="block hover:text-light-cyan transition-colors">+91 9215291291</a>
                  </div>
                  <a href="mailto:admin@tachyonmedical.com" className="block hover:text-light-cyan transition-colors">admin@tachyonmedical.com</a>
                  <p className="text-xs text-gray-400 pt-2">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                </div>
              </div>

              {/* US */}
              <div className="bg-white dark:bg-white/[0.03] rounded-xl p-8 border border-gray-100 dark:border-white/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-md bg-deep-blue/10 dark:bg-white/10 flex items-center justify-center text-xs font-bold text-deep-blue dark:text-white">US</div>
                  <h4 className="text-base font-bold text-deep-blue dark:text-white">US Office</h4>
                </div>
                <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                  <a href="tel:+19178565211" className="block hover:text-light-cyan transition-colors">+1 (917) 856-5211</a>
                  <a href="mailto:tachyonmedical1166@gmail.com" className="block hover:text-light-cyan transition-colors">tachyonmedical1166@gmail.com</a>
                  <p className="text-xs text-gray-400 pt-2">Mon - Fri: 9:00 AM - 5:00 PM EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
