import { Link } from "react-router-dom";
import { ArrowUpRight, Play, Sparkles, ChevronRight } from "lucide-react";
import { services, projects, stats } from "../data";

export default function HomePage() {
  return (
    <>
      {/* ANIMATION STYLES */}
      <style>{`
        @keyframes logoFloat {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -16px; }
        }

        @keyframes orbitSpin {
          from { rotate: 0deg; }
          to { rotate: 360deg; }
        }

        @keyframes cardFloat {
          0%, 100% { translate: 0 0; }
          50% { translate: 0 -10px; }
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.35; scale: 1; }
          50% { opacity: 0.7; scale: 1.12; }
        }

        .logo-float {
          animation: logoFloat 5s ease-in-out infinite;
        }

        .orbit-spin {
          animation: orbitSpin 22s linear infinite;
        }

        .card-float {
          animation: cardFloat 4s ease-in-out infinite;
        }

        .glow-pulse {
          animation: glowPulse 5s ease-in-out infinite;
        }
      `}</style>

      {/* HERO */}
      <section className="relative min-h-screen bg-slate-900 text-white overflow-hidden flex flex-col">

        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,120,210,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,120,210,0.06)_1px,transparent_1px)] bg-[size:58px_58px]" />

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative flex-1 max-w-6xl mx-auto w-full px-6 pt-36 pb-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* HERO VISUAL (right on desktop, faded background on mobile) */}
          <div
            className="
              absolute inset-0 z-0
              flex items-center justify-center
              opacity-20 pointer-events-none
              scale-75
              md:scale-100
              md:relative md:inset-auto md:z-0
              md:order-2
              md:h-[460px] md:opacity-100
              md:pointer-events-auto
            "
          >

            {/* Orbit Rings */}
            <div className="absolute w-[380px] h-[230px] md:w-[520px] md:h-[180px] border border-indigo-400/30 rounded-full -rotate-[28deg] orbit-spin" />

            <div className="absolute w-[350px] h-[300px] md:w-[460px] md:h-[280px] border border-blue-400/30 rounded-full rotate-[52deg] orbit-spin" />

            <div className="absolute w-[320px] h-[320px] md:w-[400px] md:h-[400px] border border-dashed border-indigo-400/30 rounded-full orbit-spin" />

            {/* Background Glow */}
            <div className="absolute w-52 h-52 md:w-72 md:h-72 bg-indigo-500/25 rounded-full blur-3xl glow-pulse" />

            {/* Logo Core */}
            <div
              className="
                relative w-36 h-36 md:w-48 md:h-48
                rounded-[32px] md:rounded-[42px]
                -rotate-12
                bg-gradient-to-br from-indigo-400 to-slate-900
                border border-indigo-400/40
                shadow-[0_0_80px_rgba(99,102,241,0.35)]
                flex items-center justify-center
                logo-float
              "
            >
              <div className="rotate-12 flex items-center justify-center">
                <img
                  src="/logo2.png"
                  alt="Newtonity Technologies Logo"
                  className="w-24 h-24 md:w-36 md:h-36 object-contain"
                />
              </div>
            </div>

            {/* Floating Card 1 */}
            <div
              className="
                absolute top-16 right-0
                bg-slate-800/80 backdrop-blur-xl
                border border-slate-600/40
                rounded-2xl px-4 py-3
                items-center gap-3 shadow-2xl
                hidden md:flex card-float
              "
            >
              <span className="w-9 h-9 bg-indigo-900/60 rounded-xl flex items-center justify-center text-indigo-300">
                <Sparkles size={16} />
              </span>

              <div>
                <b className="text-white text-xs block">Ideas to impact</b>
                <small className="text-slate-400 text-[10px]">
                  Make it meaningful
                </small>
              </div>
            </div>

            {/* Floating Card 2 */}
            <div
              className="
                absolute bottom-16 left-0
                bg-slate-800/80 backdrop-blur-xl
                border border-slate-600/40
                rounded-2xl px-4 py-3
                items-center gap-3 shadow-2xl
                hidden md:flex card-float
              "
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_10px] shadow-emerald-400" />

              <div>
                <b className="text-white text-xs block">
                  Built for tomorrow
                </b>
                <small className="text-slate-400 text-[10px]">
                  Scalable by design
                </small>
              </div>
            </div>
          </div>

          {/* HERO CONTENT (left on desktop, above visual on mobile) */}
          <div className="relative z-10 md:order-1 text-left flex flex-col items-start justify-start">

            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[10px] font-bold tracking-[2px] uppercase px-4 py-2 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px] shadow-cyan-400" />
              Your ideas, engineered for what's next
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-3px"
              }}
            >
              We turn bold ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                digital reality.
              </span>
            </h1>

            <p className="text-slate-300 md:text-slate-400 text-lg leading-relaxed max-w-md mb-10">
              We design and build meaningful digital experiences that help ambitious businesses move forward.
            </p>

            <div className="flex items-center gap-6 flex-wrap">

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-7 py-4 rounded-xl font-bold text-sm shadow-xl shadow-indigo-900/40 hover:-translate-y-1 hover:shadow-indigo-800/50 transition-all duration-200"
              >
                Start a project <ArrowUpRight size={18} />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center gap-3 text-slate-300 text-sm font-semibold hover:text-white transition-colors"
              >
                <span className="w-10 h-10 border border-slate-700 rounded-full flex items-center justify-center hover:border-indigo-500 transition-colors">
                  <Play size={13} fill="currentColor" />
                </span>
                Explore our work
              </Link>
            </div>

            <div className="flex items-center gap-4 mt-12">
              <div className="flex -space-x-2">
                {["N", "T", "+"].map((l, i) => (
                  <span
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs font-bold text-indigo-200"
                    style={{
                      background: ["#2a3f7a", "#173460", "#0f2a50"][i]
                    }}
                  >
                    {l}
                  </span>
                ))}
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-200">
                  Technology with purpose.
                </strong>
                <br />
                Built around your next big move.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Ticker */}
        <div className="relative z-10 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-center gap-4 md:gap-8 text-slate-500 text-[8px] md:text-[9px] font-semibold tracking-[2px] md:tracking-[3px] flex-wrap">
            {["STRATEGY", "DESIGN", "ENGINEERING", "GROWTH", "INNOVATION"].map((t, i) => (
              <span key={t} className="flex items-center gap-4 md:gap-8">
                {i > 0 && <span className="w-1 h-1 bg-indigo-800 rounded-full" />}
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ number, label }) => (
            <div key={label} className="text-center">
              <p
                className="text-white text-4xl md:text-5xl font-bold mb-2"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "-2px"
                }}
              >
                {number}
              </p>
              <p className="text-indigo-200 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-indigo-600" />
                What we do
              </p>

              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "-2px"
                }}
              >
                Technology that moves
                <br />
                <span className="text-slate-400">
                  your business forward.
                </span>
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              View all services <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(({ icon: Icon, number, title, text, bg, iconColor, slug }) => (
              <article
                key={number}
                className="group p-7 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 hover:-translate-y-1 transition-all duration-300 bg-white flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`w-11 h-11 ${bg} ${iconColor} rounded-xl flex items-center justify-center`}>
                      <Icon size={22} />
                    </span>

                    <span
                      className="text-slate-300 text-xs font-semibold"
                      style={{ fontFamily: "Space Grotesk, sans-serif" }}
                    >
                      {number}
                    </span>
                  </div>

                  <Link to={`/services/${slug}`}>
                    <h3
                      className="text-slate-900 font-semibold text-lg mb-3 hover:text-indigo-600 transition-colors"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        letterSpacing: "-0.3px"
                      }}
                    >
                      {title}
                    </h3>
                  </Link>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {text}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between">
                  <Link
                    to={`/services/${slug}`}
                    className="inline-flex items-center gap-1.5 text-indigo-600 text-xs font-bold hover:gap-2 transition-all"
                  >
                    Explore details <ArrowUpRight size={14} />
                  </Link>
                  <Link
                    to="/contact"
                    className="text-[11px] text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    Discuss project
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="py-28 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-indigo-600" />
                Selected Work
              </p>

              <h2
                className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "-2px"
                }}
              >
                Good ideas deserve
                <br />
                <span className="text-slate-400">
                  great execution.
                </span>
              </h2>
            </div>

            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold text-sm hover:gap-3 transition-all"
            >
              View all projects <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map(({ type, name, description, gradient, tag, index }) => (
              <article key={name} className="group">

                <div className={`h-60 rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden mb-5`}>

                  {/* Mock Browser */}
                  <div className="absolute inset-4 bg-white rounded-xl shadow-xl overflow-hidden -rotate-2 group-hover:rotate-0 group-hover:scale-105 transition-all duration-300">
                    <div className="h-6 bg-slate-50 flex items-center px-3 gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-300" />
                      <span className="w-2 h-2 rounded-full bg-yellow-300" />
                      <span className="w-2 h-2 rounded-full bg-green-300" />
                      <span className="ml-auto text-[6px] text-slate-400">
                        {tag}
                      </span>
                    </div>

                    <div className="p-3 flex gap-2 h-full">
                      <div className="w-1/5 bg-slate-100 rounded-md" />

                      <div className="flex-1 space-y-2">
                        <div className="h-2 bg-indigo-200 rounded w-3/4" />
                        <div className="h-2 bg-slate-100 rounded w-1/2" />

                        <div className="flex gap-1.5 mt-3">
                          <div className="h-14 flex-1 rounded-lg bg-gradient-to-br from-slate-100 to-indigo-100" />
                          <div className="h-14 flex-1 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100" />
                          <div className="h-14 flex-1 rounded-lg bg-gradient-to-br from-teal-100 to-cyan-100" />
                        </div>

                        <div className="h-2 bg-slate-100 rounded w-2/3 mt-2" />
                      </div>
                    </div>
                  </div>

                  <span
                    className="absolute bottom-3 right-4 text-white/80 text-xs font-semibold"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {index}
                  </span>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-indigo-600 text-[9px] font-bold tracking-[1.8px]">
                      {type}
                    </span>

                    <h3
                      className="text-slate-900 font-semibold text-xl mt-1 mb-2"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        letterSpacing: "-0.5px"
                      }}
                    >
                      {name}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>

                  <Link
                    to="/contact"
                    className="w-9 h-9 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-indigo-500 hover:text-indigo-600 hover:bg-indigo-50 transition-all flex-shrink-0"
                  >
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gray-50  relative overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-[60px]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center bg-white">

          <p className="text-indigo-400 text-[10px] font-bold tracking-[2.5px] uppercase mb-5">
            Have a project in mind?
          </p>

          <h2
            className="text-4xl md:text-6xl font-bold text-black mb-6"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "-2.5px"
            }}
          >
            Let's build{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              what's next.
            </span>
          </h2>

          <p className="text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto">
            Have a challenge, an idea or just a question? Tell us a little about it. We'd love to hear from you.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-sm shadow-2xl shadow-indigo-900/50 hover:-translate-y-1 transition-all duration-200"
          >
            Start a conversation <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}