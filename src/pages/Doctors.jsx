import { useState, useMemo } from "react";
import doctors from "../data/doctors";
import DoctorCard from "../components/DoctorCard";
import FilterBar from "../components/FilterBar";

export default function Doctors() {
  const [filters, setFilters] = useState({
    category: "",
    priceRange: "",
    experienceRange: "",
    ratingRange: "",
    onlineOnly: false,
  });

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      // Category filter
      if (filters.category && doctor.specialization !== filters.category) {
        return false;
      }

      // Price range filter
      if (filters.priceRange) {
        const price = doctor.price;
        switch (filters.priceRange) {
          case "Under ₹1000":
            if (price >= 1000) return false;
            break;
          case "₹1000 - ₹1300":
            if (price < 1000 || price > 1300) return false;
            break;
          case "₹1300 - ₹1600":
            if (price < 1300 || price > 1600) return false;
            break;
          case "Above ₹1600":
            if (price <= 1600) return false;
            break;
        }
      }

      // Experience range filter
      if (filters.experienceRange) {
        const exp = doctor.experience;
        switch (filters.experienceRange) {
          case "0-5 years":
            if (exp > 5) return false;
            break;
          case "6-10 years":
            if (exp < 6 || exp > 10) return false;
            break;
          case "11-15 years":
            if (exp < 11 || exp > 15) return false;
            break;
          case "15+ years":
            if (exp < 15) return false;
            break;
        }
      }

      // Rating range filter
      if (filters.ratingRange) {
        const rating = doctor.rating;
        switch (filters.ratingRange) {
          case "4.0+ stars":
            if (rating < 4.0) return false;
            break;
          case "4.5+ stars":
            if (rating < 4.5) return false;
            break;
          case "4.8+ stars":
            if (rating < 4.8) return false;
            break;
        }
      }

      // Online only filter
      if (filters.onlineOnly && !doctor.online) {
        return false;
      }

      return true;
    });
  }, [filters]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <section className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Specialists</p>
        <h1 className="text-4xl font-semibold theme-text">Choose the right doctor for your needs</h1>
        <p className="max-w-2xl text-slate-400">
          Explore verified doctors across specialties, review expertise, and book your appointment in one elegant flow.
        </p>
      </div>

      {/* Filter Bar */}
      <FilterBar onFiltersChange={handleFiltersChange} />

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-slate-400">
          Showing {filteredDoctors.length} of {doctors.length} doctors
        </p>
        {filteredDoctors.length !== doctors.length && (
          <button
            onClick={() => setFilters({ category: "", priceRange: "", experienceRange: "", ratingRange: "" })}
            className="text-sm text-sky-400 hover:text-sky-300 transition"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Doctors Grid */}
      {filteredDoctors.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold theme-text mb-2">No doctors found</h3>
          <p className="text-slate-400 mb-4">
            Try adjusting your filters to see more results.
          </p>
          <button
            onClick={() => setFilters({ category: "", priceRange: "", experienceRange: "", ratingRange: "" })}
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Clear all filters
          </button>
        </div>
      )}
    </section>
  );
}