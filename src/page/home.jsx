import Banner from "./banner";
import GalleryContents from "../modules/gallery/galleryContents";

export default function Home() {
  return (
    <main className="bg-white text-white flex flex-row justify-evenly items-center gap-4 min-[350px]:p-0 md:p-8 h-screen">
      <div className=" flex flex-col gap-8">
        <Banner />
      </div>
      <section className="flex flex-col items-center bg-white shadow-xl/50 rounded p-4 h-auto min-[350px]:hidden sm:hidden md:flex">
        <GalleryContents />
      </section>
    </main>
  );
}
