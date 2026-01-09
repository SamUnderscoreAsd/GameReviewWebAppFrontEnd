import CategorySection from "@/components/games/categorySection";
import { genre, getGenreKey } from "@/components/games/GameCategories";
import { getGameDetails } from "./services/api";
import SearchBar from "@/components/searchBar";

export default async function Home() {

  const length = Object.keys(genre).length;
  const cat1 = Object.keys(genre)[Math.floor(Math.random() * length)];
  const cat2 = Object.keys(genre)[Math.floor(Math.random() * length)];

  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 min-w-[200px]"></div>

      <div className="flex-2 overflow-hidden">
        <SearchBar/>
        <div className="">
          <CategorySection category={"Good Picks"} gamelist={await getGameDetails('random', undefined)} ></CategorySection>
          <CategorySection category={cat1} gamelist={await getGameDetails(undefined, genre[cat1])} ></CategorySection>
          <CategorySection category={cat2} gamelist={await getGameDetails(undefined, genre[cat2])} ></CategorySection>
        </div>
      </div>

      <div className="flex-1 min-w-[200px]"></div>
    </div>
  );
}
