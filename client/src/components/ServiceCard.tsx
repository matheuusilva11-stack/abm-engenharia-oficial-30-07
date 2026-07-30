import { Link } from "wouter";
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
  MessageCircle,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { type ServiceData, whatsappLink } from "@/data/services";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();
  const Icon = iconMap[service.icon] ?? FileSearch;

  return (
    <div
      ref={ref}
      className={`service-card scroll-reveal ${isVisible ? "revealed" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 80}ms` }}
    >
      <div className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-100 h-full flex flex-col border-b-2 border-b-transparent hover:border-b-[#f59e0b] transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/40 to-transparent" />
          {/* Technical label */}
          <div className="absolute bottom-3 left-3 h-10 w-10 rounded-md bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-md">
            <Icon className="h-5 w-5 text-[#0066cc]" />
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1">
          <h3 className="font-display font-semibold text-lg text-[#1a1a2e] mb-3 leading-snug">
            {service.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-6 flex-1">
            {service.shortDescription}
          </p>

          {/* Gradient divider */}
          <div className="gradient-divider mb-6" />

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            <Link
              href={`/servico/${service.slug}`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-[#0066cc] text-white text-sm font-medium hover:bg-[#0052a3] transition-all duration-300 btn-press"
            >
              Ver Detalhes
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border-2 border-[#f59e0b] text-[#f59e0b] text-sm font-medium hover:bg-[#f59e0b] hover:text-white transition-all duration-300 btn-press"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
