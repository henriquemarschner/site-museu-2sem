"use client";

interface CarouselItem {
  imageSrc: string;
  altText: string;
}

interface Carousel3DProps {
  images: CarouselItem[];
  autoRotate: boolean;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({
  images,
  autoRotate,
}) => {
  const CAROUSEL_DATA = images;
  const totalImages = CAROUSEL_DATA.length;
  const animationDuration = autoRotate ? "30s" : "0s";
  return (
    <>
      <div className="flex items-center justify-center">
        <span className="text-3xl font-semibold text-slate-950">
          Acervo Digital
        </span>
      </div>
      <div
        className="relative flex items-center justify-center p-12 overflow-hidden"
        style={{ "--total": totalImages } as React.CSSProperties}
      >
        <style>{`
  @keyframes rotate-ring {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(360deg);
    }
  }

  .ring-container {
    position: relative;
    width: 250px;
    height: 250px;
    transform-style: preserve-3d;
    animation: rotate-ring ${animationDuration} linear infinite; 
  }

  .ring-item {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateY(calc(360deg / var(--total) * var(--i))) translateZ(350px);
    transition: transform 0.5s ease;
  }
  .ring-image {
    width: 195px; /* aumentado em 30% */
    height: 195px; /* aumentado em 30% */
    object-fit: cover;
    border-radius: 0.75rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease;
  }
  .ring-item:hover .ring-image {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.8);
  }
`}</style>

        <div className="ring-container">
          {CAROUSEL_DATA.map((item, index) => (
            <div
              key={index}
              className="ring-item"
              style={{ "--i": index } as React.CSSProperties}
            >
              <img
                src={item.imageSrc}
                alt={item.altText}
                className="ring-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
