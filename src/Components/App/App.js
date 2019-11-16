import React, { Component } from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import "./App.css";

class App extends Component {
  state = {
    value: 0,
    active: false
  };

  intervalHandler = 0;

  handleClick = () => {
    if (!this.state.active) {
      this.intervalHandler = setInterval(this.increaseValue.bind(this), 1000);
    } else {
      clearInterval(this.intervalHandler);
    }

    this.setState(prevState => {
      return { active: !prevState.active };
    });
  };

  increaseValue() {
    this.setState(prevState => {
      return { value: ++prevState.value };
    });
  }

  render() {
    return (
      <>
        <p>Aktualne odliczanie: {this.state.value}</p>
        <SwitchButton handler={this.handleClick} isActive={this.state.active} />
      </>
    );
  }
}

export default App;
