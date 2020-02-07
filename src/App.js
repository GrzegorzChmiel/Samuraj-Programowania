import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "",
      email: "",
      pass: "",
      accept: false
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    const targetType = event.target.type;
    const targetName = event.target.name;
    let newState = {};
    if (targetType === "checkbox") {
      newState = {
        [targetName]: event.target.checked
      };
    } else {
      newState = {
        [targetName]: event.target.value
      };
    }

    this.setState(prevState => {
      return newState;
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} noValidate>
        <label>
          Twoje imię:
          <input
            type="text"
            name="user"
            value={this.state.user}
            onChange={this.onChangeHandler}
          ></input>
        </label>
        <label>
          Twój email:
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeHandler}
          ></input>
        </label>
        <label>
          Twoje hasło:
          <input
            type="password"
            name="pass"
            value={this.state.pass}
            onChange={this.onChangeHandler}
          ></input>
        </label>
        <label>
          Akceptacja harmonogramu {}
          <input
            type="checkbox"
            name="accept"
            checked={this.state.accept}
            onChange={this.onChangeHandler}
          ></input>
        </label>
        <button type="submit">Zatwierdź dane</button>
      </form>
    );
  }
}

export default App;
