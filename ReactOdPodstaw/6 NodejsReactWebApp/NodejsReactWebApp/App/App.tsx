import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppState {
   text: string
}

interface AppProps {

}
//class App extends React.Component<{}, AppState> {
class App extends React.Component<AppProps, AppState> {
   constructor(props) {
      super(props)

      this.state = {
         text: ""
      }

      this.handleClick = this.handleClick.bind(this);
   }

   /*
   state = {
      text: ""
   };
   */

   /*
   handleClick() {
      this.setState(() => {
         return {
            text: this.state.text + "A"
         };
      });
   }
   */

   /*
   handleClick() {
      this.setState(() => ({
         text: this.state.text + "A"
      })
      )
   }
   */

   handleClick() {
      this.setState((prevState) => {
         return {
            text: prevState.text + "A"
         }
      })
   }

   render() {
      return (
         <React.Fragment>
            {/*<button onClick={this.handleClick.bind(this)}>Dodaj "A"</button>*/}
            <button onClick={this.handleClick}>Dodaj "A"</button>
            <h1>{this.state.text}</h1>
         </React.Fragment>
      );
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
