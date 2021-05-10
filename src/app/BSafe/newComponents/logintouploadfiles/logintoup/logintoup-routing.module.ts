import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogintouploadfilesComponent } from '../logintouploadfiles.component';

const routes: Routes = [
  {
    path:'',
    component:LogintouploadfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogintoupRoutingModule { }
