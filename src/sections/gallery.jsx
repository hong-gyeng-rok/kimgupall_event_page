import SeasonDropdown from "../modules/seasonDropdown";
import GalleryContents from "../modules/galleryContents";
import GalleryNavBtn from "../modules/galleryNavBtn";

export default function Gallary() {
  return (
    <section className="flex flex-col items-center bg-white shadow-xl/50 rounded p-4 h-auto gap-y-4">
      <GalleryContents></GalleryContents>
      <GalleryNavBtn></GalleryNavBtn>
    </section>
  );
}
