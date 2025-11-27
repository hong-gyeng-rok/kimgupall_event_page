import React from "react";

const allLinks = [
  // --- 'default' 스타일을 갖는 링크들 ---
  {
    id: "instagram",
    tittle: "Instagram",
    bgColor: "#0025D9",
    url: "https://www.instagram.com/kimgupall_98",
    styleVariant: "default", // 스타일 변형을 지정
  },
  {
    id: "market",
    tittle: "Market",
    bgColor: "#166EFF",
    url: "https://naver.me/53lmTjmx",
    styleVariant: "default",
  },
  {
    id: "noteFolio",
    tittle: "NoteFolio",
    bgColor: "#3A84FF",
    url: "https://notefolio.net/kimgupall98",
    styleVariant: "default",
  },
  {
    id: "pinterest",
    tittle: "Pinterest",
    bgColor: "#98BEFF",
    url: "https://kr.pinterest.com/kimgupall98/",
    styleVariant: "default",
  },

  // --- 'subtle' 스타일을 갖는 링크들 ---
  {
    id: "Subs",
    tittle: "Subs",
    url: "http://pf.kakao.com/_QGyxnn",
    styleVariant: "subtle", // 'Subs'는 외부 링크이지만, 디자인은 'subtle'
  },
  {
    id: "Gallery",
    tittle: "Gallery",
    url: "#", // 내부 페이지 경로
    styleVariant: "subtle",
  },
  {
    id: "About",
    tittle: "About",
    url: "#", // 내부 페이지 경로
    styleVariant: "subtle",
  },
];

export default function Linksbars() {
  // 'styleVariant'에 따라 링크들을 두 그룹으로 나눕니다.
  const defaultStyleLinks = allLinks.filter(
    (link) => link.styleVariant === "default",
  );
  const subtleStyleLinks = allLinks.filter(
    (link) => link.styleVariant === "subtle",
  );

  return (
    <article className="flex flex-col gap-y-6">
      {/* 'default' 스타일 링크 렌더링 */}
      {defaultStyleLinks.map((link) => (
        <a
          key={link.id}
          className="block w-xs h-auto p-2 rounded-md shadow-xl/40 text-center"
          style={{ backgroundColor: link.bgColor }}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* 외부 링크는 새 탭에서 열리도록 target="_blank" 추가 */}
          {link.tittle}
        </a>
      ))}

      {/* 'subtle' 스타일 링크 렌더링 */}
      <div className="flex flex-row justify-between">
        {subtleStyleLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            className="text-stone-950 p-1 px-4 shadow-xl/40 rounded "
            // URL이 http로 시작하면 새 탭에서, 아니면 현재 탭에서 엽니다.
            target={link.url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {link.tittle}
          </a>
        ))}
      </div>
    </article>
  );
}
