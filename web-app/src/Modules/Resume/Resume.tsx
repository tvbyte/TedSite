import React from "react";

interface IProps {}
interface IState {}

class Resume extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Resume</div>;
  }
}

export default Resume;
