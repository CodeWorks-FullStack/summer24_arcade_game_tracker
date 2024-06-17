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
    console.log('got the form', form);
    // @ts-ignore
    const nameFromForm = form.gamerName.value
    console.log('name from form: ' + nameFromForm);

    gamersService.createNewGamer(nameFromForm)

    this.drawGamers()
  }

  drawGamers() {
    const gamerCardsElement = document.getElementById('gamerCards')
    let innerHTMLString = ''
    const gamers = AppState.gamers
    gamers.forEach((gamer) => innerHTMLString += `
    <div class="col-12 col-md-4">
      <div
        class="d-flex gap-3 align-items-center justify-content-between border border-dark border-1 rounded mb-3 p-2">
        <p class="mb-0 text-capitalize">${gamer.name}</p>
        <p class="mb-0">Arcade Games Won: ${gamer.score}</p>
        <button onclick="app.GamersController.increaseScore('${gamer.name}')" class="btn btn-outline-success">+</button>
      </div>
    </div>
    `)
    gamerCardsElement.innerHTML = innerHTMLString
  }

}

// NOTE not accessible to rest of application because it is not exported
function whatUp() { }