import React from "react";
import { Button } from "@blueprintjs/core";

interface IProps {}
interface IState {}

class LandingPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ textAlign: "left", padding: 10 }}>
          <h1>Welcome to this site</h1>
          <div>
            In the age of <b>The Profile</b> it may seem silly to have a
            personal webiste, and that might very well be true. However here we
            are.
          </div>
          <div>
            I decided to make this website for several reasons:
            <ul>
              <li>to make it easy for organizations to understand what I can offer</li>
              <li>to act as a C.V.</li>
              <li>to act as a hub between projects</li>
              <li>to showcase some of my programming and design skills</li>
              <li>to be a living document of my academic and work careers</li>
            </ul>
          
          </div>
        </div>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <td>
                <Button fill={true} style={{ height: 100 }}>
                  More About Me
                </Button>
              </td>
              <td>
                <Button fill={true} style={{ height: 100 }}>
                  Technical Items
                </Button>
              </td>
            </tr>
            <tr>
              <td>
                <Button fill={true} style={{ height: 100 }}>
                  How I Can Help Out
                </Button>
              </td>
              <td>
                <Button fill={true} style={{ height: 100 }}>
                  Personal Projects
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default LandingPage;
