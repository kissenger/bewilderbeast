import { EventEmitter, Injectable } from '@angular/core';
 // import { seedrandom } from 'seedrandom';

/**
 *
 * Facilitates data exchange between components
 *
 */

@Injectable()
export class DataService {

  fromListToDetails = new EventEmitter();

  // activeDragon(dragonIndex) {
  //   this.activeDragon = dragonIndex;
  // }

}
