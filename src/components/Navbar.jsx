import { NavLink } from "react-router-dom";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Doctors", to: "/doctors" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Login", to: "/login" },
  { label: "Signup", to: "/signup" },
];

export default function Navbar({ theme, onToggleTheme }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-black/20 shadow-sm">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-300 ring-1 ring-sky-400/20">
            <span className="text-xl">+</span>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-sky-300">HealthLink</p>
            <p className="text-lg font-semibold text-white">Doctor Appointments</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-sky-500/20 text-sky-200 shadow-sm shadow-sky-500/20"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/10"
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </nav>
    </header>
  );
}