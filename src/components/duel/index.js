import React from "react";
import "./style.css";

export default class Duel extends React.Component {
  resetLifePoints() {
    console.log("Meow, how do dis?");
  }

  render() {
    return (
      <div className="container duel">
        <div className="container">
          <button
            className="btn btn-warning"
            onClick={() => this.resetLifePoints()}
            >
            Reset
          </button>
        </div>
      </div>
    );
  }
}
