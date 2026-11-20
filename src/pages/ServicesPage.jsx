import { Link } from "react-router-dom";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "../data";

const whyUs = [
  "End-to-end ownership from concept to launch",
  "Agile delivery with regular check-ins",
  "Clean, maintainable & scalable code",
  "Post-launch support & improvements",
  "Transparent pricing, no hidden costs",
  "Direct communication — no account managers",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-slate-900 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-indigo-400" /> What we do
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-2xl"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2.5px" }}
          >
            Services built for{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              real outcomes.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
            From the first sketch to the final launch, we bring the right people and technology together to solve real problems.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, number, title, text, bg, iconColor, color, slug }) => (
              <article
                key={number}
                className="group relative p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-50 hover:-translate-y-2 transition-all duration-300 bg-white overflow-hidden flex flex-col justify-between"
              >
                {/* Hover gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative">
                  <div className="flex items-center justify-between mb-7">
                    <span className={`w-14 h-14 ${bg} ${iconColor} rounded-2xl flex items-center justify-center shadow-sm`}>
                      <Icon size={26} />
                    </span>
                    <span
                      className="text-slate-200 text-sm font-bold"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {number}
                    </span>
                  </div>
                  <Link to={`/services/${slug}`}>
                    <h3
                      className="text-slate-900 font-bold text-xl mb-3 hover:text-indigo-600 transition-colors"
                      style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.4px" }}
                    >
                      {title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{text}</p>
                </div>
                <div className="relative pt-3 flex items-center justify-between border-t border-slate-100/60">
                  <Link
                    to={`/services/${slug}`}
                    className={`inline-flex items-center gap-1.5 ${iconColor} text-sm font-semibold hover:gap-2.5 transition-all`}
                  >
                    View details <ArrowUpRight size={15} />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-xs text-slate-400 hover:text-slate-700 font-medium transition-colors"
                  >
                    Get started →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-indigo-600" /> Why choose us
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2px" }}
            >
              We care about every
              <br />
              <span className="text-slate-400">detail, always.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-10">
              Our process is built around your success. We focus on what truly matters — building products that work, that users love, and that move your business forward.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-7 py-4 rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 hover:-translate-y-0.5 transition-all"
            >
              Start a project <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {whyUs.map((point) => (
              <div key={point} className="flex items-center gap-4 p-5 bg-white rounded-xl border border-slate-100 hover:border-indigo-200 hover:shadow-md transition-all">
                <CheckCircle2 className="text-indigo-600 flex-shrink-0" size={20} />
                <span className="text-slate-700 text-sm font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3
              className="text-white text-3xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1px" }}
            >
              Have a project in mind?
            </h3>
            <p className="text-indigo-200 text-sm">Let's talk about how we can help you build it.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-7 py-4 rounded-xl hover:bg-indigo-50 transition-all shadow-xl"
          >
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
