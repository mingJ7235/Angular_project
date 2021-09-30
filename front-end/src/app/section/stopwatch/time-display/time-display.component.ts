import { Component, OnInit, Input, SimpleChanges} from '@angular/core';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: [
    './time-display.component.scss',
    '../stopwatch.component.scss'

  ],
  providers: [
    //PageToggleService
  ]
})
export class TimeDisplayComponent implements OnInit{

  @Input() inputData :any;

  min : number = 0;
  sec : number = 0;
  ms : number = 0 ;

  timeInterval : any;

  constructor(
    // private @Input() inputData : string
    public pageToggleService : PageToggleService
  ) { 
    // setInterval(() =>{ //비동기 
    //   this.test ++;
    // }, 1000)
    //console.log(this.inputData)

  }

  timesStart () {

    //this.pageToggleService.plusCount();

    this.timeStop();
    this.timeInterval = setInterval(() => {
      this.ms ++;
      if(this.ms >= 100) {
        this.ms = 0;
        this.sec ++;
        if(this.sec >= 60) {
          this.sec = 0;
          this.min ++;
        }
      }
    }, 10)


  }

  timeStop () {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec =0;
    this.min =0;
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

  /**
   * Angular 의 생명주기
   * 8개의 hook methods
   * 
   */

  ngOnChanges(changes: SimpleChanges) {
    /**
     * 속성 바인딩.
     * 부모로부터 가져오는 값 (input)
     * 외부에서 들어오는 값들에 대해 담당함.
     * 즉, 변경이 되는 값에 대해서 인식하여 반응함. 
     * 변형이 이루어졌을 때 체크한다. 
     * 데이터가 가장 우선적으로 시점에서 파악이되기에
     * OnChanges가 가장 먼저 실행되는 것. 
     * 즉, 바인딩된 데이터! 
     */
    console.log('ng on changes')
    for (let propName in changes) {
      console.log(changes)
    }
  }

  ngOnInit(): void {
    /**
     * 컴포넌트가 불어와질때, 초기화가 될대 반응하는 메소드 
     * 컴포넌트가 가장 처음 시작될때 반응함 
     * 한번 생성되고 한번 불려지고는 불려지지 않는다. 
     * 컴포넌트 초기화할때 값을 준비할때 사용이된다. 
     */
    console.log('ng on init')
  }

  ngDoCheck() {
    /**
     * check라고 이름 붙여진 메소드는 컴포넌트 내에서 
     * 움직임, 데이터 변동에 대해서 감지하여 로직을 실행한다.
     * 여러번 불릴 수 있다. 
     * 
     * ** init은 최초 한번만 불러와진다. 
     */
    console.log('ng do check')
  }

  ngAfterContentInit() {
    /**
     * content : transclude의 지점을 이야기한다. 
     * 외부로부터 들어온것들을 랜더링해야하기때문에
     * 자기 자신을 다 만들기 전에 외부로 부터 들어오는 content를
     * 받아오는 ngAfterContent 메소드가 실행되는 것임. 
     */
    console.log('ng afger content init')
  }

  ngAfterContentChecked() {
    console.log('ng after content checked')
  }

  ngAfterViewInit() {
    /**
     * view는 content와 달리, 모든 컴포넌트를 랜더링한 후에 view 랜더링
     * 그렇기에, 부모의 view 는 자식의 모든 부분이 다 랜더링된 후에,
     * ngAfterViewInit() 이 불러오게된다. 
     */
    console.log('ng after view init')
  }

  ngAfterViewChecked() {
    console.log('ng after view checked')
  }

  ngOnDestroy() {
    console.log ('ng on destroy')
  }

}
