import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/dialogs-reducer";


function Dialogs(props) {

    let dialogsElement = props.dialogsPage.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesElement = props.dialogsPage.messagesData.map(message =>
        <Message message={message.message}/>)

    function sendMessage() {
        props.dispatch(addMessageActionCreator())
    }

    function onMessageChange(e) {
        let messageText = e.target.value
        props.dispatch(onMessageChangeActionCreator(messageText))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messagesElement}
            </div>
            <div>
                <div className={s.textAria}>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText}
                              placeholder='enter your message...'/>
                    <button className={s.button} onClick={sendMessage}>send</button>
                </div>
                <div className={s.button}>
                </div>
            </div>
        </div>
    )
        ;
}

export default Dialogs