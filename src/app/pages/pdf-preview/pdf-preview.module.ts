import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfPreviewComponent } from './pdf-preview.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PdfPreviewComponent
  ],
  imports: [
    CommonModule ,
    PdfViewerModule,
    RouterModule.forChild([
      {
        path: '',
        component: PdfPreviewComponent,
      },
    ]),
  ]
})
export class PdfPreviewModule { }
