import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit {

  @Input() inputData : string;

  test : number = 1; //데이터 바인딩 

  constructor() { 
    
    // setInterval(() =>{ //비동기 

    //   this.test ++;

    // }, 1000)

    console.log(this.inputData)


  }

  

  ngOnInit(): void {
    


  }

}
