import React from "react";
import PropTypes from "prop-types";
import styleComponent from "../../CSS/components/statistic/StatisticComponent.module.css";
import FeedbackOptions from "../feedbackOptions/FeedbackOptions.js";
class Statistic extends React.Component {
  state = {
    good: 2,
    neutral: 1,
    bad: 2,
  };

  statisticStyle = [styleComponent.statistic_component];

  onIncrementGood = () => {
    this.setState((prevState) => {
      return prevState.good++;
    });
  };

  test() {
    console.log("Stattistic  method test()");
  }

  countTotalFeedback() {
    console.log("Statistic::countTotalFeedback()  ");
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage() {
    console.log("Statistic::countPositiveFeedbackPersanage()  ");
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <div>
        <h2>Statistic</h2>
        <FeedbackOptions />
        <div className={this.statisticStyle}>
          <p>Good:</p>
          <p>{this.state.good}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Neutral:</p>
          <p>{this.state.neutral}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Bad:</p>
          <p>{this.state.bad}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Total:</p>
          <p>{this.countTotalFeedback()}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Positive feedback:</p>
          <p>{this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </div>
    );
  }
}

export default Statistic;
