import { useState } from "react";
import doctors from "../data/doctors";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  const stats = [
    { label: "Total appointments", value: 156, change: "+12%", trend: "up" },
    { label: "Doctors visited", value: 8, change: "+2", trend: "up" },
    { label: "Avg. wait time", value: "8 min", change: "-15%", trend: "down" },
    { label: "Health score", value: "92%", change: "+5%", trend: "up" },
  ];

  const [upcomingAppointments, setUpcomingAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Arjun Sharma",
      specialty: "Cardiology",
      date: "May 18, 2026",
      time: "10:30 AM",
      type: "Consultation",
      status: "confirmed",
      location: "Online",
    },
    {
      id: 2,
      doctor: "Dr. Nisha Mehta",
      specialty: "Dermatology",
      date: "May 19, 2026",
      time: "1:00 PM",
      type: "Follow-up",
      status: "confirmed",
      location: "Clinic",
    },
    {
      id: 3,
      doctor: "Dr. Sana Kapoor",
      specialty: "Pediatrics",
      date: "May 20, 2026",
      time: "11:15 AM",
      type: "Check-up",
      status: "pending",
      location: "Clinic",
    },
  ]);

  const [recentActivity, setRecentActivity] = useState([
    { action: "Appointment booked", doctor: "Dr. Arjun Sharma", time: "2 hours ago" },
    { action: "Prescription received", doctor: "Dr. Nisha Mehta", time: "1 day ago" },
    { action: "Test results viewed", doctor: "Dr. Rajiv Patel", time: "3 days ago" },
    { action: "Appointment rescheduled", doctor: "Dr. Sana Kapoor", time: "1 week ago" },
  ]);

  const quickActions = [
    { label: "Book new appointment", icon: "+", to: "/doctors", color: "sky", type: "link" },
    { label: "View medical records", icon: "📄", color: "alert", type: "alert", message: "Medical records are coming soon. Check back later." },
    { label: "Contact support", icon: "💬", color: "violet", type: "mailto", href: "mailto:support@healthlink.com?subject=HealthLink%20Support" },
    { label: "Emergency help", icon: "🚨", color: "red", type: "tel", href: "tel:+18001234567" },
  ];

  const todaySchedule = [
    { time: "09:00", type: "Check-up", doctor: "Dr. Sana Kapoor", status: "completed" },
    { time: "10:30", type: "Consultation", doctor: "Dr. Arjun Sharma", status: "upcoming" },
    { time: "14:00", type: "Follow-up", doctor: "Dr. Nisha Mehta", status: "upcoming" },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "appointments", label: "Appointments" },
    { id: "records", label: "Medical Records" },
    { id: "settings", label: "Settings" },
  ];

  const handleQuickAction = (action) => {
    if (action.type === "mailto") {
      window.location.href = action.href;
      return;
    }

    if (action.type === "tel") {
      window.location.href = action.href;
      return;
    }

    if (action.type === "alert") {
      window.alert(action.message);
      return;
    }
  };

  const handleReschedule = (appointmentId) => {
    const appointment = upcomingAppointments.find((item) => item.id === appointmentId);
    if (!appointment) return;

    setUpcomingAppointments((current) =>
      current.map((item) =>
        item.id === appointmentId ? { ...item, status: "rescheduled" } : item
      )
    );

    setRecentActivity((current) => [
      { action: "Appointment rescheduled", doctor: appointment.doctor, time: "just now" },
      ...current,
    ]);
  };

  const handleCancel = (appointmentId) => {
    const appointment = upcomingAppointments.find((item) => item.id === appointmentId);
    if (!appointment) return;

    setUpcomingAppointments((current) =>
      current.map((item) =>
        item.id === appointmentId ? { ...item, status: "cancelled" } : item
      )
    );

    setRecentActivity((current) => [
      { action: "Appointment cancelled", doctor: appointment.doctor, time: "just now" },
      ...current,
    ]);
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8" id="dashboard">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300">Patient dashboard</p>
            <h1 className="text-4xl font-semibold theme-text">Welcome back, Patient</h1>
            <p className="max-w-3xl text-slate-400">
              Manage your health journey with easy access to appointments, records, and care coordination.
            </p>
          </div>
          <div className="hidden sm:block">
            <p className="text-sm text-slate-500">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickActions.map((action) => {
          const isLink = action.type === "link";
          const containerClass = `group rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow transition hover:-translate-y-1 hover:shadow-[0_32px_80px_rgba(14,165,233,0.18)]`;
          const iconClass = action.type === "alert"
            ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-400/20"
            : action.type === "tel"
            ? "bg-red-500/15 text-red-300 ring-1 ring-red-400/20"
            : `bg-${action.color}-500/15 text-${action.color}-300 ring-1 ring-${action.color}-400/20`;

          return isLink ? (
            <Link key={action.label} to={action.to} className={containerClass}>
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}>
                  <span className="text-xl">{action.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{action.label}</p>
                  <p className="text-xs text-slate-400">Quick access</p>
                </div>
              </div>
            </Link>
          ) : (
            <button
              key={action.label}
              type="button"
              onClick={() => handleQuickAction(action)}
              className={containerClass}
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconClass}`}>
                  <span className="text-xl">{action.icon}</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{action.label}</p>
                  <p className="text-xs text-slate-400">Quick access</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Stats Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-glow">
            <div className="flex items-center justify-between">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">{stat.label}</p>
              <span className={`text-xs font-medium ${stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
                {stat.change}
              </span>
            </div>
            <p className="mt-4 text-3xl font-semibold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Today's Schedule */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-white">Today's Schedule</h2>
              <span className="rounded-full bg-sky-500/15 px-3 py-1 text-sm text-sky-300">May 18, 2026</span>
            </div>
            <div className="mt-6 space-y-4">
              {todaySchedule.map((item, index) => (
                <div key={index} className="flex items-center gap-4 rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                  <div className={`h-3 w-3 rounded-full ${item.status === 'completed' ? 'bg-emerald-400' : 'bg-sky-400'}`} />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{item.time} - {item.type}</p>
                    <p className="text-sm text-slate-400">{item.doctor}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    item.status === 'completed' ? 'bg-emerald-500/15 text-emerald-300' : 'bg-sky-500/15 text-sky-300'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Appointments */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-white">Upcoming Appointments</h2>
            <div className="mt-6 space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div key={appointment.id} className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-semibold text-white">{appointment.doctor}</p>
                      <p className="text-sm text-slate-400">{appointment.specialty} · {appointment.type}</p>
                      <p className="mt-2 text-sm text-slate-500">{appointment.date} at {appointment.time}</p>
                      <p className="mt-1 text-xs text-slate-500">{appointment.location}</p>
                    </div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      appointment.status === 'confirmed'
                        ? 'bg-emerald-500/15 text-emerald-300'
                        : appointment.status === 'cancelled'
                        ? 'bg-red-500/15 text-red-300'
                        : 'bg-amber-500/15 text-amber-300'
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleReschedule(appointment.id)}
                      disabled={appointment.status === 'cancelled'}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleCancel(appointment.id)}
                      disabled={appointment.status === 'cancelled'}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-white">Recent Activity</h2>
            <div className="mt-6 space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-sky-400" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{activity.action}</p>
                    <p className="text-xs text-slate-400">{activity.doctor} · {activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Reminders */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-white">Health Reminders</h2>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-4">
                <p className="text-sm font-medium text-amber-300">Medication Reminder</p>
                <p className="text-xs text-slate-400">Take blood pressure medication at 8:00 PM</p>
              </div>
              <div className="rounded-3xl border border-sky-500/20 bg-sky-500/5 p-4">
                <p className="text-sm font-medium text-sky-300">Follow-up Due</p>
                <p className="text-xs text-slate-400">Cardiology check-up in 2 weeks</p>
              </div>
              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                <p className="text-sm font-medium text-emerald-300">Lab Results Ready</p>
                <p className="text-xs text-slate-400">Blood test results available for review</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-white">This Month</h2>
            <div className="mt-6 grid gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Appointments completed</span>
                <span className="text-lg font-semibold text-white">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Average rating given</span>
                <span className="text-lg font-semibold text-white">4.8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-slate-400">Health goals met</span>
                <span className="text-lg font-semibold text-white">85%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}