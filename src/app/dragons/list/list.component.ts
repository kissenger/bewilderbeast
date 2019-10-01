import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Dragons } from '../../dragons.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterContentInit {

  private dragonData;

  constructor(
    private dataService: DataService,
    private dragons: Dragons
    ) { }

  ngOnInit() {

    this.dragonData = this.dragons.database;

  }

  /**
   * ngAfterContentInit()
   * Runs after Angular projects external content into the component's view / the view that a directive is in.
   * see https://angular.io/guide/lifecycle-hooks#onchanges
   * Need to run here to ensure that list is fully initialised before emitting to details
   */
  ngAfterContentInit() {
    // gets the active dragon from dragons class - this deals with possibility of
    // coming in raw (index 0 required) or from dragon of the day (index variable)
    this.dataService.fromListToDetails.emit(this.dragons.activeDragon);
  }

  onItemClick(index) {
    this.dataService.fromListToDetails.emit(index);
  }

  getDragonData(dragonName) {

    for ( const dragon of this.dragonData) {
      if (dragon.name === dragonName) {
        return dragon; }
    }
  }

}
