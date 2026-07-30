import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, Phone, Mail } from "lucide-react";
import { companyInfo } from "@/data/services";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 btn-press">
          <div className={`rounded-md overflow-hidden transition-all duration-300 ${
            scrolled ? "bg-transparent" : "bg-white/95 px-2 py-1 shadow-lg"
          }`}>
            <img
              src={companyInfo.logo}
              alt="ABM Engenharia"
              className="h-10 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors relative group ${
                scrolled ? "text-slate-700 hover:text-[#0066cc]" : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0066cc] to-[#f59e0b] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${companyInfo.phone}`}
            className={`flex items-center gap-2 text-sm transition-colors ${
              scrolled ? "text-slate-600 hover:text-[#0066cc]" : "text-white/80 hover:text-white"
            }`}
          >
            <Phone className="h-4 w-4" />
            {companyInfo.phoneFormatted}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden btn-press ${scrolled ? "text-[#0066cc]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-slate-100 animate-fade-in">
          <nav className="container flex flex-col py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 px-4 text-slate-700 hover:bg-slate-50 hover:text-[#0066cc] rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-slate-100 mt-2 pt-3 flex flex-col gap-2">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-2 py-2 px-4 text-slate-600"
              >
                <Phone className="h-4 w-4 text-[#0066cc]" />
                {companyInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-2 py-2 px-4 text-slate-600"
              >
                <Mail className="h-4 w-4 text-[#0066cc]" />
                {companyInfo.email}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
