import { Link } from "wouter";
import { useParams } from "wouter";
import {
  MessageCircle,
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import {
  FileSearch,
  Flame,
  PenTool,
  Car,
  Factory,
  Truck,
  Wind,
  ToyBrick,
  ShieldCheck,
  ClipboardCheck,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { getServiceBySlug, companyInfo, whatsappLink } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import NotFound from "./NotFound";

const iconMap: Record<string, LucideIcon> = {
  FileSearch,
  Flame,
  PenTool,
  Car,
  Factory,
  Truck,
  Wind,
  ToyBrick,
  ShieldCheck,
  ClipboardCheck,
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;
  const heroRef = useScrollReveal<HTMLDivElement>();
  const benefitsRef = useScrollReveal<HTMLDivElement>();
  const ctaRef = useScrollReveal<HTMLDivElement>();

  if (!service) {
    return <NotFound />;
  }

  const Icon = iconMap[service.icon] ?? FileSearch;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0066cc]/95 via-[#0066cc]/85 to-[#0f172a]/90" />
        </div>

        <div
          ref={heroRef.ref}
          className={`container relative z-10 scroll-reveal ${heroRef.isVisible ? "revealed" : ""}`}
        >
          {/* Breadcrumb */}
          <Link
            href="/#servicos"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para Serviços
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Icon className="h-8 w-8 text-white" />
            </div>
            <div>
              <span className="tech-label text-[#f59e0b]">
                Serviço Técnico
              </span>
              <h1 className="font-display font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-tight">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">
            {service.shortDescription}
          </p>

          <div className="mt-8">
            <a
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#f59e0b] text-white font-semibold text-base hover:bg-[#d97706] transition-all duration-300 btn-press shadow-lg shadow-[#f59e0b]/30"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Informações via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[#0066cc]" />
              <span className="tech-label text-[#0066cc]">Especificação Técnica</span>
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1a1a2e] mb-6">
              Descrição Completa do Serviço
            </h2>
            <div className="gradient-divider w-32 mb-8" />
            <div className="space-y-6">
              {service.fullDescription.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-700 leading-relaxed text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div
          ref={benefitsRef.ref}
          className={`container max-w-5xl scroll-reveal ${benefitsRef.isVisible ? "revealed" : ""}`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="h-px w-12 bg-[#f59e0b]" />
              <span className="tech-label text-[#f59e0b]">Composição do Serviço</span>
              <div className="h-px w-12 bg-[#f59e0b]" />
            </div>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-[#1a1a2e] mb-4">
              O Que Incluímos
            </h2>
            <div className="gradient-divider w-32 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 shadow-sm border border-slate-100 border-l-4 border-l-[#0066cc]"
              >
                <h3 className="font-display font-semibold text-lg text-[#0066cc] mb-5">
                  {benefit.title}
                </h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#f59e0b] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#0066cc] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-[#f59e0b] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-white blur-3xl" />
        </div>
        <div
          ref={ctaRef.ref}
          className={`container relative z-10 text-center scroll-reveal ${ctaRef.isVisible ? "revealed" : ""}`}
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Entre em contato agora e garanta a conformidade técnica do seu empreendimento
            com o respaldo de engenheiros especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[#f59e0b] text-white font-semibold text-base hover:bg-[#d97706] transition-all duration-300 btn-press shadow-lg shadow-[#f59e0b]/30"
            >
              <MessageCircle className="h-5 w-5" />
              Solicitar Informações via WhatsApp
            </a>
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-white/10 backdrop-blur-md text-white font-semibold text-base border border-white/30 hover:bg-white/20 transition-all duration-300 btn-press"
            >
              Falar com Especialista
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Quick contact */}
          <div className="flex flex-wrap gap-6 justify-center mt-12 text-white/80">
            <a href={`tel:${companyInfo.phone}`} className="flex items-center gap-2 text-sm hover:text-white">
              <Phone className="h-4 w-4 text-[#f59e0b]" />
              {companyInfo.phoneFormatted}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 text-sm hover:text-white">
              <Mail className="h-4 w-4 text-[#f59e0b]" />
              {companyInfo.email}
            </a>
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-[#f59e0b]" />
              {companyInfo.engineer}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
