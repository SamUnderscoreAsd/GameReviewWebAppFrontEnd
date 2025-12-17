import { redirect } from "next/navigation";

export async function getGameDetails(requestType, category) {
    const url = 'http://localhost:3001/api/getGames';
    var gameInfo;
    try {
      gameInfo = await fetch(url, {
        method: "POST",
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

  const url = "http://localhost:3001/api/createUser";
    try {
      const response = await fetch(url, {
        method: "POST",
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


      if (response.ok){
        console.log("response.ok = " + response.ok)
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
  try{
        const response = await fetch("http://localhost:3001/api/login",{
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
            //meaning that if the use is properly authenticated
            console.log(data + "Sending user to home page");
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
  var url = "http://localhost:3001/api/getReviews"
  try{
    const data = await fetch(url, {
      method: "POST",
      headers:{
        "Content-type": "application/json"
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