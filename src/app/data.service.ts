import { EventEmitter, Injectable } from '@angular/core';

/**
 *
 * Facilitates data exchange between components
 *
 */

@Injectable()
export class DataService {

  fromListToDetails = new EventEmitter();

}
