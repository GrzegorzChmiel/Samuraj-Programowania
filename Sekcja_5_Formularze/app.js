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
      <br />
    </>
  );
};

class ExchangeCounter extends React.Component {
  currencies = [
    { id: 1, name: "pound", ratio: 4.8, title: "Wartość w funtach:" },
    { id: 2, name: "dollar", ratio: 3.5, title: "Wartość w dolarach:" },
    { id: 3, name: "euro", ratio: 4.2, title: "Wartość w euro:" }
  ];

  state = {
    currentValue: 0
  };

  createViewer = currency => {
    return (
      <ResultViewer
        key={currency.id}
        labelText={currency.title}
        ratio={currency.ratio}
        value={this.state.currentValue}
      ></ResultViewer>
    );
  };

  handleInputValueChange(event) {
    this.setState({
      currentValue: event.target.value
    });
  }

  render() {
    const resultViewers = this.currencies.map(currency =>
      this.createViewer(currency)
    );
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
        <div>{resultViewers}</div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
