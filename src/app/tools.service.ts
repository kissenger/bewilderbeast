import { Injectable } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Injectable()
export class ToolsService {

  constructor(
    private dataService: DataService
   ) {}

  /**
   * Returns ao object containing dragon name and index that changes depending on the day
   */
  getItemOfTheDay() {

    // gets a unique number for each day and uses this to seed PRNG
    const millis = Date.now();
    const days = Math.floor(millis / 1000 / 60 / 60 / 24);
    const itemIndex = Math.round(this.mulberry32( days ) * this.dataService.databaseLength) - 1;

    // returns an object containing dragon index and name
    return {
      name: this.dataService.database[itemIndex].name,
      index: itemIndex
    };
  }

  /**
   * Implementation of mulberry32 pseudo random number generator
   * https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
   * Retuns the number rather than a function
   * @param seed required seed
   * @return pseudo random number between 0 and 0.9999999
   */
  mulberry32(seed) {
  // tslint:disable:no-bitwise
  // lint rule disabled https://eslint.org/docs/user-guide/configuring

      let t = seed += 0x6D2B79F5;
      // tslint:disable:no-bitwise
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;

}


}
