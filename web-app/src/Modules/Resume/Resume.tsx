import React from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Button } from "@blueprintjs/core";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

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
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
          <br />
          <Document
            file={require("../../Media/resume.pdf")}
            onLoadSuccess={this.onDocumentLoadSuccess}
          >
            <Page pageNumber={2} width={500} />
          </Document>
          <br /> <br />
          <Button icon="arrow-down" ref="../../Media/resume.pdf">
            Resume
          </Button>
        </div>
      </div>
    );
  }
}

export default Resume;
