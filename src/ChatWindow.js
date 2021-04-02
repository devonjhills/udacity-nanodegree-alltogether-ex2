import React, { Component } from "react";
import AddMessage from "./AddMessage";
import Messages from "./Messages";

export default class ChatWindow extends Component {
  handleAddMsg = (text) => {
    this.props.handleAddMsg(this.props.sender.username, text);
  };

  render() {
    const { sender, messages } = this.props;
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{sender.username}</div>
        <Messages sender={sender} messages={messages} />
        <AddMessage handleAddMsg={this.handleAddMsg}/>
      </div>
    );
  }
}
