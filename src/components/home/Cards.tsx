import Link from "next/link";
import Image from "next/image";
import CardsScrollContainer from "./CardsScrollContainer";

export interface CardData {
  id: number;
  title: string;
  subtitle: string;
  quote: string;
  imageUrl: string;
  href: string;
}

interface CardsProps {
  cards: CardData[];
}

export const Card: React.FC<{ data: CardData }> = ({ data }) => {
  return (
    <Link
      className="group relative flex flex-col justify-end p-6 flex-shrink-0 
                 w-[250px] md:w-1/4 h-[350px] lg:h-[450px] 
                 rounded-lg overflow-hidden shadow-lg 
                 transition-all duration-500 
                 hover:w-[400px] hover:md:w-1/2"
      href={data.href}
    >
      <Image
        src={data.imageUrl}
        alt={data.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-all duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-opacity-60 transition-colors duration-500 group-hover:bg-opacity-50" />
      <div
        className="relative z-10 space-y-2 mb-4 
                     md:absolute md:bottom-20 md:left-6 
                     transition-all duration-500 group-hover:bottom-40"
      >
        <div className="inline-block bg-gradient-to-tr from-black/75 to-black/40 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg max-w-[85%]">
          <h2 className="text-lg md:text-xl font-bold text-white leading-tight">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-sm text-gray-200 mt-1">{data.subtitle}</p>
          )}
        </div>
      </div>

      {data.quote && (
        <div
          className="relative z-10 mt-4 transform translate-y-6 opacity-0 
                     transition-all duration-500 
                     group-hover:opacity-100 group-hover:translate-y-0"
        >
          <blockquote className="text-md text-white/90 italic bg-black/50 backdrop-blur-sm px-3 py-2 rounded-md shadow-sm max-w-[85%]">
            "{data.quote}"
          </blockquote>
        </div>
      )}
    </Link>
  );
};

const Cards: React.FC<CardsProps> = ({ cards }) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 pt-10">
      <div className="text-center text-5xl font-extrabold text-blue-600 dark:text-blue-400 justify-center">
        <span>Explorando as décadas</span>
      </div>

      <CardsScrollContainer>
        {cards.map((c) => (
          <Card key={c.id ?? c.href} data={c as CardData} />
        ))}
      </CardsScrollContainer>
    </section>
  );
};

export default Cards;
