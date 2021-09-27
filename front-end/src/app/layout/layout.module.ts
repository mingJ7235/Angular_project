import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';





@NgModule({
  declarations: [// 선언. 하나의 컴포넌트들은 하나의 ㄴNgModule에 속해야 한다. 
    HeaderComponent,
    FooterComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
