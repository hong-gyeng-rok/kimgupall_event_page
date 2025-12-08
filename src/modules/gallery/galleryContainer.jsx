import { useState, useEffect } from "react";
import { useImageData } from "../../context/ImageDataContext";
import GalleryContents from "./galleryContents";
import GalleryNavBtn from "./galleryNavBtn";
import SeasonDropdown from "./seasonDropdown";

export default function GalleryContainer({ isShow = true }) {
  const [currentSeason, setCurrentSeason] = useState("25fw");
  const [filteredImages, setFilteredImages] = useState([]);
  const allimageData = useImageData();

  useEffect(() => {
    if (allimageData && allimageData[currentSeason]) {
      setFilteredImages(allimageData[currentSeason]);
    } else {
      setFilteredImages([]);
    }
  }, [currentSeason, allimageData]);

  const handleSeasonChange = (seasonValue) => {
    setCurrentSeason(seasonValue);
  };

  return (
    <section className="p-4">
      {isShow && (
        <div className="flex justify-between mb-4">
          <SeasonDropdown onSelectSeason={handleSeasonChange} />
          <GalleryNavBtn />
        </div>
      )}
      <GalleryContents filteredImages={filteredImages} />
    </section>
  );
}
