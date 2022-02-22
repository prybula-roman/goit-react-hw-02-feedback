import React from "react";
import PropTypes from "prop-types";
import Statistic from "../statistic/Statistic";

class FeedbackOptions extends React.Component {
  state = {};

  onClickGood = (e) => {
    //  console.log("onClickGood");
    this.setState((e) => {
      this.props.options.good++;
    });
  };

  render() {
    return (
      <div>
        <button type="button" onClick={this.props.onGood}>
          Good
        </button>
        <button type="button" onClick={this.props.onNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.props.onBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
