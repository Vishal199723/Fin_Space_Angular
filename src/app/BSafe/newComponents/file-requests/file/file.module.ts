import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileRoutingModule } from './file-routing.module';
import { FileRequestsComponent } from '../file-requests.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [FileRequestsComponent],
  imports: [
    CommonModule,
    FileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,

  ]
})
export class FileModule { }
