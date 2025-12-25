import { React } from "react";
import Link from "next/link";

export default function GameCard({ gameId, gameName, rating, thumbnail }) {
    const imageUrl = `https://images.igdb.com/igdb/image/upload/t_720p/${thumbnail}.jpg`;
    return (
        <Link href={`game/gameView/${gameId}`}>
        <div className="bg-offWhite mx-5 my-10 w-[12.5rem] h-[20rem] rounded-md flex flex-col items-center content-center shadow-[5px_10px_20px_rgba(0,0,0,0.59)] relative hover:scale-105 hover:transition-transform hover:duration-300">
            <img
                className="select-none pointer-events-none w-full h-full flex-3 object-cover object-top overflow-hidden rounded-t-md"
                src={thumbnail == 0 ? "https://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png" :imageUrl}
            />
            <div className="flex-1 text-black text-center w-full ">
                <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {gameName}
                </div>
                <div>{Math.floor(rating / 10)}/10</div>
            </div>
        </div>
        </Link>
    );
}
