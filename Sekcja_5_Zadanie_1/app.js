class ShowAugur extends React.Component {
  constructor(props) {
    super(props);

    this.handleNewAugurChangePrv = this.handleNewAugurChange.bind(this);
  }

  augurs = ["Wróżba 1", "Wróżba 2", "Wróżba 3"];

  state = {
    currentIndex: 0,
    newAugur: ""
  };

  handleShowButtonClick() {
    const augursSize = this.augurs.length;
    const randomIndex = this.getRandomNumber(augursSize - 1);
    this.setState({
      currentIndex: randomIndex
    });
  }

  getRandomNumber(maxValue) {
    let result = 1;
    do {
      result = Math.random() * 10;
      result = Math.floor(result);
    } while (result > maxValue || result == this.state.currentIndex);
    return result;
  }

  handleFormSubmit(evt) {
    evt.preventDefault();
    this.addNewAugur();
    this.showAllAugurs();
  }

  showAllAugurs() {
    var message = this.augurs.join("\n");
    alert(message);
  }

  handleNewAugurChange(evt) {
    this.setState({
      newAugur: evt.target.value
    });
  }

  addNewAugur() {
    if (
      this.state.newAugur != "" &&
      this.augurs.findIndex(a => a == this.state.newAugur) == -1
    ) {
      this.augurs = this.augurs.concat(this.state.newAugur);
    }

    this.setState({
      newAugur: ""
    });
  }

  render() {
    return (
      <>
        <button id="showButton" onClick={this.handleShowButtonClick.bind(this)}>
          Pokaż wróżbę
        </button>
        <br />
        <h4>Wybrana wróżba:</h4>
        <h4>{this.augurs[this.state.currentIndex]}</h4>
        <hr />
        <h3>Dodawanie wróżby</h3>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div>
            <label htmlFor="newAugur">Nazwa nowej wróżby: </label>
            <input
              type="text"
              id="newAugur"
              value={this.state.newAugur}
              onChange={this.handleNewAugurChangePrv}
            />
          </div>
          <input type="submit" value="Dodaj wróżbę"></input>
        </form>
      </>
    );
  }
}

ReactDOM.render(<ShowAugur />, document.getElementById("root"));
