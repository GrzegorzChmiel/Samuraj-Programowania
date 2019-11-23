import React from "react";
import Word from "./Word";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataLoaded: false
    };
  }

  createWord = word => {
    return <Word key={word.id} en={word.en} pl={word.pl}></Word>;
  };

  getExternalData = () => {
    fetch("Data/Words.json")
      .then(response => {
        return response.json();
      })
      .then(json => {
        const newState = {
          data: json.words,
          dataLoaded: true
        };
        this.setState(newState);
      });
  };

  componentDidMount() {
    this.getExternalData();
  }

  render() {
    const words = this.state.data.map(this.createWord);
    let retValue = null;
    if (this.state.dataLoaded) {
      retValue = <ul>{words}</ul>;
    } else {
      retValue = "Trwa pobieranie danych.";
    }
    return retValue;
  }
}

export default App;
