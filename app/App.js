import { GamersController } from './controllers/GamersController.js';
import { router } from './router-config.js';

// NOTE entry point to our application javascript code
// REVIEW we probably never need to come in here to change code

class App {

  router = router


  init() {
    this.router.init(app)
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
