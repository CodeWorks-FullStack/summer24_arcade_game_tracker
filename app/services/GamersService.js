import { AppState } from "../AppState.js";

// NOTE do not export class definition for services, so no one can create a new Service
class GamersService {
  increaseScore() {
    console.log('Increasing score, but from the service');
    // NOTE You can access properties on the AppState by using dot notation 
    const gamers = AppState.gamers
    gamers[0].score++
    console.log('here are the gamer score', gamers[0].score);
  }
}

// NOTE creates one single service that our application interacts with, (Singleton)
export const gamersService = new GamersService()