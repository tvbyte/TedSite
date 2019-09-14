import React, { useState } from "react";
import { Tag, Tooltip } from "@blueprintjs/core";
import './Contact.css';
interface IProps {}
const Contact: React.SFC<IProps> = props => {
  const [copied, setCopied] = useState(false);

  return (
    <div className='contact-display'>
      <h1>Contact</h1>
      <div
        className='contact-text'
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