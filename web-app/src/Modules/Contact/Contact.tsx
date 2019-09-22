import React, { useState } from "react";
import * as _ from "lodash";
import {
  Tag,
  Tooltip,
  TextArea,
  Intent,
  InputGroup,
  FormGroup,
  Button
} from "@blueprintjs/core";

import "./Contact.css";
interface IProps {}
const Contact: React.SFC<IProps> = props => {
  /* - - - state and state setters - - - */
  const [copied, setCopied] = useState(false);
  const [bodyEmail, updateBodyEmail] = useState("");
  const [bodyDanger, updateBodyDanger] = useState(false);
  const [responseEmail, updateResponseEmail] = useState("");
  const [titleEmail, updateTitleEmail] = useState("");
  const [emailDanger, updateEmailDanger] = useState(false);
  const [sendDisabled, updateSendDisabled] = useState(true);

  /* - - - functions - - - */
  const updateBody = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    let text: string = event.target.value;
    updateBodyEmail(text);
    if (_.replace(text, " ", "").length < 1) {
      updateBodyDanger(true);
      updateSendDisabled(true);
    } else {
      updateBodyDanger(false);
      if (!emailDanger) {
        updateSendDisabled(false);
      }
    }
  };
  const updateEmail = (event: React.FormEvent<any>) => {
    let text: string = event.currentTarget.value;
    updateResponseEmail(text);
    if (_.replace(text, " ", "").length < 1) {
      updateEmailDanger(true);
      updateSendDisabled(true);
    } else {
      updateEmailDanger(false);
      if (!bodyDanger) {
        updateSendDisabled(false);
      }
    }
  };
  const updateTitle = (event: React.FormEvent<any>) => {
    let text: string = event.currentTarget.value;
    updateTitleEmail(text);
  };

  return (
    <div className="contact-display">
      <h1>Contact Me</h1>
      <div className="contact-text">
        Email Me Directly At:
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
        <b style={{ fontSize: 18 }}>
          <i>- - - or - - -</i>
        </b>
        <br />
        <br />
        <div style={{ textAlign: "left", paddingLeft: 40 }}>
          <FormGroup label="Your Email" labelInfo="(required)">
            <InputGroup
              style={{ width: 250 }}
              placeholder="youremail@foo.com"
              value={responseEmail}
              onChange={updateEmail}
              intent={emailDanger ? "danger" : "none"}
            />
          </FormGroup>
          <FormGroup label="Email Title" labelInfo="(optional)">
            <InputGroup
              style={{ width: 250 }}
              value={titleEmail}
              onChange={updateTitle}
            />
          </FormGroup>
          <FormGroup label="Email Body" labelInfo="(required)">
            <TextArea
              growVertically={true}
              large={true}
              intent={bodyDanger ? "danger" : "none"}
              onChange={updateBody}
              value={bodyEmail}
              style={{ width: "90%", height: 350 }}
            />
          </FormGroup>
        </div>
        <Button
          intent="primary"
          style={{ width: 100, height: 50 }}
          disabled={sendDisabled}
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default Contact;
