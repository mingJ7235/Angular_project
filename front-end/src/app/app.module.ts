import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { SectionModule } from './section/section.module';

@NgModule({ //데코레이터. 즉 장식자. 
  declarations: [ //컴포넌트의 선언. 즉 이부분이 없다면 코드를 안쓴것과 마찬가지다. 하나의 의존관리 시스템처럼 관리된다. 의존성주입 (DI)
    AppComponent,
    
  ],

  imports: [ //다른 모듈들이 들어옴
    BrowserModule,
    AppRoutingModule, //라우팅 모듈. 라우팅에 대한 부분을 모아둔 모듈. 
    LayoutModule,
    SectionModule

  ],
  providers: [],
  bootstrap: [AppComponent] //처음 실행할 컴포넌트 
})
export class AppModule { }
