import BannerImg from "../modules/bannerImg";
import Linksbars from "../modules/linkbars";

export default function Banner() {
  return (
    <section className="flex flex-col items-center bg-white shadow-xl/40 p-4 rounded-md gap-y-6">
      <BannerImg></BannerImg>
      <Linksbars></Linksbars>
    </section>
  );
}
