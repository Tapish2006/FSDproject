import { useParams, Link, useNavigate } from "react-router-dom";
import doctors from "../data/doctors";
import BookingForm from "../components/BookingForm";

export default function DoctorDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const doctor = doctors.find((item) => item.id === Number(id));

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/doctors");
    }
  };

  if (!doctor) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center text-slate-300 sm:px-6 lg:px-8">
        <p className="text-lg">Doctor not found.</p>
        <button
          onClick={handleBack}
          className="mt-4 inline-flex rounded-full border border-slate-700 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-slate-500"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Doctor profile</p>
          <h1 className="mt-3 text-4xl font-semibold theme-text">{doctor.name}</h1>
          <p className="mt-3 max-w-2xl text-slate-400">{doctor.bio} Book a time slot and receive a confirmation instantly.</p>
        </div>
        <button
          onClick={handleBack}
          className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
        >
          Back
        </button>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_0.75fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl theme-surface">
          <div className="flex items-center gap-5">
            <img src={doctor.image} alt={doctor.name} className="h-24 w-24 rounded-full object-cover ring-1 ring-slate-700" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-sky-300">Specialist</p>
              <h2 className="mt-2 text-3xl font-semibold theme-text">{doctor.specialization}</h2>
              <p className="mt-2 text-sm text-slate-400">{doctor.location}</p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Experience</p>
              <p className="mt-2 text-lg font-semibold text-white">{doctor.experience} yrs</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Rating</p>
              <p className="mt-2 text-lg font-semibold text-white">{doctor.rating} / 5</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.3em] text-sky-300">Location</p>
              <p className="mt-2 text-lg font-semibold text-white">{doctor.location}</p>
            </div>
          </div>

          <div className="mt-8 space-y-3 text-slate-400">
            <p>{doctor.bio}</p>
            <p>
              This profile page helps patients review the doctor’s experience and preferred booking flow before requesting an appointment.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-6 shadow-glow backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Book your visit</p>
            <p className="mt-3 text-slate-400">Complete the form to request a slot with {doctor.name}.</p>
          </div>
          <BookingForm doctor={doctor} />
        </div>
      </div>
    </section>
  );
}