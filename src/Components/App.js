import React, { Component } from "react";
import "./App.css";
import GetPersonsButton from "./GetPersonsButton";
import PersonsList from "./PersonsList";

class App extends Component {
  PersonsUrlApi = "https://randomuser.me/api/?results=1";

  state = {
    displayError: false,
    personData: []
  };

  getPersonsHandler = diagnosticMessage => {
    console.log(diagnosticMessage);

    fetch(this.PersonsUrlApi)
      .then(response => {
        return this.checkResponseStatus(response);
      })
      .then(checkResult => {
        if (checkResult === false) {
          this.setState({ displayError: true });
          return null;
        }
        return checkResult.json();
      })
      .then(jsonResult => this.parseJSON(jsonResult))
      .catch(reason => {
        console.log("Catch - niepowodzenie");
        console.log(reason);
        this.setState({ displayError: true });
      });
  };

  checkResponseStatus(response) {
    if (response.status === 200) return response;

    return false;
  }

  parseJSON(jsonResult) {
    let personData = [];
    if (jsonResult != null) {
      personData = jsonResult.results;
    }
    this.setState(prevState => {
      return {
        personData:
          personData.length === 1
            ? prevState.personData.concat(personData)
            : prevState.personData
      };
    });
  }

  render() {
    const displayData = this.state.personData.map(person => {
      return {
        key: person.login.uuid,
        name: person.name,
        email: person.email,
        phone: person.phone,
        image: person.picture.large
      };
    });
    return (
      <div>
        <GetPersonsButton
          getHandler={this.getPersonsHandler}
        ></GetPersonsButton>
        {this.state.displayError ? (
          <div>
            <br />
            Wystąpił problem podczas pobierania danych
          </div>
        ) : (
          <div style={{ textAlign: "center" }}>
            <PersonsList data={displayData}></PersonsList>
          </div>
        )}
      </div>
    );
  }
}

export default App;
