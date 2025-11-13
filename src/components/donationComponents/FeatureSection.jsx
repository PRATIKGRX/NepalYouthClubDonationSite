import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import FeatureCard from "../donationComponents/FeatureCard";
import data from "../../data/cases";

const FeatureSection = () => {
  // Filter urgent cases
  const urgentCases = data.filter((item) => item.status === "urgent");

  const [emblaRef, embla] = useEmblaCarousel({
    loop: false,
    align: "center",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [dots, setDots] = useState([]);
  const autoplayRef = useRef();

  // Scroll functions
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (i) => embla && embla.scrollTo(dots[i]),
    [embla, dots]
  );

  // Autoplay logic
  const startAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!embla) return;
      if (embla.canScrollNext()) embla.scrollNext();
      else embla.scrollTo(0);
    }, 4000);
  }, [embla]);

  const stopAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
  }, []);

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
      const currentDot = Math.min(
        snap,
        embla.slideNodes().length - slidesInView
      );

      setSelectedIndex(currentDot);
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };

    embla.on("select", onSelect);
    embla.on("scroll", onSelect);
    onSelect();

    // Autoplay setup
    startAutoplay();
    embla.on("pointerDown", stopAutoplay);
    embla.on("touchStart", stopAutoplay);
    embla.on("wheel", stopAutoplay);

    return () => {
      stopAutoplay();
      embla.destroy();
    };
  }, [embla, startAutoplay, stopAutoplay]);

  return (
    <div className="select-none">
      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {urgentCases.map((item) => (
  <div
    key={item.id}
    className="flex-[0_0_100%] px-4"
    onMouseEnter={stopAutoplay}
    onMouseLeave={startAutoplay}
  >
    <FeatureCard
      victimImage={item.image}
      victimName={item.title}
      victimStatus={item.status}
      victimDescription={item.desc}
      progressPercent={Math.floor((item.raised / item.goal) * 100)}
      raisedAmount={item.raised.toLocaleString()} // optional formatting
      goalAmount={item.goal.toLocaleString()}
    />
  </div>
))}

          </div>
        </div>

        {/* Navigation Buttons */}
        {canScrollPrev && (
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-black bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full shadow-md z-10"
          >
            <FaAngleLeft />
          </button>
        )}
        {canScrollNext && (
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-black bg-white h-[40px] w-[40px] flex items-center justify-center rounded-full shadow-md z-10"
          >
            <FaAngleRight />
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {dots.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`w-[12px] h-[12px] rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
