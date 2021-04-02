import React, { Component } from "react";
import ChatWindow from "./ChatWindow";
import logo from "./logo.svg";
import "./App.css";

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  state = {
    messages: [
      { username: "Amy", text: "Hi, Jon!" },
      { username: "Amy", text: "How are you?" },
      { username: "John", text: "Hi, Amy! Good, you?" },
    ],
  };

  users = [{ username: "Amy" }, { username: "John" }];

  handleAddMsg = (username, text) => {
    const newMessage = {
      ["username"]: username,
      ["text"]: text,
    };
    this.setState((prevState) => ({
      messages: [...prevState.messages, newMessage],
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {this.users.map((user) => (
            <ChatWindow
              key={user.username}
              sender={user}
              messages={this.state.messages}
              handleAddMsg={this.handleAddMsg}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
