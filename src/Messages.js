import React from "react";

const Messages = ({messages, sender}) => {
  return (
    <div>
      <ul className="message-list">
        {messages.map((message, index) => (
          <li
            key={index}
            className={
              message.username === sender.username
                ? "message sender"
                : "message recipient"
            }
          >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
