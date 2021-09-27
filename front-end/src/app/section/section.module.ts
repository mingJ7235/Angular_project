import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section.component';
import { TimeDisplayComponent } from './time-display/time-display.component';
import { ButtonsComponent } from './buttons/buttons.component';



@NgModule({
  declarations: [
    SectionComponent,
    TimeDisplayComponent,
    ButtonsComponent
  ],

  exports:[
    SectionComponent,
  ],

  imports: [
    CommonModule
  ]
})
export class SectionModule { }
