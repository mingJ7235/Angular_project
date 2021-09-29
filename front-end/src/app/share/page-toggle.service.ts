import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


/**
 * service 는 @injectable이 꾸며준다. 
 */
@Injectable()
export class PageToggleService {

  public routingCount : number = 0;

  constructor(
    private router : Router
  ) { }

  goPage(target:string){
    this.routingCount ++;
    this.router.navigateByUrl(target);

  }
}
