import { Component } from '@angular/core';

@Component({ //export되는 클래스는 컴포넌트로 만들어주는 api
  selector: 'app-root', //selector : 컴포넌트의 태그 네임 
  templateUrl: './app.component.html', // html 파일을 말한다. 
  styleUrls: ['./app.component.scss'] //css 값들이 들어감 
})
export class AppComponent {
  title = 'front-end';
}
