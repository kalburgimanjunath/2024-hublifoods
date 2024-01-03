import React, { useState } from "react";
export default function Banner() {
  const banners = [
    "https://cdn.mobilzer.com/food-app/banners/31246b31-8c5d-4b9d-bf49-d49c11805412.png?ts=1681014474",
    "https://cdn.mobilzer.com/food-app39795cc5-bc40-49ce-8850-30ca00acf2e8.png?ts=1681013798",
  ];
  const [activeItem, setActiveItem] = useState(0);
  return (
    <div className="flex text-orange-600 justify-center items-center">
      <div
        className="cursor-pointer"
        style={{ display: banners.length < 1 ? "block" : "none" }}
        onClick={() => setActiveItem(activeItem - 1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </div>
      {banners &&
        banners.map((item, index) => {
          return (
            <img
              key={index}
              src={item}
              width={"50%"}
              style={{ display: activeItem == index ? "block" : "none" }}
            />
          );
        })}
      <div
        className="cursor-pointer"
        style={{ display: banners.length > 0 ? "block" : "none" }}
        onClick={() => {
          if (activeItem < banners.length) {
            setActiveItem(activeItem + 1);
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}
