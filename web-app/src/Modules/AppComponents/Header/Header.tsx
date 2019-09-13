import * as React from "react";
import {
  ButtonGroup,
  Button,
  Popover,
  Menu,
  Position
} from "@blueprintjs/core";
interface IProps {
  updatePage(appKey: string): void;
}
const Header: React.SFC<IProps> = props => {
  return (
    <div className="header">
      <Button
        icon="home"
        minimal={true}
        onClick={props.updatePage.bind(null, "landing")}
      />
      <div style={{ float: "right" }}>
        <ButtonGroup minimal={true}>
          <Button icon="person" onClick={props.updatePage.bind(null, "about")}>
            About
          </Button>
          <Popover
            content={
              <Menu>
                <Menu.Item
                  icon="projects"
                  text="Projects"
                  onClick={props.updatePage.bind(null, "projects")}
                />
                <Menu.Item
                  icon="code-block"
                  text="Programming Languages"
                  onClick={props.updatePage.bind(null, "languages")}
                />
                <Menu.Item
                  icon="function"
                  text="Research"
                  onClick={props.updatePage.bind(null, "research")}
                />
                <Menu.Item
                  icon="predictive-analysis"
                  text="Academic Courses"
                  onClick={props.updatePage.bind(null, "courses")}
                />
                <Menu.Divider />
                <Menu.Item
                  icon="properties"
                  text="Resume"
                  onClick={props.updatePage.bind(null, "resume")}
                />
              </Menu>
            }
            position={Position.BOTTOM}
          >
            <Button icon="build" rightIcon="caret-down">
              C.V.
            </Button>
          </Popover>

          <Button
            icon="thumbs-up"
            onClick={props.updatePage.bind(null, "volunteer")}
          >
            Volunteering
          </Button>
          <Button icon="chat" onClick={props.updatePage.bind(null, "contact")}>
            Contact
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Header;
