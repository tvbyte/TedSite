import * as React from "react";
import {
  Button,
  Tooltip,
  ButtonGroup,
} from "@blueprintjs/core";
import "./Footer.css";
interface IProps {
  lastUpdated: Date;
}
const Footer: React.SFC<IProps> = props => {
  const onCodeClick = () => {
    var win = window.open("https://github.com/tvbyte/TedSite", "_blank");
    if (win) {
      win.focus();
    }
  };

  const generateTimeString = ():string=>{

    return 'last updated on '+props.lastUpdated.toLocaleString()
  }

  return (
    <div className="footer">
      <ButtonGroup minimal={true}>
        <i style={{ paddingTop: 5 }}>copyright Theodore McCulloch 2019</i>
        <Tooltip content={generateTimeString()}intent="warning">
          <Button icon="updated" intent="warning" minimal={true} />
        </Tooltip>
        <Tooltip content="link to site's source code" intent="success">
          <Button
            icon="code"
            intent="success"
            minimal={true}
            onClick={onCodeClick}
          />
        </Tooltip>
      </ButtonGroup>
    </div>
  );
};

export default Footer;
