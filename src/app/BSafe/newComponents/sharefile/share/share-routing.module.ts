import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharefileComponent } from '../sharefile.component';

const routes: Routes = [
  {
    path:'',
    component:SharefileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareRoutingModule { }
