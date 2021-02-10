import React from "react";
import io from "socket.io-client";

import Message from "./Message";

const socket = io.connect("ws://localhost:3000/");

function Chat () {
    let userData = localStorage.getItem("userData")
    let userName = JSON.parse(userData).userName

    const [state, setState] = React.useState({name: userName, message: ''});
    const [chat, setChat] = React.useState([]);
    const [usersCount, setUsersCount] = React.useState(0);

    React.useEffect(() => {
        socket.emit('userOnline')

        socket.on('userOnline', usersOnline => {
            setUsersCount(usersOnline)
        })

        socket.on('message', ({ name, message }) => {
            setChat([...chat, { name, message }])
        })
    })

    const onTextChange = e => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const onMessageSubmit = e => {
        e.preventDefault()
        const { name, message } = state
        socket.emit('message', { name, message })
        setState({name, message: ''})
        document.getElementById("msgText").value = ''
    }

    const renderChat = () => {
        return chat.map(({name, message}, index) => (
            <Message key={index} name={name} message={message} />
        ))
    }

    return (
        <div className="chat">
            <div className="chat__block">
                <div className="chat__block_heading">Общий чат</div>
                <div className="chat__block_window">
                    <div className="chat__block_window_chat">
                        {renderChat()}
                    </div>
                </div>
                <form onSubmit={onMessageSubmit} className="chat__block_person">
                    <p className="chat__block_person_online">Онлайн: {usersCount}</p>
                    <i className="fas fa-folder-plus"></i>
                    <textarea id="msgText" name="message" className="chat__block_person" onChange={e => onTextChange(e)} placeholder="Текст сообщения..." />
                    <button className="chat__block_person_btn" ><i className="fas fa-paper-plane"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Chat;
