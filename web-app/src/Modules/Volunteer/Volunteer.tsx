import React from "react";

interface IProps {}
interface IState {}

class Volunteer extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Volunteer</div>;
  }
}

export default Volunteer;
