class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      ratio: 2
    };
  }

  handleClick() {
    this.setState(this.makeMultiplication);
  }

  makeMultiplication(prevState) {
    const newCounter = prevState.counter * prevState.ratio;
    const newState = {
      counter: newCounter
    };
    return newState;
  }

  componentDidUpdate(prevProps, prevState) {
    const newParams = this.modifyRatio();
    if (newParams.ratio != this.state.ratio) {
      this.setState(newParams);
    }
  }

  modifyRatio() {
    let newRatio = 0;
    if (this.state.counter > 1000 && this.state.ratio == 2) newRatio = 0.5;
    else if (this.state.counter < 1 && this.state.ratio == 0.5) newRatio = 2;
    else newRatio = this.state.ratio;

    return { ratio: newRatio };
  }

  render() {
    return (
      <>
        <p>
          Licznik mniejszy od 1000 - mnożenie przez 2.
          <br />
          Licznik większy od 1000 - mnożenie przez 0.5.
          <br />
          Licznik mniejszy od 1 - mnożenie przez 2.
        </p>
        <p>
          Aktualny licznik: <strong>{this.state.counter}</strong>
          <br />
          Aktualny współczynnik: <strong>{this.state.ratio}</strong>
        </p>
        <br />
        <button onClick={() => this.handleClick()}>Przelicz</button>
      </>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("root"));
