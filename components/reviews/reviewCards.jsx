

export function ReviewCard({date, reviewContent, reviewScore, username}){
    

    return(
        <div className="text-black w-full">
            <div className="bg-black w-full h-0.5 mt-5">.</div>
            <div className="flex justify-between">
                <div className="text-3xl">Score: {reviewScore}</div>
                <div className="Text-xl">
                    <div>By: {username}</div>
                    <div>Created: {date}</div>
                </div>
            </div>
            <div className="w-fit">{reviewContent}</div>

        </div>
    );
}