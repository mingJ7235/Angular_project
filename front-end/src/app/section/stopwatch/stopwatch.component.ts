import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'Init welcome'; 

  routingCount : number = 0;

  commandText : string = '';

  constructor(
    private router: Router
  
    ) { }

  
  goClock() {
    //router를 통해서 url 즉, /clock으로 보내겠다.!
    this.router.navigateByUrl('/clock')
  }
  
  startTime($event : any) {

  this.present = $event;
  //console.log(time)
  }



  

  ngOnInit(): void {
  }

}
