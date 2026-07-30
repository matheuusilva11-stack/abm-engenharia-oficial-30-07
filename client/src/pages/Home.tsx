import { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  Phone,
  Mail,
  User,
  ChevronDown,
  Award,
  ShieldCheck,
  CheckCircle2,
  Send,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { services, companyInfo, whatsappLink } from "@/data/services";
import { useParallax } from "@/hooks/useParallax";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const parallaxOffset = useParallax(0.3);
  const heroRef = useScrollReveal<HTMLDivElement>();
  const servicesRef = useScrollReveal<HTMLDivElement>();
  const aboutRef = useScrollReveal<HTMLDivElement>();
  const contactRef = useScrollReveal<HTMLDivElement>();

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    interesse: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Gostaria de solicitar uma proposta técnica.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nEmpresa: ${formData.empresa}\nTelefone: ${formData.telefone}\nÁrea de Interesse: ${formData.interesse}`;
    window.open(whatsappLink(message), "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            backgroundImage: `url(/background-home.jpg)`,
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/90 via-[#0066cc]/70 to-[#0f172a]/80" />

        {/* Content */}
        <div
          ref={heroRef.ref}
          className={`container relative z-10 pt-20 scroll-reveal ${heroRef.isVisible ? "revealed" : ""}`}
        >
          <div className="max-w-3xl">
            {/* Logo */}
            <div className="mb-8">
              <div className="inline-block bg-white/95 rounded-lg px-4 py-2 shadow-xl">
              </div>
            </div>

            <h1 className="font-display font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              Engenharia especializada em consultorias e soluções técnicas
            </h1>

            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Conformidade técnica que protege vidas e negócios. Perícias, laudos,
              projetos e regularização com respaldo profissional e responsabilidade técnica.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-6 mb-10 text-white/90">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#f59e0b]" />
                <a href={`tel:${companyInfo.phone}`} className="text-sm hover:text-white">
                  {companyInfo.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#f59e0b]" />
                <a href={`mailto:${companyInfo.email}`} className="text-sm hover:text-white">
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink("Olá! Gostaria de solicitar análise técnica com respaldo de ART da ABM Engenharia.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#f59e0b] text-white font-semibold text-base hover:bg-[#d97706] transition-all btn-press shadow-lg shadow-[#f59e0b]/30"
              >
                <MessageCircle className="h-5 w-5" />
                Solicitar Análise Técnica com ART
              </a>
              <a
                href="#servicos"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-base border border-white/30 hover:bg-white/20 transition-all btn-press"
              >
                Conheça Nossos Serviços
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="h-8 w-8 text-white/50 animate-bounce" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-24 bg-slate-50 blueprint-grid">
        <div className="container">
          <div
            ref={servicesRef.ref}
            className={`text-center mb-16 scroll-reveal ${servicesRef.isVisible ? "revealed" : ""}`}
          >
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-[#0066cc]" />
              <span className="tech-label text-[#0066cc]">Nossos Serviços</span>
              <div className="h-px w-12 bg-[#0066cc]" />
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1a1a2e] mb-4">
              Serviços e Áreas de Atuação
            </h2>
            <div className="gradient-divider w-32 mx-auto mb-6" />
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Soluções técnicas completas com responsabilidade técnica e respaldo jurídico
              para sua empresa.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-24 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0066cc]/20 to-transparent" />
        <div className="container">
          <div
            ref={aboutRef.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-reveal ${aboutRef.isVisible ? "revealed" : ""}`}
          >
            {/* Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#f59e0b]" />
                <span className="tech-label text-[#f59e0b]">Nossa Essência</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1a1a2e] mb-6">
                Autoridade técnica em engenharia consultiva
              </h2>
              <div className="gradient-divider w-32 mb-6" />
              <p className="text-slate-600 leading-relaxed mb-6">
                A <strong className="text-[#0066cc]">ABM Engenharia</strong> nasceu com o
                propósito de transformar a conformidade técnica em um ativo de governança
                para a indústria. Unimos o rigor metodológico à realidade operacional,
                entregando soluções que protegem vidas, garantem a segurança jurídica da
                diretoria e otimizam a eficiência dos processos produtivos.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Nossa engenharia consultiva é pautada pela rastreabilidade absoluta e pelo
                estrito cumprimento das normas vigentes, assegurando que cada projeto seja
                sinônimo de confiança e longevidade.
              </p>

              {/* Credentials */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0066cc]/10 flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a2e] text-sm mb-1">
                      Engenheiros Especializados
                    </h4>
                    <p className="text-sm text-slate-600">
                      Automação, Elétrica, Mecânica e Segurança do Trabalho
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0066cc]/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a2e] text-sm mb-1">
                      Cumprimento de Normas Regulamentadoras
                    </h4>
                    <p className="text-sm text-slate-600">
                      Rigoroso atendimento à legislação vigente
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-[#0066cc]/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-[#1a1a2e] text-sm mb-1">
                      Projetos Chancelados com ART
                    </h4>
                    <p className="text-sm text-slate-600">
                      Anotação de Responsabilidade Técnica — CREA/CONFEA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 bg-slate-50 blueprint-grid">
        <div className="container">
          <div
            ref={contactRef.ref}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-16 scroll-reveal ${contactRef.isVisible ? "revealed" : ""}`}
          >
            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-[#0066cc]" />
                <span className="tech-label text-[#0066cc]">Entre em Contato</span>
              </div>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1a1a2e] mb-6">
                Solicite sua proposta técnica
              </h2>
              <div className="gradient-divider w-32 mb-6" />
              <p className="text-slate-600 leading-relaxed mb-8">
                Entre em contato com nossa equipe e receba uma proposta técnica personalizada
                para as necessidades da sua empresa. Atendemos com agilidade e responsabilidade.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Telefone</p>
                    <p className="text-sm font-medium text-[#1a1a2e]">{companyInfo.phoneFormatted}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-medium text-[#1a1a2e] break-all">{companyInfo.email}</p>
                  </div>
                </a>

                {/* Engenheiro Responsável Card */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-sm">
                  <div className="h-12 w-12 rounded-xl bg-[#0066cc]/10 flex items-center justify-center">
                    <User className="h-5 w-5 text-[#0066cc]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Engenheiro Responsável</p>
                    <p className="text-sm font-medium text-[#1a1a2e]">Eng. Matheus Silva Lima</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-lg shadow-xl p-8 border border-slate-100 border-t-4 border-[#0066cc]">
              <h3 className="font-display font-semibold text-xl text-[#1a1a2e] mb-6">
                Formulário de Contato
              </h3>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all text-sm"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all text-sm"
                    placeholder="seu@email.com.br"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      name="empresa"
                      required
                      value={formData.empresa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all text-sm"
                      placeholder="Nome da empresa"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all text-sm"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Área de Interesse *
                  </label>
                  <select
                    name="interesse"
                    required
                    value={formData.interesse}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-[#0066cc] focus:ring-2 focus:ring-[#0066cc]/20 outline-none transition-all text-sm bg-white"
                  >
                    <option value="">Selecione...</option>
                    {services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[#f59e0b] text-white font-semibold text-base hover:bg-[#d97706] transition-all btn-press shadow-lg shadow-[#f59e0b]/30"
                >
                  <Send className="h-5 w-5" />
                  Solicitar Proposta Técnica
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}