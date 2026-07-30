import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/services";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de falar com um engenheiro da ABM Engenharia.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3.5 rounded-full bg-[#25d366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 btn-press"
      aria-label="Fale Conosco via WhatsApp"
    >
      <span className="relative flex items-center justify-center">
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-[#25d366] animate-ping opacity-20" />
      </span>
      <span className="font-semibold text-sm whitespace-nowrap">Fale Conosco</span>
    </a>
  );
}
