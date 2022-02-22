import React from "react";
import PropTypes from "prop-types";
import styleComponent from "../../CSS/components/statistic/StatisticComponent.module.css";
// import FeedbackOptions from "../feedbackOptions/FeedbackOptions.js";

class Statistic extends React.Component {
  statisticStyle = [styleComponent.statistic_component];
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  render() {
    // const { sost } = this.state;
    console.log("this.props=", this.props);
    return (
      <div>
        <h2>Statistic</h2>
        {/* <FeedbackOptions /> */}
        <div className={this.statisticStyle}>
          <p>Good:</p>
          <p>{this.props.options.good}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Neutral:</p>
          <p>{this.props.options.neutral}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Bad:</p>
          <p>{this.props.options.bad}</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Total:</p>
          {/* <p>{this.countTotalFeedback()}</p> */}
          <p> test</p>
        </div>
        <div className={this.statisticStyle}>
          <p>Positive feedback:</p>
          {/* <p>{this.countPositiveFeedbackPercentage()}%</p> */}
          <p> test%</p>
        </div>
      </div>
    );
  }
}

// const Statistic = ({ options }) => {
//   console.log("    options=", options);
//   const statisticStyle = [styleComponent.statistic_component];
//   return (
//     <div>
//       <h2>Statistic</h2>
//       {/* <FeedbackOptions /> */}
//       <div className={statisticStyle}>
//         <p>Good:</p>
//         <p>{options.good}</p>
//       </div>
//       <div className={statisticStyle}>
//         <p>Neutral:</p>
//         <p>{options.neutral}</p>
//       </div>
//       <div className={statisticStyle}>
//         <p>Bad:</p>
//         <p>{options.bad}</p>
//       </div>
//       <div className={statisticStyle}>
//         <p>Total:</p>
//         {/* <p>{this.props.options.}</p> */}
//         <p> test</p>
//       </div>
//       <div className={statisticStyle}>
//         <p>Positive feedback:</p>
//         {/* <p>{this.countPositiveFeedbackPercentage()}%</p> */}
//         <p> test</p>
//       </div>
//     </div>
//   );
// };

export default Statistic;
