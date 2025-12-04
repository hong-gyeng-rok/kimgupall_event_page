import Masonry from "react-masonry-css"; // react-masonry-css에서 임포트
import { useImageData } from "../../context/ImageDataContext";

export default function GalleryContents() {
  const allimageData = useImageData();

  // 반응형 컬럼 개수 설정
  const breakpointColumnsObj = {
    default: 6, // 기본값 (가장 큰 화면)
    1280: 4, // 1280px 이하
    1024: 2, // 1024px 이하
    800: 1, // 768px 이하
    640: 1, // 640px 이하
  };

  const withOutBannerImgs = allimageData
    ? Object.keys(allimageData)
        .filter((key) => key !== "banner")
        .flatMap((key) => allimageData[key])
    : [];

  return (
    <div>
      <div className="p-4 max-h-[58rem] overflow-y-auto ">
        {withOutBannerImgs.length > 0 ? (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid flex gap-4 h-screen" // flex 컨테이너 클래스 이미지 열 갭
            columnClassName="my-masonry-grid_column gap-4 bg-clip-padding " // 각 컬럼에 적용될 클래스 (gap-4는 gutter 역할)
          >
            {withOutBannerImgs.map((image, index) => (
              <div key={index} className=" rounded shadow mb-4">
                <img
                  src={image.urlConverted}
                  alt={image.title}
                  className="w-full  object-cover"
                  fetchPriority="high"
                  loading="lazy"
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
