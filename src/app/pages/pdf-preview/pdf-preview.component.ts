import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as pdfjsLib from 'pdfjs-dist';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.scss'],
})
export class PdfPreviewComponent implements OnInit {
  pdfSrc: any;
  basLink = 'http://hamad_api.accessline.ps';

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((param) => {
      this.getPdfSrcFromUrl(environment.FileUrl + param.get('link'));
      console.log('pdfSrc', this.pdfSrc);
    });
  }
  async getPdfSrcFromUrl(url: string): Promise<void> {
    const response = await fetch(url);
    const blob = await response.blob();
    const base64data = await this.convertBlobToBase64(blob);
    this.pdfSrc = `data:application/pdf;base64,${base64data}`;
  }

  async convertBlobToBase64(blob: Blob): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }
}
