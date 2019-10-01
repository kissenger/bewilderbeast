import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Dragons } from 'src/app/dragons.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public dragonDesc: string;
  private dragonName: string;
  public dragonData;
  private myService;

  constructor(
    private dataService: DataService,
    private dragons: Dragons) { }

  ngOnInit() {
    this.myService = this.dataService.fromListToDetails.subscribe( (index) => {
      this.dragonData = this.dragons.database[index];
    });
  }

  ngOnDestroy() {
    this.myService.unsubscribe();
  }

}
