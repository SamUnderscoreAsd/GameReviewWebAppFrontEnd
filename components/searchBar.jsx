"use client";
import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { searchGames } from "@/app/services/api";

export default function SearchBar() {
  const [games, setGames] = useState(null);
  const timeoutRef = useRef(null);
  
  const onSubmitHandler = async(e, search) => {
    if(e != undefined){
      e.preventDefault();
    }

    setGames(await searchGames(search));

    console.log("here are the search results", search, games);
  };

  const debouncedSearch = useCallback((query) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
        console.log("setting the games now");
        onSubmitHandler(undefined, query)
    }, 1000);
  }, []);

  return (
    <div className="bg-contrast text-black my-5 py-2 w-full items-center content-center text-center rounded-md">
      <form
        className="w-full flew-row"
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <input
          type="text"
          className="w-11/12 rounded-md"
          onChange={(e) => {
            debouncedSearch(e.target.value);
          }}
        />
      </form>
        {
          games ? games.map((game, index)=>{
            return (
              <Link href={`game/gameView/${game.id}`}>
                <div className="bg-offWhite hover:bg-blue-500 m-auto w-11/12 items-center content-center text-left" key={index}>{game.name}</div>
              </Link>
            );
          }) : null
        }
    </div>
  );
}
