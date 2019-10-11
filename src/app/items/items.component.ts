import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) {

  }

  ngOnInit() {
    // not ideal to load data every time, but testing for it doesnt seem to work
    this.dataService.initialise();
  }

}
