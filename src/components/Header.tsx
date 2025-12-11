import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Header() {
  return (
    <header className="bg-mundial-base text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO AREA */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tighter text-mundial-orange">
            MUNDIAL <span className="text-white font-normal text-lg hidden sm:inline">CHURRASQUEIRAS</span>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-8 font-medium text-sm items-center">
          <Link href="/" className="hover:text-mundial-orange transition">INÍCIO</Link>
          <Link href="/products" className="hover:text-mundial-orange transition">CATÁLOGO</Link>
          <Link href="/blog" className="hover:text-mundial-orange transition">DICAS</Link>
          <Link href="/contato" className="hover:text-mundial-orange transition">CONTATO</Link>
          <a 
            href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
            className="bg-mundial-orange text-black px-4 py-2 rounded font-bold hover:bg-white transition flex items-center gap-2"
          >
            <Phone size={16} />
            {COMPANY.phone}
          </a>
        </nav>

        {/* MOBILE ICON */}
        <a href="/contato" className="md:hidden text-mundial-orange">
          <Menu size={32} />
        </a>
      </div>
    </header>
  );
}