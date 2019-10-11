import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(
  ) { }

  ngOnInit() {
    
  }


  ngOnDestroy() {
    // kill the service when we navigate to another page
    // this.myService.unsubscribe();
  }
}
