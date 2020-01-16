import React from "react";
import InputForm from "./InputForm";
import ResultForm from "./ResultForm";
import "./App.css";

//https://www.youtube.com/watch?v=fMB7aNN5ot4&list=PLTs20Q-BTEMNlWqt1sofJj5HDDqNlZy3L&index=4

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
    error: false
  };

  handleCityChange = event => {
    const newState = { cityName: event.target.value };
    this.setState(newState);
  };

  handleInputFormSubmit = event => {
    event.preventDefault();

    const URL = `https://danepubliczne.imgw.pl/api/data/synop/station/${"ostroleka"}`;

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
      })
      .catch(error => {
        console.log(error);
      });
  };

  getDisplayData() {
    const data = {
      cityName: this.state.error ? "" : this.state.cityName,
      dateAndTime: this.state.error ? "" : this.state.dateAndTime,
      sunrise: this.state.error ? "" : this.state.sunrise,
      sunset: this.state.error ? "" : this.state.sunset,
      actualTemperature: this.state.error ? "" : this.state.actualTemperature,
      actualWindSpeed: this.state.error ? "" : this.state.actualWindSpeed,
      actualPreassuse: this.state.error ? "" : this.state.actualPreassuse,
      errorMessage: this.state.error ? "Wystąpił problem - spróbuj ponownie później." : ""
    };
    return data;
  }

  render() {
    const displayData = this.getDisplayData();
    return (
      <div className="App">
        <InputForm displayData={this.state.cityName} cityChangeHandler={this.handleCityChange} submitHandler={this.handleInputFormSubmit} />
        <ResultForm />
      </div>
    );
  }
}

export default App;
