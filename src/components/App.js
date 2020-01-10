import React from "react";
import InputForm from "./InputForm";
import ResultForm from "./ResultForm";
import "./App.css";

//https://www.youtube.com/watch?v=fMB7aNN5ot4&list=PLTs20Q-BTEMNlWqt1sofJj5HDDqNlZy3L&index=2

class App extends React.Component {
  state = {
    cityName: ""
  };

  handleCityChange = event => {
    const newState = { cityName: event.target.value };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <InputForm cityName={this.state.cityName} cityChangeHandler={this.handleCityChange} />
        <ResultForm />
      </div>
    );
  }
}

export default App;
