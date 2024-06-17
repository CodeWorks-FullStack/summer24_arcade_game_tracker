import { Pop } from "../utils/Pop.js"

// Public
export class HomeController {
  constructor() {
    console.log('This is the Home Controller')
  }

  // This is a method, or a function that exists on an object
  testButton() {
    Pop.success('The button Works 😎')
  }
}