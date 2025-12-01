import BannerImg from "../modules/banner/bannerImg";
import Links from "../modules/banner/links";

export default function Banner() {
  return (
    <section className="flex flex-col items-center bg-white shadow-xl/40 p-4 rounded-md gap-y-6">
      <BannerImg />
      <Links />
    </section>
  );
}
