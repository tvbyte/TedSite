import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IProps {}
interface IState {}

class Resume extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  onDocumentLoadSuccess = (e: any) => {};
  render() {
    return (
      <div>
        <Document
          file={require('../../Media/style.pdf')}
          onLoadSuccess={this.onDocumentLoadSuccess}
        >
          <Page pageNumber={2} />
        </Document>
      </div>
    );
  }
}

export default Resume;
