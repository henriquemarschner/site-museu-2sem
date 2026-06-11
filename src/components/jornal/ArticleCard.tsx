import Image from "next/image";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  isFeatured?: boolean;
}

export function ArticleCard({
  title,
  excerpt,
  imageUrl,
  category,
  isFeatured = false,
}: ArticleCardProps) {
  const sizeClass = isFeatured ? "md:col-span-2" : "md:col-span-1";

  return (
    <a
      href="#"
      className={`block group hover:shadow-xl transition duration-300 rounded-lg overflow-hidden ${sizeClass}`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <span className="text-sm font-semibold text-blue-600 uppercase">
          {category}
        </span>
        <h3
          className={`mt-2 font-bold ${
            isFeatured ? "text-2xl" : "text-xl"
          } leading-tight group-hover:text-blue-700`}
        >
          {title}
        </h3>
        <p className="mt-1 text-gray-500 text-sm">{excerpt}</p>
      </div>
    </a>
  );
}
