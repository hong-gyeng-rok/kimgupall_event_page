import { useEffect, useState, useRef } from "react";

const seasons = [
  {
    value: "25ss",
    label: "25 Spring & Summer",
  },
  {
    value: "24fw",
    label: "24 Fall & Winter",
  },
  {
    value: "24ss",
    label: "24 Spring & Summer",
  },
];

export default function SeasonDropdown({ onSelectSeason }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeason, setSelectedSeason] = useState(seasons[0]);
  const dropDownRef = useRef(null);

  useEffect(() => {
    function handleClickOutSide(event) {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [dropDownRef]);

  const handleTogle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (season) => {
    setSelectedSeason(season);
    onSelectSeason(season.value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative inline-block text-left w-xs p-2 bg-white text-black shadow-xl/50 rounded"
      ref={dropDownRef}
    >
      <button
        className="w-full rounded hover:ring-2 hover:ring-stone-300 hover:bg-stone-200"
        type="button"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={handleTogle}
      >
        {selectedSeason.label}
      </button>
      {isOpen && (
        <div
          className="relative"
          role="menu-button"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div
            className="absolute w-full bg-white flex flex-col justify-center py-1 mt-1"
            role="none"
          >
            {seasons.map((season) => (
              <button
                className="shadow-xl p-2 rounded hover:ring-2 hover:ring-stone-300 hover:bg-stone-200"
                key={season.value}
                onClick={() => handleSelect(season)}
                role="menuitem"
                tabIndex="-1"
              >
                {season.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
