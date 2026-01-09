"use client";
import { useState, useCallback, useRef } from "react";
import Link from "next/link";
import { FaXmark } from "react-icons/fa6";
import { searchGames } from "@/app/services/api";

export default function SearchBar() {
  const [games, setGames] = useState(null);
  const timeoutRef = useRef(null);
  
  const onSubmitHandler = async(e, search) => {
    if(e != undefined){
      e.preventDefault();
    }

    if(search.toLowerCase() === "" || !search || search.trim().length === 0){
      console.log("empty search! setting games to null");
      setGames(null);
    }
    else{
      setGames(await searchGames(search));
    }

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
    <div className="bg-contrast text-black my-5 py-2 w-full text-center rounded-md">
      <form
        className="w-full flex flew-row justify-evenly items-start"
        onSubmit={(e) => {
          onSubmitHandler(e);
        }}
      >
        <div className="bg-offWhite rounded-md w-11/12">
          <input
            type="text"
            placeholder="Search For Games"
            className="w-full rounded-md bg-offWhite"
            onChange={(e) => {
              debouncedSearch(e.target.value);
            }}
          />
          <div className="bg-offWhite rounded-md w-full flex flex-col">
            {games
              ? games.map((game, index) => {
                  return (
                    <Link key={index} href={`game/gameView/${game.id}`}>
                      <div
                        className="hover:bg-blue-500 rounded-md text-left"
                        key={index}
                      >
                        {game.name}
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
        <button
          type="reset"
          className=" mx-5 text-2xl"
          onClick={() => {
            setGames(null);
          }}
        >
          <FaXmark></FaXmark>
        </button>
      </form>
    </div>
  );
}
