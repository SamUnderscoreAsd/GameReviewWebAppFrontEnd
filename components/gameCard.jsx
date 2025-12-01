import { React } from 'react'

export default function GameCard({gameName, rating, thumbnail}){
    const imageUrl = `https://images.igdb.com/igdb/image/upload/t_720p/${thumbnail}.jpg`
    return (
        <div className="bg-slate-400 m-5 w-[12.5rem] h-[20rem] rounded-md flex flex-col items-center content-center shadow-black shadow-lg overflow-hidden relative hover:scale-105 hover:transition-transform hover:duration-300">
            <img className="select-none pointer-events-none w-full h-full flex-3 object-cover " src={imageUrl}/>            
            {/* <div className='select-none absolute top-0 left-0 right-0 items-center content-start'>
                <p className='text-white text-2xl'>{gameName}</p>
            </div>
            <div className="relative bottom-12 select-none">
                <p className="text-white text-5xl">{Math.floor(rating / 10)}/10</p>
            </div> */}

            <div className= "flex-1 text-black">
                <p className="nowrap text-ellipsis">{gameName}</p>
                <div>{Math.floor(rating / 10)}/10</div>
            </div>
        </div>
    )
}