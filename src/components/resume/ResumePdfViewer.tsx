import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

interface ResumePdfViewerProps {
  file: string;
}

export function ResumePdfViewer({ file }: ResumePdfViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setPageWidth(Math.floor(entry.contentRect.width));
    });

    resizeObserver.observe(container);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[1000px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
    >
      <Document
        file={file}
        externalLinkTarget="_blank"
        externalLinkRel="noopener noreferrer"
        loading={<div className="aspect-[612/792] animate-pulse bg-white/90" />}
        error={
          <a
            href={file}
            target="_blank"
            rel="noopener noreferrer"
            className="flex aspect-[612/792] items-center justify-center bg-white p-8 text-center text-sm text-black underline"
          >
            Open the interactive PDF
          </a>
        }
      >
        {pageWidth > 0 ? (
          <Page pageNumber={1} width={pageWidth} renderAnnotationLayer renderTextLayer={false} />
        ) : null}
      </Document>
    </div>
  );
}
