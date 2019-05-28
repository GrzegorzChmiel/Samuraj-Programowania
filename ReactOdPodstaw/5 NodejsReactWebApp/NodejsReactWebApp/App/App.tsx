import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
   state = {
      text: ""
   }

   handleClick = () => {
      this.setState({
         text: this.state.text + "A"
      })
   }

   render() {
      return (
         <React.Fragment>
            <button onClick={this.handleClick}>Dodaj "A"</button>
            <h1>{this.state.text}</h1>
         </React.Fragment>
      )
   }
}

ReactDOM.render(<App/>, document.getElementById("root"));
