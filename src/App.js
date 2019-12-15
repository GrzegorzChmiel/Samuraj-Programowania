import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(
        response => {
          return this.checkResponseStatus(response);
        },
        reason => {
          console.log(reason);
        }
      )
      .then(response => this.getJSON(response))
      .then(response => this.updateState(response));
  }

  checkResponseStatus(response) {
    if (response.status === 200) return response;

    return null;
  }

  getJSON(response) {
    if (response != null) return response.json();

    return null;
  }

  updateState(json) {
    let users = [];
    if (json != null) {
      users = json;
    }

    this.setState({ users });
  }

  createUserItem(user) {
    return (
      <div key={user.id}>
        <h4>Osoba: {user.username}</h4>
        <p>Miasto: {user.address.city}</p>
      </div>
    );
  }

  render() {
    let usersToRender = [];
    if (this.state.users.length > 0) {
      usersToRender = this.state.users.map(user => this.createUserItem(user));
    }
    return <div className="App">{usersToRender}</div>;
  }
}

export default App;
