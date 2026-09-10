"use client";

import React, { useEffect, useRef, useState } from "react";
import { Loader2, Upload, AlertCircle, FileText } from "lucide-react";
import { ExtractedSalary } from "../salaries/newUpload/data";

interface DocumentPreviewProps {
  zoom: number;
  docPage: number;
  editingPacket?: ExtractedSalary;
  pdfUrl?: string | null;
  onPageCountChange?: (totalPages: number) => void;
  onUploadNewPdf?: (file: File) => void;
}

export default function DocumentPreview({
  zoom,
  docPage,
  editingPacket,
  pdfUrl,
  onPageCountChange,
  onUploadNewPdf,
}: DocumentPreviewProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [pdfDoc, setPdfDoc] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [useNativeViewer, setUseNativeViewer] = useState(false);

  // Active PDF source: either user uploaded PDF URL or the generated sample PDF
  const activePdfSrc = pdfUrl || "/sample-payslip.pdf";

  // Load the PDF Document with pdfjs-dist dynamically in client
  useEffect(() => {
    let isCancelled = false;
    setLoading(true);

    const initPdf = async () => {
      try {
        const pdfjsLib = await import("pdfjs-dist");
        if (pdfjsLib.GlobalWorkerOptions) {
          pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
        }

        const loadingTask = (pdfjsLib as any).getDocument({
          url: activePdfSrc,
        });
        const doc = await loadingTask.promise;
        if (!isCancelled) {
          setPdfDoc(doc);
          if (onPageCountChange) {
            onPageCountChange(doc.numPages);
          }
          setLoading(false);
        }
      } catch (err) {
        console.warn("pdfjs-dist canvas loading error, falling back to native PDF embed:", err);
        if (!isCancelled) {
          setUseNativeViewer(true);
          setLoading(false);
        }
      }
    };

    initPdf();

    return () => {
      isCancelled = true;
    };
  }, [activePdfSrc, onPageCountChange]);

  // Render current page onto canvas
  useEffect(() => {
    if (!pdfDoc || useNativeViewer) return;

    let isCancelled = false;
    let renderTask: any = null;

    const renderCurrentPage = async () => {
      try {
        const pageNumber = Math.min(Math.max(1, docPage), pdfDoc.numPages);
        const page = await pdfDoc.getPage(pageNumber);
        if (isCancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        // Base resolution scaling + user zoom
        const scale = (zoom / 100) * 1.35;
        const viewport = page.getViewport({ scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        renderTask = page.render(renderContext);
        await renderTask.promise;
      } catch (err: any) {
        if (err?.name !== "RenderingCancelledException") {
          console.error("Canvas render error:", err);
        }
      }
    };

    renderCurrentPage();

    return () => {
      isCancelled = true;
      if (renderTask) {
        renderTask.cancel();
      }
    };
  }, [pdfDoc, docPage, zoom, useNativeViewer]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && onUploadNewPdf) {
      onUploadNewPdf(file);
    }
  };

  return (
    <div className="flex-1 overflow-auto p-4 md:p-6 flex flex-col items-center justify-start bg-slate-200/60 relative">
      {/* Hidden file input for uploading an alternate or new PDF */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf,application/pdf"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Top Banner info & Upload Action */}
      <div className="w-full max-w-[680px] flex items-center justify-between mb-3 px-1 text-xs">
        <div className="flex items-center gap-1.5 text-slate-600 font-semibold truncate">
          <FileText size={14} className="text-brand shrink-0" />
          <span className="truncate">
            {pdfUrl ? "Uploaded PDF Document" : "sample-payslip.pdf (Uploaded Cedolino)"}
          </span>
        </div>

        {onUploadNewPdf && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg border border-slate-300/80 shadow-xs transition-all cursor-pointer shrink-0 ml-2"
          >
            <Upload size={12} className="text-slate-500" />
            <span>Upload New PDF</span>
          </button>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex flex-col items-center justify-center min-h-[420px] text-slate-500 gap-3">
          <Loader2 size={32} className="animate-spin text-brand" />
          <p className="text-xs font-semibold">Loading uploaded PDF document...</p>
        </div>
      )}

      {/* PDF.js Canvas Rendering of Real Uploaded PDF */}
      {!loading && !useNativeViewer && (
        <div className="bg-white rounded-lg shadow-xl border border-slate-300/80 overflow-hidden flex justify-center items-center transition-all">
          <canvas ref={canvasRef} className="max-w-full h-auto block" />
        </div>
      )}

      {/* Native Browser PDF Viewer Fallback */}
      {!loading && useNativeViewer && (
        <div className="w-full h-full min-h-[580px] bg-white rounded-xl shadow-xl border border-slate-300 overflow-hidden">
          <iframe
            src={`${activePdfSrc}#page=${docPage}&zoom=${zoom}&toolbar=0&navpanes=0`}
            className="w-full h-full min-h-[580px] border-0"
            title="Uploaded PDF Document"
          />
        </div>
      )}
    </div>
  );
}
