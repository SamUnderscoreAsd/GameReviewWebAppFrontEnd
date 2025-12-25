export const genre = {
    //PC: 2, //Point-and-click
    Fighting: 4,
    Shooters: 5,
    //MusicGames: 7,
    Platforming: 8,
    Puzzle: 9,
    Racing: 10,
    //RTS: 11, //Real Time Strategy
    RPG: 12, //Role-playing
    Simulator: 13,
    SportsGames: 14,
    Strategy: 15,
    //TBS: 16, //Turn-based strategy
    //Tactical: 24,
    //Trivia: 26,
    HackAndSlash: 25, //Hack and slash/Beat 'em up
    //Pinball: 30,
    Adventure: 31,
    Indie: 32,
    Arcade: 33,
    //VisualNovel: 34,
    //CardBoardGame: 35,
    //MOBA: 36,
  };

  export function getGenreKey(value) {
    return Object.keys(genre).find(key => genre[key] === value);
}
