import { FeaturedSection } from "@/components/jornal/FeaturedSection";
import { SectionTitle } from "@/components/jornal/Title";
import { ArticleGrid } from "@/components/jornal/ArticleGrid";
//import { Sidebar } from "@/components/jornal/Sidebar";
//import { CategoryNav } from "@/components/jornal/CategoryNav";

export default function JornalHomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Navegação de Categorias (Pode ser abaixo do Header ou fixo) 
      <CategoryNav />
      */}

      <div className="container mx-auto px-4 py-8">
        {/* 1. Seção de Destaque Principal (Geralmente 1 ou 2 artigos grandes) */}
        <FeaturedSection />

        {/* 2. Conteúdo Principal em Grid (Notícias e Sidebar) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 mt-12">
          {/* Colunas de Artigos (2/3 da largura no desktop) */}
          <section className="lg:col-span-3">
            {/* Bloco 1: Notícias Recentes */}
            <SectionTitle text="Últimas Notícias" />
            <ArticleGrid />

            {/* Bloco 2: Categoria Temática (ex: Inteligência Artificial) 
            <SectionTitle
              text="Em Foco: Robótica"
              className="mt-12 border-t pt-8"
            />
            <ArticleGrid itemsToShow={4} />
            */}
          </section>

          {/* Sidebar (1/3 da largura no desktop) 
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>
          */}
        </div>
      </div>
    </div>
  );
}
