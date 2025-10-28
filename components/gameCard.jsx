import { React } from 'react'

export default function GameCard(gameName){
    
    return (
        <div className="bg-slate-400 w-[12.5rem] h-[20rem] rounded-md items-center content-center shadow-black shadow-md overflow-hidden relative">
            <img className="w-full h-full object-cover " src='https://lazoo.org/wp-content/uploads/2023/05/Capuchin-JEP_5945-1024x731.jpg'/>
            <div className='absolute top-0 left-0 right-0 items-center content-start'>
                <h3 className="text-white">{gameName}</h3>
            </div>
        </div>
    )
}