import YoutubeEmbed from "../../components/podcast/YoutubeEmbed";

const PodcastPage = () => {
  const podcastData = {
    videoId: "0kSxTIstFM0",
    podcastTitle: "Museu Tecnológico UDC",
    episodeTitle: "Episódio #01: Título Episódio",
    description:
      "Neste episódio especial do TechCast, convidamos você para acompanhar de perto o nascimento de um projeto incrível: o Museu de Tecnologia da UDC! Diferente dos grandes centros de exposição, o nosso museu é uma iniciativa apaixonada, que está sendo construída peça por peça aqui mesmo, dentro da faculdade. De calculadoras antigas a placas-mãe históricas e primeiros PCs, estamos em uma missão para resgatar e preservar o hardware que deu origem à era digital.",
    host: "Host 1, Host 2",
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 md:p-8">
      <main className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Coluna 1: Vídeo do YouTube */}
        <section className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
              Assista ao Episódio Completo
            </h2>
            <YoutubeEmbed
              videoId={podcastData.videoId}
              title={podcastData.episodeTitle}
            />
          </div>
        </section>

        {/* Coluna 2: Detalhes do Podcast (Texto) */}
        <section className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-blue-300 border-b pb-2">
              Sobre o Podcast
            </h2>

            <p className="text-gray-700 dark:text-white mb-4 leading-relaxed text-justify">
              {podcastData.description}
            </p>

            <ul className="space-y-3 text-gray-600 dark:text-white">
              <li className="flex items-center">
                <span className="font-semibold w-20 text-gray-900 dark:text-white">
                  Anfitrião:
                </span>{" "}
                {podcastData.host}
              </li>
              <li className="flex items-center">
                <span className="font-semibold w-20 text-gray-900 dark:text-white">
                  Tópicos:
                </span>{" "}
                Tecnologia
              </li>
            </ul>

            <div className="mt-6">
              <a
                href="https://youtube.com" // Adicione o link para a plataforma de podcast aqui
                className="inline-block w-full text-center bg-blue-300 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acesse o canal do Podcast
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PodcastPage;
