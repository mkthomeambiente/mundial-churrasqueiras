import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLdLocalBusiness from "@/components/JsonLdLocalBusiness";
import { COMPANY, CITIES_SERVED } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mundial Churrasqueiras | Pré-Moldadas e Alvenaria em Juiz de Fora",
  description: "A maior fabricante de churrasqueiras de Juiz de Fora. Modelos pré-moldados, alvenaria, fornos e fogões a lenha. Atendemos toda Zona da Mata. Orçamento no WhatsApp.",
  keywords: ["churrasqueira pré-moldada juiz de fora", "churrasqueira alvenaria jf", "fogão a lenha juiz de fora"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-zinc-50 text-zinc-900`}>
        <JsonLdLocalBusiness />
        <Header />
        <main className="min-h-screen">{children}</main>
        <WhatsAppButton />
        
        <footer className="bg-mundial-base text-zinc-400 py-12 mt-12">
          <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="text-white font-bold text-lg mb-4">{COMPANY.name}</h4>
              <p>{COMPANY.address}</p>
              <p>{COMPANY.city} - {COMPANY.state}</p>
              <p className="mt-2 text-mundial-orange font-bold">{COMPANY.phone}</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Atendimento</h4>
              <p>Seg a Sex: 07h às 18h</p>
              <p>Sábado: 07h às 12h</p>
              <p className="mt-4 text-xs text-zinc-500">CNPJ: 57.706.002/0001-18</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Cidades Atendidas</h4>
              <p className="leading-relaxed text-xs">
                {CITIES_SERVED.join(", ")} e região.
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-zinc-800 text-xs">
            © {new Date().getFullYear()} Mundial Churrasqueiras. Todos os direitos reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}