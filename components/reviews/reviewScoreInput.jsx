import { FaStar } from "react-icons/fa6";
import { useState } from "react";

export function ReviewScoreInput({passDataToParent}){

    const rating = [1,2,3,4,5,6,7,8,9,10];
    const [reviewScore, setReviewScore] = useState(0);
    const updateScore = (e)=>{
        setReviewScore(rating[e]);
        passDataToParent(rating[e]);
    }

    return(
        <div className='flex'>
            {rating.map((value,index)=>{
                if(rating[index] <= reviewScore){
                    return <FaStar key={index} className="text-4xl text-yellow-500 " onClick={()=>updateScore(index)}/>        
                }
                else{
                    return <FaStar key={index} className="text-4xl hover:text-yellow-500 " onClick={()=>updateScore(index)}/>    
                }
            })}
            
        </div>
    );

}