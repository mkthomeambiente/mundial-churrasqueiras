import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp_clean}?text=Olá,%20visitei%20o%20site%20e%20gostaria%20de%20um%20orçamento.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-[#25D366] hover:bg-[#1da851] text-white p-4 pr-6 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
      aria-label="Falar no WhatsApp"
    >
      <div className="bg-white/20 p-2 rounded-full">
        <MessageCircle size={28} className="fill-current" />
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 leading-tight">Orçamento Rápido</span>
        <span className="text-base font-black leading-none">WhatsApp</span>
      </div>
    </a>
  );
}