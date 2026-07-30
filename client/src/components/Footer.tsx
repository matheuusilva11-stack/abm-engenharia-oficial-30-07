import { Link } from "wouter";
import { Phone, Mail, ArrowUp, Instagram, Linkedin, MessageCircle } from "lucide-react";
import { companyInfo, whatsappLink } from "@/data/services";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Serviços", href: "/#servicos" },
  { label: "Sobre Nós", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

export default function Footer() {
  const { isVisible, scrollToTop } = useScrollToTop();

  return (
    <footer className="bg-[#0f172a] text-slate-300 relative overflow-hidden">
      {/* Gradient top border */}
      <div className="h-1 bg-gradient-to-r from-[#0066cc] via-[#3b82f6] to-[#f59e0b]" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-white/95 rounded-lg px-3 py-1.5">
                <img
                  src={companyInfo.logo}
                  alt="ABM Engenharia"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Excelência em engenharia consultiva. Conformidade técnica que protege vidas e negócios.
            </p>
            <div className="flex gap-3 mt-2">
              {/* WhatsApp */}
              <a
                href="https://wa.me/5511975709785"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 hover:bg-[#25D366] flex items-center justify-center transition-all duration-300 btn-press"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/abm.engenharia_?igsh=MXNjZ3hrNHVkNmUycw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 hover:bg-[#E1306C] flex items-center justify-center transition-all duration-300 btn-press"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/abm-engenharia-e-automa%C3%A7%C3%A3o-ltda/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg bg-white/5 hover:bg-[#0077B5] flex items-center justify-center transition-all duration-300 btn-press"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-white text-base mb-2">
              Acesso Rápido
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#f59e0b] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-[#0066cc] group-hover:bg-[#f59e0b] transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display font-semibold text-white text-base mb-2">
              Contato Corporativo
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center">
                  <Phone className="h-4 w-4 text-[#0066cc]" />
                </div>
                {companyInfo.phoneFormatted}
              </a>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-center gap-3 text-sm text-slate-400 hover:text-white transition-colors break-all"
              >
                <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="h-4 w-4 text-[#0066cc]" />
                </div>
                {companyInfo.email}
              </a>
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <div className="h-9 w-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-[#0066cc]">RT</span>
                </div>
                Eng. Matheus Silva Lima
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            © 2026 ABM Engenharia e Automação LTDA. Todos os direitos reservados.
          </p>
          <p className="text-xs text-slate-500">CREA SP</p>
        </div>
      </div>

      {/* Scroll to top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 h-12 w-12 rounded-full bg-gradient-to-br from-[#0066cc] to-[#0052a3] text-white shadow-lg hover:shadow-xl hover:from-[#0052a3] hover:to-[#0066cc] flex items-center justify-center transition-all duration-300 btn-press z-40 animate-fade-in"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}