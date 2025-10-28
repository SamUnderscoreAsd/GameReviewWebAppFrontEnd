import GameCard from "@/components/gameCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className = "my-10 w-full h-5/6 bg-white text-black flex justify-center items-center text-center">
          <GameCard>{'Test'}</GameCard>
      </div>
      <div className = "my-10 w-full h-2/6 bg-white text-black">
        Category 1
      </div>
      <div className = "my-10 w-full h-2/6 bg-white text-black">
        Category 2
      </div>
    </div>
  );
}
