import * as React from "react";
import {
  ButtonGroup,
  Button,
  Popover,
  Menu,
  Position
} from "@blueprintjs/core";
import { Link } from "react-router-dom";
import "./Header.css";
interface IProps {}
const Header: React.SFC<IProps> = props => {
  const linkStyle: object = { textDecoration: "none", color: "#EBF1F5" };
  return (
    <div className="header">
      <Link to="/" style={linkStyle}>
        <Button icon="home" minimal={true} intent='primary'/>
      </Link>

      <div style={{ float: "right" }}>
        <ButtonGroup minimal={true}>
          <Link to="/about" style={linkStyle}>
            <Button icon="person">About</Button>
          </Link>

          <Popover
            content={
              <Menu>
                <Link to="/projects" style={linkStyle}>
                  <Menu.Item icon="projects" text="Projects" />
                </Link>

                <Link to="/languages" style={linkStyle}>
                  <Menu.Item icon="code-block" text="Programming Languages" />
                </Link>

                <Link to="/research" style={linkStyle}>
                  <Menu.Item icon="function" text="Research" />
                </Link>
                <Link to="/courses" style={linkStyle}>
                  <Menu.Item
                    icon="predictive-analysis"
                    text="Academic Courses"
                  />
                </Link>

                <Menu.Divider />
                <Link to="/resume" style={linkStyle}>
                  <Menu.Item icon="properties" text="Resume" />
                </Link>
              </Menu>
            }
            position={Position.BOTTOM}
          >
            <Button icon="build" rightIcon="caret-down">
              C.V.
            </Button>
          </Popover>
          <Link to="/volunteer" style={linkStyle}>
            <Button icon="thumbs-up">Volunteering</Button>
          </Link>

          <Link to="/contact" style={linkStyle}>
            <Button icon="chat">Contact</Button>
          </Link>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Header;
