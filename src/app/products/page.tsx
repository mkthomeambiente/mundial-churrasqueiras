import Image from "next/image";
import { COMPANY } from "@/lib/constants";
import { ArrowRight, Star } from "lucide-react";
import Carousel from "@/components/Carousel";

/* GBP COMMENT PRESERVED: Products Gallery Page */

export const metadata = {
  title: "Catálogo de Churrasqueiras | Mundial JF",
  description: "Galeria de churrasqueiras pré-moldadas, alvenaria e kits gourmet instalados em Juiz de Fora.",
};

// Simulando dados vindo do JSON para renderização
const PRODUCTS_MOCK = [
  { id: 1, img: '/images/galeria-01.jpg', title: 'Pré-Moldada Tijolinho', cat: 'Clássica' },
  { id: 2, img: '/images/galeria-02.jpg', title: 'Kit Gourmet 3 em 1', cat: 'Completa' },
  { id: 3, img: '/images/galeria-03.jpg', title: 'Linha Alvenaria', cat: 'Sob Medida' },
  { id: 4, img: '/images/galeria-04.jpg', title: 'Churrasqueira Predial', cat: 'Compacta' },
  { id: 5, img: '/images/galeria-05.jpg', title: 'Fogão a Lenha', cat: 'Tradicional' },
  { id: 6, img: '/images/galeria-06.jpg', title: 'Forno de Pizza', cat: 'Acessório' },
];

export default function ProductsPage() {
  return (
    <div className="bg-mundial-light min-h-screen">
      
      {/* Header da Página */}
      <div className="bg-mundial-base text-white py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover opacity-20 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">GALERIA DE PRODUTOS</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            Qualidade raiz em cada detalhe. Confira nossos modelos instalados.
          </p>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 py-20">
        
        {/* Carrossel Destaque */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-mundial-orange" fill="currentColor" />
            <h2 className="text-2xl font-bold text-mundial-base uppercase tracking-wide">Destaques da Semana</h2>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <Carousel />
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS_MOCK.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-zinc-100 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-72 bg-zinc-200 overflow-hidden">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-mundial-base/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {item.cat}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-mundial-base mb-3">{item.title}</h3>
                <p className="text-mundial-arch text-sm mb-6">
                  Acabamento premium e alta durabilidade. Ideal para sua área de lazer.
                </p>
                <a 
                  href={`https://wa.me/${COMPANY.whatsapp_clean}?text=Olá, tenho interesse no modelo: ${item.title}`}
                  className="block w-full text-center bg-mundial-orange hover:bg-mundial-brick text-white font-bold py-4 rounded-xl transition-colors shadow-md"
                >
                  ORÇAR NO WHATSAPP
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bottom */}
        <div className="mt-20 bg-mundial-brick rounded-3xl p-12 text-center text-white shadow-rust relative overflow-hidden">
           <div className="relative z-10">
             <h2 className="text-3xl font-black mb-6">NÃO ENCONTROU O QUE PROCURA?</h2>
             <p className="text-lg mb-8 text-white/90">Fazemos projetos personalizados sob medida para sua casa.</p>
             <a 
               href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
               className="inline-flex items-center gap-2 bg-white text-mundial-brick px-8 py-4 rounded-xl font-bold hover:bg-zinc-100 transition-colors"
             >
               FALAR COM PROJETISTA <ArrowRight size={20} />
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}