import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../../LandingPage/LandingPage";

interface IProps {}
interface IState {
  browserHeight: number;
  browserWidth: number;
  lastUpdated:Date;
}

class AppView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      browserHeight: window.innerHeight,
      browserWidth: window.innerWidth,
      lastUpdated: new Date(2019,9-1,12)
    };
    this.updateBrowserDim = this.updateBrowserDim.bind(this);
  }

  /* Life Cycle Functions*/
  componentDidMount() {
    window.addEventListener('resize', this.updateBrowserDim);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateBrowserDim);
  }
  
  /* Helper Functions */
  updateBrowserDim() {
    this.setState({ browserWidth: window.innerWidth, browserHeight: window.innerHeight });
  }



  render() {
    return (
      <div>
        <Header />
        <div
          style={{
            height: this.state.browserHeight - 100,
            width: this.state.browserWidth,
            background: "#30404D"
          }}
        >
          <LandingPage />
        </div>
        <Footer 
          lastUpdated={this.state.lastUpdated}
        />
      </div>
    );
  }
}

export default AppView;
