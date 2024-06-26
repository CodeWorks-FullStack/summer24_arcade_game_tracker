import { AppState } from "../AppState.js";
import { Gamer } from "../models/Gamer.js";

// NOTE do not export class definition for services, so no one can create a new Service
class GamersService {
  increaseScore(gamerName) {
    console.log('Increasing score, but from the service, and the name of the gamer is ' + gamerName);
    // NOTE You can access properties on the AppState by using dot notation 
    const gamers = AppState.gamers
    const foundGamer = gamers.find((gamer) => gamer.name == gamerName)
    foundGamer.score++
    console.log(`${foundGamer.name}'s score is now ${foundGamer.score}`);
  }

  createNewGamer(gamerName) {
    const gamer = new Gamer(gamerName)
    console.log('created a gamer', gamer);
    const gamers = AppState.gamers
    gamers.push(gamer)
  }
}

// NOTE creates one single service that our application interacts with, (Singleton)
export const gamersService = new GamersService()