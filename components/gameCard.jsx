import { React } from "react";

export default function GameCard({ gameName, rating, thumbnail }) {
    const imageUrl = `https://images.igdb.com/igdb/image/upload/t_720p/${thumbnail}.jpg`;
    return (
        <div className="bg-offWhite mx-5 my-10 w-[12.5rem] h-[20rem] rounded-md flex flex-col items-center content-center shadow-[5px_10px_20px_rgba(0,0,0,0.59)] relative hover:scale-105 hover:transition-transform hover:duration-300">
            <img
                className="select-none pointer-events-none w-full h-full flex-3 object-cover rounded-t-md"
                src={imageUrl}
            />
            <div className="flex-1 text-black text-center w-full ">
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {gameName}
                </div>
                <div>{Math.floor(rating / 10)}/10</div>
            </div>
        </div>
    );
}
