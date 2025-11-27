import { useImageData } from "../context/ImageDataContext";
import { useState, useEffect } from "react";
import SeasonDropdown from "../modules/seasonDropdown";

export default function GalleryContents() {
  const [currentSeason, setCurrentSeason] = useState("25ss"); // 드롭다운의 초기값과 동일하게 설정
  const [filteredImages, setFilteredImages] = useState([]);
  const imageData = useImageData();

  useEffect(() => {
    // imageData가 로드되었는지 확인
    if (imageData && imageData[currentSeason]) {
      setFilteredImages(imageData[currentSeason]);
    } else {
      setFilteredImages([]);
    }
  }, [currentSeason, imageData]); // imageData를 의존성 배열에 추가

  const handleSeasonChange = (seasonValue) => {
    setCurrentSeason(seasonValue);
  };

  return (
    <div>
      <div className="p-4">
        <SeasonDropdown onSelectSeason={handleSeasonChange} />
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 max-h-150 overflow-y-auto">
        {filteredImages.length > 0 ? (
          filteredImages.map((image, index) => (
            <div key={index} className="border p-1 rounded shadow ">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover"
              />
            </div>
          ))
        ) : (
          <p className="text-black">No images found for the selected season.</p>
        )}
      </div>
    </div>
  );
}
