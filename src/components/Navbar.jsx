import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown, ChevronRight } from "lucide-react";
import { services } from "../data";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Our Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation();

  // Close menus on page change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close desktop dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Desktop hover triggers with small timeout to prevent rapid flicker
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 180);
  };

  const isServicesActive = location.pathname.startsWith("/services");

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xs transition-all duration-300">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" onClick={() => setOpen(false)}>
          <img
            src="/logo3.png"
            alt="Newtonity Technologies"
            className="h-16 w-auto object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {/* Home */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`
            }
          >
            Home
          </NavLink>

          {/* Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isServicesActive || servicesOpen
                  ? "text-indigo-600 bg-indigo-50"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
              }`}
              aria-expanded={servicesOpen}
            >
              <span>Services</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${
                  servicesOpen ? "rotate-180 text-indigo-600" : "text-slate-400"
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] z-50">
                <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 animate-in fade-in slide-in-from-top-2 duration-150">
                  {/* Dropdown Header */}
                  <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100 px-1">
                    <span className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                      Our Services
                    </span>
                    <Link
                      to="/services"
                      onClick={() => setServicesOpen(false)}
                      className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 transition-colors"
                    >
                      All Services Overview <ChevronRight size={13} />
                    </Link>
                  </div>

                  {/* 2-Column Grid of Services */}
                  <div className="grid grid-cols-2 gap-2">
                    {services.map((service) => {
                      const ServiceIcon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          onClick={() => setServicesOpen(false)}
                          className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-indigo-50/60 transition-all duration-150"
                        >
                          <div
                            className={`w-9 h-9 ${service.bg} ${service.iconColor} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}
                          >
                            <ServiceIcon size={18} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-1">
                              <p className="text-slate-900 text-xs font-bold group-hover:text-indigo-600 transition-colors truncate">
                                {service.title}
                              </p>
                              <ArrowUpRight
                                size={12}
                                className="text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-indigo-600 transition-all flex-shrink-0"
                              />
                            </div>
                            <p className="text-slate-500 text-[11px] leading-tight line-clamp-1 mt-0.5">
                              {service.text}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Dropdown Bottom Banner */}
                  <div className="mt-3 pt-3 border-t border-slate-100 bg-slate-50/70 -mx-4 -mb-4 px-5 py-3 rounded-b-2xl flex items-center justify-between text-xs">
                    <span className="text-slate-500">Need custom engineering?</span>
                    <Link
                      to="/contact"
                      onClick={() => setServicesOpen(false)}
                      className="text-indigo-600 font-bold hover:underline inline-flex items-center gap-1"
                    >
                      Talk to our engineers <ArrowUpRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Other Nav Links */}
          {navLinks.slice(1).map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 transition-all duration-200"
        >
          Let's talk <ArrowUpRight size={15} />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {/* Home */}
            <NavLink
              to="/"
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile Services Accordion */}
            <div className="rounded-xl overflow-hidden">
              <div
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isServicesActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <Link
                  to="/services"
                  onClick={() => setOpen(false)}
                  className="flex-1"
                >
                  Services
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="p-1 text-slate-500 hover:text-slate-900"
                  aria-label="Toggle services submenu"
                >
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileServicesOpen ? "rotate-180 text-indigo-600" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Sub-services list */}
              {mobileServicesOpen && (
                <div className="ml-4 pl-3 my-1 border-l-2 border-indigo-100 flex flex-col gap-1 py-1">
                  <Link
                    to="/services"
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-lg text-xs font-bold text-indigo-600 hover:bg-indigo-50 flex items-center justify-between"
                  >
                    <span>View All Services</span>
                    <ChevronRight size={13} />
                  </Link>
                  {services.map((service) => {
                    const ServiceIcon = service.icon;
                    return (
                      <Link
                        key={service.slug}
                        to={`/services/${service.slug}`}
                        onClick={() => setOpen(false)}
                        className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50 flex items-center gap-2.5 transition-colors"
                      >
                        <span className={`w-6 h-6 rounded-md ${service.bg} ${service.iconColor} flex items-center justify-center flex-shrink-0`}>
                          <ServiceIcon size={13} />
                        </span>
                        <span className="truncate">{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Other Mobile NavLinks */}
            {navLinks.slice(1).map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-slate-700 hover:bg-slate-50"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-500 text-white px-5 py-3 rounded-xl text-sm font-bold shadow-md shadow-indigo-100"
            >
              Let's talk <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
