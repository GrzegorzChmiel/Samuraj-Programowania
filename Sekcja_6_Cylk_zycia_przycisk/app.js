class MainApp extends React.Component {
  constructor(props) {
    super(props);
    console.log("MainApp - constructor");

    this.state = {
      visible: true
    };
  }

  handlePrzelacz() {
    this.setState({
      visible: !this.state.visible
    });
  }

  componentDidMount() {
    console.log("MainApp - componentDidMount");
  }

  componentDidUpdate() {
    console.log("MainApp - componentDidUpdate");
  }

  render() {
    console.log("MainApp - render");
    return (
      <>
        <button onClick={() => this.handlePrzelacz()}>Przełącz</button>
        <br />
        <ChildOne parentVisible={this.state.visible} />
      </>
    );
  }
}

class ChildOne extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0
    };

    console.log("ChildOne - constructor");
  }

  componentDidMount() {
    console.log("ChildOne - componentDidMount");
    this.setState({
      number: this.state.number + 1
    });
  }

  componentDidUpdate() {
    console.log("ChildOne - componentDidUpdate");
  }

  render() {
    console.log("ChildOne - render");
    return (
      <div>
        <span>
          ChildOne - parent visible: {String(this.props.parentVisible)}
        </span>
        <br />
        <span>ChildOne - number: {this.state.number}</span>
      </div>
    );
  }
}

ReactDOM.render(<MainApp />, document.getElementById("root"));
