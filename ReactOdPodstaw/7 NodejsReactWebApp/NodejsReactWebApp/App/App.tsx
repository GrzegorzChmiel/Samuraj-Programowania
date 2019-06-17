import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {

   state = {
      inputValue: ""
   }

   handleResetClick = (evt) => {
      this.setState(this.resetState, this.resetStateCallback)
   }

   handleInputChange = (evt) => {
      let value = evt.target.value.toUpperCase()
      this.setState((prevState, props) => {
         return ({
            inputValue: value
         })
      }, this.inputChangeCallback)
   }

   inputChange = (prevState, props) => {

   }

   inputChangeCallback = () => {

   }

   resetState = (prevState, props) => {
      return ({
         inputValue: "value cancelled"
      })
   }

   resetStateCallback = () => {

   }

   render() {
      return (
         <React.Fragment>
            <input type="text" onChange={this.handleInputChange} value={this.state.inputValue} placeholder="Wpisz tekst..." />
            <button type="reset" onClick={this.handleResetClick}>Reset</button>
            <h1 className="title">{this.state.inputValue}</h1>
         </React.Fragment>
      )
   }
}


ReactDOM.render(<App />, document.getElementById("root"));
