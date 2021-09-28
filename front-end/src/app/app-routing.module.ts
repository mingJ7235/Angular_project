import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'stopwatch',
    pathMatch : 'full' //redirect를 시킬때 prefix는 앞에 접두사만 적용이되면 경로hit를 시키겠다는 것임. full로 하는 것이 권장된다. redirect시 필수 프로퍼티
                    /**
                     * https://domain.com/index 로 redirect로 할건데 prefix로 해놓으면 path 값에 따라 리다이렉트로 하겠다는것인데, full은 딱 적합하게 맞아야 redirect로 하겠다는 것이다. 
                     */
  },
  // {
  //   path: 'index',
  //   component : AppComponent
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
