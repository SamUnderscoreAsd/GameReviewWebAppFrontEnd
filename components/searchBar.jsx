"use client";
import { useState, useCallback, useRef } from "react";
import { searchGames } from "@/app/services/api";

export default function SearchBar() {
  const [games, setGames] = useState(null);
  const timeoutRef = useRef(null);
  

  const onSubmitHandler = async(e, query) => {
    e.preventDefault();
    setGames(await searchGames(query));
    console.log("here are the search results", games);

    console.log("Here is the search val",search);
    // console.log("I've BEEN SUBMITTED FUCK HELP!!!!")
  };

  const debouncedSearch = useCallback((query) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(async () => {
        console.log("setting the games now");
        onSubmitHandler(query)
    }, 500);
  }, []);

  return (
    <div className="bg-contrast text-black my-5 w-full items-center text-center rounded-md">
      <form className="w-full py-2" onSubmit={onSubmitHandler}>
        <input type="text" className="w-10/12 rounded-md" onChange={(e) => {
            debouncedSearch(e.target.value);
            }} />
        <button className="bg-blue-500 w-1/12 mx-2 rounded-md" type="submit">Submit</button>
      </form>
    </div>
  );
}
