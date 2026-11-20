import { Link } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
import { teamValues, stats } from "../data";

const points = [
  "People-first, problem-led thinking",
  "Clear communication at every stage",
  "Quality, performance and security in mind",
  "Solutions designed to grow with you",
];

const timeline = [
  { year: "2019", title: "Founded", text: "Started with a simple belief: great technology starts with understanding people." },
  { year: "2020", title: "First 10 clients", text: "Grew rapidly through word of mouth, delivering projects across web and mobile." },
  { year: "2022", title: "Expanded services", text: "Added cloud, DevOps and digital growth services to serve clients end-to-end." },
  { year: "2024", title: "50+ projects delivered", text: "Reached 50 successful launches across industries, worldwide clients, 99% satisfaction." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white pt-36 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <p className="text-indigo-400 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center justify-center gap-2 mb-5">
            <span className="w-8 h-px bg-indigo-400" /> A little about us <span className="w-8 h-px bg-indigo-400" />
          </p>
          <h1
            className="text-5xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2.5px" }}
          >
            Not just technology.{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              A better way forward.
            </span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto">
            At Newtonity Technologies, we believe great technology starts with understanding people. We partner with you to turn challenges into simple, useful and lasting digital solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-indigo-600 py-14">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-white text-4xl font-bold mb-1"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
              >
                {number}
              </p>
              <p className="text-indigo-200 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          {/* Visual */}
          <div className="relative h-[420px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(133,164,219,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(133,164,219,0.09)_1px,transparent_1px)] bg-[size:35px_35px] [transform:perspective(500px)_rotateX(12deg)_scale(1.2)]" />
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-indigo-500 to-blue-700 border-2 border-indigo-300/40 shadow-[0_0_80px_rgba(99,102,241,0.4)] flex items-center justify-center">
              <span
                className="text-white font-bold"
                style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "120px", lineHeight: 1, letterSpacing: "-18px" }}
              >
                n<span className="text-cyan-300">.</span>
              </span>
            </div>
            <div className="absolute bottom-6 right-6 bg-white rounded-xl px-5 py-4 shadow-xl">
              <span className="block w-6 h-1 bg-cyan-400 rounded mb-3" />
              <b className="block text-slate-900 text-sm font-semibold" style={{ fontFamily: "Space Grotesk, sans-serif" }}>Curiosity</b>
              <small className="text-slate-400 text-xs">is our starting point.</small>
            </div>
            <span className="absolute top-6 left-6 text-slate-500 text-[9px] tracking-[2.5px] uppercase">Est. on possibility</span>
          </div>

          {/* Copy */}
          <div>
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-indigo-600" /> Our mission
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2px" }}
            >
              We build with
              <br />
              <span className="text-slate-400">purpose & clarity.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              We're a team of builders, designers and strategists who care deeply about the work we produce and the people we produce it for. We ask hard questions, challenge assumptions and never ship something we're not proud of.
            </p>
            <ul className="space-y-3 mb-10">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-slate-600 text-sm">
                  <span className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check size={13} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              Get to know us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-indigo-600" /> Our values <span className="w-8 h-px bg-indigo-600" />
            </p>
            <h2
              className="text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
            >
              What drives everything we do
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamValues.map(({ icon: Icon, title, text }) => (
              <div key={title} className="p-7 bg-white rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3
                  className="text-slate-900 font-semibold text-lg mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center justify-center gap-2 mb-4">
              <span className="w-8 h-px bg-indigo-600" /> Our journey <span className="w-8 h-px bg-indigo-600" />
            </p>
            <h2
              className="text-4xl font-bold text-slate-900"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
            >
              How we got here
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200" />
            <div className="space-y-10">
              {timeline.map(({ year, title, text }) => (
                <div key={year} className="flex gap-8 items-start">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-indigo-200" style={{ fontFamily: "Space Grotesk, sans-serif" }}>
                      {year}
                    </div>
                  </div>
                  <div className="pt-3 pb-6">
                    <h3
                      className="text-slate-900 font-semibold text-xl mb-2"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br bg-white to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 ">
          {/* <div>
            <h3
              className="text-white text-3xl font-bold mb-2"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1px" }}
            >
            //  Ready to work together?
            </h3>
             <p className="text-slate-400 text-sm">We'd love to hear about your project.</p> 
          </div> */}
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold px-7 py-4 rounded-xl hover:-translate-y-0.5 transition-all shadow-xl shadow-indigo-900/30"
          >
            Let's talk <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
