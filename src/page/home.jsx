import Banner from "./banner";
import Gallery from "./gallery";
import GalleryContents from "../modules/gallery/galleryContents";

export default function Home() {
  return (
    <main className="bg-white p-8 text-white flex flex-row justify-evenly gap-4">
      <Banner />
      <section className="flex flex-col items-center bg-white shadow-xl/50 rounded p-4 h-auto min-[350px]:hidden sm:hidden md:flex ">
        <GalleryContents showDorpdown={false} />
      </section>
    </main>
  );
}
