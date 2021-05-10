import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileuploadRoutingModule } from './fileupload-routing.module';
import { UploadfileforrequestComponent } from '../uploadfileforrequest.component';

@NgModule({
  declarations: [UploadfileforrequestComponent],
  imports: [
    CommonModule,
    FileuploadRoutingModule
  ]
})
export class FileuploadModule { }
