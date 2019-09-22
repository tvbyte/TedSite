import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Button, Tooltip, Icon } from "@blueprintjs/core";
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
        <Document file={require("../../Media/resume.pdf")}>
          <Page pageNumber={2} width={props.viewHeight * 0.68} />
        </Document>
        <br /> <br />
        <Button
          intent={downloaded ? "success" : "none"}
          icon="arrow-down"
          onClick={triggerDownload}
        >
          <a
            href={require("../../Media/resume.pdf")}
            download
            style={{ textDecoration: "none", color: "white" }}
          >
            Download Resume
          </a>
        </Button>
        &nbsp;&nbsp;
        <Tooltip
          content={
            <div>
              <div>
                Because of web scrapers, my personal phone number and primary
                email address as well as those of any references aren't listed
                on this resume or website.
              </div>
              <div>
                You can easily get in touch with my via <b>tvmbyte@gmail.com</b>
              </div>
            </div>
          }
        >
          <Icon icon="help" />
        </Tooltip>
      </div>
    </div>
  );
};

export default Resume;
