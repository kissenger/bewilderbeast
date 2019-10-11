import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

  public itemData = [{}];
  public itemName = '';
  public itemDesc = '';
  private myService;

  constructor(
    private dataService: DataService,
    private router: Router
    ) { }

  ngOnInit() {

    // listen to data coming from other components
    this.myService = this.dataService.fromListToDetails.subscribe( (index) => {

      // reset objects otherwise if data is missing it will show last item's data
      this.itemName = '';
      this.itemDesc = '';
      this.itemData = [{}];

      // loop through object, strip out name and desc
      Object.entries(this.dataService.database[index]).forEach( ([key, val]) => {
        if ( key === 'name') { this.itemName = val.toString(); }
        else if ( key === 'description' ) { this.itemDesc = val.toString(); }
        else { this.itemData[0][key] = val }
      });

      // debug
      // console.log(this.itemData[0]);
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

  // getDataList(i) {
    
  //   const data = this.dataService.database[i];
  //   delete data['name'];
  //   delete data['description'];

  //   return [data];

  // }
}
