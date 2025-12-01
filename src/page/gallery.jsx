// import SeasonDropdown from "../modules/gallery/seasonDropdown";
import GalleryContents from "../modules/gallery/galleryContents";
import GalleryNavBtn from "../modules/gallery/galleryNavBtn";

export default function Gallery() {
  return (
    <section className="flex flex-col items-center bg-white shadow-xl/50 rounded p-4 h-auto gap-y-4 min-[350px]:hidden sm:hidden md:flex ">
      <GalleryContents showDorpdown={true} />
      <GalleryNavBtn />
    </section>
  );
}
