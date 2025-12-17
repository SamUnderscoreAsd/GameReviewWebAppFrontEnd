import CategorySection from "@/components/games/categorySection";
import { genre, getGenreKey } from "@/components/games/GameCategories";

export default async function Home() {
  const getGames = async (requestType, category) => {
    const url = "http://localhost:3001/api/getGames";
    let gameList = undefined;
    //console.log('category is: ' + category);
    try {
      gameList = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          requestType: requestType,
          value: category,
        })
      });
      
      let data = await gameList.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  //const cat1 = await getGames('random');
  //const cat2 = await getGames(genre.Simulator);
  //const cat3 = await getGames(genre.Platform);
  const length = Object.keys(genre).length;
  const cat1 = Object.keys(genre)[Math.floor(Math.random() * length)];
  const cat2 = Object.keys(genre)[Math.floor(Math.random() * length)];
  return (
    <div className="flex flex-row w-full">
      <div className="flex-1 min-w-[200px]"></div>

      <div className="flex-2 overflow-hidden">
        <div className="">
          <CategorySection category={"Good Picks"} gamelist={await getGames('random', undefined)} ></CategorySection>
          <CategorySection category={cat1} gamelist={await getGames(undefined, genre[cat1])} ></CategorySection>
          <CategorySection category={cat2} gamelist={await getGames(undefined, genre[cat2])} ></CategorySection>
        </div>
      </div>

      <div className="flex-1 min-w-[200px]"></div>
    </div>
  );
}
