declare var require: any

var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
   state = {
      counter: 0
   };
   render() {
      return (
         <div>
            <h1>Hello from React!!</h1>
         </div>
      );
   }
}

ReactDOM.render(<App />, document.getElementById("root"));
