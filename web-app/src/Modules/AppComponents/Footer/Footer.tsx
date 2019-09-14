import * as React from "react";
import { Button, Tooltip, ButtonGroup } from "@blueprintjs/core";
import "./Footer.css";
interface IProps {}
const Footer: React.SFC<IProps> = props => {
  const onCodeClick = () => {
    var win = window.open("https://github.com/tvbyte/TedSite", "_blank");
    if (win) {
      win.focus();
    }
  };

  return (
    <div className="footer">
      <ButtonGroup minimal={true}>
        <i style={{ paddingTop: 5 }}>© copyright Theodore McCulloch 2019</i>
        &nbsp;
        <Tooltip content="link to site's source code" intent="success">
          <Button icon="code" intent="success" onClick={onCodeClick} />
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default Footer;
