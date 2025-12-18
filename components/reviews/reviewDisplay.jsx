import { ReviewCard } from "./reviewCards";


export function ReviewDisplay({reviewList}){
    console.log(reviewList);
    console.log(reviewList.length)

    if(reviewList.length <= 0){
        return(
            <div>
                Be the First to leave a review!
            </div>
        );
    }else{
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