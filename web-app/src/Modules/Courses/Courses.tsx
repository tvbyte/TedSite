import React from "react";

interface IProps {}
interface IState {}

class Courses extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Courses</div>;
  }
}

export default Courses;
