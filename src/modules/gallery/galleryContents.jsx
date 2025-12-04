import React, { useState } from "react";
import Masonry from "react-masonry-css"; // react-masonry-css에서 임포트
import Modal from "react-modal";
import { useImageData } from "../../context/ImageDataContext";

// Modal이 app element를 인식하도록 설정 (접근성을 위해 필요)
Modal.setAppElement("#root"); // 또는 앱의 최상위 DOM ID

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

  // 1. 선택된 이미지를 저장할 상태 (초기값 null)
  const [selectedImage, setSelectedImage] = useState(null);

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
              <div
                key={index}
                className=" rounded shadow mb-4 cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
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

      {/* selectedImage가 있을 때만 Modal이 렌더링되도록 조건부 렌더링 추가 */}
      {selectedImage && (
        <Modal
          isOpen={selectedImage !== null}
          onRequestClose={() => setSelectedImage(null)} // 4. 모달 닫기
          className="w-auto h-auto max-w-3xl flex items-center justify-center focus:outline-none"
          overlayClassName="fixed inset-0 bg-white flex items-center justify-center"
        >
          <img
            src={selectedImage.url} // 5. 선택된 이미지의 원본 URL 사용
            alt={selectedImage.title}
            className="max-w-full max-h-full object-contain p-4"
          />
        </Modal>
      )}
    </div>
  );
}
