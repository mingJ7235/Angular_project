import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  //count : number = 0;

  //Output() 데코레이터는 컴포넌트의 이벤트를 발생시킬 수 있는 형태를 취하도록 도와준다. 
  @Output() clickEventSection = new EventEmitter(); //제네릭을 사용하여 emit할 데이터의 type을 지정할 수 있다. 
  

  constructor() { 

  }

  // test($event:MouseEvent) { //ts이기때문에 MouseEvent라는 타입으로 가능하다. 
    
  //   console.log('test')
  //   console.log($event)
  // }
  start () {
    //this.count ++;
    this.clickEventSection.emit('change'); //부모컴퍼넌트에게 정보를 전달하는 목적. 데이터를 전달하기 위해서 emit함수의 매개변수에 데이터를 넣으면 된다.  
  }

  ngOnInit(): void {
  }

}
