const ResultViewer = props => {
  let { labelText, value } = props;
  const displayValue = value == "0" ? "" : value;
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
  state = {
    currentValue: 0,
    currentChoice: "oranges"
  };

  static defaultProps = {
    currencies: [
      { id: 1, name: "pound", ratio: 4.8, title: "Wartość w funtach:" },
      { id: 2, name: "dollar", ratio: 3.5, title: "Wartość w dolarach:" },
      { id: 3, name: "euro", ratio: 4.2, title: "Wartość w euro:" },
      { id: 4, name: "zloty", ratio: 1, title: "Wartość w złotówkach:" }
    ],
    products: [
      { name: "electricity", price: 0.5 },
      { name: "gas", price: 5.02 },
      { name: "oranges", price: 3.4 }
    ]
  };

  createViewer = currency => {
    const quantity = this.state.currentValue;
    const price = this.getChoosenProduct().price;
    const cost = quantity * price;
    const costInCurrency = (cost / currency.ratio).toFixed(2);
    return (
      <ResultViewer
        key={currency.id}
        labelText={currency.title}
        value={costInCurrency}
      ></ResultViewer>
    );
  };

  getChoosenProduct = () => {
    const currentChoice = this.state.currentChoice;
    const result = this.props.products.find(x => x.name == currentChoice);
    return result;
  };

  getProductSuffix = () => {
    switch (this.state.currentChoice) {
      case "electricity":
        return "kWh";
        break;
      case "gas":
        return "L";
        break;
      case "oranges":
        return "kg";
        break;
      default:
        return "";
        break;
    }
  };

  handleInputValueChange(event) {
    this.setState({ currentValue: event.target.value });
  }

  handleProductSelectionChange(event) {
    this.setState({ currentChoice: event.target.value });
  }

  render() {
    const resultViewers = this.props.currencies.map(currency =>
      this.createViewer(currency)
    );
    return (
      <>
        <div>
          <label htmlFor="productSelection">Wybierz produkt: </label>
          <select
            id="productSelection"
            value={this.state.currentChoice}
            onChange={() => {
              this.handleProductSelectionChange(event);
            }}
          >
            <option value="electricity">Prąd</option>
            <option value="gas">Benzyna</option>
            <option value="oranges">Pomarańcze</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="inputValue">Podaj wartość do przeliczenia: </label>
          <input
            id="inputValue"
            type="number"
            onChange={() => {
              this.handleInputValueChange(event);
            }}
          />
          {` ${this.getProductSuffix()}`}
        </div>
        <br />
        <div>{resultViewers}</div>
      </>
    );
  }
}

ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
