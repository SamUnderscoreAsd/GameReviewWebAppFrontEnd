import { React } from 'react'

export default function GameCard({gameName, rating, thumbnail}){
    
    return (
        <div className="bg-slate-400 m-5 w-[12.5rem] h-[20rem] rounded-md items-center content-center shadow-black shadow-lg overflow-hidden relative hover:scale-105 hover:transition-transform hover:duration-300">
            <img className="select-none pointer-events-none w-full h-full object-cover " src={thumbnail}/>
            <div className='select-none absolute top-0 left-0 right-0 items-center content-start'>
                <p className='text-white text-2xl'>{gameName}</p>
            </div>
            <div className="relative bottom-12 select-none">
                <p className="text-white text-5xl">{rating}/10</p>
            </div>
        </div>
    )
}