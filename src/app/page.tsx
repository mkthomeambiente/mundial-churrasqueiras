import Link from "next/link";
import Carousel from "@/components/Carousel";
import { Hammer, ShieldCheck, Truck } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-12">
      
      {/* HERO SECTION */}
      <section className="relative bg-zinc-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-24 grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              A CHURRASQUEIRA <span className="text-mundial-orange">RAIZ</span> QUE DURA UMA VIDA
            </h1>
            <p className="text-lg text-zinc-300 mb-8 max-w-lg">
              Especialistas em Pré-Moldados e Alvenaria em Juiz de Fora. 
              Sem intermediários: direto da fábrica para sua área gourmet.
            </p>
            <div className="flex gap-4 flex-col sm:flex-row">
              <a 
                href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
                className="bg-mundial-orange text-black px-8 py-4 rounded-lg font-bold hover:bg-white transition shadow-lg text-center"
              >
                ORÇAMENTO NO WHATSAPP
              </a>
              <Link 
                href="/products" 
                className="border-2 border-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-black transition text-center"
              >
                VER FOTOS
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Carousel />
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 text-center">
            <div className="bg-mundial-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-mundial-orange">
              <ShieldCheck size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Durabilidade Extrema</h3>
            <p className="text-zinc-600">Feitas para aguentar calor intenso e uso constante. Estrutura reforçada.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 text-center">
            <div className="bg-mundial-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-mundial-orange">
              <Hammer size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Fabricação Própria</h3>
            <p className="text-zinc-600">Estamos no bairro São Pedro em JF. Você negocia com quem fabrica.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100 text-center">
            <div className="bg-mundial-orange/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-mundial-orange">
              <Truck size={32} />
            </div>
            <h3 className="font-bold text-xl mb-2">Entrega Rápida</h3>
            <p className="text-zinc-600">Atendemos Juiz de Fora e raio de 150km com logística eficiente.</p>
          </div>
        </div>
      </section>

      {/* CHAMADA PARA CATÁLOGO */}
      <section className="bg-mundial-brick/30 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">NOSSOS MODELOS</h2>
          <p className="mb-8 text-zinc-600">Trabalhamos com churrasqueiras pré-moldadas, alvenaria, fornos e fogões a lenha.</p>
          <Link href="/products" className="inline-block bg-black text-white px-8 py-3 rounded font-bold hover:bg-mundial-orange hover:text-black transition">
            VER GALERIA DE FOTOS
          </Link>
        </div>
      </section>
    </div>
  );
}