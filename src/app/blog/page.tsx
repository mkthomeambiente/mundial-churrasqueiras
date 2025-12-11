import Link from "next/link";

export const metadata = {
  title: "Dicas de Churrasco | Blog Mundial",
  description: "Dicas sobre churrasqueiras pré-moldadas, alvenaria e manutenção."
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">BLOG DA MUNDIAL</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* POST EXEMPLO */}
        <Link href="/blog/vantagens-churrasqueira-pre-moldada" className="block group">
          <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <div className="h-48 bg-zinc-200 flex items-center justify-center text-zinc-400 font-bold">
              LER DICA
            </div>
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2 group-hover:text-mundial-orange transition">
                Vantagens da Churrasqueira Pré-Moldada
              </h2>
              <p className="text-zinc-600 text-sm">
                Descubra por que a pré-moldada é a opção mais rápida e econômica para sua casa em Juiz de Fora.
              </p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
}