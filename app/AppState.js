import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

// REVIEW AppState is a object containing all important data for our application
class ObservableAppState extends EventEmitter {
  // REVIEW inside of these curly braces is where we declare Application Data (global variables)

  /**@type {import('./models/Example.js').Example[]} */
  examples = []
}

// NOTE export makes this AppState variable available to other javascript files (modules)
export const AppState = createObservableProxy(new ObservableAppState())