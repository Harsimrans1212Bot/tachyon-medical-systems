import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Buy & Sell Medical Equipment | Tachyon Medical Systems",
  description: "Trusted marketplace for pre-owned medical imaging equipment. Buy or sell MRI, CT, PET-CT, Cath Labs, and more with Tachyon Medical Systems.",
};

const team = [
  { name: "Coming Soon", title: "Sales Representative", region: "North America", email: "sales@tachyonmedical.com" },
  { name: "Coming Soon", title: "Sales Representative", region: "South Asia & Middle East", email: "sales@tachyonmedical.com" },
  { name: "Coming Soon", title: "Sales Representative", region: "Europe & UK", email: "sales@tachyonmedical.com" },
  { name: "Coming Soon", title: "Sales Manager", region: "Global Accounts", email: "sales@tachyonmedical.com" },
];

const buyFeatures = [
  { title: "Verified Equipment", desc: "Every system inspected and tested by our engineers before listing." },
  { title: "Fair Pricing", desc: "Transparent market-based pricing with no hidden fees." },
  { title: "Warranty Included", desc: "All refurbished systems come with warranty coverage." },
  { title: "Financing Options", desc: "Flexible payment plans and leasing arrangements available." },
  { title: "Installation Support", desc: "End-to-end installation and training included." },
  { title: "Global Delivery", desc: "Shipping and logistics to any location worldwide." },
];

const sellFeatures = [
  { title: "Free Valuation", desc: "Get a fair market assessment of your equipment at no cost." },
  { title: "Quick Turnaround", desc: "We aim to provide offers within 48 hours of assessment." },
  { title: "Safe Uninstallation", desc: "Our team handles professional removal from your site." },
  { title: "Hassle-Free Process", desc: "We manage all logistics, paperwork, and compliance." },
  { title: "Trade-In Programs", desc: "Upgrade your equipment with trade-in value applied." },
  { title: "Competitive Offers", desc: "Access our global network of buyers for the best price." },
];

export default function BuySellPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Link href="/services" className="text-light-cyan/70 hover:text-light-cyan text-sm font-medium transition-colors">
              ← Back to Services
            </Link>
            <span className="block text-sm font-bold tracking-wider uppercase text-light-cyan mt-6">Buy & Sell</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">Your Trusted Marketplace</h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Connect with the global medical equipment market through Tachyon Medical Systems. Whether buying or selling, our experienced team ensures fair deals and seamless transactions.
            </p>
          </div>
        </div>
      </section>

      {/* Looking to Buy */}
      <section className="py-24 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">For Buyers</span>
              <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Looking to Buy?</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Access our inventory of inspected, refurbished, and certified pre-owned medical imaging equipment. Every system is backed by our quality guarantee.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {buyFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-light-cyan flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-deep-blue dark:text-white text-sm">{f.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-white/5 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-white/10">
              <h3 className="text-lg font-bold text-deep-blue dark:text-white mb-6">Tell Us What You Need</h3>
              <div className="space-y-4">
                {["Equipment Type (e.g., CT, MRI, PET-CT)", "Preferred Manufacturer", "Budget Range", "Desired Configuration", "Installation Location", "Your Contact Information"].map((label) => (
                  <div key={label}>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-1">{label}</label>
                    <div className="h-10 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10" />
                  </div>
                ))}
                <Link href="/contact" className="block w-full text-center px-6 py-3 bg-light-cyan text-white font-bold rounded-lg hover:bg-light-cyan/90 transition-colors mt-4">
                  Submit Inquiry →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Looking to Sell */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-white/10 order-2 lg:order-1">
              <h3 className="text-lg font-bold text-deep-blue dark:text-white mb-6">Describe Your Equipment</h3>
              <div className="space-y-4">
                {["Equipment Type & Manufacturer", "Model & Year of Manufacture", "System Configuration", "Current Condition", "Reason for Selling", "Your Contact Information"].map((label) => (
                  <div key={label}>
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 block mb-1">{label}</label>
                    <div className="h-10 bg-gray-100 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-white/10" />
                  </div>
                ))}
                <Link href="/contact" className="block w-full text-center px-6 py-3 bg-orange text-white font-bold rounded-lg hover:bg-orange/90 transition-colors mt-4">
                  Get a Valuation →
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-sm font-bold tracking-wider uppercase text-orange">For Sellers</span>
              <h2 className="text-3xl font-black text-deep-blue dark:text-white mt-3">Looking to Sell?</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                Get the best value for your pre-owned medical equipment. Our global buyer network and fair valuation process ensure you receive competitive offers.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {sellFeatures.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <h4 className="font-bold text-deep-blue dark:text-white text-sm">{f.title}</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Team */}
      <section className="py-24 bg-white dark:bg-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">Meet the Team</span>
            <h2 className="text-3xl sm:text-4xl font-black text-deep-blue dark:text-white mt-3">Our Sales Team</h2>
            <p className="text-gray-500 dark:text-gray-400 mt-4">Contact our sales team for personalized assistance with your equipment needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 text-center card-hover border border-gray-100">
                <div className="w-20 h-20 bg-light-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-light-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-deep-blue dark:text-white">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{member.title}</p>
                <p className="text-xs text-light-cyan font-medium mt-2">{member.region}</p>
                <a href={`mailto:${member.email}`} className="text-sm text-orange hover:underline mt-4 inline-block">{member.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#112240]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-deep-blue dark:text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact our sales team for personalized assistance with buying or selling medical equipment.
          </p>
          <Link href="/contact" className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl">
            Contact Sales Team
          </Link>
        </div>
      </section>
    </>
  );
}
