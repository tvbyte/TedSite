import React from "react";

interface IProps {}
interface IState {}

class Research extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Research</div>;
  }
}

export default Research;
