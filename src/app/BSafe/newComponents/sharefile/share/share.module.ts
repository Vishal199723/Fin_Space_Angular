import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { SharefileComponent } from '../sharefile.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SharefileComponent],
  imports: [
    CommonModule,
    ShareRoutingModule,
    NgxDocViewerModule,
    PdfViewerModule,
    NgbModule
  ]
})
export class ShareModule { }
