import { redirect } from "next/navigation";

export async function getGameDetails(requestType, category) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getGames`;
    var gameInfo;
    try {
      gameInfo = await fetch(url, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          requestType: requestType,
          value: category,
        })
      });
      
      let data = await gameInfo.json();
      //console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };
  
  export async function registerUser(username, email, password){

  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/createUser`;
    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          user: {
            username: username,
            email: email,
            password: password,
          },
        }),
      });

      const data = await response.json();

      if (response.ok){
        document.cookie = `SessionID=${data.sessionID}; max-age=604800; path=/; secure; samesite=strict`;
        console.log(data.message, "\nSending user to homepage")
        redirect("/");
      }
    } catch (e) {
      if (e.digest?.includes("NEXT_REDIRECT")) {
          throw e;
        }
      console.error(e);
    }
};

export async function login(username,password){
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`;

  try{
        const response = await fetch(url,{
            credentials: 'include',
            method: "POST",
            headers: {
                "Content-Type": "application/Json"
            },
            body: JSON.stringify({
                user: {
                    username : username,
                    password : password
                }
            }) 
        })

        const data = await response.json();

        if (data) {
            //meaning that if the use is properly authenticate
            document.cookie = `SessionID=${data.sessionID}; max-age=604800; path=/; secure; samesite=strict`;
            console.log(data + "\nSending user to home page");
            redirect("/");
        }
    }
    catch(e){
        if (e.digest?.includes("NEXT_REDIRECT")) {
          throw e;
        }
        console.error(e);
    }
}

export async function getReviews(requestType, id){
  var url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getReviews`;
  try{
    const data = await fetch(url, {
      method: "POST",
      cache: 'reload',
      credentials: "include",
      headers:{
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        requestType: requestType,
        id: id,
      })
    });

    return await data.json();
  }catch(e){
    console.error(e);
  };

};

export async function createReviews(id, gameId, review, reviewScore){
  var url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/createReview`;

  console.log('attempting to send the request for new review')
  try{
    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: 'include',
      body: JSON.stringify({
        user: {
          id: id,
        },
        gameId: gameId,
        review: review,
        reviewScore: reviewScore,
      }),
    });
    //console.log(data);
  }catch(e){
    console.error(e);
  };

};