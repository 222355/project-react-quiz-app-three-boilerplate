import React, { Component } from "react";
import question from "./question.json";
import { Navigate, Link } from "react-router-dom";
class Questions extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, score: 0, navigate: false, attemptedQuestions: 0 };
  }

  handleScore = (option) => {
    if (option === question[this.state.index].answer) {
      this.setState((prevState) => ({ score: prevState.score + 1 }));
    }
    if (this.state.index === question.length - 1) {
      this.setState({ navigate: true });
    } else {
      this.setState((prevState) => ({
        index: prevState.index + 1,
        attemptedQuestions: prevState.attemptedQuestions + 1,
      }));
    }
  };

  handlePrev = () => {
    this.setState((prevState) => ({ index: Math.max(prevState.index - 1, 0) }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      index: Math.min(prevState.index + 1, question.length - 1),
    }));
  };

  handleQuit = () => {
    if (window.confirm("Are you sure, you want to quit?")) {
      this.setState({ navigate: true });
    }
  };

  render() {
    if (this.state.navigate) {
      return (
        <Navigate
          to="/result"
          state={{
            score: this.state.score,
            attemptedQuestions: this.state.attemptedQuestions,
          }}
        />
      );
    }

    const currentQuestion = question[this.state.index];

    return (
      <div>
        <div className="page">
          <div className="heading">
            <h1>Question</h1>
          </div>
          <div className="left">
            <h6>
              {this.state.index + 1} out of {question.length}
            </h6>
          </div>
          <div className="question">
            <h3>{currentQuestion.question}</h3>
          </div>
          <div className="options">
            <div>
              <button onClick={() => this.handleScore(currentQuestion.optionA)}>
                {currentQuestion.optionA}
              </button>
              <button onClick={() => this.handleScore(currentQuestion.optionB)}>
                {currentQuestion.optionB}
              </button>
              <button onClick={() => this.handleScore(currentQuestion.optionC)}>
                {currentQuestion.optionC}
              </button>
              <button onClick={() => this.handleScore(currentQuestion.optionD)}>
                {currentQuestion.optionD}
              </button>
            </div>
          </div>
          <div className="nav-btn">
            <button className="blue" onClick={this.handlePrev}>
              Previous
            </button>
            <button className="green" onClick={this.handleNext}>
              Next
            </button>
            <button className="red" onClick={this.handleQuit}>
              Quit
            </button>
            <button
              className="gray"
              onClick={() => this.setState({ navigate: true })}
            >
              Finish
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Questions;
