import { gamersService } from "../services/GamersService.js";

// NOTE this is a definition for the object, or a blueprint
export class GamersController {
  // NOTE the constructor method runs every time a class is constructed (built, newed up)
  constructor() {
    console.log("GamersController Loaded");
    console.log("Constructors are cool");
  }

  increaseScore(gamerName) {
    console.log('Increasing score from the controller, and the gamer name is ' + gamerName);
    gamersService.increaseScore(gamerName)
  }

}

// NOTE not accessible to rest of application because it is not exported
function whatUp() { }