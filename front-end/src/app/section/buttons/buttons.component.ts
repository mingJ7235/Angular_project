import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  count : number = 0;

  constructor() { 

  }

  // test($event:MouseEvent) { //ts이기때문에 MouseEvent라는 타입으로 가능하다. 
    
  //   console.log('test')
  //   console.log($event)
  // }
  start () {
    this.count ++;
  }

  ngOnInit(): void {
  }

}
