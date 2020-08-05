import React, { Component } from "react";
import "../styles/home.css";
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="feature-image">
          <h1>
            <img className="mainlogo" src="images/logo/mainlogo.jpeg" />
          </h1>
          <h1>
            <i>
              {" "}
              <b>E l z i a n (pvt) Ltd.</b>
            </i>{" "}
          </h1>
          <h5>
            <i>Be The Change</i>
          </h5>
          <h1>
            <img className="mainlogo" src="images/logo/elziansoftware.jpeg" />
            <a href="https://agro.elzian.com/">
              <img className="mainlogo" src="images/logo/elzianagro.jpeg" />
            </a>
            <img className="mainlogo" src="images/logo/elzianmarketing.jpeg" />
            <img className="mainlogo" src="images/logo/elzianfinance.jpeg" />
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
