import { Link } from "react-router-dom";
import { ArrowUpRight, Search, Map, Hammer, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    text: "We listen, ask the right questions and understand what success looks like for you. We dig into your business, users, competitors and goals before writing a single line of code.",
    deliverables: ["Discovery workshop", "Competitor analysis", "User research", "Goal definition"],
    color: "bg-indigo-100 text-indigo-600",
    border: "border-indigo-200",
  },
  {
    num: "02",
    icon: Map,
    title: "Define",
    text: "We shape the strategy, scope and roadmap so everyone knows what we're building and why. No surprises, no scope creep — just clarity.",
    deliverables: ["Project roadmap", "Technical spec", "Design brief", "Timeline & milestones"],
    color: "bg-violet-100 text-violet-600",
    border: "border-violet-200",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Design & Build",
    text: "We turn the plan into a thoughtful experience, testing and refining as we go. Design and development happen in close collaboration, so nothing gets lost in translation.",
    deliverables: ["UI/UX design", "Frontend development", "Backend development", "Quality testing"],
    color: "bg-blue-100 text-blue-600",
    border: "border-blue-200",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch",
    text: "We launch with care, making sure everything is tested, optimised and ready for the real world. We're right there with you at go-live.",
    deliverables: ["Pre-launch checklist", "Deployment setup", "Performance testing", "Launch support"],
    color: "bg-cyan-100 text-cyan-600",
    border: "border-cyan-200",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Grow",
    text: "We measure what matters and keep improving together. Post-launch isn't the end — it's where the real learning begins.",
    deliverables: ["Analytics setup", "A/B testing", "Ongoing improvements", "Quarterly reviews"],
    color: "bg-emerald-100 text-emerald-600",
    border: "border-emerald-200",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-indigo-400" /> How we work
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2.5px" }}
          >
            A clear path from idea{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              to impact.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            Good work comes from a good process. Here's how we make progress together — with full transparency at every step.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-[52px] top-8 bottom-8 w-px bg-gradient-to-b from-indigo-200 via-blue-200 to-emerald-200" />

            <div className="space-y-8">
              {steps.map(({ num, icon: Icon, title, text, deliverables, color, border }) => (
                <div key={num} className="group flex gap-8 items-start">
                  {/* Step indicator */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-[104px] h-[104px] hidden lg:flex flex-col items-center justify-center rounded-2xl border-2 ${border} ${color.replace("text-", "bg-").replace("600", "50")} shadow-sm group-hover:shadow-md transition-all`}
                    >
                      <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center mb-1.5`}>
                        <Icon size={20} />
                      </div>
                      <span
                        className="text-slate-400 text-xs font-bold"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 p-8 rounded-2xl border ${border} bg-white hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      <div className={`lg:hidden w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon size={22} />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <span
                            className="text-slate-300 text-sm font-bold"
                            style={{ fontFamily: "Space Grotesk, sans-serif" }}
                          >
                            {num}
                          </span>
                          <span className="w-8 h-px bg-slate-200" />
                        </div>
                        <h3
                          className="text-slate-900 font-bold text-2xl"
                          style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.8px" }}
                        >
                          {title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-slate-500 leading-relaxed mb-6">{text}</p>
                    <div>
                      <p className="text-slate-400 text-[10px] font-bold tracking-[1.5px] uppercase mb-3">Deliverables</p>
                      <div className="flex flex-wrap gap-2">
                        {deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-3 py-1.5 bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium rounded-lg"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center justify-center gap-2 mb-4">
            <span className="w-8 h-px bg-indigo-600" /> Common questions <span className="w-8 h-px bg-indigo-600" />
          </p>
          <h2
            className="text-4xl font-bold text-slate-900 mb-16"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
          >
            Things people usually ask
          </h2>
          <div className="text-left space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "It depends on scope. A focused website might take 4–6 weeks; a full product can take 3–6 months. We'll give you a clear timeline after the discovery phase.",
              },
              {
                q: "How do you handle communication?",
                a: "You'll have direct access to your team lead throughout. We use regular check-ins, shared documents and async updates so you're never left guessing.",
              },
              {
                q: "Can you take over an existing project?",
                a: "Yes. We're happy to audit, improve and continue ongoing projects. We'll start with a thorough code and design review to understand what we're working with.",
              },
              {
                q: "What happens after launch?",
                a: "We offer ongoing support, maintenance and improvement packages. Many clients continue working with us on a retainer basis after launch.",
              },
            ].map(({ q, a }) => (
              <details
                key={q}
                className="group bg-white border border-slate-100 rounded-xl overflow-hidden hover:border-indigo-200 transition-colors"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span
                    className="text-slate-900 font-semibold text-sm"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {q}
                  </span>
                  <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 group-open:rotate-45 group-open:bg-indigo-100 group-open:text-indigo-600 transition-all flex-shrink-0 ml-4 text-lg leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-slate-500 text-sm leading-relaxed">{a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* <div>
            <h3
              className="text-white text-3xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1px" }}
            >
              Ready to get started?
            </h3>
            <p className="text-indigo-200 text-sm">Step one is a simple conversation. No commitment.</p>
          </div> */}
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-7 py-4 rounded-xl hover:bg-indigo-50 transition-all shadow-xl"
          >
            Let's talk <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
