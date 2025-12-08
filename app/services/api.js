
export async function getGameDetails(gameId) {
    //console.log('category is: ' + category);
    try {
      gameList = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body:JSON.stringify({
          category: category,
        })
      });
      
      let data = await gameList.json();
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };