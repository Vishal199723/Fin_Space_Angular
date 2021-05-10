import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadfileforrequestComponent } from '../uploadfileforrequest.component';

const routes: Routes = [
  {
    path:'',
    component:UploadfileforrequestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileuploadRoutingModule { }
