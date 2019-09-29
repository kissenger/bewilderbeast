import { Component, OnInit, OnDestroy, AfterContentInit } from '@angular/core';
import { DataService } from '../../data.service';
import { DatabaseData } from '../../database.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterContentInit {

  private dragonData;

  constructor(
    private dataService: DataService,
    private databaseData: DatabaseData) { }

  ngOnInit() {
    // console.log(Object.entries(this.dragonData));
    this.dragonData = this.databaseData.loadDB();
    console.log(this.dragonData[0]);
    this.dataService.fromListToDetails.emit(this.dragonData[0]);
  }

  ngAfterContentInit() {
    this.dataService.fromListToDetails.emit(this.dragonData[0]);
  }

  onItemClick(dragonName) {
    this.dataService.fromListToDetails.emit(this.getDragonData(dragonName));
  }

  getDragonData(dragonName) {

    for ( const dragon of this.dragonData) {
      if (dragon.name === dragonName) {
        return dragon; }
    }
  }

}
