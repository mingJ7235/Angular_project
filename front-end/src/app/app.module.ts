import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SectionComponent } from './section/section.component';
import { TimeDisplayComponent } from './section/time-display/time-display.component';
import { ButtonsComponent } from './section/buttons/buttons.component';
import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({ //데코레이터. 즉 장식자. 
  declarations: [ //컴포넌트의 선언. 즉 이부분이 없다면 코드를 안쓴것과 마찬가지다. 하나의 의존관리 시스템처럼 관리된다. 의존성주입 (DI)
    AppComponent,
    
  ],

  imports: [ //다른 모듈들이 들어옴
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SectionModule

  ],
  providers: [],
  bootstrap: [AppComponent] //처음 실행할 컴포넌트 
})
export class AppModule { }
