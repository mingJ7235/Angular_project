import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from 'src/app/share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
  /**
   * injectable 객체를 주입하는 두번째 방법.
   * 컴포넌트에서 providers 를 통해 주입
   * 컴포넌트수준에서 생성된 인젝트는, 해당 컴포넌트와 자식컴포넌트에 한해서 사용가능
   * 인젝터는 providers를 먼저확인하고 DI를 해준다. 
   * 해당인젝터가 없으면 부모 컴포넌트로 가서 찾는다. 
   * 트리구조로 가서 root 까지 찾아가서 인젝터를 확인한다. 
   */
  providers : [
    //PageToggleService
  ]
})
export class StopwatchComponent implements OnInit {

  present = 'Init welcome'; 

  // routingCount : number = 0;

  commandText : string = '';

  constructor(
    private router: Router,
    public pageToggleService : PageToggleService
  
    ) { }
  

    // ngAfterContentInit() {
    //   /**
    //    * content : 
    //    */
    //   console.log('ng afger content init')
    // }
  
    // ngAfterContentChecked() {
    //   console.log('ng after content checked')
    // }
  
    // ngAfterViewInit() {
    //   console.log('ng after view init')
    // }
  
    // ngAfterViewChecked() {
    //   console.log('ng after view checked')
    // }  
  
  goClock() {
    //router를 통해서 url 즉, /clock으로 보내겠다.!
    //this.router.navigateByUrl('/clock')
    this.pageToggleService.goPage('/clock')
  }
  
  startTime($event : any) {

  this.present = $event;
  //console.log(time)
  }



  

  ngOnInit(): void {
  }

}
