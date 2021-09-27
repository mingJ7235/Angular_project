import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [// 선언. 하나의 컴포넌트들은 하나의 ㄴNgModule에 속해야 한다. 
    TestComponent
  ],
  exports:[
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
