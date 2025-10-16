const GalleryCard = ({ image, style }) => {
  return (
    <div
      className=""
      style={style}
    >
      <img
        src={image}
        alt="Gallery"
        className="min-w-[245px] h-[140px] object-cover"
      />
    </div>
  );
};
export default GalleryCard;