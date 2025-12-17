"use client";
import { use, useRef } from "react";
import GameCard from "./games/gameCard";

export default function HorizontalCarosel({ gameList }) {
  const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };
  return (
      <div
        ref={scrollRef}
        className="overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex flex-row gap-4 w-full">
          {gameList.map((game, index) => {
            return (
              <div className="flex-shrink-0" key={index}>
                <GameCard
                  className="bg-offWhite"
                  gameId={game.id ? game.id : -1}
                  gameName={game.name ? game.name : ""}
                  rating={game.rating ? game.rating : 0}
                  thumbnail={game.cover?.image_id || "0"}
                ></GameCard>
              </div>
            );
          })}
        </div>
      </div>
  );
}
