import * as React from "react";
import * as ReactDOM from "react-dom";

interface CounterProps {
   initialResult: number
}

class Counter extends React.Component<CounterProps> {

   state = {
      count: 0,
      result: this.props.initialResult
   }

   handleMathClick(type, number) {
      switch (type) {
         case "subtraction":
            this.setState((prevState) => this.makeSubtraction(prevState, number));
            break;
         case "addition":
            this.setState((prevState) => this.makeAddition(prevState, number));
            break;
         default:
            //Reset
            this.setState((prevState) => this. makeReset(prevState, number));
      }
   }

   makeAddition(prevState, number) {
      return ({
         count: prevState.count + 1,
         result: prevState.result + number 
      })
   }

   makeSubtraction(prevState, number) {
      return ({
         count: prevState.count + 1,
         result: prevState.result - number
      })
   }

   makeReset(prevState, number) {
      return ({
         count: prevState.count + 1,
         result: 0
      })
   }

   render() {
      return (
         <React.Fragment>
            <button onClick={this.handleMathClick.bind(this, "subtraction", 10)}>-10</button>
            <button onClick={this.handleMathClick.bind(this, "subtraction", 1)}>-1</button>
            <button onClick={this.handleMathClick.bind(this, "reset")}>Reset</button>
            <button onClick={this.handleMathClick.bind(this, "addition", 1)}>+1</button>
            <button onClick={this.handleMathClick.bind(this, "addition", 10)}>+10</button>

            <h1>Ilosc klikniec: {this.state.count}</h1>
            <h1>Rezultat: {this.state.result}</h1>
         </React.Fragment>
      );
   }

}

let initialResult = 8;
ReactDOM.render(<Counter initialResult={initialResult} />, document.getElementById("root"));
