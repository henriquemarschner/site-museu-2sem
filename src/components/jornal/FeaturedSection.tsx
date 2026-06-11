import { ArticleCard } from "./ArticleCard";

export function FeaturedSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-8">
      {/* Artigo principal (ocupa duas colunas) */}

      <ArticleCard
        title="Robôs Guia: A Nova Geração de Atendimento ao Visitante"
        excerpt="Conheça os novos guias robóticos instalados no museu, programados para 10 idiomas."
        imageUrl="/img/jornal/img1.jpg"
        category="Tecnologia"
        isFeatured={true}
      />

      {/* Artigo secundário 1 (ocupa uma coluna) */}
      <div className="space-y-4">
        <ArticleCard
          title="O Futuro Chegou: IA Generativa no Desenvolvimento de Materiais para Museus"
          excerpt="Pesquisadores utilizam algoritmos avançados para criar exposições interativas e personalizadas..."
          imageUrl="/img/jornal/img2.jpg"
          category="Inovação"
        />

        {/* Artigo secundário 2 (na mesma coluna) */}
        <ArticleCard
          title="NFTs e Arte Digital: O que o são?"
          excerpt="Uma análise sobre..."
          imageUrl="/img/jornal/img3.webp"
          category="Economia Digital"
        />
      </div>
    </section>
  );
}
