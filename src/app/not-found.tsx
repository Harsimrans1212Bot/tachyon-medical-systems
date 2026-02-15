import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-light-cyan/5 blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-orange/5 blur-3xl" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-lg">
        <div className="text-8xl font-black text-white/10 mb-4">404</div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">Page Not Found</h1>
        <p className="text-gray-300 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let us help you find what you need.
        </p>
        <div className="grid grid-cols-2 gap-4 mb-8">
          <Link href="/" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm">
            🏠 Homepage
          </Link>
          <Link href="/services" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm">
            🔧 Services
          </Link>
          <Link href="/inventory" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm">
            📦 Inventory
          </Link>
          <Link href="/contact" className="px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-xl hover:bg-white/20 transition-all text-sm">
            📞 Contact Us
          </Link>
        </div>
        <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/80 transition-all hover:shadow-xl">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
