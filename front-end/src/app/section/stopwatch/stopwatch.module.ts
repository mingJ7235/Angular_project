import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { StopwatchComponent } from './stopwatch.component';
import { RouterModule } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';



@NgModule({
  declarations: [
    TimeDisplayComponent,
    ButtonsComponent,
    StopwatchComponent

  ],

  exports : [
    StopwatchComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  /**
   * injectable한 객체를 주입하는 첫번째 방법 
   * providers 에는 injectable한 객체들이 들어올 수 있다. 
   * module 계층에서의 provider 제공 
   * 
   * Declaration 되어있는 컴포넌트가 providers에 있는 인젝터를 찾는다. 
   * 모듈끼리도 자신이 속한 부모 모듈까지 찾아가서 providers를 찾는다. 
   */
  providers: [
    //PageToggleService
  ]
})
export class StopwatchModule { }
