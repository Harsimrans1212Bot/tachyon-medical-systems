import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Tachyon Medical Systems",
  description: "Get in touch with Tachyon Medical Systems for medical equipment inquiries, quotes, and support.",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">How Can We Help You?</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Choose the best way to get in touch based on your specific needs. Our team of experts is ready to provide you with personalized assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inventory Inquiries Card */}
            <Link
              href="/contact/inventory"
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-light-cyan/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 bg-light-cyan/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-light-cyan group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-light-cyan group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-light-cyan transition-colors duration-300">
                Inventory Inquiries
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get pricing, check availability, request specifications, or discuss equipment options from our extensive medical imaging inventory.
              </p>
              <div className="flex items-center gap-2 text-light-cyan font-semibold group-hover:gap-4 transition-all duration-300">
                Get Equipment Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Installation Services Card */}
            <Link
              href="/contact/services"
              className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-orange/30 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 bg-orange/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-orange group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-deep-blue mb-4 group-hover:text-orange transition-colors duration-300">
                Installation Services
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional installation, uninstallation, relocation, and maintenance services for medical equipment by our certified engineers.
              </p>
              <div className="flex items-center gap-2 text-orange font-semibold group-hover:gap-4 transition-all duration-300">
                Request Service Quote
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>

          {/* Company Contact Information */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-deep-blue mb-8 text-center">Our Offices</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* India Office */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-deep-blue/10 flex items-center justify-center">
                    <span className="text-lg">🇮🇳</span>
                  </div>
                  <h4 className="text-lg font-bold text-deep-blue">India Headquarters</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-deep-blue text-sm mb-1">Company Name</p>
                    <p className="text-gray-600 text-sm">Tachyon Medical Systems Pvt. Ltd.</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Address</p>
                      <p className="text-gray-600 text-sm">
                        1 Nyaypuri, Minar Road<br />
                        Near Karan Stadium<br />
                        Karnal-132001, Haryana (India)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Phone</p>
                      <p className="text-gray-600 text-sm">
                        <a href="tel:+911842270291" className="hover:text-light-cyan transition-colors">+91 184 2270291</a><br />
                        Direct: <a href="tel:+919215291291" className="hover:text-light-cyan transition-colors">+91-9215291291</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Email</p>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:admin@tachyonmedical.com" className="hover:text-light-cyan transition-colors">admin@tachyonmedical.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Website</p>
                      <p className="text-gray-600 text-sm">
                        <a href="https://www.tachyonmedical.com" className="hover:text-light-cyan transition-colors">www.tachyonmedical.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* US Office */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-deep-blue/10 flex items-center justify-center">
                    <span className="text-lg">🇺🇸</span>
                  </div>
                  <h4 className="text-lg font-bold text-deep-blue">US Office</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Email</p>
                      <p className="text-gray-600 text-sm">
                        <a href="mailto:tachyonmedical1166@gmail.com" className="hover:text-light-cyan transition-colors">tachyonmedical1166@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Office Hours */}
            <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-100 text-center">
              <h4 className="text-lg font-bold text-deep-blue mb-4">Business Hours</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="font-semibold text-deep-blue mb-2">India Office (IST)</p>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
                <div>
                  <p className="font-semibold text-deep-blue mb-2">US Office (EST)</p>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-gray-600">Weekend: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}