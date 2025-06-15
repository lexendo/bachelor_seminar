import { Component } from '@angular/core';
import { PdfViewerModule, PDFDocumentProxy } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-texts',
  standalone: false,
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.css']
})
export class TextsComponent {
  page = 1;
  totalPages = 0;

  pdfLoaded(pdf: PDFDocumentProxy) {
    this.totalPages = pdf.numPages;
  }

  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
    }
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
    }
  }
  onPageChange(pageNumber: number) {
    this.page = pageNumber;
  }
}
