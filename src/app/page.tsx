import Carousel from "@/components/home/Carousel";
import Cards from "@/components/home/Cards";
import About from "@/components/home/About";
import ImgGallery from "@/components/home/ImgGallery";
import cardsData from "@/data/cards/cards.json";

export default function Home() {
  const cards = cardsData;

  return (
    <main className="flex-grow">
      <Carousel />
      <About />
      <Cards cards={cards} />
      <ImgGallery />
    </main>
  );
}
