import React, { Component , Fragment } from "react";
import Rules from "./Rules";
import GameBox from "../container/GameBox";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './Navbar';

class Main extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={GameBox} />
          <Route path="/rules" component={Rules} />
        </Fragment>
      </Router>
    );
  }

  pageComponent() {
    switch (this.state.page) {
      case "/rules":
        return <Rules />;
      default:
        return <GameBox />;
    }
  }

  gotoGame(event) {
    event.preventDefault();
    this.setState({ page: "/game" });
  }

  gotoRules(event) {
    event.preventDefault();
    this.setState({ page: "/rules" });
  }

}

export default Main;
