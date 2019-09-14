import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Button } from "@blueprintjs/core";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface IProps {
  viewHeight: number;
}

const Resume: React.SFC<IProps> = props => {
  const [downloaded, setDownloaded] = useState(false);
  const triggerDownload = () => {
    setDownloaded(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ display: "inline-block" }}>
        <br />
        <Button
          intent={downloaded ? "success" : "none"}
          icon="arrow-down"
          onClick={triggerDownload}
        >
          <a href={require("../../Media/resume.pdf")} download style={{textDecoration:'none', color: 'white'}}>
            Download Resume
          </a>
        </Button>
        <br /> <br />
        <Document file={require("../../Media/resume.pdf")}>
          <Page
            pageNumber={2}
            width={props.viewHeight - props.viewHeight * 0.32}
          />
        </Document>
      </div>
    </div>
  );
};

export default Resume;
