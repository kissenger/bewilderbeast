import { Component, OnInit, AfterContentInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterContentInit {

  private itemData;

  constructor(
    private dataService: DataService
    ) { }

  ngOnInit() {
    this.itemData = this.dataService.database;
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
    this.dataService.fromListToDetails.emit(this.dataService.activeItem);
  }

  onItemClick(index) {
    this.dataService.fromListToDetails.emit(index);
  }

  getItemData(itemName) {

    for ( const dragon of this.itemData) {
      if (dragon.name === itemName) {
        return dragon; }
    }
  }

}
