'use client'
import { React,useState } from 'react';

export default function GameView(thumbnail, rating, numRatings, description){
    var [openDesc, setOpenDesc] = useState(false);
    const imageUrl = `https://images.igdb.com/igdb/image/upload/t_720p/${thumbnail}.jpg`;

    return(
        <div className="bg-contrast flex-col w-9/12 my-20 mx-auto p-10 rounded-md">

            <div className="flex-2 flex w-full h-full">

                <div className="flex-1 flex gap-10 my-10">
            
                    <img className="flex-3 object-cover object-top overflow-hidden rounded-md" src={ thumbnail ? imageUrl : "https://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"}/>
                    <div className="flex-1 bg-offWhite text-black h-full min-h-50 ">
                        <div>Rating: {Math.floor(rating/10)}/10 </div>
                        <div>ReviewCount: {numRatings}</div>
                        
                        {/* <div className="5xl">Description</div>
                        <div className="overflow-hidden text-ellipsis w-full h-full max-h-60">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ornare diam nec ullamcorper. Cras vel vulputate nunc, id congue felis. Suspendisse id arcu justo. Aliquam et orci a odio vestibulum pulvinar. Praesent semper vulputate ultricies. Nullam non mattis purus. Nam convallis nisi vitae massa euismod tristique. Praesent viverra, libero at consequat aliquet, purus sem facilisis nunc, et iaculis lorem enim a nunc. Mauris bibendum blandit mi, sit amet porttitor arcu condimentum a. In sit amet elit ornare, volutpat nunc ut, feugiat quam. Nullam porta sit amet mauris in maximus. Integer in urna ante. Integer nec dapibus leo, a volutpat nisl. Nam eleifend feugiat magna, a pellentesque dolor accumsan id. Donec accumsan ligula ut mauris tempor, quis porta lacus fringilla. Mauris vulputate sit amet magna fermentum pretium. Nulla nec ante accumsan, vulputate lorem in, porta lacus. Aliquam id pulvinar tellus.</div>
                        <button onClick={()=>{setOpenDesc(openDesc ? false : true)}}>{openDesc ? "collapse" : "expand" }</button> */}
                    </div>
                </div>
            </div>
            <div className="flex-1 bg-blue-500">Description</div>
            
        </div>
    )
}
