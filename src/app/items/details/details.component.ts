import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public itemData;
  private myService;

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit() {

    // listen to data coming from other components
    this.myService = this.dataService.fromListToDetails.subscribe( (index) => {
      console.log(index);
      this.itemData = [this.dataService.database[index]];  // [] to get the interation in ngFor to work - don't really understand why
    });
  }

  returnZero() {
    // see note in html
    return 0;
  }

  ngOnDestroy() {
    // kill the service when we navigate to another page
    this.myService.unsubscribe();
  }

}
