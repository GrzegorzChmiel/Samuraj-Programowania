class Form extends React.Component {
  state = {
    city: "",
    cityDesc: "",
    cityPref: false,
    cityVisitCount: "1"
  };

  handleCityChange = event => {
    const city = event.target.value;
    this.setState({ city });
  };

  handleCityDescChange = event => {
    const cityDesc = event.target.value;
    this.setState({ cityDesc });
  };

  handleCityPrefChange = event => {
    const cityPref = event.target.checked;
    this.setState({ cityPref });
  };

  handleCityVisitCountChange = event => {
    const cityVisitCount = event.target.value;
    this.setState({ cityVisitCount });
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor="city">Podaj nazwę miasta: </label>
          <input
            id="city"
            type="text"
            value={this.state.city}
            onChange={this.handleCityChange}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="cityDesc">Podaj opis miasta: </label>
          <textarea
            id="cityDesc"
            rows="5"
            value={this.state.cityDesc}
            onChange={this.handleCityDescChange}
          ></textarea>
        </div>
        <br />
        <div>
          <label htmlFor="cityPref">Czy miasto preferowane: </label>
          <input
            type="checkbox"
            id="cityPref"
            checked={this.state.cityPref}
            onChange={this.handleCityPrefChange}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="cityVisitCount">Ilość wizyt w mieście: </label>
          <select
            id="cityVisitCount"
            value={this.state.cityVisitCount}
            onChange={this.handleCityVisitCountChange}
          >
            <option value="1">1 raz</option>
            <option value="2">2 razy</option>
            <option value="3">3 razy</option>
            <option value="4">4 razy</option>
            <option value="5">5 razy</option>
            <option value="6">6 razy</option>
          </select>
        </div>
      </>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
