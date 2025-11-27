import GameCard from "@/components/gameCard";
import HorizontalCarosel from "@/components/horizontalCarosel";
import Image from "next/image";

export default function Home() {

  const fakeGames = [
  {
    title: "Mystic Warriors",
    imageUrl: "https://picsum.photos/seed/game1/400/600",
    rating: 8.2
  },
  {
    title: "Dragon's Fury",
    imageUrl: "https://picsum.photos/seed/game2/400/600",
    rating: 9
  },
  {
    title: "Cyber Legends",
    imageUrl: "https://picsum.photos/seed/game3/400/600",
    rating: 7
  },
  {
    title: "Shadow Realm",
    imageUrl: "https://picsum.photos/seed/game4/400/600",
    rating: 10
  },
  {
    title: "Pixel Quest",
    imageUrl: "https://picsum.photos/seed/game5/400/600",
    rating: 6
  },
  {
    title: "Neon Strike",
    imageUrl: "https://picsum.photos/seed/game6/400/600",
    rating: 8
  },
  {
    title: "Ancient Prophecy",
    imageUrl: "https://picsum.photos/seed/game7/400/600",
    rating: 9
  },
  {
    title: "Star Voyager",
    imageUrl: "https://picsum.photos/seed/game8/400/600",
    rating: 7
  },
  {
    title: "Shadow Realm",
    imageUrl: "https://picsum.photos/seed/game4/400/600",
    rating: 10
  },
  {
    title: "Pixel Quest",
    imageUrl: "https://picsum.photos/seed/game5/400/600",
    rating: 6
  },
  {
    title: "Neon Strike",
    imageUrl: "https://picsum.photos/seed/game6/400/600",
    rating: 8
  },
  {
    title: "Ancient Prophecy",
    imageUrl: "https://picsum.photos/seed/game7/400/600",
    rating: 9
  },
  {
    title: "Star Voyager",
    imageUrl: "https://picsum.photos/seed/game8/400/600",
    rating: 7
  }
];

  return (
    <div className="h-auto w-screen flex flex-col">
      <div className = "my-10 w-full h-5/6 bg-white text-black flex justify-center items-center text-center">
          <HorizontalCarosel gameList={fakeGames}></HorizontalCarosel>
      </div>
      <div className = "my-10 w-full h-5/6 bg-white text-black flex justify-center items-center text-center">
          <HorizontalCarosel gameList={fakeGames}></HorizontalCarosel>
      </div>
      <div className = "my-10 w-full h-5/6 bg-white text-black flex justify-center items-center text-center">
          <HorizontalCarosel gameList={fakeGames}></HorizontalCarosel>
      </div>
    </div>
  );
}
