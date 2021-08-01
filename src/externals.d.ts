declare module "react-pdf-highlighter" {
  declare const PdfLoader: any;
  declare const PdfHighlighter: any;
  declare const Highlight: any;
  declare const Popup: any;
  declare const AreaHighlight: any;
  declare const setPdfWorker: any;
  export {
    PdfLoader,
    PdfHighlighter,
    Highlight,
    Popup,
    AreaHighlight,
    setPdfWorker,
  };
}

declare module "worker-loader!pdfjs-dist/lib/pdf.worker" {
  declare const PDFWorker: any;
  export default PDFWorker;
}
