import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.myService = this.dataService.fromListToDetails.subscribe( (dragonData) => {
      console.log(dragonData);
      // this.dragonName = dragonData.name;
      // this.dragonDesc = dragonData.description;
      this.dragonData = dragonData;
    });
  }

  ngOnDestroy() {
    this.myService.unsubscribe();
  }

}
