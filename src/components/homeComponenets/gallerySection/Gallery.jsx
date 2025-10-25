// import Button from "../urgentSection/Button";
// import GallerySlider from "./GallerySlider";
// // Import all images
// import galleryimg from "../../../assets/galleryimg.jpg";
// import galleryimg2 from "../../../assets/galleryimg2.jpg";
// import galleryimg3 from "../../../assets/galleryimg3.jpg";
// import galleryimg4 from "../../../assets/galleryimg4.jpg";
// import galleryimg5 from "../../../assets/galleryimg5.jpg";
// import galleryimg6 from "../../../assets/galleryimg6.jpg";
// import galleryimg7 from "../../../assets/galleryimg7.jpg";
// import galleryimg8 from "../../../assets/galleryimg8.jpg";
// import galleryimg9 from "../../../assets/galleryimg9.jpg";
// import galleryimg10 from "../../../assets/galleryimg10.jpg";

// export const Gallery = () => {
//   const galleryPicture = [
//     galleryimg,
//     galleryimg2,
//     galleryimg3,
//     galleryimg4,
//     galleryimg5,
//     galleryimg6,
//     galleryimg7,
//     galleryimg8,
//     galleryimg9,
//     galleryimg10,
//   ];

//   return (
//     <section className="pt-15 pb-20">
//       <div className="flex flex-col gap-6">
//         <h4 className="text-[34px]">Latest from our Gallery</h4>
//         <GallerySlider images={galleryPicture} />

//         <div className="flex justify-center">
//           <Button text="VIEW FULL GALLERY" />
//         </div>
//       </div>
//     </section>
//   );
// };

import Slider from './Slider'
import images from '../../../data/images'
import {
  VISIBLE_IMAGES,
  MAX_VISIBLE_IMAGES,
  AUTOSCROLL_ENABLED,
  AUTOSCROLL_INTERVAL,
  AUTOSCROLL_PAUSE_ON_HOVER,
} from '../../../config/ui'

export default function Gallery() {
  // visibleCount is configured by the developer in src/config/ui.js
  const visibleCount = Math.min(VISIBLE_IMAGES, MAX_VISIBLE_IMAGES)

  return (
    <section>
      <h1>Image Gallery</h1>

      <p style={{ marginBottom: 12, color: '#999' }}>
        Showing <strong>{visibleCount}</strong> image(s) at once (configured in
        <code>src/config/ui.js</code>).
      </p>

      <Slider
        images={images}
        visibleCount={visibleCount}
        autoplay={AUTOSCROLL_ENABLED}
        autoplayInterval={AUTOSCROLL_INTERVAL}
        pauseOnHover={AUTOSCROLL_PAUSE_ON_HOVER}
      />

      <p style={{ marginTop: 12, color: '#999' }}>
        Demo uses placeholder images from picsum.photos. Use your own images by replacing
        <code>src/data/images.js</code>.
      </p>
    </section>
  )
}

