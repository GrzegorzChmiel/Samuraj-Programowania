import React from "react";
import "./App.css";

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         user: "",
         email: "",
         pass: "",
         accept: false,

         validationErrors: {
            user_error: false,
            email_error: false,
            pass_error: false,
            accept_error: false
         }
      };

      this.errorMessages = {
         user_err_mess: "Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji",
         email_err_mess: "Brak @ w emailu",
         pass_err_mess: "Hasło musi mieć 8 znaków",
         accept_err_mess: "Niepotwierdzona akceptacja regulaminu"
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
               <input type="text" name="user" value={this.state.user} onChange={this.onChangeHandler}></input>
               {this.state.validationErrors.user_error && <span name="user_validation_message">{this.errorMessages.user_err_mess}</span>}
            </label>
            <label>
               Twój email:
               <input type="email" name="email" value={this.state.email} onChange={this.onChangeHandler}></input>
               {this.state.validationErrors.email_error && <span name="email_validation_message">{this.errorMessages.email_err_mess}</span>}
            </label>
            <label>
               Twoje hasło:
               <input type="password" name="pass" value={this.state.pass} onChange={this.onChangeHandler}></input>
               {this.state.validationErrors.pass_error && <span name="pass_validation_message">{this.errorMessages.pass_err_mess}</span>}
            </label>
            <label>
               Akceptacja regulaminu {}
               <input type="checkbox" name="accept" checked={this.state.accept} onChange={this.onChangeHandler}></input>
            </label>
            {this.state.validationErrors.accept_error && <span name="accept_validation_message">{this.errorMessages.accept_err_mess}</span>}
            <button type="submit">Zatwierdź dane</button>
         </form>
      );
   }
}

export default App;