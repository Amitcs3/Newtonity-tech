import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Instagram, Github, Twitter, Mail, MapPin } from "lucide-react";

const exploreLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/work" },
  { label: "Process", to: "/process" },
];

const contactLinks = [
  { label: "Start a Project", to: "/contact" },
  { label: "hello@newtonity.com", to: "mailto:hello@newtonity.com" },
];

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-slate-900 to-indigo-900 text-white">
      {/* Top CTA Strip */}
      <div className="bg-amber-50">
        <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <div>
            <p className="text-black text-xs font-semibold tracking-widest uppercase mb-1 text-center justify-center">Ready to build?</p>
            <h3
              className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent text-2xl md:text-3xl font-bold text-center justify-center"
              style={{ fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-1px" }}
            >
              Let's create something amazing together.
            </h3>
          </div>
          {/* <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all shadow-lg"
          >
            Start a project <ArrowUpRight size={18} />
          </Link> */}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="leading-none">
                <img
                  src="/logo4.png"
                  alt="Newtonity Technologies"
                  className="h-16 w-auto object-contain"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building thoughtful digital experiences for a world that never stands still. 
              We partner with ambitious businesses to bring bold ideas to life.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <p className="text-slate-500 text-[10px] font-semibold tracking-[2px] uppercase mb-5">Explore</p>
            <div className="flex flex-col gap-3">
              {exploreLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-slate-400 text-sm hover:text-white transition-colors flex items-center gap-1 group"
                >
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200 text-indigo-400">→</span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-slate-500 text-[10px] font-semibold tracking-[2px] uppercase mb-5">Get in Touch</p>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@newtonity.com"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                  <Mail size={14} />
                </span>
                <span className="text-sm">hello@newtonity.com</span>
              </a>
              <div className="flex items-center gap-3 text-slate-400">
                <span className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin size={14} />
                </span>
                <span className="text-sm">Working with clients everywhere</span>
              </div>
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:-translate-y-0.5 transition-all shadow-lg shadow-indigo-900/30"
              >
                Start a project <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Newtonity Technologies. All rights reserved.
          </span>
          <span className="text-slate-500 text-xs flex items-center gap-1">
            Built by Amit <span className="text-cyan-400">✳</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
