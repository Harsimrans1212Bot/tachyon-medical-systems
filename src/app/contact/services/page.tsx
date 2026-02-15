import type { Metadata } from "next";
import SectionBackground from "@/components/SectionBackground";

export const metadata: Metadata = {
  title: "Installation Services | Tachyon Medical Systems",
  description: "Professional installation, uninstallation, relocation, and maintenance services for medical equipment by certified engineers.",
};

export default function ServicesInquiries() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-orange to-deep-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-white/80">Installation Services</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Professional Technical Services</h1>
            <p className="text-lg text-white/80 mt-6 leading-relaxed">
              Our certified engineers provide comprehensive installation, uninstallation, relocation, and maintenance services for medical imaging equipment. From planning to completion, we ensure seamless deployment of your critical healthcare technology.
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 bg-gray-50 dark:bg-[#112240]">
        <SectionBackground variant="primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-black text-deep-blue dark:text-white mb-8">Get In Touch</h2>

              {/* India Office */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-deep-blue/10 dark:bg-white/10 flex items-center justify-center">
                    <span className="text-lg">🇮🇳</span>
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue dark:text-white">India Office (Headquarters)</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-orange mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue dark:text-white text-sm">Address</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">1 Nyaypuri, Minar Road<br />Near Karan Stadium<br />Karnal-132001, Haryana, India</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-orange mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue dark:text-white text-sm">Phone</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Office: <a href="tel:+911842270291" className="hover:text-orange transition-colors">+91 184 2270291</a><br />
                        Cell: <a href="tel:+919215291291" className="hover:text-orange transition-colors">+91 9215291291</a><br />
                        Cell: <a href="tel:+919992291291" className="hover:text-orange transition-colors">+91 9992291291</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-orange mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue dark:text-white text-sm">Email</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <a href="mailto:admin@tachyonmedical.com" className="hover:text-orange transition-colors">admin@tachyonmedical.com</a><br /><a href="mailto:tachyonmedical1166@gmail.com" className="hover:text-orange transition-colors">tachyonmedical1166@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* US Office */}
              <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-deep-blue/10 dark:bg-white/10 flex items-center justify-center">
                    <span className="text-lg">🇺🇸</span>
                  </div>
                  <h3 className="text-lg font-bold text-deep-blue dark:text-white">United States</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-orange mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue dark:text-white text-sm">Phone</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <a href="tel:+19178565211" className="hover:text-orange transition-colors">+1 (917) 856-5211</a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-5 h-5 text-orange mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-deep-blue dark:text-white text-sm">Email</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <a href="mailto:tachyonmedical1166@gmail.com" className="hover:text-orange transition-colors">tachyonmedical1166@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services Inquiry Form */}
            <div>
              <h2 className="text-2xl font-black text-deep-blue dark:text-white mb-8">Installation Services Inquiry</h2>
              <div className="bg-white dark:bg-white/5 rounded-2xl p-8 border border-gray-100 dark:border-white/10">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Name</label>
                      <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Email</label>
                      <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm" placeholder="john@hospital.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Company/Facility Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm" placeholder="Memorial Healthcare Center" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Service Type</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm text-gray-500 dark:text-gray-400 dark:bg-[#0d1b2a]">
                      <option>Select service type</option>
                      <option>Installation</option>
                      <option>Uninstallation</option>
                      <option>Relocation</option>
                      <option>Preventive Maintenance</option>
                      <option>Emergency Repair</option>
                      <option>Site Survey</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Equipment Type & Model</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm" placeholder="e.g., GE Revolution EVO CT Scanner, Siemens SOMATOM Force" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Equipment Location / Site Address</label>
                    <textarea rows={2} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm resize-none" placeholder="Please provide the complete facility address where services are needed..." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Preferred Start Date</label>
                    <input type="date" className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Site Readiness</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm text-gray-500 dark:text-gray-400 dark:bg-[#0d1b2a]">
                      <option>Select site readiness</option>
                      <option>Ready</option>
                      <option>In preparation</option>
                      <option>Need guidance</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-deep-blue dark:text-white mb-2">Special Requirements</label>
                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 dark:bg-white/5 dark:text-white focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all text-sm resize-none" placeholder="e.g., crane access requirements, electrical specifications, shielding work, special logistics, etc." />
                  </div>
                  <button type="submit" className="w-full py-4 bg-orange text-white font-bold rounded-xl hover:bg-orange/90 transition-all hover:shadow-lg text-sm">
                    Submit Service Request
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