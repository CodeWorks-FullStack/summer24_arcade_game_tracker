import { AppState } from "../AppState.js";
import { gamersService } from "../services/GamersService.js";

// NOTE this is a definition for the object, or a blueprint
export class GamersController {
  // NOTE the constructor method runs every time a class is constructed (built, newed up)
  // NOTE the constructors for our controllers generally run on page load
  constructor() {
    console.log("GamersController Loaded");
    console.log("Constructors are cool");
    // similar to calling function at the bottom of you js sheet
    this.drawGamers()
  }

  increaseScore(gamerName) {
    console.log('Increasing score from the controller, and the gamer name is ' + gamerName);
    gamersService.increaseScore(gamerName)
    // NOTE this keyword references another property on the same object
    this.drawGamers()
  }

  createNewGamer() {
    // NOTE do not refresh the page
    event.preventDefault()
    console.log('creating gamer!');
    const form = event.target
    console.log('got the HTML form', form);
    // @ts-ignore
    const nameFromForm = form.gamerName.value
    console.log('got the name from the HTML form: ' + nameFromForm);

    gamersService.createNewGamer(nameFromForm)

    this.drawGamers()

    // @ts-ignore
    form.reset()
  }

  drawGamers() {
    const gamerCardsElement = document.getElementById('gamerCards')
    let innerHTMLString = ''
    const gamers = AppState.gamers
    gamers.forEach((gamer) => innerHTMLString += gamer.gamerCardHTMLTemplate)
    gamerCardsElement.innerHTML = innerHTMLString
  }

}

// NOTE not accessible to rest of application because it is not exported
function whatUp() { }