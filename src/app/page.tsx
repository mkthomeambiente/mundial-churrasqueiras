import Link from "next/link";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import { Hammer, ShieldCheck, Truck, ArrowRight, Star } from "lucide-react";
import { COMPANY } from "@/lib/constants";

/* GBP COMMENT PRESERVED: Main Landing Page optimized for Local SEO Juiz de Fora */

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* === HERO SECTION === */}
      {/* Estética: Escura, Imersiva, Ferro e Fogo */}
      <section className="relative min-h-[90vh] flex items-center bg-mundial-base overflow-hidden">
        {/* Imagem de Fundo com Overlay Pesado para Contraste */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="Churrasqueira Mundial instalada em área gourmet" 
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mundial-base via-mundial-base/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-mundial-orange/20 border border-mundial-orange/30 text-mundial-orange px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider backdrop-blur-md">
              <Star size={14} fill="currentColor" /> A Nº 1 de Juiz de Fora
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
              A CHURRASQUEIRA <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mundial-orange to-red-500">
                QUE DURA UMA VIDA.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-300 font-medium max-w-lg leading-relaxed border-l-4 border-mundial-orange pl-6">
              Concreto refratário de alta densidade e acabamento rústico premium. 
              Fabricação própria para quem exige solidez e tradição.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <a 
                href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
                className="bg-mundial-orange hover:bg-mundial-brick text-white text-lg px-8 py-5 rounded-xl font-bold transition-all duration-300 shadow-rust flex items-center justify-center gap-3 transform hover:-translate-y-1"
              >
                ORÇAMENTO NO WHATSAPP
                <ArrowRight size={22} />
              </a>
              <Link 
                href="/products" 
                className="border-2 border-white/20 hover:border-mundial-orange text-white hover:text-mundial-orange text-lg px-8 py-5 rounded-xl font-bold transition-all duration-300 flex items-center justify-center backdrop-blur-sm"
              >
                VER FOTOS REAIS
              </Link>
            </div>
          </div>

          {/* Elemento Visual Lateral (Carrossel Flutuante) */}
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-mundial-orange/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 bg-mundial-base">
              <Carousel />
            </div>
          </div>
        </div>
      </section>

      {/* === BENEFÍCIOS (BLOCKS) === */}
      {/* Estética: Fundo Claro (Off-white), Cards Sólidos */}
      <section className="py-24 bg-mundial-light">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-mundial-base mb-4 uppercase tracking-wide">
              Por que escolher a Mundial?
            </h2>
            <p className="text-mundial-arch text-lg max-w-2xl mx-auto">
              Não vendemos apenas churrasqueiras. Vendemos a garantia de que seu investimento não vai rachar em seis meses.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<ShieldCheck size={40} />}
              title="Durabilidade de Décadas"
              desc="Estrutura reforçada com concreto refratário que suporta calor extremo sem trincar."
            />
            <FeatureCard 
              icon={<Hammer size={40} />}
              title="Acabamento Raiz"
              desc="Design rústico e robusto. Peças sólidas que valorizam sua área gourmet com elegância."
            />
            <FeatureCard 
              icon={<Truck size={40} />}
              title="Direto da Fábrica"
              desc="Sem intermediários. Preço justo e entrega própria em Juiz de Fora e região."
            />
          </div>
        </div>
      </section>

      {/* === CATÁLOGO PREVIEW === */}
      {/* Estética: Fundo Escuro (Tijolo/Carvão) para destacar as fotos */}
      <section className="py-24 bg-mundial-base text-white relative">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-fixed opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <span className="text-mundial-orange font-bold tracking-widest uppercase mb-2 block">Nossa Linha</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">MODELOS CAMPEÕES</h2>
            </div>
            <Link 
              href="/products" 
              className="group flex items-center gap-2 text-white font-bold border-b-2 border-mundial-orange pb-1 hover:text-mundial-orange transition-colors"
            >
              VER CATÁLOGO COMPLETO 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ProductPreviewCard 
              image="/images/galeria-01.jpg" 
              title="Pré-Moldada Tijolinho" 
              cat="Clássica"
            />
            <ProductPreviewCard 
              image="/images/galeria-02.jpg" 
              title="Kit Gourmet 3 em 1" 
              cat="Completa"
            />
            <ProductPreviewCard 
              image="/images/galeria-03.jpg" 
              title="Linha Alvenaria" 
              cat="Sob Medida"
            />
          </div>
        </div>
      </section>

      {/* === CTA FINAL === */}
      <section className="py-20 bg-mundial-orange">
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
            PRONTO PARA TRANSFORMAR SEU FINAL DE SEMANA?
          </h2>
          <a 
            href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
            className="inline-flex items-center gap-3 bg-white text-mundial-orange text-xl px-10 py-5 rounded-xl font-black hover:bg-zinc-100 transition-colors shadow-2xl"
          >
            FALAR COM ESPECIALISTA AGORA
            <ArrowRight size={24} />
          </a>
          <p className="mt-6 text-white/90 font-medium">
            Atendemos Juiz de Fora e raio de 150km.
          </p>
        </div>
      </section>
    </div>
  );
}

// --- SUB-COMPONENTES PARA ORGANIZAÇÃO ---

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl border-b-4 border-mundial-orange hover:-translate-y-2 transition-transform duration-300 group">
      <div className="bg-mundial-orange/10 w-20 h-20 rounded-2xl flex items-center justify-center text-mundial-orange mb-6 group-hover:bg-mundial-orange group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-mundial-base mb-4">{title}</h3>
      <p className="text-mundial-arch leading-relaxed font-medium">{desc}</p>
    </div>
  );
}

function ProductPreviewCard({ image, title, cat }: { image: string, title: string, cat: string }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl aspect-[4/5] cursor-pointer">
      <Image 
        src={image} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 w-full">
        <span className="text-mundial-orange text-sm font-bold tracking-widest uppercase mb-2 block">{cat}</span>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <span className="inline-flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg group-hover:bg-mundial-orange transition-colors">
          Ver Detalhes <ArrowRight size={16} />
        </span>
      </div>
    </div>
  );
}