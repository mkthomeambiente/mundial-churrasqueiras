import { MapPin, Phone, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Contato | Mundial Churrasqueiras Juiz de Fora",
  description: "Entre em contato com a Mundial Churrasqueiras. Telefone, endereço e localização em São Pedro, Juiz de Fora."
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">FALE COM A FÁBRICA</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* INFORMAÇÕES */}
        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <div className="bg-mundial-orange p-3 rounded-full text-white">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Nosso Endereço</h3>
              <p className="text-zinc-600">{COMPANY.address}</p>
              <p className="text-zinc-600">{COMPANY.city} - {COMPANY.state}</p>
              <p className="text-zinc-600">CEP: {COMPANY.zip}</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-mundial-orange p-3 rounded-full text-white">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Telefone / WhatsApp</h3>
              <p className="text-zinc-600">{COMPANY.phone}</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="bg-mundial-orange p-3 rounded-full text-white">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-bold text-lg">Horário de Funcionamento</h3>
              <p className="text-zinc-600">Seg a Sex: 07h às 18h</p>
              <p className="text-zinc-600">Sábado: 07h às 12h</p>
            </div>
          </div>
        </div>

        {/* MAPA EMBED */}
        <div className="h-[400px] bg-zinc-200 rounded-xl overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3705.578676643206!2d-43.3768233!3d-21.7579044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b650756e297%3A0x673c09f35c5979c3!2sR.%20Jos%C3%A9%20Louren%C3%A7o%20Kelmer%2C%20665%20-%20S%C3%A3o%20Pedro%2C%20Juiz%20de%20Fora%20-%20MG%2C%2036036-330!5e0!3m2!1spt-BR!2sbr!4v1709220000000!5m2!1spt-BR!2sbr" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}