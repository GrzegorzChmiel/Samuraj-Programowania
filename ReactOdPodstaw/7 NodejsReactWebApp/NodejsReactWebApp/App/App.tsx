import * as React from "react";
import * as ReactDOM from "react-dom";

interface CounterProps {
   initialResult: number
}

class Counter extends React.Component<CounterProps> {

   state = {
      count: 0,
      result: this.props.initialResult
   };

   /*handleMathClick(type, number) {
      switch (type) {
         case "subtraction":
            this.setState((prevState) => this.makeSubtraction(prevState, number));
            break;
         case "addition":
            this.setState((prevState) => this.makeAddition(prevState, number));
            break;
         default:
            //Reset
            this.setState((prevState) => this.makeReset(prevState, number));
      }
   }*/

   handleMathClick = (type, number) => {
      switch (type) {
         case "subtraction":
            this.setState((prevState) => this.makeSubtraction(prevState, number));
            break;
         case "addition":
            this.setState((prevState) => this.makeAddition(prevState, number));
            break;
         default:
            //Reset
            this.setState((prevState) => this.makeReset(prevState, number));
      };
   }

   makeAddition(prevState, number) {
      return ({
         count: prevState.count + 1,
         result: prevState.result + number
      });
   }

   makeSubtraction(prevState, number) {
      return ({
         count: prevState.count + 1,
         result: prevState.result - number
      });
   }

   makeReset(prevState, number) {
      return ({
         count: prevState.count + 1,
         result: this.props.initialResult
      });
   }

   /*makeAddition = (prevState, number) => {
      return ({
         count: prevState.count + 1,
         result: prevState.result + number
      });
   };

   makeSubtraction = (prevState, number) => {
      return ({
         count: prevState.count + 1,
         result: prevState.result - number
      });
   };

   makeReset = (prevState, number) => {
      return ({
         count: prevState.count + 1,
         result: this.props.initialResult
      });
   };*/

   render() {
      return (
         <React.Fragment>
            {/*<MathButton text="-10" type="subtraction" number="10" clickHandler={this.handleMathClick.bind(this)}></MathButton>
            <MathButton text="-1" type="subtraction" number="1" clickHandler={this.handleMathClick.bind(this)}></MathButton>
            <MathButton text="Reset" type="reset" clickHandler={this.handleMathClick.bind(this)}></MathButton>
            <MathButton text="+1" type="addition" number="1" clickHandler={this.handleMathClick.bind(this)}></MathButton>
            <MathButton text="+10" type="addition" number="10" clickHandler={this.handleMathClick.bind(this)}></MathButton>*/}

            <MathButton text="-10" type="subtraction" number="10" clickHandler={this.handleMathClick}></MathButton>
            <MathButton text="-1" type="subtraction" number="1" clickHandler={this.handleMathClick}></MathButton>
            <MathButton text="Reset" type="reset" clickHandler={this.handleMathClick}></MathButton>
            <MathButton text="+1" type="addition" number="1" clickHandler={this.handleMathClick}></MathButton>
            <MathButton text="+10" type="addition" number="10" clickHandler={this.handleMathClick}></MathButton>

            <ResultPanel count={this.state.count} result={this.state.result}></ResultPanel>
         </React.Fragment>
      );
   }

}

const MathButton = (props) => {
   let numberValue = parseInt(props.number)
   return (
      <button onClick={() => props.clickHandler(props.type, numberValue)}>{props.text}</button>
   );
};

const ResultPanel = (props) => {
   return (
      <React.Fragment>
         <h1>Ilosc klikniec: {props.count}
            {props.count > 10 ? <span><br/> Licznik przekroczyl 10 ...</span> : null}
         </h1>
         <h1>Rezultat: {props.result}</h1>
      </React.Fragment>
   );
};

let initialResult = 8;
ReactDOM.render(<Counter initialResult={initialResult} />, document.getElementById("root"));