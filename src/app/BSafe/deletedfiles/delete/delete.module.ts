import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteRoutingModule } from './delete-routing.module';
import { DeletedfilesComponent } from '../deletedfiles.component';

@NgModule({
  declarations: [DeletedfilesComponent],
  imports: [
    CommonModule,
    DeleteRoutingModule
  ]
})
export class DeleteModule { }
