import GalleryTab from "../components/galleryComponents/GalleryTab"
const Gallery = () => {
  return (
     <>
     <header>
      <div className="bg-[#D9D9D9] h-[300px] flex items-center px-20">
        <div className="flex flex-col gap-6">
          <h3 className="text-[48px] font-medium">Our Gallery</h3>
          <p className="text-[16px] text-[#333333AB]">A glimpse of our moments, memories, and missions in action.</p>
        </div>
      </div>
     </header>
     <main>
      <div className="px-15 py-20">
        <GalleryTab/>
      </div>
     </main>
     </>
  )
}

export default Gallery