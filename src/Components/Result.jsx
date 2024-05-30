import React, { Component } from "react";
import withlocation from "./withlocation";
import questions from "./question.json";
class Result extends Component {
  render() {
    const { state } = this.props.location;
    const score = state ? state.score : 0;
    const totalQuestions = questions.length;
    const attemptedQuestions = state ? state.attemptedQuestions : 0;
    const correctAnswers = score;
    const wrongAnswers = totalQuestions - score;

    return (
      <div>
        <div className="result-page">
          <h4 className="score ">Your Score is {score}</h4>
          <div className="dis">
            <h6>
              Total number of questions <span className="space"></span>
              {totalQuestions}
            </h6>
            <h6>
              Number of attempted questions<span className="space"></span>
              {attemptedQuestions}
            </h6>
            <h6>
              Number of correct answers<span className="space"></span>
              {correctAnswers}
            </h6>
            <h6>
              Number of wrong answers<span className="space"></span>
              {wrongAnswers}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default withlocation(Result);
