import { Gamer } from './models/Gamer.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

// REVIEW AppState is a object containing all important data for our application
class ObservableAppState extends EventEmitter {
  // REVIEW inside of these curly braces is where we declare Application Data (global variables)

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  gamers = [
    // {
    //   name: 'jeremy',
    //   score: 0
    // },
    // {
    //   name: 'mick',
    //   score: 0
    // },
    // {
    //   name: 'jake',
    //   score: 0
    // },
    new Gamer('jeremy'),
    new Gamer('mick'),
    new Gamer('jake'),
  ]
}

// NOTE export makes this AppState variable available to other javascript files (modules)
export const AppState = createObservableProxy(new ObservableAppState())