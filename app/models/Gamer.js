export class Gamer {
  name = ''
  score = 0

  constructor(gamerName) {
    this.name = gamerName
  }

  // NOTE a getter must return a value, and it cannot have any parameters and is accessed like it is a normal property on the object
  get gamerCardHTMLTemplate() {
    return `
    <div class="col-12 col-md-4">
      <div
        class="d-flex gap-3 align-items-center justify-content-between border border-dark border-1 rounded mb-3 p-2">
        <p class="mb-0 text-capitalize">${this.name}</p>
        <p class="mb-0">Arcade Games Won: ${this.score}</p>
        <button onclick="app.GamersController.increaseScore('${this.name}')" class="btn btn-outline-success">+</button>
      </div>
    </div>
    `
  }
}