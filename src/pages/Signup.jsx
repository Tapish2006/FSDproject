import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    alert(`Registered ${name}. (This is a demo auth form.)`);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Create account</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Register with HealthLink</h1>
          <p className="mt-3 text-slate-400">
            Start your healthcare journey with a secure account and manage appointments in one place.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Full name</span>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
              placeholder="Your full name"
            />
          </label>
          <label className="block text-sm text-slate-300">
            <span className="mb-2 block">Email</span>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
              placeholder="you@example.com"
            />
          </label>
          <label className="block text-sm text-slate-300">
            <span className="mb-2 flex items-center justify-between text-slate-300">
              <span>Password</span>
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="text-xs font-medium text-sky-300 transition hover:text-sky-200"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </span>
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
              placeholder="Create a password"
            />
          </label>
          <label className="block text-sm text-slate-300">
            <span className="mb-2 flex items-center justify-between text-slate-300">
              <span>Confirm password</span>
              <button
                type="button"
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="text-xs font-medium text-sky-300 transition hover:text-sky-200"
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </button>
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-4 py-3 text-sm text-white outline-none transition focus:border-sky-400"
              placeholder="Repeat your password"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Create account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-400">
          Already registered?{' '}
          <Link to="/login" className="text-sky-300 hover:text-sky-200">
            Sign in
          </Link>
          .
        </p>
      </div>
    </section>
  );
}