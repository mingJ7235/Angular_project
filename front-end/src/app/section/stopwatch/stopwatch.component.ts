import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'Init welcome'; 

  commandText : string = '';

  constructor() { }

  startTime($event : any) {

    this.present = $event;
    //console.log(time)
  }

  

  ngOnInit(): void {
  }

}
