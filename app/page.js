import CategorySection from "@/components/categorySection";
import GameCard from "@/components/gameCard";
import HorizontalCarosel from "@/components/horizontalCarosel";
import Image from "next/image";

export default async function Home() {
  const randomGames = async () => {
    const url = "http://localhost:3001/api/get10RandomGames";
    let gameList = undefined;

    try {
      gameList = await fetch(url, {
        method: "POST",
        header: {
          "Content-type": "application/json",
        },
      });

      let data = await gameList.json();
      //console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };

  let gameList = await randomGames();

  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 min-w-[200px]"></div>

      <div className="flex-2 overflow-hidden">
        <div className="">
          <CategorySection category={"Category"} gamelist={gameList} ></CategorySection>
          <CategorySection category={"Category"} gamelist={gameList} ></CategorySection>
          <CategorySection category={"Category"} gamelist={gameList} ></CategorySection>
        </div>
      </div>

      <div className="flex-1 min-w-[200px]"></div>
    </div>
  );
}
