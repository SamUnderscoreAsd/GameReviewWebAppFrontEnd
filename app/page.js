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
    <div className="h-auto w-screen flex flex-col">
      <div className="my-10 w-full h-5/6 text-black flex justify-center items-center text-center">
        <HorizontalCarosel gameList={gameList}></HorizontalCarosel>
      </div>
      <div className="my-10 w-full h-5/6 text-black flex justify-center items-center text-center">
        <HorizontalCarosel gameList={gameList}></HorizontalCarosel>
      </div>
      <div className="my-10 w-full h-5/6 text-black flex justify-center items-center text-center">
        <HorizontalCarosel gameList={gameList}></HorizontalCarosel>
      </div>
    </div>
  );
}
