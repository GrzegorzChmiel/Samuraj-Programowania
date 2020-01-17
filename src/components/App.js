import React from "react";
import InputForm from "./InputForm";
import ResultForm from "./ResultForm";
import "./App.css";

//https://www.youtube.com/watch?v=fMB7aNN5ot4&list=PLTs20Q-BTEMNlWqt1sofJj5HDDqNlZy3L&index=5

class App extends React.Component {
  state = {
    cityName: "",
    stationId: "",
    dateAndTime: "",
    actualTemperature: "",
    actualWindSpeed: "",
    windDirection: "",
    actualPreassuse: "",
    rainfall: "",
    humidity: "",
    error: false,
    formSubmitted: false
  };

  handleCityChange = event => {
    const newState = {
      cityName: event.target.value,
      formSubmitted: false
    };
    this.setState(actualState => newState);
  };

  handleInputFormSubmit = event => {
    event.preventDefault();

    const URL = `https://danepubliczne.imgw.pl/api/data/synop/station/${this.state.cityName}`;

    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error(`Wystąpił problem. Status odpowiedzi: ${response.statusText}`);
        }
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState(actualState => {
          return {
            error: false,
            formSubmitted: true
          };
        });
      })
      .catch(error => {
        console.log(error);
        this.setState(actualState => {
          return {
            error: true,
            formSubmitted: true
          };
        });
      });
  };

  render() {
    return (
      <div className="App">
        <InputForm cityChangeHandler={this.handleCityChange} submitHandler={this.handleInputFormSubmit} />
        <ResultForm displayData={this.state} />
      </div>
    );
  }
}

export default App;
