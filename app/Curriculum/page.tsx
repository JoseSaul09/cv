"use client";
import { useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

// Configura la ruta del worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function Curriculum(){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-secundario">
            <h1 className="text-3xl font-bold mb-6">Mi Currículum</h1>
            <div className="border shadow-lg">
                <Document file="/Curriculum.pdf">
                <Page pageNumber={1} />
                </Document>
            </div>
        </div>
    );
}