import React from "react";

const Message = ({ name, message }) => {
    return (
        <div className="message">
            <div className="message__author">{ name }</div>
            <div className="message__text">{ message }</div>
        </div>
    )
};

export default Message;
