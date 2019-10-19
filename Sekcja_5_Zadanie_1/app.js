class ShowAugur extends React.Component {
  augurs = ["Wróżba 1", "Wróżba 2", "Wróżba 3"];

  state = {
    currentIndex: 0
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

  render() {
    return (
      <>
        <button id="showButton" onClick={this.handleShowButtonClick.bind(this)}>
          Pokaż wróżbę
        </button>
        <br />
        <h3>Wybrana wróżba:</h3>
        <h3>{this.augurs[this.state.currentIndex]}</h3>
      </>
    );
  }
}

ReactDOM.render(<ShowAugur />, document.getElementById("root"));
