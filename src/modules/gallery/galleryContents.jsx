import Masonry from "react-masonry-css"; // react-masonry-css에서 임포트
import { useState, useEffect } from "react";
import SeasonDropdown from "./seasonDropdown";
import { useImageData } from "../../context/ImageDataContext";

export default function GalleryContents({ showDorpdown = false }) {
  const [currentSeason, setCurrentSeason] = useState("25ss");
  const [filteredImages, setFilteredImages] = useState([]);
  const imageData = useImageData();

  useEffect(() => {
    if (imageData && imageData[currentSeason]) {
      setFilteredImages(imageData[currentSeason]);
    } else {
      setFilteredImages([]);
    }
  }, [currentSeason, imageData]);

  const handleSeasonChange = (seasonValue) => {
    setCurrentSeason(seasonValue);
  };

  // 반응형 컬럼 개수 설정
  const breakpointColumnsObj = {
    default: 6, // 기본값 (가장 큰 화면)
    1280: 4, // 1280px 이하
    1024: 2, // 1024px 이하
    800: 1, // 768px 이하
    640: 1, // 640px 이하
  };

  return (
    <div>
      {showDorpdown && (
        <div className="p-4">
          <SeasonDropdown onSelectSeason={handleSeasonChange} />
        </div>
      )}
      <div className="p-4 max-h-175 overflow-y-auto">
        {filteredImages.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid flex gap-4" // flex 컨테이너 클래스 이미지 열 갭
            columnClassName="my-masonry-grid_column gap-4 bg-clip-padding " // 각 컬럼에 적용될 클래스 (gap-4는 gutter 역할)
          >
            {filteredImages.map((image, index) => (
              <div key={index} className=" rounded shadow mb-4">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </Masonry>
        ) : (
          <p className="text-black">No images found for the selected season.</p>
        )}
      </div>
    </div>
  );
}
