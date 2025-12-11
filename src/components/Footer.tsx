import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Instagram, Facebook } from "lucide-react";
import { COMPANY, CITIES_SERVED } from "@/lib/constants";

/* GBP COMMENT PRESERVED: Footer with detailed NAP and Service Areas */

export default function Footer() {
  return (
    <footer className="bg-mundial-base text-zinc-400 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* COLUNA 1: BRAND */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
               <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
            </div>
            <div className="leading-none">
               <span className="block text-xl font-black text-white">MUNDIAL</span>
               <span className="text-xs font-bold tracking-widest text-mundial-orange">CHURRASQUEIRAS</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Fabricante líder em churrasqueiras pré-moldadas de alto padrão em Juiz de Fora. 
            Solidez, tradição e qualidade que dura gerações.
          </p>
          <div className="flex gap-4">
            <a href={COMPANY.social.instagram} className="bg-white/5 p-3 rounded-lg hover:bg-mundial-orange hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href={COMPANY.social.facebook} className="bg-white/5 p-3 rounded-lg hover:bg-mundial-orange hover:text-white transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* COLUNA 2: CONTATO */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contato</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-mundial-orange shrink-0 mt-1" size={18} />
              <span>{COMPANY.address}<br/>{COMPANY.city} - {COMPANY.state}<br/>{COMPANY.zip}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-mundial-orange shrink-0" size={18} />
              <span className="font-bold text-white text-lg">{COMPANY.phone}</span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="text-mundial-orange shrink-0 mt-1" size={18} />
              <span>
                Seg-Sex: 07h - 18h<br/>
                Sáb: 07h - 12h
              </span>
            </li>
          </ul>
        </div>

        {/* COLUNA 3: LINKS */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Navegação</h4>
          <ul className="space-y-3 text-sm font-medium">
            <li><Link href="/" className="hover:text-mundial-orange transition-colors">Início</Link></li>
            <li><Link href="/products" className="hover:text-mundial-orange transition-colors">Catálogo Completo</Link></li>
            <li><Link href="/blog" className="hover:text-mundial-orange transition-colors">Dicas de Uso</Link></li>
            <li><Link href="/contato" className="hover:text-mundial-orange transition-colors">Fale Conosco</Link></li>
          </ul>
        </div>

        {/* COLUNA 4: ÁREA DE ATUAÇÃO */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Atendemos</h4>
          <div className="flex flex-wrap gap-2">
            {CITIES_SERVED.map((city, i) => (
              <span key={i} className="text-xs bg-white/5 px-2 py-1 rounded text-zinc-500 border border-white/5">
                {city}
              </span>
            ))}
            <span className="text-xs text-mundial-orange mt-2 block w-full font-bold">
              + Raio de 150km de JF
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 text-center text-xs text-zinc-600">
        <p className="mb-2">© {new Date().getFullYear()} Mundial Churrasqueiras. Todos os direitos reservados.</p>
        <p>CNPJ: 57.706.002/0001-18 | Indústria Brasileira</p>
      </div>
    </footer>
  );
}