import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

const allProjects = [
  ...projects,
  {
    type: "MOBILE APP",
    name: "Pulse Health",
    description: "A clean health-tracking app that helps users stay on top of wellness goals.",
    gradient: "from-rose-200 via-pink-200 to-rose-300",
    tag: "Mobile Design",
    index: "04",
  },
  {
    type: "FINTECH PLATFORM",
    name: "Vantage Finance",
    description: "A powerful dashboard giving financial advisors a clear view of client portfolios.",
    gradient: "from-amber-200 via-yellow-200 to-amber-300",
    tag: "Dashboard",
    index: "05",
  },
  {
    type: "EDUCATION TOOL",
    name: "Lerna Learn",
    description: "An interactive learning platform that makes upskilling simple and engaging.",
    gradient: "from-emerald-200 via-green-200 to-emerald-300",
    tag: "EdTech",
    index: "06",
  },
];

const filters = ["All", "Web", "Mobile", "Design", "Dashboard"];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-indigo-400" /> Selected work
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2.5px" }}
          >
            Good ideas deserve{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              great execution.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            A glimpse at the kind of digital experiences we love bringing to life.
          </p>
        </div>
      </section>

      {/* Filter bar */}
      <section className="bg-white border-b border-slate-100 sticky top-20 z-30">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-2 overflow-x-auto">
          {filters.map((f, i) => (
            <button
              key={f}
              className={`px-5 py-2 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
                i === 0
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-slate-50 text-slate-600 hover:bg-slate-100"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map(({ type, name, description, gradient, tag, index }) => (
              <article key={name} className="group">
                <div className={`h-72 rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden mb-5`}>
                  {/* Mock browser */}
                  <div className="absolute inset-5 bg-white rounded-xl shadow-xl overflow-hidden -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
                    <div className="h-7 bg-slate-50 flex items-center px-3 gap-1.5 border-b border-slate-100">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
                      <div className="ml-3 flex-1 h-3.5 bg-slate-100 rounded-full" />
                      <span className="text-[6px] text-slate-400 ml-2">{tag}</span>
                    </div>
                    <div className="p-4 flex gap-3 h-full">
                      <div className="w-1/5 bg-slate-100 rounded-lg" />
                      <div className="flex-1 space-y-2">
                        <div className="h-2.5 bg-indigo-200 rounded-full w-3/4" />
                        <div className="h-2 bg-slate-100 rounded-full w-1/2" />
                        <div className="flex gap-2 mt-4">
                          <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-slate-100 to-indigo-100" />
                          <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-purple-100 to-blue-100" />
                          <div className="h-16 flex-1 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100" />
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full w-2/3 mt-2" />
                        <div className="h-2 bg-slate-50 rounded-full w-1/2" />
                      </div>
                    </div>
                  </div>
                  <span
                    className="absolute bottom-4 right-5 text-white/70 text-xs font-bold"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {index}
                  </span>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-all duration-300 rounded-2xl" />
                </div>

                <div className="flex items-start justify-between gap-4 px-1">
                  <div>
                    <span className="text-indigo-600 text-[9px] font-bold tracking-[2px]">{type}</span>
                    <h3
                      className="text-slate-900 font-bold text-xl mt-1 mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.5px" }}
                    >
                      {name}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="w-10 h-10 border-2 border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex-shrink-0 mt-1"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="text-center text-slate-400 text-xs mt-16">
            Concept projects shown for presentation purposes. Replace with your real case studies as they become available.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-4xl font-bold text-slate-900 mb-4"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
          >
            Want to be in this list?
          </h2>
          <p className="text-slate-500 leading-relaxed mb-8">
            We'd love to build something great with you. Let's start with a conversation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-xl shadow-indigo-200 hover:-translate-y-0.5 transition-all"
          >
            Start your project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
