import * as React from "react";
import * as ReactDOM from "react-dom";

interface AppProps {
   //propsBtnName: string
}
class App extends React.Component<AppProps, {}> {
   state = {
      text: "",
      //stateBtnName: "State Dodaj cyfre"
   };

   handleClick = () => {
      const number = Math.floor(Math.random() * 10)
      this.setState({
         text: this.state.text + number
      });
   };

   render() {
      const varBtnName = "Zmienna dodaj cyfre"
      return (
         <React.Fragment>
            {/*<button onClick={this.handleClick}>{this.state.stateBtnName}</button>*/}
            {/*<button onClick={this.handleClick}>{this.props.propsBtnName}</button>*/}
            <button onClick={this.handleClick}>{varBtnName}</button>
            {/*<button onClick={this.handleClick}>Dodaj cyfre</button>*/}
            <PanelResult text={this.state.text}>BB</PanelResult>
         </React.Fragment>
      );
   }
}

const PanelResult = (props) => {
   return <h1>{props.text}  +  {props.children}</h1>;
};

//ReactDOM.render(<App propsBtnName = "Props Dodaj cyfre" />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
