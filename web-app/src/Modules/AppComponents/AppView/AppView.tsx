import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../../LandingPage/LandingPage";

interface IProps {}
interface IState {
  browserHeight: number;
  browserWidth: number;
  lastUpdated: Date;
  appKey: string;
}

class AppView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      browserHeight: window.innerHeight,
      browserWidth: window.innerWidth,
      lastUpdated: new Date(2019, 9 - 1, 12),
      appKey: "landing"
    };
    this.updateBrowserDim = this.updateBrowserDim.bind(this);
    this.updatePage=this.updatePage.bind(this);
  }

  /* Life Cycle Functions*/
  componentDidMount() {
    window.addEventListener("resize", this.updateBrowserDim);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateBrowserDim);
  }

  /* Helper Functions */
  updateBrowserDim() {
    this.setState({
      browserWidth: window.innerWidth,
      browserHeight: window.innerHeight
    });
  }

  private loadPage = (key: string) => {
    switch (key) {
      case "landing":
        return <LandingPage viewHeight={this.state.browserHeight-70} updatePage={this.updatePage} />;

      default:
        return <div>there's nothing here</div>;
    }
  };

  /* Callbacks */

  private updatePage = (key:string)=>{
    this.setState({appKey:key})
  }

  render() {
    return (
      <div>
        <Header updatePage={this.updatePage} />
        <div
          style={{
            height: this.state.browserHeight - 60,
            width: this.state.browserWidth,
            background: "#30404D",
            overflow:'scroll'
          }}
        >
          {this.loadPage(this.state.appKey)}
        </div>
        <Footer lastUpdated={this.state.lastUpdated} />
      </div>
    );
  }
}

export default AppView;
