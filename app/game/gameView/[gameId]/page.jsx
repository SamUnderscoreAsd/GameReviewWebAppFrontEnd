'use client'
import { React,useEffect,useState } from 'react';
import { getGameDetails, getReviews, createReviews } from '@/app/services/api';
import { useParams } from 'next/navigation';
import { ReviewDisplay } from '@/components/reviews/reviewDisplay';
import Editor, {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnStrikeThrough,
  BtnBulletList,
  BtnNumberedList,
  BtnLink,
  Toolbar,
} from "react-simple-wysiwyg";

export default function GameView(){
    const [openDesc, setOpenDesc] = useState(false);
    const [gameInfo, setGameInfo] = useState(null);
    const [reviews, setReviews] = useState(null);
    const [currentReview, setCurrentReview] = useState(null);
    const [loading, setLoading] = useState(true);
    const gameId = useParams().gameId; 

    useEffect(()=>{

        async function gameDetails (){
        
            try{
                setLoading(true);
                const gameData = await getGameDetails('detail', gameId);
                const reviewData = await getReviews('games',gameId);
                setGameInfo(gameData);
                setReviews(reviewData);
            }
            catch(e){
                console.log("Failed to get game details\n" + gameInfo)
                console.error(e);
            }finally{
                setLoading(false);
            }

            
        };

        if(gameId){
            gameDetails();
        }
    }, [gameId]);

    if(loading) return<div className="text-black text-center justify-center text-4xl w-full h-screen">Loading Game Details...</div>

    const onSubmitHandler = async (e)=>{
        await createReviews(document.cookie.UserId, gameId, currentReview, 10);

        console.log(currentReview);

    }

    return (
      <div className=" text-black bg-contrast flex-col w-9/12 my-20 mx-auto p-10 rounded-md">
        <div className="text-4xl">{gameInfo[0].name}</div>
        <div className="flex-2 flex w-full h-full">
          <div className="flex-1 flex gap-10 my-10">
            <img
              className="flex-3 object-cover object-top overflow-hidden rounded-md"
              src={
                gameInfo[0].cover
                  ? `https://images.igdb.com/igdb/image/upload/t_cover_big/${gameInfo[0].cover.image_id}.jpg`
                  : "https://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png"
              }
            />
            <div className="flex-1 bg-offWhite h-full min-h-50 p-5 rounded-md">
              <div className="text-2xl">
                Rating: {Math.floor(gameInfo[0].rating / 10)}/10{" "}
              </div>
              <div className="text-2xl">
                Review Count: {gameInfo[0].rating_count}
              </div>
              <div className="bg-black w-full h-0.5 mt-5">.</div>
              <div className="text-2xl">Description</div>
              <div className="overflow-hidden text-ellipsis w-full h-full max-h-60">
                {gameInfo[0].summary}
                <button
                  className="hover:underline"
                  onClick={() => {
                    setOpenDesc(openDesc ? false : true);
                  }}
                >
                  {openDesc ? "collapse" : "expand"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-offWhite p-5 rounded-md">
          <div className="text-3xl mb-5">Reviews</div>
          <form onSubmit={onSubmitHandler}>
            <div className="bg-offWhite">
              <Editor value={currentReview} onChange={(e) => setCurrentReview(e.target.value)} placeholder='Write your review here!'>
                <Toolbar>
                  <BtnBold />
                  <BtnItalic />
                  <BtnUnderline />
                  <BtnStrikeThrough />
                  <BtnBulletList />
                  <BtnNumberedList />
                  <BtnLink />
                </Toolbar>
              </Editor>
            </div>

            <button className="bg-blue-500 p-3 mb-3 text-center rounded-md hover:bg-blue-600" type="submit">
              Submit
            </button>
          </form>
          <ReviewDisplay reviewList={reviews} />
        </div>
      </div>
    );
}
