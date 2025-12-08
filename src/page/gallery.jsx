import GalleryContainer from "../modules/gallery/galleryContainer";
export default function Gallery({ isShow = true }) {
  return (
    <section className="flex flex-col items-center bg-white shadow-xl/50 rounded p-4 w-full h-screen">
      <GalleryContainer isShow={isShow} />
    </section>
  );
}
