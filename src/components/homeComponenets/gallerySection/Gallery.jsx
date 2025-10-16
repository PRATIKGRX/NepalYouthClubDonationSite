import { useEffect, useRef, useState } from "react";
import Button from "../urgentSection/Button";
import GalleryCard from "./GalleryCard";
import { GoChevronLeft } from "react-icons/go";
import { GoChevronRight } from "react-icons/go";
// Import all images
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

export const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);
  const intervalRef = useRef(null);
  const cardRef = useRef(null);

  const AUTO_SCROLL_INTERVAL = 3000;

  const galleryPicture = [
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

  const total = galleryPicture.length;

  // Smooth scroll with no extra white space
 useEffect(() => {
  const container = trackRef.current?.parentElement;
  const track = trackRef.current;

  if (!container || !track) return;

  const maxTranslate = track.scrollWidth - container.offsetWidth;

  // Calculate offset based on currentIndex, but don't exceed maxTranslate
  const card = cardRef.current;
  const style = window.getComputedStyle(track);
  const gap = parseInt(style.gap) || 0;
  const offset = currentIndex * (card.offsetWidth + gap);

  track.style.transition = "transform 0.6s ease-in-out";
  track.style.transform = `translateX(-${Math.min(offset, maxTranslate)}px)`;
}, [currentIndex]);




  // Auto-scroll
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(intervalRef.current);
  }, [total]);

  const restartAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= total ? 0 : prev + 1));
    }, AUTO_SCROLL_INTERVAL);
  };

 const scrollLeft = () => {
  clearInterval(intervalRef.current);
  setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1)); // rewind to last
  setTimeout(restartAutoScroll, 2000);
};
const scrollRight = () => {
  clearInterval(intervalRef.current);

  const container = trackRef.current?.parentElement;
  const track = trackRef.current;
  if (!container || !track) return;

  const maxTranslate = track.scrollWidth - container.offsetWidth;
  const style = window.getComputedStyle(track);
  const gap = parseInt(style.gap) || 0;
  const cardWidth = cardRef.current.offsetWidth;

  // Scroll by one card width, clamp to maxTranslate
  const offset = Math.min((currentIndex + 1) * (cardWidth + gap), maxTranslate);

  setCurrentIndex(prev => {
    // If already at max, rewind to start
    return offset >= maxTranslate ? 0 : prev + 1;
  });

  setTimeout(restartAutoScroll, 2000);
};



  return (
    <section className="pt-15 pb-20">
      <div className="flex flex-col gap-6">
        <h4 className="text-[34px]">Latest from our Gallery</h4>
        <div className="relative w-full group">
            <button
            onClick={scrollLeft}
            className="absolute top-1/2 -translate-y-1/2 left-[-20px] z-10 bg-stone-300 px-1 h-full hidden group-hover:block hover:cursor-pointer text-[20px]"
          >
            <GoChevronLeft />
          </button>
          <button
            onClick={scrollRight}
             className="absolute top-1/2 -translate-y-1/2 right-[-20px] z-10 bg-stone-300 px-1 h-full hidden group-hover:block hover:cursor-pointer text-[20px]"
          >
            <GoChevronRight/>
          </button>

        <div className=" overflow-hidden">
          {/* Track container */}
          <div
            className="flex gap-4"
            ref={trackRef}
            style={{ willChange: "transform" }}
          >
            {galleryPicture.map((url, index) => (
              <div
                key={index}
                ref={index === 0 ? cardRef : null}
                className="flex-shrink-0"
              >
                <GalleryCard image={url} />
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="flex justify-center">
          <Button text="VIEW FULL GALLERY" />
        </div>
      </div>
    </section>
  );
};
