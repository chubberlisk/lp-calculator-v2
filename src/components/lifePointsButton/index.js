import React from "react";
import "./style.css";

export default class LifePointsButton extends React.Component {
  render() {
    const value =
      this.props.type === "minus" ? `-${this.props.value}` : this.props.value;

    let cssClass = this.props.type === "minus" ? "btn-danger" : " btn-success";

    return (
      <button
        className={`btn ${cssClass}`}
        onClick={this.props.onClick}
        style={this.props.style}
      >
        {value}
      </button>
    );
  }
}
