import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-r from-sky-500/25 via-indigo-600/20 to-emerald-500/15 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-52 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-full wave-bg" />
        <div className="absolute inset-x-0 bottom-0 h-full animate-wave">
          <svg viewBox="0 0 1440 280" className="h-full w-full">
            <path
              fill="rgba(56,189,248,0.24)"
              d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,234.7C960,245,1056,235,1152,208C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-sky-500/15 px-4 py-1 text-sm font-semibold uppercase tracking-[0.32em] text-sky-200 ring-1 ring-sky-500/20">
              Fast booking · Trusted specialists
            </span>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight theme-text sm:text-5xl">
              Seamless doctor appointments with a modern patient experience.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Find the best specialists, book available slots instantly, and manage appointments from one polished interface.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/doctors"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                Browse doctors
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 hover:text-white"
              >
                View dashboard
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl animate-fadeIn theme-surface">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Featured doctor</p>
                  <h2 className="mt-3 text-3xl font-semibold theme-text">Dr. Arjun Sharma</h2>
                </div>
                <div className="rounded-3xl bg-slate-900/90 px-4 py-2 text-sm text-slate-300">
                  14 yrs exp
                </div>
              </div>
              <p className="mt-6 text-slate-400">
                Specialized in cardiology with an emphasis on preventive care and fast scheduling for busy professionals.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Availability</p>
                  <p className="mt-2 text-base font-semibold text-white">Today · 10:30 AM</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-4">
                  <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Rating</p>
                  <p className="mt-2 text-base font-semibold text-white">4.9 / 5</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/75 p-8 shadow-glow backdrop-blur-xl theme-surface">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">Fast booking</p>
              <h3 className="mt-3 text-2xl font-semibold theme-text">Your care begins with a single click.</h3>
              <p className="mt-4 text-slate-400">
                Search specialists, compare expertise, and reserve appointment slots with confidence using a user-friendly interface.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}