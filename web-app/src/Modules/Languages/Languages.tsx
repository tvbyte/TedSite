import React from "react";

interface IProps {}
interface IState {}

class Languages extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return <div>Languages</div>;
  }
}

export default Languages;
