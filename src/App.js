import React from "react";
import logo from "./logo.svg";
import "./App.css";

const commentsDatabase = [
  { id: 1, Title: "Tytuł wiadomości: 1", Body: "Treść wiadomości: 1" },
  { id: 2, Title: "Tytuł wiadomości: 2", Body: "Treść wiadomości: 2" }
];

function insertComment() {
  const newId = commentsDatabase.length + 1;
  const newTitle = `Tytuł wiadomości: ${newId}`;
  const newBody = `Treść wiadomości: ${newId}`;
  const newComment = {
    id: newId,
    Title: newTitle,
    Body: newBody
  };
  commentsDatabase.push(newComment);
}

setInterval(insertComment, 5000);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [...commentsDatabase]
    };

    this.createCommentRow = this.createCommentRow.bind(this);

    this.updateDisplay = this.updateDisplay.bind(this);

    this.intervalId = 0;
  }

  createCommentRow(comment) {
    return (
      <div key={comment.id}>
        <strong>{comment.Title}</strong>
        <p>{comment.Body}</p>
      </div>
    );
  }

  updateDisplay() {
    if (this.state.data.length !== commentsDatabase.length) {
      const newState = {
        data: [...commentsDatabase]
      };
      this.setState(newState);
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.updateDisplay, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const commentsRows = this.state.data.map(this.createCommentRow);
    commentsRows.reverse();
    return (
      <div className="App">
        <div>{commentsRows}</div>
      </div>
    );
  }
}

export default App;
