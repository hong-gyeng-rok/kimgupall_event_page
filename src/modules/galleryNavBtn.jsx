import React from "react";

const navList = [
  {
    id: "grid",
    tittle: "Grid" /** Change to gallary style grid */,
    type: "style",
  },
  {
    id: "slider",
    tittle: "Slider",
    type: "style",
  },
  {
    id: "exit",
    tittle: "Exit",
    url: "#",
    type: "url",
  },
];

export default function GalleryNavBtn() {
  const styleNav = navList.filter((nav) => nav.type === "style");
  const urlNav = navList.filter((nav) => nav.type === "url");

  return (
    <div className=" flex flex-row w-xs justify-around">
      {styleNav.map((nav) => (
        <button
          key={nav.id}
          className="text-stone-950 p-1 px-4 shadow-xl/40 rounded hover:bg-zinc-200 hover:ring-2 hover:ring-blue-400"
        >
          {nav.tittle}
        </button>
      ))}

      {urlNav.map((nav) => (
        <a
          key={nav.id}
          href={nav.url}
          className=" text-stone-950 p-1 px-4 shadow-xl/40 rounded hover:bg-zinc-200 hover:ring-2 hover:ring-blue-400"
        >
          {nav.tittle}
        </a>
      ))}
    </div>
  );
}
