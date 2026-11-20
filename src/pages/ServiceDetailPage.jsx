import { useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowUpRight,
  ArrowLeft,
  CheckCircle2,
  ChevronDown,
  Sparkles,
  Layers,
  Shield,
  Zap,
  Clock,
  Code2
} from "lucide-react";
import { services } from "../data";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = useState(0);

  // If service slug is invalid, render fallback
  if (!service) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
          <Code2 size={32} />
        </div>
        <h1
          className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          Service Not Found
        </h1>
        <p className="text-slate-500 max-w-md mb-8">
          The service you are looking for might have been moved, renamed, or is currently unavailable.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition-all"
        >
          <ArrowLeft size={16} /> View All Services
        </Link>
      </div>
    );
  }

  const {
    icon: Icon,
    number,
    title,
    badge,
    tagline,
    overview,
    color,
    bg,
    iconColor,
    keyFeatures = [],
    techStack = [],
    deliverables = [],
    benefits = [],
    faqs = []
  } = service;

  // Other services for cross-linking
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-36 pb-24 relative overflow-hidden">
        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.06)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-indigo-400">{title}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8">
              {/* Badge & Number */}
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-1.5 rounded-full mb-6">
                <span className="text-indigo-400 font-bold text-xs uppercase tracking-wider">
                  {number}
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span className="text-slate-200 font-medium text-xs">
                  {badge || "Specialized Service"}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-2px" }}
              >
                {title}
              </h1>

              {/* Tagline */}
              <p className="text-lg md:text-xl text-indigo-200 font-medium leading-relaxed mb-6">
                {tagline}
              </p>

              {/* Overview */}
              <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
                {overview}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all"
                >
                  Start with this service <ArrowUpRight size={17} />
                </Link>

                <a
                  href="#capabilities"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white border border-white/10 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>

            {/* Right Card Visual */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-sm p-8 rounded-3xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/60 backdrop-blur-xl shadow-2xl">
                <div className={`w-16 h-16 ${bg} ${iconColor} rounded-2xl flex items-center justify-center mb-6 shadow-inner`}>
                  <Icon size={32} />
                </div>
                <h3
                  className="text-white text-xl font-bold mb-2"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  Ready to launch?
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Get a comprehensive plan, transparent estimates, and direct collaboration with senior engineers.
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-700/60 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span>Free architectural consultation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span>Agile sprints with weekly demos</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                    <span>Post-launch warranty & support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities / Features */}
      <section id="capabilities" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-indigo-600" /> Core Capabilities
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
            >
              What we bring to your team
            </h2>
            <p className="text-slate-500 text-base mt-4">
              Comprehensive technical solutions designed to solve tough challenges and drive measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyFeatures.map((feature, idx) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50 transition-all duration-300 bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm">
                    0{idx + 1}
                  </span>
                  <Sparkles size={18} className="text-slate-300 group-hover:text-indigo-500 transition-colors" />
                </div>
                <h3
                  className="text-slate-900 font-bold text-xl mb-3"
                  style={{ fontFamily: "Space Grotesk, sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      {techStack.length > 0 && (
        <section className="py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center max-w-xl mx-auto mb-12">
              <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase mb-3">
                Tech Stack & Frameworks
              </p>
              <h2
                className="text-3xl font-bold text-slate-900"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1px" }}
              >
                Built with industry standard tools
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-5 py-3 bg-white rounded-xl border border-slate-200/80 shadow-sm text-slate-800 text-sm font-semibold hover:border-indigo-400 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-start">
          {/* Deliverables */}
          <div className="lg:col-span-6">
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-indigo-600" /> Tangible Outcomes
            </p>
            <h2
              className="text-3xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
            >
              What you will receive
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Every engagement produces production-ready assets, complete documentation, and clear transfer of ownership.
            </p>

            <div className="space-y-4">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3.5 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors"
                >
                  <CheckCircle2 size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="lg:col-span-6">
            <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-indigo-600" /> The Newtonity Edge
            </p>
            <h2
              className="text-3xl font-bold text-slate-900 mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
            >
              Why build with us?
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              We operate as your technical partners, bringing seasoned seniority and modern practices to every line of code.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-lg transition-all"
                >
                  <h3
                    className="text-slate-900 font-bold text-lg mb-2 flex items-center gap-2"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    <Zap size={18} className="text-indigo-600" />
                    {benefit.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase mb-3">
                Got Questions?
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold text-slate-900"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
              >
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden transition-all duration-200"
                  >
                    <button
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                      onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    >
                      <span
                        className="text-slate-900 font-bold text-base md:text-lg"
                        style={{ fontFamily: "Space Grotesk, sans-serif" }}
                      >
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-indigo-600" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Explore Other Services */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-indigo-600 text-[10px] font-bold tracking-[2.5px] uppercase mb-2">
                More Services
              </p>
              <h2
                className="text-3xl font-bold text-slate-900"
                style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1.5px" }}
              >
                Explore other areas of our expertise
              </h2>
            </div>
            <Link
              to="/services"
              className="text-indigo-600 font-bold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
            >
              View all services <ArrowUpRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => {
              const ItemIcon = item.icon;
              return (
                <Link
                  key={item.slug}
                  to={`/services/${item.slug}`}
                  className="group p-6 rounded-2xl border border-slate-100 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-50/50 hover:-translate-y-1 transition-all duration-300 bg-white"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`w-12 h-12 ${item.bg} ${item.iconColor} rounded-xl flex items-center justify-center`}>
                      <ItemIcon size={22} />
                    </span>
                    <span className="text-slate-300 text-xs font-bold font-mono">{item.number}</span>
                  </div>
                  <h3
                    className="text-slate-900 font-bold text-lg mb-2 group-hover:text-indigo-600 transition-colors"
                    style={{ fontFamily: "Space Grotesk, sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed line-clamp-2 mb-4">
                    {item.text}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600">
                    Learn more <ArrowUpRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-20 bg-white text-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96  rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* <div>
            <h3
              className="text-3xl md:text-4xl font-bold mb-3"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1px" }}
            >
              Ready to start your {title} project?
            </h3>
            <p className="text-indigo-100 text-base max-w-xl">
              Let's talk through your goals, timeline, and budget. No obligations, just straight technical guidance.
            </p>
          </div> */}
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-blue-500 text-black font-bold px-8 py-4 rounded-xl hover:bg-white transition-all shadow-xl hover:-translate-y-0.5"
          >
            Get in touch <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
