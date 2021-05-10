import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatmoduleRoutingModule } from './chatmodule-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChatComponent } from '../chat.component';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    ChatmoduleRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ChatmoduleModule { }
