import { EventEmitter, Injectable } from '@angular/core';
import { Dragons } from './data-dragons.model';
import { Animals } from './data-animals.model';
import { Router } from '@angular/router';

/**
 *
 * Facilitates data exchange between components
 *
 */

@Injectable()
export class DataService {

  public fromListToDetails = new EventEmitter();
  public database;
  public databaseLength;
  public activeItem = 0;
  public baseUrl: string;

  constructor(
    private dragons: Dragons,
    private animals: Animals,
    private router: Router
  ) { }

  initialise() {
      this.baseUrl = this.router.url.split('/')[1];
      if ( this.baseUrl === 'dragons' ) { this.database = this.dragons.database; }
      if ( this.baseUrl === 'animals' ) { this.database = this.animals.database; }
      this.databaseLength = this.database.length;
  }


}
