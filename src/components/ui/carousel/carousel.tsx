import { useState, useEffect } from "react";
import Image from "next/image";
import useStore from "@/lib/store";

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const { openModal, setOpenModal } = useStore();

  // Förhindra rendering på servern (hydrering) tills komponenten är monterad på klienten
  useEffect(() => {
    setIsMounted(true);
  }, []);
  // Funktionen för att gå till föregående bild
  const goToPrevious = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOpenModal = (id: any) => {
    setOpenModal(openModal === id ? null : id);
  };

  // Funktionen för att gå till nästa bild
  const goToNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Rendera endast komponenten när den har monterats på klienten
  if (!isMounted) {
    return null; // Eller en loader/placeholder om du vill visa något medan du väntar
  }

  return (
    <div
      id="animation-carousel"
      className="relative mb-16 lg:mb-0 w-full lg:hidden -mt-16"
    >
      <div className="relative h-[65vh] md:h-96">
        {/* Loopar genom bilderna */}
        {images.map((src: any, index) => (
          <div
            key={index}
            className={`duration-200 ease-linear ${
              activeIndex === index ? "flex flex-col" : "hidden"
            }`}
            data-carousel-item
          >
            <button
              className="w-full h-[470px] relative"
              onClick={() => handleOpenModal(src.uuid)}
            >
              <Image
                src={src.content.image.filename}
                fill
                className="object-contain top-0"
                alt={`Slide ${index + 1}`}
              />
            </button>

            <div className="flex flex-col text-left bg-[#fff] w-full pt-0 mb-6 -mt-10 lg:mb-0">
              <h4 className="text-[13px]">{src.content.sub_title}</h4>
              <h2 className="text-[28px]">{src.name}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Föregående knapp */}
      <button
        type="button"
        className="absolute top-32 start-0 z-10 flex items-center justify-center h-[50%] px-2 cursor-pointer group focus:outline-none"
        onClick={goToPrevious}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1d171179] ">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>

      {/* Nästa knapp */}
      <button
        type="button"
        className="absolute top-32 end-0 z-10 flex items-center justify-center h-[50%] px-2 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#1D1711] ">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
