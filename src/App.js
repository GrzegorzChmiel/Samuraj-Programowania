import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://jsonplaceholder.typicode.com/users");
    xhr.send();
    xhr.onload = () => this.usersLoad(xhr);
  }

  usersLoad(xhr) {
    let users = [];
    if (xhr.status === 200) {
      const response = xhr.response;
      const responseJSON = JSON.parse(response);
      users = responseJSON;
    } else {
      users = [];
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
