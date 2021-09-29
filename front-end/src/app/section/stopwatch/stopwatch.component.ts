import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent implements OnInit {

  present = 'Init welcome'; 

  // routingCount : number = 0;

  commandText : string = '';

  constructor(
    private router: Router,
    private pageToggleService : PageToggleService
  
    ) { }

  
  goClock() {
    //router를 통해서 url 즉, /clock으로 보내겠다.!
    this.pageToggleService.goPage('/clock')
  }
  
  startTime($event : any) {

  this.present = $event;
  //console.log(time)
  }



  

  ngOnInit(): void {
  }

}
