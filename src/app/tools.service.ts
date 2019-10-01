import { Injectable } from '@angular/core';
import { Dragons } from 'src/app/dragons.model';

@Injectable()
export class ToolsService {

  constructor(
    private dragons: Dragons
   ) {}

  /**
   * Create random number seeded with number that changes every day
   * @param nDragons number of dragons (ie upper bound of random number to return)
   */
  getRandomNumber(nDragons) {

    const millis = Date.now();
    const days = millis / 1000 / 60 / 60 / 24;
    const randomNumber = new Math.seedrandom( Math.round(days) );

    return Math.round( Math.round( randomNumber() * nDragons ) );

  }

  getDragonOfTheDay() {
    const dragonNumber = this.getRandomNumber( this.dragons.numberOfDragons );
    return {
      name: this.dragons.database[ dragonNumber ].name,
      index: dragonNumber
    };
  }

}
