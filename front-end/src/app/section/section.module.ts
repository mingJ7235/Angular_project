import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './stopwatch/time-display/time-display.component';
import { ButtonsComponent } from './stopwatch/buttons/buttons.component';
import { StopwatchModule } from './stopwatch/stopwatch.module';
import { RouterModule, Routes } from '@angular/router';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ClockComponent } from './clock/clock.component';


  const routes : Routes = [
    {
      path : 'stopwatch', //path값이 stopwatch일때 StopwatchComponent를 가져와라! 라는 의미임
      component : StopwatchComponent
    },
    {
      path : 'clock',
      component : ClockComponent
    }
  ]



@NgModule({
  declarations: [
    SectionComponent,
    ClockComponent,
    
  ],

  exports:[
    SectionComponent,
    RouterModule
  ],

  imports: [
    CommonModule,
    StopwatchModule,

    RouterModule.forChild(routes)
  ]
})
export class SectionModule { }
