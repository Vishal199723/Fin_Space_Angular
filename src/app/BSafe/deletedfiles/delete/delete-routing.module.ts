import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletedfilesComponent } from '../deletedfiles.component';

const routes: Routes = [
  {
    path:'',
    component:DeletedfilesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteRoutingModule { }
