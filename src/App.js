import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navBar";
import Home from "./components/home";
import NotFound from "./components/notFound";
import auth from "./services/authService";

//import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    currentUser: {},
  };
  componentDidMount() {
    const currentUser = auth.getCurrentUser();
    this.setState({ currentUser: currentUser });
  }
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar currentUser={this.state.currentUser} />
        <main className="">
          <Switch>
            {/* <Route path="/register" component={Register} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} /> */}
            <Route path="/notFound" component={NotFound} />
            <Route path="/home" component={Home} />
            {/* <ProtectedRoute exact path="/newproject" component={NewProject} />
            <ProtectedRoute exact path="/myprojects" component={MyProjects} /> */}
            <Redirect exact from="/" to="/home" />
            {/* <Redirect to="notFound" /> */}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
