import { useState } from "react";
import { Mail, MapPin, Send, MessageCircle, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`
    );
    window.location.href = `mailto:hello@newtonity.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-black pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center justify-center gap-2 mb-5">
            <span className="w-8 h-px bg-indigo-400" /> Get in touch <span className="w-8 h-px bg-indigo-400" />
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2.5px" }}
          >
            Let's build{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              what's next.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto">
            Have a challenge, an idea or just a question? Tell us a little about it. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-12 items-start">
          {/* Info */}
          <div className="md:col-span-2 space-y-8">
            {/* Quick info cards */}
            {[
              {
                icon: Mail,
                label: "Email us",
                value: "hello@newtonity.com",
                sub: "We reply within 24 hours",
                color: "bg-indigo-100 text-indigo-600",
              },
              {
                icon: Clock,
                label: "Response time",
                value: "Within 24 hours",
                sub: "Monday to Friday",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Working remotely",
                sub: "Clients worldwide",
                color: "bg-cyan-100 text-cyan-600",
              },
              {
                icon: MessageCircle,
                label: "Discovery call",
                value: "Free 30-min call",
                sub: "No commitment needed",
                color: "bg-violet-100 text-violet-600",
              },
            ].map(({ icon: Icon, label, value, sub, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
              >
                <span className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} />
                </span>
                <div>
                  <p className="text-slate-400 text-[10px] font-semibold tracking-[1.5px] uppercase mb-0.5">{label}</p>
                  <p
                    className="text-slate-900 font-semibold text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {value}
                  </p>
                  <p className="text-slate-400 text-xs">{sub}</p>
                </div>
              </div>
            ))}

            {/* Social */}
            <div className="p-6 bg-gradient-to-br from-abmer-200 to-gray-600 rounded-2xl text-black">
              <h4
                className="font-bold text-lg mb-2 text-black"
                style={{ fontFamily: "Space Grotesk, sans-serif" }}
              >
                Not ready to reach out yet?
              </h4>
              <p className="text-indigo-200 text-sm leading-relaxed">
                Follow us to see our latest work and get insights from our team.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-12 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-500" size={36} />
                </div>
                <h3
                  className="text-slate-900 font-bold text-2xl mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Enquiry sent!
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto">
                  Your email app should have opened. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10 space-y-6"
              >
                <div>
                  <h3
                    className="text-slate-900 font-bold text-2xl mb-1"
                    style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.8px" }}
                  >
                    Tell us about your project
                  </h3>
                  <p className="text-slate-400 text-sm">We'll get back to you within 24 hours.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-slate-600 text-xs font-bold tracking-wide uppercase mb-2">
                      Your name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={update}
                      placeholder="Alex Morgan"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-600 text-xs font-bold tracking-wide uppercase mb-2">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={update}
                      placeholder="alex@company.com"
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-slate-50 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-bold tracking-wide uppercase mb-2">
                    What do you need? *
                  </label>
                  <select
                    required
                    name="service"
                    value={form.service}
                    onChange={update}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-slate-50 focus:bg-white"
                  >
                    <option value="">Choose a service</option>
                    <option>Web development</option>
                    <option>App development</option>
                    <option>UI/UX design</option>
                    <option>Cloud & DevOps</option>
                    <option>Technology consulting</option>
                    <option>Digital growth</option>
                    <option>Something else</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-600 text-xs font-bold tracking-wide uppercase mb-2">
                    Project details *
                  </label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={update}
                    placeholder="A little about your idea, goals and timeline..."
                    rows={5}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 text-sm placeholder-slate-300 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 transition-all bg-slate-50 focus:bg-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Send enquiry <Send size={16} />
                </button>
                <p className="text-center text-slate-400 text-xs">
                  By submitting, you agree we'll contact you about your project. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
