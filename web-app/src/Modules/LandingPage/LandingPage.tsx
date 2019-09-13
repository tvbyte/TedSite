import React from "react";
import { Button, Tag, Icon } from "@blueprintjs/core";

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
    const height: number = this.props.viewHeight / 3;
    return (
      <div style={{ margin: 5 }}>
        <div
          style={{
            textAlign: "left",
            paddingLeft: 10,
            overflow: "scroll",
            border: "2px solid #5C7080",
            borderRadius: "10px",
            marginBottom: 10,
            marginTop: 10,
            background: "#293742"
          }}
        >
          <h1>Welcome to this site</h1>
          <div>
            In the age of <b>The Profile</b> it may seem silly to have a
            personal website, and that might very well be true. However here we
            are.
          </div>
          <div>
            I decided to make this website for several reasons:
            <ul>
              <li>
                to make it easy for organizations to understand what I can offer
              </li>
              <li>to be a living document of my academic and work careers</li>
              <li>to act as a hub between projects</li>
              <li>to showcase some of my programming and design skills</li>
            </ul>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <table style={{ width: "100%" }}>
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid #2B95D6",
                    borderRadius: "10px",
                    background: "#293742"
                  }}
                >
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

                <td
                  style={{
                    border: "1px solid #F55656",
                    borderRadius: "10px",
                    background: "#293742"
                  }}
                >
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
                <td
                  style={{
                    border: "1px solid #15B371",
                    borderRadius: "10px",
                    background: "#293742"
                  }}
                >
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
                <td
                  style={{
                    border: "1px solid #F29D49",
                    borderRadius: "10px",
                    background: "#293742"
                  }}
                >
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
