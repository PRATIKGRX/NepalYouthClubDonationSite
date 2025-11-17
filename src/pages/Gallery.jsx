import GalleryTab from "../components/galleryComponents/GalleryTab";
const Gallery = () => {
  //2xl:h-[400px] md:h-[250px] h-[225px]
  return (
    <>
      <header>
        <div className="bg-[#D9D9D9] 2xl:h-[400px] md:h-[250px] h-[225px]  flex items-center 2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5">
          <div className="flex flex-col gap-2">
            <h3 className="xl:text-[70px] 2xl:text-[90px] md:text-[40px] text-[32px] font-medium">Our Gallery</h3>
            <p className="xl:text-[36px] 2xl:text-[42px] md:text-[24px] text-[18px] text-[#333333AB]">
              A glimpse of our moments, memories, and missions in action.
            </p>
          </div>
        </div>
      </header>
      <main>
        <div className="2xl:px-24 2xl:py-24 xl:px-15 xl:py-12 lg:px-12 lg:py-13 sm:px-8 sm:py-10 px-4 py-5">
          <GalleryTab />
        </div>
      </main>
    </>
  );
};

export default Gallery;
