import React from "react";

interface IProps {}
interface IState {}

class LandingPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        landing page
      </div>
    );
  }
}

export default LandingPage;
