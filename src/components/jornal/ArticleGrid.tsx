import { ArticleCard } from "./ArticleCard";

interface ArticleGridProps {
  itemsToShow?: number;
}

export function ArticleGrid({ itemsToShow = 6 }: ArticleGridProps) {
  const dummyArticles = [
    {
      title: "Quantum Computing: O Desafio dos Próximos 10 Anos",
      excerpt:
        "Um mergulho na física por trás da computação que promete revolucionar...",
      category: "Ciência",
      imageUrl: "/img/jornal/img4.png",
    },
    {
      title: "Realidade Aumentada nas Exposições: Como Funciona?",
      excerpt: "Deixe seu smartphone transformar a experiência do museu...",
      category: "Exposição",
      imageUrl: "/img/jornal/img5.jpg",
    },
    {
      title: "História dos Transistores: O Começo da Era Digital",
      excerpt:
        "Uma retrospectiva sobre o componente que tornou tudo possível...",
      category: "História",
      imageUrl: "/img/jornal/img6.webp",
    },
    // ... mais artigos (limitados por itemsToShow)
  ].slice(0, itemsToShow);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {dummyArticles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}
