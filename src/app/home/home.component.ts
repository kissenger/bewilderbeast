import { Component, OnInit } from '@angular/core';
import { ToolsService } from '../tools.service';
import { Router } from '@angular/router';
import { Dragons } from '../dragons.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private dragonOfTheDay;
  constructor(
    private router: Router,
    private dragons: Dragons,
    private tools: ToolsService
  ) { }

  ngOnInit() {
    this.dragonOfTheDay = this.tools.getDragonOfTheDay();
  }

  /** rather than navigate to desired page through the url, use click to
   * send us to the required page, and save the target page in the data service
   * w'ell pick it up when the list component is initilised
   */
  onDOTDClick() {
    this.dragons.activeDragon = this.dragonOfTheDay.index;
    this.router.navigate(['dragons']);
  }

}
