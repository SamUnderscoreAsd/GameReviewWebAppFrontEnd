import React from "react";
import HorizontalCarosel from "./horizontalCarosel";

export default function CategorySection({ category, gamelist }) {
  return (
    <div className="bg-contrast text-black my-32 rounded-md">
        <div className='mx-5 text-3xl'>{category}</div>
        <HorizontalCarosel gameList={gamelist}></HorizontalCarosel>
    </div>
  );
}
