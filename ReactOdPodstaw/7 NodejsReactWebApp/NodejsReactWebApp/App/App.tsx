import * as React from "react";
import * as ReactDOM from "react-dom";

interface stateDefifition {
   messageIsActive: boolean
}
class Message extends React.Component<{}, stateDefifition> {
    messageText: string;
    clickHandler: any;

   constructor(props) {
      super(props);

      this.state = {
         messageIsActive: false
      };

      this.messageText = "Testowy tekst paragrafu";

      this.clickHandler = this.buttonClickHandler.bind(this)
   }

   buttonClickHandler() {
      debugger
      this.setState((prevState) => ({
         messageIsActive: !prevState.messageIsActive
      }))
   }

   setButtonValue = () => {
      return this.state.messageIsActive ? "Ukryj" : "Pokaz"
   }

   render() {
      return (
         <React.Fragment>
            <button onClick={this.clickHandler}>{this.setButtonValue()}</button>
            {/*<p>{this.state.messageIsActive && this.messageText}</p>*/}
            {/*{ this.state.messageIsActive ? <p>{this.messageText}</p> : null }*/}
            {this.state.messageIsActive && <p>{this.messageText}</p>}
         </React.Fragment>
      )
   }
}

ReactDOM.render(<Message />, document.getElementById("root"));
