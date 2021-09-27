import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  test : number = 1; //데이터 바인딩 

  constructor() { 

    setInterval(() =>{ //비동기 

      this.test ++;

    }, 1000)



  }

  ngOnInit(): void {
    


  }

}
