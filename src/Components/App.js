import React from "react";
import Word from "./Word";
import "./App.css";

const tmpData = [
  {
    id: 1,
    en: "cat",
    pl: "kot"
  },
  {
    id: 2,
    en: "dog",
    pl: "pies"
  },
  {
    id: 3,
    en: "fish",
    pl: "ryba"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: tmpData,
      dataLoaded: false
    };
  }

  createWord = word => {
    return <Word key={word.id} en={word.en} pl={word.pl}></Word>;
  };

  getExternalData = () => {
    fetch;
  };

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
