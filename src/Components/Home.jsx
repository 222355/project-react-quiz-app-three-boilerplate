import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
class Home extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
          <h1>Quiz App</h1>
          <Link to="/questions">
            <button className="play-btn">Play</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
