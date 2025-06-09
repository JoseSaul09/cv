'use client'; // si estás en Next.js App Router

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

export default function PDFViewer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-secundario">
    <h1 className="text-3xl font-bold mb-6">Mi Currículum</h1>
      <Document file="/docs/Curriculum.pdf" onLoadError={console.error}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
}
