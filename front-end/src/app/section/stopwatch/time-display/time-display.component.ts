import { Component, OnInit, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.scss']
})
export class TimeDisplayComponent implements OnInit{

  @Input() inputData :any;

  min : number = 0;
  sec : number = 0;
  ms : number = 0 ;

  timeInterval : any;

  constructor() { 
    // setInterval(() =>{ //비동기 
    //   this.test ++;
    // }, 1000)
    //console.log(this.inputData)

  }

  timesStart () {

    this.timeInterval = setInterval(() => {
      this.ms ++;
    }, 10)


  }

  timeStop () {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
  }

  
  // ngOnChanges(changes :SimpleChanges) {
  //   console.log (changes)
  //   for (let propName in changes) {
  //     if(propName == 'inputData' ) {

  //       let choice = changes[propName].currentValue;

  //       switch(choice) {
  //         case 'start' :
  //           this.timesStart();
  //           break;

  //         case 'stop' :
  //           this.timeStop();
  //           break;

  //         case 'reset' :
  //           this.timeReset();
  //           break;

  //       }
  //     }
  //   }
  // }

  ngOnInit(): void {
  }

}
