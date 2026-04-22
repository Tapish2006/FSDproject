import { Link } from "react-router-dom";

export default function DoctorCard({ doctor }) {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push("⭐");
    }
    if (hasHalfStar) {
      stars.push("⭐");
    }

    return stars.join("");
  };

  return (
    <div className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(14,165,233,0.18)] theme-surface">
      <div className="flex items-center gap-4">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="h-20 w-20 rounded-full object-cover ring-1 ring-slate-700"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{doctor.specialization}</p>
              <h2 className="text-xl font-semibold theme-text">{doctor.name}</h2>
            </div>
            <span className={`rounded-full px-3 py-1 text-sm font-semibold ${doctor.online ? "bg-emerald-500/10 text-emerald-300" : "bg-slate-800 text-slate-400"}`}>
              {doctor.online ? "Online" : "Offline"}
            </span>
          </div>
          <p className="text-sm text-slate-400">{doctor.location}</p>
        </div>
      </div>

      <p className="mt-5 text-slate-400 line-clamp-2">{doctor.bio}</p>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="rounded-3xl bg-slate-950/85 px-3 py-2 text-sm text-slate-300">
              {doctor.experience} yrs exp
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm text-yellow-400">{renderStars(doctor.rating)}</span>
              <span className="text-sm text-slate-400">({doctor.rating})</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold theme-text">₹{doctor.price}</p>
            <p className="text-xs text-slate-400">consultation</p>
          </div>
        </div>

        <Link
          to={`/doctor/${doctor.id}`}
          className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
        >
          Book Appointment
        </Link>
      </div>
    </div>
  );
}