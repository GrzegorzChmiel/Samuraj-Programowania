const UserListItem = props => {
  return (
    <li>
      <div>
        {props.UserName} <button onClick={props.RemoveHandler}>Usuń</button>
      </div>
    </li>
  );
};

class UserList extends React.Component {
  state = {
    users: ["Jan Nowak", "Piotr Kowalski", "Janusz Sawicki"]
  };

  createListItem = (id, user, handler) => {
    return (
      <UserListItem
        key={id}
        UserName={user}
        RemoveHandler={handler}
      ></UserListItem>
    );
  };

  removeUserHandler = index => {
    let users = this.state.users.map(x => x);
    users.splice(index, 1);
    this.setState({
      users
    });
  };

  render() {
    const listItems = new Array(this.state.users.length);
    for (let index = 0; index < listItems.length; index++) {
      const element = this.state.users[index];
      listItems[index] = this.createListItem(
        index,
        element,
        this.removeUserHandler.bind(this, index)
      );
    }
    return (
      <>
        <ul>{listItems}</ul>
      </>
    );
  }
}

ReactDOM.render(<UserList />, document.getElementById("root"));
