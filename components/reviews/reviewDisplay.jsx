import { ReviewCard } from "./reviewCards";


export function ReviewDisplay({reviewList}){

    if(reviewList.length <= 0){
        return(
            <div className="text-center text-black text-2xl my-5">
                Be the First to leave a review!
            </div>
        );
    }else{
        reviewList.sort((a,b)=>new Date(b.dateCreated) - new Date(a.dateCreated));
        //Javascript's sort function requires you to create a comparison function between two of the to-be-sorted values
        return(
            reviewList.map((review,index)=>{
                return(
                <div key={index}>
                  <ReviewCard
                    date={new Date(review.dateCreated).toLocaleDateString()}
                    reviewScore={review.reviewScore}
                    reviewContent={review.review}
                    username={review.username}
                  />
                </div>
                )
            }) 
        );
    }

}
