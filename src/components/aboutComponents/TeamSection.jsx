import { useEffect, useState, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import TeamCard from "./TeamCard";
import member1 from "../../assets/teamImg/member1.jpg";
import member2 from "../../assets/teamImg/member2.jpg";
import member3 from "../../assets/teamImg/member3.jpg";
import member4 from "../../assets/teamImg/member4.jpg";
import member5 from "../../assets/teamImg/member5.jpg";
import member6 from "../../assets/teamImg/member6.jpg";

const teamMembers = [
  { teamImg: member1, memberName: "Member1", teamDesignation: "Designation" },
  { teamImg: member2, memberName: "Member2", teamDesignation: "Designation" },
  { teamImg: member3, memberName: "Member3", teamDesignation: "Designation" },
  { teamImg: member4, memberName: "Member4", teamDesignation: "Designation" },
  { teamImg: member5, memberName: "Member5", teamDesignation: "Designation" },
  { teamImg: member6, memberName: "Member6", teamDesignation: "Designation" },
];

const TeamSection = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: false, align: "start" });
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

  // Autoplay functions
  const startAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (!embla) return;
      if (embla.canScrollNext()) embla.scrollNext();
      else embla.scrollTo(0);
    }, 3000);
  }, [embla]);

  const stopAutoplay = useCallback(() => {
    clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (!embla) return;

    // Dots calculation
    const calculateDots = () => {
      const containerWidth = embla
        .containerNode()
        .getBoundingClientRect().width;
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
      const containerWidth = embla
        .containerNode()
        .getBoundingClientRect().width;
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

    // Autoplay
    startAutoplay();

    // Stop autoplay on drag/pointer
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
      <p className="md:text-[36px] text-[24px] font-medium mb-3 md:mb-6">MEET OUR TEAM</p>

      <div className="relative">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {teamMembers.map((member, i) => (
              <div
                key={i}
                className="lg:flex-[0_0_25%] flex-[0_0_33.33%]  px-3"
                onMouseEnter={stopAutoplay}
                onMouseLeave={startAutoplay}
              >
                <TeamCard
                  memberName={member.memberName}
                  teamImg={member.teamImg}
                  teamDesignation={member.teamDesignation}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
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
            className={`md:w-[12px] md:h-[12px] w-[9px] h-[9px] rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
