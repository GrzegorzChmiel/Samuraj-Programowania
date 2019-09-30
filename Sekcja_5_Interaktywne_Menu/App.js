class App extends React.Component {
  state = {
    items: [
      { id: 1, name: "herbata", active: true, price: 5 },
      { id: 2, name: "ziemniaki", active: false, price: 10 },
      { id: 3, name: "kasza", active: false, price: 40 },
      { id: 4, name: "zupa wodna", active: false, price: 10 },
      { id: 5, name: "wrzątek", active: false, price: 35 },
      { id: 6, name: "chleb", active: true, price: 25 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <Header items={this.state.items} />
        <ListItems items={this.state.props} />
      </React.Fragment>
    );
  }
}
