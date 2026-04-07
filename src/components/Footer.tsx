import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span className="text-xl font-extrabold tracking-tight">TACHYON</span>
              <div className="text-[9px] font-medium tracking-[0.2em] text-gray-500 mt-0.5">
                MEDICAL SYSTEMS PVT. LTD.
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trusted partner in medical equipment solutions since 1992. Delivering excellence in refurbishment, sales, and service worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-400">Navigation</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Inventory", href: "/inventory" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-400">Equipment</h3>
            <ul className="space-y-3">
              {["CT Scanners", "MRI Systems", "PET-CT", "Cath Labs", "Mammography", "Ultrasound", "ECG Systems"].map((item) => (
                <li key={item}>
                  <Link href="/inventory" className="text-gray-400 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-400">Contact</h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-gray-300 font-medium text-xs uppercase tracking-wider mb-1">India HQ</p>
                <p>1 Nyaypuri, Minar Road<br />Karnal-132001, Haryana</p>
              </div>
              <div className="space-y-1">
                <a href="tel:+911842270291" className="block hover:text-white transition-colors">+91 184 2270291</a>
                <a href="tel:+919215291291" className="block hover:text-white transition-colors">+91 9215291291</a>
                <a href="tel:+19178565211" className="block hover:text-white transition-colors">+1 (917) 856-5211</a>
              </div>
              <div className="space-y-1">
                <a href="mailto:admin@tachyonmedical.com" className="block hover:text-white transition-colors">admin@tachyonmedical.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Tachyon Medical Systems Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
