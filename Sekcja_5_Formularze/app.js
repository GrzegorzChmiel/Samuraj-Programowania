class Form extends React.Component {
  state = {
    city: "",
    cityDesc: "",
    cityPref: false,
    cityVisitCount: "1"
  };

  handleChange = event => {
    let changeObject = {};
    if (event.target.type == "checkbox") {
      changeObject = {
        [event.target.name]: event.target.checked
      };
    } else {
      changeObject = {
        [event.target.name]: event.target.value
      };
    }
    this.setState(changeObject);
  };

  render() {
    return (
      <>
        <div>
          <label htmlFor="city">Podaj nazwę miasta: </label>
          <input
            id="city"
            name="city"
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
            name="cityDesc"
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
            name="cityPref"
            checked={this.state.cityPref}
            onChange={this.handleCityPrefChange}
          ></input>
        </div>
        <br />
        <div>
          <label htmlFor="cityVisitCount">Ilość wizyt w mieście: </label>
          <select
            id="cityVisitCount"
            name="cityVisitCount"
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
