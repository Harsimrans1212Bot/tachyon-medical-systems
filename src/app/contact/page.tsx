import type { Metadata } from "next";

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
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Contact Us</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Let&apos;s Talk Equipment</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Have a question about our products or services? Our team of experts is ready to help you find the perfect solution for your facility.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-black text-deep-blue mb-8">Get In Touch</h2>

              {/* India Office */}
              <div className="bg-white rounded-2xl p-8 border border-gray-100 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-deep-blue/10 flex items-center justify-center">
                    <span className="text-lg">🇮🇳</span>
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue">India Office (Headquarters)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Address</p>
                      <p className="text-gray-500 text-sm">1 Nyaypuri, Minar Road<br />Near Karan Stadium<br />Karnal-132001, Haryana, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Phone</p>
                      <p className="text-gray-500 text-sm">
                        Office: <a href="tel:+911842270291" className="hover:text-light-cyan transition-colors">+91 184 2270291</a><br />
                        Cell: <a href="tel:+919215291291" className="hover:text-light-cyan transition-colors">+91 9215291291</a><br />
                        Cell: <a href="tel:+919992291291" className="hover:text-light-cyan transition-colors">+91 9992291291</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Email</p>
                      <p className="text-gray-500 text-sm">
                        <a href="mailto:admin@tachyonmedical.com" className="hover:text-light-cyan transition-colors">admin@tachyonmedical.com</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Website</p>
                      <p className="text-gray-500 text-sm">
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
                  <h3 className="text-lg font-bold text-deep-blue">United States</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Phone</p>
                      <p className="text-gray-500 text-sm">
                        <a href="tel:+19178565211" className="hover:text-light-cyan transition-colors">+1 (917) 856-5211</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-light-cyan mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue text-sm">Email</p>
                      <p className="text-gray-500 text-sm">
                        <a href="mailto:tachyonmedical1166@gmail.com" className="hover:text-light-cyan transition-colors">tachyonmedical1166@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-black text-deep-blue mb-8">Send Us a Message</h2>
              <div className="bg-white rounded-2xl p-8 border border-gray-100">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-deep-blue mb-2">First Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm" placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-deep-blue mb-2">Last Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm" placeholder="john@hospital.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-2">Phone Number</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-2">Purpose of Contact</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm text-gray-500">
                      <option>Select a reason</option>
                      <option>Buying Equipment</option>
                      <option>Selling Equipment</option>
                      <option>Equipment Refurbishment</option>
                      <option>Installation / Deinstallation</option>
                      <option>Import / Export Inquiry</option>
                      <option>Service & Maintenance</option>
                      <option>Partnership Opportunity</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-light-cyan focus:ring-2 focus:ring-light-cyan/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-orange text-white font-bold rounded-xl hover:bg-orange/90 transition-all hover:shadow-lg text-sm">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
