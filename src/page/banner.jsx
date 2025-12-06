import React from "react";
import BannerImg from "../modules/banner/bannerImg";
import { useImageData } from "../context/ImageDataContext";

export default function Banner() {
  const allImageData = useImageData();

  const eventImgs = allImageData ? allImageData.eventImg : [];

  return (
    <section className="flex flex-col items-center justify-center bg-white shadow-xl/40 p-4 rounded-md gap-y-6 min-[350px]:h-fit md:h-auto">
      <BannerImg />
      {allImageData && eventImgs.length > 0 ? (
        eventImgs.map((image, index) => (
          <img key={index} src={image.url} alt={image.title} />
        ))
      ) : (
        <p> 이미지가 없습니다. </p>
      )}
    </section>
  );
}
