const ResultViewer = props => {
  let { labelText, ratio, value } = props;
  let displayValue = value / ratio;
  const fixedDisplayValue = displayValue.toFixed(2);
  displayValue = displayValue <= 0 ? "" : fixedDisplayValue;
  return (
    <>
      <span>
        {`${labelText}`} <strong>{`${displayValue}`}</strong>
      </span>
    </>
  );
};

class ExchangeCounter extends React.Component {
  get euroRatio() {
    return 4.2;
  }

  get dollarRatio() {
    return 3.5;
  }

  state = {
    currentValue: 0
  };

  handleInputValueChange(event) {
    this.setState({
      currentValue: event.target.value
    });
  }

  render() {
    return (
      <>
        <div>
          <label htmlFor="inputValue">Podaj wartość do przeliczenia: </label>
          <input
            id="inputValue"
            type="number"
            onChange={() => {
              this.handleInputValueChange(event);
            }}
          />
        </div>
        <div>
          <ResultViewer
            labelText="Wartość w $:"
            ratio={this.dollarRatio}
            value={this.state.currentValue}
          ></ResultViewer>
        </div>
        <div>
          <ResultViewer
            labelText="Wartość w EUR:"
            ratio={this.euroRatio}
            value={this.state.currentValue}
          ></ResultViewer>
        </div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
