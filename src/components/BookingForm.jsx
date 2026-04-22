import { useState } from "react";

export default function BookingForm({ doctor }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Appointment request sent for ${doctor?.name || "your selected doctor"}.`);
    setFormData({ name: "", email: "", phone: "", date: "", time: "", notes: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-glow backdrop-blur-xl">
      <div className="mb-6 rounded-3xl bg-slate-900/85 p-5 text-sm text-slate-300">
        <p className="font-medium text-white">Booking for {doctor?.name || "a doctor"}</p>
        <p className="mt-2 text-slate-400">Fill in your details and request a convenient slot.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-300">
          <span>Name</span>
          <input
            required
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
            placeholder="Your name"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Email</span>
          <input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
            placeholder="you@example.com"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Phone</span>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
            placeholder="+91 98765 43210"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-300">
          <span>Date</span>
          <input
            required
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
          />
        </label>
      </div>

      <label className="mt-4 block space-y-2 text-sm text-slate-300">
        <span>Notes</span>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
          placeholder="Any symptoms or request"
        />
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
      >
        Request appointment
      </button>
    </form>
  );
}