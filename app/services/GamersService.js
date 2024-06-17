
// NOTE do not export class definition for services, so no one can create a new Service
class GamersService {
  increaseScore() {
    console.log('Increasing score, but from the service');
  }
}

// NOTE creates one single service that our application interacts with, (Singleton)
export const gamersService = new GamersService()