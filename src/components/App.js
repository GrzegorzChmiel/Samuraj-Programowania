import React from "react";
import InputForm from "./InputForm";
import ResultForm from "./ResultForm";
import "./App.css";

//https://www.youtube.com/watch?v=fMB7aNN5ot4&list=PLTs20Q-BTEMNlWqt1sofJj5HDDqNlZy3L&index=7

class App extends React.Component {
  state = {
    cityName: "",
    stationId: "",
    stationName: "",
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
        this.setState(actualState => {
          return {
            stationId: jsonData.id_stacji,
            stationName: jsonData.stacja,
            dateAndTime: `${jsonData.data_pomiaru} godz: ${jsonData.godzina_pomiaru}`,
            actualTemperature: jsonData.temperatura,
            actualWindSpeed: jsonData.predkosc_wiatru,
            windDirection: jsonData.kierunek_wiatru,
            actualPreassuse: jsonData.cisnienie,
            rainfall: parseFloat(jsonData.suma_opadu),
            humidity: jsonData.wilgotnosc_wzgledna,
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
