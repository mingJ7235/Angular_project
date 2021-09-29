import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
import * as moment from 'moment'; //시간관련해서는 가장 잘 만들어진 라이브러리다. 
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  timeString : any;

  constructor(
    private router : Router,
    //private pageToggleService : PageToggleService
    // private timeString : string
  ) { 

    // setInterval(() =>{

    // },1000)

    //RXJS 문법. 
    // interval(1000)
    //   .pipe(map(() =>{  //pipe : 앵귤러의 문법 
    //     return moment().format('YYYY-MM-DD HH:mm:ss')
    //   }))
    //   .subscribe(data => {
    //     this.timeString = data;
    //   })
      interval(1000)
        .pipe(map(() =>{
          return moment().format('YYYY-MM-DD HH:mm:ss')
        }))
        .subscribe(data =>{
          this.timeString = data;
        })

  }
  /**
   * component가 불릴때마다, 변화가있으면 함수가 계속 불리게된다. 
   */
  //메소드로 콜을 계속 부르게 된다. 
  // 이런 방식 말고, RXJS 방식을 사용한다. 
  // getCurrentTime () {
  //   let result = moment().format('YYYY-MM-DD HH:mm:ss')
  //   return result
  // }

  goStopwatch() {
    this.router.navigateByUrl('/stopwatch')
    //this.pageToggleService.goPage('/stopwatch')
    //라우팅을 사용하여 페이지 이동 
  }

  ngOnInit(): void {
  }

}
