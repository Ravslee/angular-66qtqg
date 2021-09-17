import { Component,OnInit } from '@angular/core';
import {DataService} from './data.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  data
  constructor(public dataService:DataService){}
  ngOnInit()
  {
    this.dataService.getData(0).subscribe(res=>this.data=res)
  }
}
