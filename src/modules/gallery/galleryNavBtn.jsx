import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    id: "grid",
    title: "Grid" /** Change to gallary style grid */,
    type: "style",
  },
  {
    id: "slider",
    title: "Slider",
    type: "style",
  },
  {
    id: "exit",
    title: "Exit",
    url: "/",
    type: "url",
  },
];

export default function GalleryNavBtn() {
  return (
    <div className=" flex flex-row w-xs justify-around min-[350px]:hidden sm:hidden md:flex ">
      {navList.map((nav) =>
        nav.type === "style" ? (
          <button
            key={nav.id}
            className="text-stone-950 p-1 px-4 shadow-xl/40 rounded hover:bg-zinc-200 hover:ring-2 hover:ring-blue-400"
          >
            {nav.title}
          </button>
        ) : (
          <Link
            key={nav.id}
            to={nav.url}
            className=" text-stone-950 p-1 px-4 shadow-xl/40 rounded hover:bg-zinc-200 hover:ring-2 hover:ring-blue-400"
          >
            {nav.title}
          </Link>
        ),
      )}
    </div>
  );
}
