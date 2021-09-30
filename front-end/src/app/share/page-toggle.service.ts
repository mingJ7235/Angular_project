import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ClockComponent } from '../section/clock/clock.component';
import { StopwatchComponent } from '../section/stopwatch/stopwatch.component';
import { StopwatchModule } from '../section/stopwatch/stopwatch.module';


/**
 * service 는 @injectable이 꾸며준다. 
 */
@Injectable(
  //{
    /**
     * injecatble한 객체를 주입하는 세번째 방법 
     * 주입을 주입하는 곳에서 주입하는게 아니라,
     * Injectable 객체가 주인이되어서 주입 될 곳을 지정할 수 있다. 
     */
    //providedIn : StopwatchComponent//StopwatchModule (둘중 아무거나해도댐)
  //}
  {
    /**
     * 'root' 를 넣으면, root module에 인젝션해주는 것임. 
     * 앵귤러는 이렇게 인젝션하는 방법을 권장한다. 
     * 특정 이유가 아니라면 대부분의 서비스를 등록을 root로 등록하는 것이 일반적이다. 
     * 
     */
    providedIn : 'root'
  }
)
export class PageToggleService {

  public routingCount : number = 0;

  constructor(
    private router : Router
  ) { }

  plusCount () {
    this.routingCount ++;
  }

  goPage(target:string){
    this.routingCount ++;
    this.router.navigateByUrl(target);

  }
}
