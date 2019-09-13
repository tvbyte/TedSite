import React from "react";
import { Tabs, Tab } from "@blueprintjs/core";

interface IProps {}
interface IState {}

class ProjectsNav extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Tabs vertical={true}>
          <Tab
            id="passwords"
            title="Strong Passwords"
            panel={<div>passwords</div>}
          />
          <Tab id="space" title="Space Tools" panel={<div>space</div>} />
          <Tab id="euler" title="Project Euler" panel={<div>Euler</div>} />
        </Tabs>
      </div>
    );
  }
}

export default ProjectsNav;
