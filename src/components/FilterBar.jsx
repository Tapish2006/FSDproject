import { useState } from "react";

export default function FilterBar({ onFiltersChange }) {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    experienceRange: "",
    ratingRange: "",
    onlineOnly: false,
  });

  const categories = [
    "All Specialties",
    "Cardiology",
    "Dermatology",
    "Pediatrics",
    "Orthopedics",
    "Gynecology",
    "Neurology",
    "Dentistry",
    "Psychiatry",
  ];

  const priceRanges = [
    "All Prices",
    "Under ₹1000",
    "₹1000 - ₹1300",
    "₹1300 - ₹1600",
    "Above ₹1600",
  ];

  const experienceRanges = [
    "All Experience",
    "0-5 years",
    "6-10 years",
    "11-15 years",
    "15+ years",
  ];

  const ratingRanges = [
    "All Ratings",
    "4.0+ stars",
    "4.5+ stars",
    "4.8+ stars",
  ];

  const handleFilterChange = (filterType, value) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const clearedFilters = {
      category: "",
      priceRange: "",
      experienceRange: "",
      ratingRange: "",
    };
    setFilters(clearedFilters);
    onFiltersChange(clearedFilters);
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow theme-surface">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold theme-text">Filter Doctors</h2>
        <button
          onClick={clearFilters}
          className="text-sm text-slate-400 hover:text-white transition"
        >
          Clear all
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Specialty</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange("category", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
          >
            {categories.map((category) => (
              <option key={category} value={category === "All Specialties" ? "" : category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Consultation Fee</label>
          <select
            value={filters.priceRange}
            onChange={(e) => handleFilterChange("priceRange", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
          >
            {priceRanges.map((range) => (
              <option key={range} value={range === "All Prices" ? "" : range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Experience</label>
          <select
            value={filters.experienceRange}
            onChange={(e) => handleFilterChange("experienceRange", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
          >
            {experienceRanges.map((range) => (
              <option key={range} value={range === "All Experience" ? "" : range}>
                {range}
              </option>
            ))}
          </select>
        </div>

        {/* Rating Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Rating</label>
          <select
            value={filters.ratingRange}
            onChange={(e) => handleFilterChange("ratingRange", e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
          >
            {ratingRanges.map((range) => (
              <option key={range} value={range === "All Ratings" ? "" : range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between rounded-3xl border border-white/10 bg-slate-900/85 px-4 py-4">
        <div>
          <p className="text-sm font-medium text-slate-300">Online doctors only</p>
          <p className="text-xs text-slate-500">Show only doctors currently available online.</p>
        </div>
        <button
          type="button"
          onClick={() => handleFilterChange("onlineOnly", !filters.onlineOnly)}
          className={`relative inline-flex h-8 w-16 flex-shrink-0 cursor-pointer items-center rounded-full transition ${
            filters.onlineOnly ? "bg-emerald-400/80" : "bg-slate-700/80"
          }`}
        >
          <span
            className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition ${
              filters.onlineOnly ? "translate-x-8" : "translate-x-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}