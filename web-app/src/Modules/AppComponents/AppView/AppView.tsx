import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import LandingPage from "../../LandingPage/LandingPage";
import About from "../../About/About";
import Contact from "../../Contact/Contact";
import ProjectsNav from "../../Projects/ProjectsNav";
import Volunteer from "../../Volunteer/Volunteer";
import Languages from "../../Languages/Languages";
import Courses from "../../Courses/Courses";
import Research from "../../Research/Research";
import Resume from "../../Resume/Resume";
import "./AppView.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

interface IProps {}
interface IState {
  browserHeight: number;
  browserWidth: number;
  lastUpdated: Date;
  appKey: string;
  /**
   * keys
   * > landing
   * > about
   * > volunteer
   * > projects
   * > contact
   * @TODO routing
   */
}

class AppView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      browserHeight: window.innerHeight,
      browserWidth: window.innerWidth,
      lastUpdated: new Date(2019, 9 - 1, 12),
      //appKey: "landing"
      appKey: "landing"
    };
    this.updateBrowserDim = this.updateBrowserDim.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.landing = this.landing.bind(this);
    this.about = this.about.bind(this);
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

  landing() {
    return (
      <LandingPage
        viewHeight={this.state.browserHeight - 70}
        updatePage={this.updatePage}
      />
    );
  }

  about() {
    return <About height={this.state.browserHeight} />;
  }

  /* Callbacks */

  private updatePage = (key: string) => {
    this.setState({ appKey: key });
  };

  render() {
    return (
      <Router>
        <div>
          <Header updatePage={this.updatePage} />
          <div
            style={{
              height: this.state.browserHeight - 60,
              width: this.state.browserWidth
            }}
            className="app-view"
          >
            <Route path="/" exact component={this.landing} />
            <Route path="/about/" component={this.about} />
            <Route path="/contact/" component={Contact} />
            <Route path="/projects/" component={ProjectsNav} />
            <Route path="/volunteer/" component={Volunteer} />
            <Route path="/languages/" component={Languages} />
            <Route path="/courses/" component={Courses} />
            <Route path="/research/" component={Research} />
            <Route path="/resume/" component={Resume} />
          </div>

          <Footer lastUpdated={this.state.lastUpdated} />
        </div>
      </Router>
    );
  }
}

export default AppView;
