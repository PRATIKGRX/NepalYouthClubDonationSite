import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import galleryimg from "../../../assets/galleryimg.jpg";
import galleryimg2 from "../../../assets/galleryimg2.jpg";
import galleryimg3 from "../../../assets/galleryimg3.jpg";
import galleryimg4 from "../../../assets/galleryimg4.jpg";
import galleryimg5 from "../../../assets/galleryimg5.jpg";
import galleryimg6 from "../../../assets/galleryimg6.jpg";
import galleryimg7 from "../../../assets/galleryimg7.jpg";
import galleryimg8 from "../../../assets/galleryimg8.jpg";
import galleryimg9 from "../../../assets/galleryimg9.jpg";
import galleryimg10 from "../../../assets/galleryimg10.jpg";
import Button from "../../Button";
const images = [
  galleryimg,
  galleryimg2,
  galleryimg3,
  galleryimg4,
  galleryimg5,
  galleryimg6,
  galleryimg7,
  galleryimg8,
  galleryimg9,
  galleryimg10,
];

export default function Gallery() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dots, setDots] = useState([]);
  const autoplayRef = useRef();

  // Scroll buttons
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (i) => embla && embla.scrollTo(dots[i]),
    [embla, dots]
  );

  useEffect(() => {
    if (!embla) return;

    const calculateDots = () => {
      const containerWidth = embla.containerNode().getBoundingClientRect().width;
      const slideWidth = embla.slideNodes()[0].getBoundingClientRect().width;
      const slidesInView = Math.floor(containerWidth / slideWidth);
      const totalSlides = embla.slideNodes().length;

      const scrollIndexes = [];
      for (let i = 0; i <= totalSlides - slidesInView; i++) {
        scrollIndexes.push(i);
      }
      setDots(scrollIndexes);
    };

    calculateDots();
    embla.on("resize", calculateDots);

    const onSelect = () => {
      const containerWidth = embla.containerNode().getBoundingClientRect().width;
      const slideWidth = embla.slideNodes()[0].getBoundingClientRect().width;
      const slidesInView = Math.floor(containerWidth / slideWidth);
      const snap = embla.selectedScrollSnap();
      const currentDot = Math.min(snap, embla.slideNodes().length - slidesInView);
      setSelectedIndex(currentDot);
    };

    embla.on("select", onSelect);

    // Autoplay
    const startAutoplay = () => {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        if (!embla) return;
        if (embla.canScrollNext()) embla.scrollNext();
        else embla.scrollTo(0);
      }, 3000);
    };

    const stopAutoplay = () => clearInterval(autoplayRef.current);

    startAutoplay();

    // Stop autoplay on drag/pointer
    embla.on("pointerDown", stopAutoplay);
    embla.on("touchStart", stopAutoplay);
    embla.on("wheel", stopAutoplay);

    return () => {
      stopAutoplay();
      embla.destroy();
    };
  }, [embla]);

  return (
    <div className="select-none">
      <div className="relative">
        {/* Viewport */}
        <div
          className="overflow-hidden"
          ref={emblaRef}
          onMouseEnter={() => clearInterval(autoplayRef.current)}
          onMouseLeave={() => {
            if (embla) {
              autoplayRef.current = setInterval(() => {
                if (!embla) return;
                if (embla.canScrollNext()) embla.scrollNext();
                else embla.scrollTo(0);
              }, 3000);
            }
          }}
        >
          <div className="flex">
            {images.map((src, i) => (
              <div
                key={i}
                className="flex-[0_0_33.333%] sm:flex-[0_0_33.333%] md:flex-[0_0_25%] lg:flex-[0_0_20%] px-2"
              >
                <img
                  src={src}
                  alt={`Slide ${i}`}
                  className="w-full h-[80px] xl:h-[190px] object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-[-6px] xl:left-[-24px] top-1/2 -translate-y-1/2 text-black bg-white h-[30px] w-[30px] text-[10px] xl:h-[60px] xl:w-[60px] flex items-center justify-center xl:text-[20px] rounded-full shadow-[4px_4px_5px_rgba(0,0,0,0.4)]"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-[-6px] xl:right-[-24px] top-1/2 -translate-y-1/2 text-black bg-white h-[30px] w-[30px] text-[10px] xl:h-[60px] xl:w-[60px] flex items-center justify-center xl:text-[20px] rounded-full shadow-[4px_4px_5px_rgba(0,0,0,0.4)]"
        >
          <FaAngleRight />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center my-6 gap-2">
        {dots.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-[20px] h-[20px] rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-black" : "bg-[#D9D9D9]"
            }`}
          ></button>
        ))}
      </div>

      {/* View Full Gallery Button */}
      <div className="flex justify-center mb-10">
        <Button text={"VIEW FULL GALLERY"} />
      </div>
    </div>
  );
}
