import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp_clean}?text=Olá,%20visitei%20o%20site%20da%20Mundial%20e%20gostaria%20de%20um%20orçamento.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center gap-3 animate-bounce"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="font-bold hidden md:inline">Orçamento Rápido</span>
    </a>
  );
}