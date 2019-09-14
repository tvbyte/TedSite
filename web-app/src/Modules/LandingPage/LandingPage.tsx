import React from "react";
import { Button } from "@blueprintjs/core";
import "./LandingPage.css";

interface IProps {
  viewHeight: number;
  updatePage(appKey: string): void;
}
interface IState {}

class LandingPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    const height: number = this.props.viewHeight / 3 - 15;
    return (
      <div style={{ margin: 5 }}>
        <div className="lp-display">
          <h1>Ted McCulloch's Websiste</h1>
          <div>
            In the age of <b>The Profile</b> it may seem silly to have a
            personal website, and that might very well be true. However here we
            are.
          </div>
          <div>
            I decided to make this website for several reasons:
            <ul>
              <li className="blue-font">
                to make it easy to find and contact me
              </li>
              <li className="red-font">
                to act as a meaningful hub between projects
              </li>

              <li className="green-font">
                to make it easy for organizations to understand what I can offer
              </li>
              <li className="yellow-font">
                to be a living document of my academic and work careers
              </li>
            </ul>
          </div>
          <div>Please feel free to reach out!</div>
          <br />
        </div>
        <div>
          <table className="lp-table">
            <tbody>
              <tr>
                <td className="blue-border">
                  <Button
                    fill={true}
                    minimal={true}
                    icon="person"
                    intent="primary"
                    onClick={this.props.updatePage.bind(null, "about")}
                  >
                    <h2>About Me</h2>
                  </Button>
                  <Button
                    fill={true}
                    minimal={true}
                    icon="list"
                    intent="primary"
                    onClick={this.props.updatePage.bind(null, "resume")}
                  >
                    Resume
                  </Button>
                  <Button
                    fill={true}
                    minimal={true}
                    icon="chat"
                    intent="primary"
                    onClick={this.props.updatePage.bind(null, "contact")}
                  >
                    Contact
                  </Button>
                </td>

                <td className="red-border">
                  <Button
                    fill={true}
                    style={{ height: height }}
                    minimal={true}
                    intent="danger"
                    onClick={this.props.updatePage.bind(null, "projects")}
                    icon="projects"
                  >
                    <h2>Personal Projects</h2>
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="green-border">
                  <Button
                    fill={true}
                    style={{ height: height }}
                    minimal={true}
                    intent="success"
                    onClick={this.props.updatePage.bind(null, "volunteer")}
                    icon="thumbs-up"
                  >
                    <h2>How I Can Help Out</h2>
                  </Button>
                </td>
                <td className="yellow-border">
                  <Button
                    fill={true}
                    minimal={true}
                    icon="code-block"
                    intent="warning"
                    onClick={this.props.updatePage.bind(null, "languages")}
                  >
                    Programming Languages
                  </Button>

                  <Button
                    fill={true}
                    minimal={true}
                    icon="predictive-analysis"
                    intent="warning"
                    onClick={this.props.updatePage.bind(null, "courses")}
                  >
                    Academic Courses
                  </Button>
                  <Button
                    fill={true}
                    minimal={true}
                    icon="function"
                    intent="warning"
                    onClick={this.props.updatePage.bind(null, "research")}
                  >
                    Research
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default LandingPage;
