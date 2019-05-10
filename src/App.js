import React from "react";
import "./App.css";

class LifePointsButton extends React.Component {
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

class PlayerLifePoints extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lifePoints: 8000
    };
  }

  updateLifePoints(e, value) {
    e.preventDefault();
    let lifePoints = this.state.lifePoints + value;
    if (lifePoints < 0) {
      lifePoints = 0;
    }
    this.setState({ lifePoints: lifePoints });
  }

  render() {
    return (
      <div className="container playerLifePoints">
        <h2>{this.props.name}</h2>
        <h1>{this.state.lifePoints}</h1>
        <div>
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, -1000)}
            value="1000"
            type="minus"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, -500)}
            value="500"
            type="minus"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, -100)}
            value="100"
            type="minus"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, -10)}
            value="10"
            type="minus"
            style={{ marginBottom: "10px" }}
          />
          <br />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, 1000)}
            value="1000"
            type="plus"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, 500)}
            value="500"
            type="plus"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, 100)}
            value="100"
            type="plus"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          />
          <LifePointsButton
            onClick={e => this.updateLifePoints(e, 10)}
            value="10"
            type="plus"
            style={{ marginBottom: "10px" }}
          />
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <PlayerLifePoints name="Player One" />
      <PlayerLifePoints name="Player Two" />
    </div>
  );
}

export default App;
