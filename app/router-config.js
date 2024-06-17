import { ExamplesController } from "./controllers/ExamplesController.js";
import { GamersController } from "./controllers/GamersController.js";
import { HomeController } from "./controllers/HomeController.js";
import { Router } from "./utils/Router.js";

export const router = new Router([
  // Use first object today for page load stuff
  {
    path: '',
    // NOTE loads supplied Controllers when page loads, and makes them accessible to DOM 
    controllers: [GamersController],
    // NOTE change to empty string so we do not inject HTML on page load
    view: ''
  },
  {
    path: '#/about',
    view: 'app/views/AboutView.html'
  }
])