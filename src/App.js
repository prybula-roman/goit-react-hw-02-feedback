import React from "react";
import Statistic from "./components/statistic/Statistic.js";
import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions.js";
import "./App.css";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 1,
    bad: 0,
  };

  goodIncrement = () => {
    console.log("goodIncrement");
    this.setState(() => {
      this.good++;
    });
  };

  neutralIncrement = () => {
    console.log("neutralIncrement");
  };

  badIncrement = () => {
    console.log("badIncrement");
  };
  render() {
    // const { sost } = this.state;
    return (
      <>
        <FeedbackOptions
          options={this.state}
          onGood={this.goodIncrement}
          onNeutral={this.neutralIncrement}
          onBad={this.badIncrement}
        />
        <Statistic options={this.state} />
      </>
    );
  }
}

export default App;
