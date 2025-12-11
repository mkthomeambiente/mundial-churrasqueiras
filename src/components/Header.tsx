import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* GBP COMMENT PRESERVED: Header Component with LocalBusiness NAP Integration */

export default function Header() {
  return (
    <header className="bg-mundial-base/95 backdrop-blur-sm text-white sticky top-0 z-50 shadow-rust border-b border-white/10">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO AREA - RÚSTICO E FORTE */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14">
             <Image 
               src="/images/logo.png" 
               alt="Logo Mundial Churrasqueiras" 
               fill
               className="object-contain group-hover:scale-105 transition-transform duration-300"
               priority
             />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-wider text-mundial-orange leading-none">MUNDIAL</span>
            <span className="text-xs font-bold tracking-[0.2em] text-zinc-400">CHURRASQUEIRAS</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 font-bold text-sm tracking-wide items-center">
          <Link href="/" className="hover:text-mundial-orange transition-colors duration-300 py-2">INÍCIO</Link>
          <Link href="/products" className="hover:text-mundial-orange transition-colors duration-300 py-2">CATÁLOGO</Link>
          <Link href="/blog" className="hover:text-mundial-orange transition-colors duration-300 py-2">DICAS</Link>
          <Link href="/contato" className="hover:text-mundial-orange transition-colors duration-300 py-2">CONTATO</Link>
          
          <a 
            href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
            className="bg-mundial-orange hover:bg-mundial-brick text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg flex items-center gap-2 transform hover:-translate-y-1"
            aria-label="Falar no WhatsApp"
          >
            <Phone size={18} className="fill-current" />
            {COMPANY.phone}
          </a>
        </nav>

        {/* MOBILE ICON */}
        <a href="/contato" className="md:hidden text-mundial-orange p-2 hover:bg-white/10 rounded-lg transition">
          <Menu size={32} />
        </a>
      </div>
    </header>
  );
}