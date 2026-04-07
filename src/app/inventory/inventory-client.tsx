"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SectionBackground from "@/components/SectionBackground";
import { allMachines, categories, manufacturers } from "@/data/inventory";

type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

function parsePriceMin(price: string): number {
  const match = price.match(/\$([\d,]+)/);
  if (!match) return Infinity;
  return parseInt(match[1].replace(/,/g, ""), 10);
}

export default function InventoryClient() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeManufacturer, setActiveManufacturer] = useState("All");
  const [sort, setSort] = useState<SortOption>("name-asc");

  // Read manufacturer filter from URL query param (e.g. /inventory?manufacturer=GE)
  useEffect(() => {
    const mfr = searchParams.get("manufacturer");
    if (mfr && manufacturers.includes(mfr)) {
      setActiveManufacturer(mfr);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    let machines = allMachines;

    if (activeCategory !== "All") {
      machines = machines.filter((m) => m.category === activeCategory);
    }
    if (activeManufacturer !== "All") {
      machines = machines.filter((m) => m.manufacturer === activeManufacturer);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      machines = machines.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.category.toLowerCase().includes(q) ||
          m.manufacturer.toLowerCase().includes(q) ||
          m.description.toLowerCase().includes(q)
      );
    }

    const sorted = [...machines];
    switch (sort) {
      case "name-asc":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-desc":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "price-asc":
        sorted.sort((a, b) => parsePriceMin(a.price) - parsePriceMin(b.price));
        break;
      case "price-desc":
        sorted.sort((a, b) => parsePriceMin(b.price) - parsePriceMin(a.price));
        break;
    }
    return sorted;
  }, [search, activeCategory, activeManufacturer, sort]);

  const activeFilterCount =
    (activeCategory !== "All" ? 1 : 0) +
    (activeManufacturer !== "All" ? 1 : 0) +
    (search.trim() ? 1 : 0);

  const clearFilters = () => {
    setSearch("");
    setActiveCategory("All");
    setActiveManufacturer("All");
    setSort("name-asc");
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-sm font-bold tracking-wider uppercase text-light-cyan">
              Our Inventory
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-3">
              Medical Equipment
            </h1>
            <p className="text-lg text-gray-300 mt-6 leading-relaxed">
              Explore our comprehensive inventory of premium medical imaging and
              diagnostic equipment from world-renowned manufacturers.
            </p>
          </div>
          {/* Search bar in hero */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <svg
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search equipment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-light-cyan focus:border-transparent backdrop-blur-sm text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white dark:bg-[#0d1b2a] border-b border-gray-200 dark:border-white/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
          {/* Category pills */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex-shrink-0">
                Category
              </span>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <button
                onClick={() => setActiveCategory("All")}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === "All"
                    ? "bg-light-cyan text-white"
                    : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() =>
                    setActiveCategory(
                      activeCategory === cat.name ? "All" : cat.name
                    )
                  }
                  className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.name
                      ? "bg-light-cyan text-white"
                      : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Manufacturer pills + Sort + Clear */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide flex-1 min-w-0">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 flex-shrink-0 self-center mr-1">
                Brand
              </span>
              <button
                onClick={() => setActiveManufacturer("All")}
                className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                  activeManufacturer === "All"
                    ? "bg-light-cyan text-white"
                    : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                }`}
              >
                All
              </button>
              {manufacturers.map((mfr) => (
                <button
                  key={mfr}
                  onClick={() =>
                    setActiveManufacturer(
                      activeManufacturer === mfr ? "All" : mfr
                    )
                  }
                  className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    activeManufacturer === mfr
                      ? "bg-light-cyan text-white"
                      : "bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-200 dark:border-white/10"
                  }`}
                >
                  {mfr}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Sort */}
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-light-cyan"
              >
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="price-asc">Price Low-High</option>
                <option value="price-desc">Price High-Low</option>
              </select>

              {/* Active filter badge + Clear */}
              {activeFilterCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange/10 text-orange hover:bg-orange/20 transition-all"
                >
                  <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-orange text-white text-[10px] font-bold">
                    {activeFilterCount}
                  </span>
                  Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-[#112240]">
        <SectionBackground variant="primary" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            <span className="font-bold text-deep-blue dark:text-white">
              {filtered.length}
            </span>{" "}
            {filtered.length === 1 ? "result" : "results"} found
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <svg
                className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-xl font-bold text-gray-600 dark:text-gray-300 mb-2">
                No equipment matches your filters
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Try adjusting your search or filters to find what you need.
              </p>
              <button
                onClick={clearFilters}
                className="inline-flex px-6 py-3 bg-light-cyan text-white font-bold rounded-full hover:bg-light-cyan/90 transition-all"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((machine) => (
                <div
                  key={machine.slug}
                  className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden card-hover border border-gray-100 dark:border-white/10 flex flex-col transition-all duration-300"
                >
                  {/* Image */}
                  <Link
                    href={`/inventory/${machine.slug}`}
                    className="block relative h-48 overflow-hidden"
                  >
                    <Image
                      src={machine.image}
                      alt={machine.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {/* Category badge */}
                    <span className="absolute top-3 left-3 inline-flex px-2.5 py-0.5 bg-deep-blue/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                      {machine.category}
                    </span>
                  </Link>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <Link href={`/inventory/${machine.slug}`}>
                      <h3 className="font-bold text-deep-blue dark:text-white text-lg leading-tight hover:text-light-cyan transition-colors">
                        {machine.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {machine.manufacturer}
                    </p>

                    <div className="mt-3 text-lg font-bold text-orange">
                      {machine.price}
                    </div>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="inline-flex px-2 py-0.5 bg-light-cyan/10 text-light-cyan text-[10px] font-semibold rounded-full">
                        {machine.condition}
                      </span>
                      <span className="inline-flex px-2 py-0.5 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-[10px] font-semibold rounded-full">
                        {machine.warranty}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="mt-auto pt-4 flex items-center gap-3">
                      <Link
                        href={`/inventory/${machine.slug}`}
                        className="flex-1 text-center px-3 py-2 text-sm font-bold text-light-cyan border border-light-cyan rounded-full hover:bg-light-cyan hover:text-white transition-all"
                      >
                        View Details
                      </Link>
                      <Link
                        href={`/contact/inventory?equipment=${encodeURIComponent(machine.name)}`}
                        className="flex-1 text-center px-3 py-2 text-sm font-bold text-white bg-orange rounded-full hover:bg-orange/90 transition-all"
                      >
                        Request Quote
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-deep-blue">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-gray-300 mb-8">
            We have access to a wide network of equipment. Contact us with your
            requirements and we&apos;ll find the right solution.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-4 bg-orange text-white font-bold rounded-full hover:bg-orange/90 transition-all hover:shadow-xl"
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
