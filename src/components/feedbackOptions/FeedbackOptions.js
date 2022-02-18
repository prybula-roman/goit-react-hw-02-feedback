import React from "react";
import PropTypes from "prop-types";
import Statistic from "../statistic/Statistic";

class FeedbackOptions extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  static propTypes = {
    value: PropTypes.number,
  };

  state = {
    value: this.props.initialValue,
  };

  handleClickGood = () => {
    console.log("this.props.initialValue", this.props.initialValue);
    // new Statistic.test();
    this.setState((prevState) => {
      //  console.log("prevState=", prevState);
      return { value: prevState.value + 1 };
    });
  };
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            console.log("clicked Good");
            this.handleClickGood();
          }}
        >
          Good {this.state.value}
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("clicked Neutral");
          }}
        >
          Neutral
        </button>
        <button
          type="button"
          onClick={() => {
            console.log("clicked Bad");
          }}
        >
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
