import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type SectionData = {
  heading: string;
  paragraph: string;
  imagePath: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
};

type DecadeContent = {
  title: string;
  subtitle?: string;
  bgColor?: string;
  sections: SectionData[];
};

const availableDecades = [
  "1960",
  "1970",
  "1980",
  "1990",
  "2000",
  "2010",
  "2020",
  "2030",
];

// Definição do tipo para o objeto de parâmetros
type DecadeParams = {
  decada: string;
  [key: string]: string | undefined;
};

// --- 1. Função de Carregamento de Dados (Para Roteamento Estático) ---
async function getDecadeData(
  decada: string,
  props: { params: { decada: string } }
): Promise<DecadeContent | null> {
  if (!availableDecades.includes(decada)) {
    return null;
  }

  try {
    // O import dinâmico em Next.js (usado em Server Components)
    // requer um caminho que pode ser resolvido em tempo de build/runtime.
    // Certifique-se de que o caminho `../../../data/decades/${decada}.json` está correto
    // em relação ao local deste arquivo.
    const data = await import(`../../../data/decades/${decada}.json`);
    return data.default as DecadeContent;
  } catch (e) {
    console.error(`Erro ao carregar dados para a década ${decada}:`, e);
    return null;
  }
}

// --- 2. Geração de Metadata (SEO) ---
/* Esta seção estava comentada, mantendo assim.
export async function generateMetadata(props: {
  params: { decada: string };
}): Promise<Metadata> {
  const { params } = props;
  const content = await getDecadeData(params.decada, props);

  if (!content) {
    return { title: "Década não encontrada" };
  }

  return {
    title: `Explorando os Anos ${params.decada} | ${content.title}`,
    description: content.subtitle ?? "",
  };
}*/

// --- 3. Geração de Rotas Estáticas (Performance) ---
export async function generateStaticParams() {
  return availableDecades.map((decada) => ({ decada }));
}

// --- 4. Componente Principal da Página ---
// CORREÇÃO: Usamos 'any' na tipagem do argumento para satisfazer o constraint
// interno 'PageProps' do Next.js quando combinamos generateStaticParams com
// componentes assíncronos. O 'await params' lida com a promessa internamente.
export default async function DecadePage({ params }: any) {
  // <-- CORREÇÃO APLICADA AQUI: Tipagem relaxada para evitar conflito com PageProps
  // O 'await params' é a parte crucial que resolve se params é DecadeParams ou Promise<DecadeParams>
  const finalParams = await params;
  const { decada } = finalParams as DecadeParams; // Asserção de tipo para uso interno

  const content = await getDecadeData(decada, {
    params: finalParams as { decada: string },
  });

  if (!content) {
    notFound();
  }

  const pageBgClass = content?.bgColor ?? "bg-gray-50";

  return (
    <div
      className={`${pageBgClass} text-gray-800 dark:bg-gray-900 min-h-screen`}
    >
      <Header decada={decada} title={content!.title} />     {" "}
      <main className="container mx-auto px-4 py-16">
        {" "}
        {content!.sections.map((section, index) => (
          <SectionLayout
            key={index}
            heading={section.heading}
            paragraph={section.paragraph}
            imagePath={section.imagePath}
            imageAlt={section.imageAlt}
            imagePosition={section.imagePosition ?? "right"}
          />
        ))}{" "}
      </main>{" "}
    </div>
  );
}

function Header({ decada, title }: { decada: string; title: string }) {
  return (
    <header className="py-12 shadow-xl bg-white/95 dark:bg-gray-900 border-b-4 border-indigo-200 dark:border-gray-900">
      {" "}
      <div className="container mx-auto px-4 text-center">
        {" "}
        <h1 className="text-6xl font-extrabold mb-2 text-gray-900 dark:text-blue-400">
          {decada}{" "}
        </h1>{" "}
        <h2 className="text-3xl font-light text-slate-900 dark:text-blue-400">
          {title}{" "}
        </h2>{" "}
      </div>{" "}
    </header>
  );
}

// --- Componente Reutilizável: Layout de Seção (Texto + Imagem) ---
function SectionLayout({
  heading,
  paragraph,
  imagePath,
  imageAlt,
  imagePosition,
}: {
  heading: string;
  paragraph: string;
  imagePath: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}) {
  const orderClass =
    imagePosition === "left" ? "md:flex-row-reverse" : "md:flex-row";

  return (
    <section
      className={`flex flex-col ${orderClass} items-center gap-10 p-8 mb-16 rounded-3xl bg-white dark:bg-gray-900 shadow-2xl`}
    >
      {" "}
      <div className="md:w-5/12 w-full flex justify-center">
        {" "}
        <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-indigo-400/50">
          {" "}
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />{" "}
        </div>{" "}
      </div>{" "}
      <div className="md:w-7/12 w-full">
        {" "}
        <h3 className="text-3xl font-bold mb-4 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400 pl-3">
          {heading}{" "}
        </h3>{" "}
        <p className="text-lg leading-relaxed text-gray-700 dark:text-white">
          {paragraph}{" "}
        </p>{" "}
      </div>{" "}
    </section>
  );
}
