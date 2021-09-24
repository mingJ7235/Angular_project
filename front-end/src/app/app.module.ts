import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({ //데코레이터. 즉 장식자. 
  declarations: [ //컴포넌트
    AppComponent,
    HelloComponent
  ],
  imports: [ //다른 모듈들이 들어옴
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] //처음 실행할 컴포넌트 
})
export class AppModule { }
