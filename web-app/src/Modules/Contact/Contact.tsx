import React, { useRef, useState } from "react";
import { Tag, Tooltip } from "@blueprintjs/core";

interface IProps {}
const Contact: React.SFC<IProps> = props => {
  const [copied, setCopied] = useState(false);

  return (
    <div style={{ margin: 10, textAlign: "center" }}>
      <h1>Contact</h1>
      <div
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          background: "#394B59",
          padding: 20,
          borderRadius: "10px",

        }}
      >
        Email Me At:
        <br />
        <Tooltip
          content={copied ? "copied!" : "click to copy to clipboard"}
          intent={copied ? "success" : "primary"}
        >
          <Tag
            large={true}
            rightIcon={copied ? "tick-circle" : "clipboard"}
            interactive={true}
            minimal={true}
            intent={copied ? "success" : "primary"}
            onClick={() => {
              navigator.clipboard.writeText("tvmbyte@gmail.com");
              setCopied(true);
            }}
          >
            tvmbyte@gmail.com
          </Tag>
        </Tooltip>
        <div />
        <br />
        <i>fancy email form to come</i>
      </div>
    </div>
  );
};

export default Contact;
