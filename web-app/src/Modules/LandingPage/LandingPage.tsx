import React from "react";
import { Button } from "@blueprintjs/core";
import "./LandingPage.css";
import { Link } from "react-router-dom";

interface IProps {
  viewHeight: number;
}
interface IState {}

class LandingPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    const height: number = this.props.viewHeight / 3 - 15;
    const linkStyle: object = { textDecoration: "none" };
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
                  <Link to="/about" style={linkStyle}>
                    <Button
                      fill={true}
                      minimal={true}
                      icon="person"
                      intent="primary"
                    >
                      <h2>About Me</h2>
                    </Button>
                  </Link>

                  <Link to="/resume" style={linkStyle}>
                    <Button
                      fill={true}
                      minimal={true}
                      icon="list"
                      intent="primary"
                    >
                      Resume
                    </Button>
                  </Link>
                  <Link to="/contact" style={linkStyle}>
                    <Button
                      fill={true}
                      minimal={true}
                      icon="chat"
                      intent="primary"
                    >
                      Contact
                    </Button>
                  </Link>
                </td>

                <td className="red-border">
                  <Link to="/projects" style={linkStyle}>
                    <Button
                      fill={true}
                      style={{ height: height }}
                      minimal={true}
                      intent="danger"
                      icon="projects"
                    >
                      <h2>Personal Projects</h2>
                    </Button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="green-border">
                  <Link to="/volunteer" style={linkStyle}>
                    <Button
                      fill={true}
                      style={{ height: height }}
                      minimal={true}
                      intent="success"
                      icon="thumbs-up"
                    >
                      <h2>How I Can Help Out</h2>
                    </Button>
                  </Link>
                </td>
                <td className="yellow-border">
                  <Link to="/languages" style={linkStyle}>
                    <Button
                      fill={true}
                      minimal={true}
                      icon="code-block"
                      intent="warning"
                    >
                      Programming Languages
                    </Button>
                  </Link>
                  <Link to="/courses" style={linkStyle}>
                    <Button
                      fill={true}
                      minimal={true}
                      icon="predictive-analysis"
                      intent="warning"
                    >
                      Academic Courses
                    </Button>
                  </Link>
                  <Link to="/research" style={linkStyle}>
                    <Button
                      fill={true}
                      minimal={true}
                      icon="function"
                      intent="warning"
                    >
                      Research
                    </Button>
                  </Link>
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
