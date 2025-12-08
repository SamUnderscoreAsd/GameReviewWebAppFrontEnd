
export async function getGameDetails(requestType, category) {
    console.log('category is: ' + category);
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
      console.log(data);
      return data;
    } catch (e) {
      console.error(e);
    }
  };