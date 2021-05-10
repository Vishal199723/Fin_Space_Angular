import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogintoupRoutingModule } from './logintoup-routing.module';
import { LogintouploadfilesComponent } from '../logintouploadfiles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LogintouploadfilesComponent],
  imports: [
    CommonModule,
    LogintoupRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LogintoupModule { }
