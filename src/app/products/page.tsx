import Carousel from "@/components/Carousel";
import { COMPANY } from "@/lib/constants";

export const metadata = {
  title: "Galeria de Churrasqueiras | Mundial JF",
  description: "Veja fotos de nossas churrasqueiras pré-moldadas, alvenaria e kits instalados em Juiz de Fora."
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4 text-center">GALERIA DE PRODUTOS</h1>
      <p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
        Confira abaixo a qualidade do nosso acabamento. Trabalhamos com modelos Pré-Moldados, Alvenaria, Kits 3 em 1 (Forno, Fogão e Churrasqueira) e acessórios como Coifas e Tubulações.
      </p>

      {/* REUTILIZANDO O CARROSSEL COMO VITRINE PRINCIPAL */}
      <div className="mb-12">
        <Carousel />
      </div>

      <div className="bg-mundial-orange/10 p-8 rounded-xl text-center border border-mundial-orange/20">
        <h2 className="text-2xl font-bold mb-4">GOSTOU DE ALGUM MODELO?</h2>
        <p className="mb-6">
          Não colocamos preços no site pois cada projeto pode ter variações de acessórios e entrega. 
          Chame no WhatsApp para um orçamento sem compromisso.
        </p>
        <a 
          href={`https://wa.me/${COMPANY.whatsapp_clean}`} 
          className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition shadow-lg"
        >
          SOLICITAR ORÇAMENTO AGORA
        </a>
      </div>
    </div>
  );
}