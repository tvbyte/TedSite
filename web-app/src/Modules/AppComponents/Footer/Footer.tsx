import * as React from "react";
import { Button, Tooltip, Tag } from "@blueprintjs/core";
interface IProps {}
const Footer: React.SFC<IProps> = props => {
  const onCodeClick = () => {
    var win = window.open("https://github.com/tvbyte/TedSite", "_blank");
    if (win) {
      win.focus();
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>
              <Tag minimal={true}>copyright Theodore McCulloch 2019</Tag>
            </td>

            <td>
              <Tag minimal={true} intent="warning">
                last updated 09-12-2019
              </Tag>
            </td>
            <td>
              <Tooltip content="link to site's source code" intent="success">
                <Button
                  icon="code"
                  intent="success"
                  minimal={true}
                  onClick={onCodeClick}
                />
              </Tooltip>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Footer;
