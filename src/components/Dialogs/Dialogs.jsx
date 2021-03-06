import React from "react";
import { NavLink } from "react-router-dom";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/dialogs-reducer";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage;
    let dialogsElements = state.dialogs.map((dialog) => {
      return <DialogItem name={dialog.name} id={dialog.id} />;
    });
    let messagesElements = state.messages.map((m) => {
      return <Message message={m.message} />;
    });

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = (event) => {
    let body = event.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };
  let newMessageBody = state.newMessageBody;



  return (
    <div className={s.dialogs}>
      <section className={s.dialogItems}>{dialogsElements}</section>
      <section className={s.messages}>{messagesElements}</section>
      <div className={s.sendform}>
        <textarea
          value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder="Enter your message"
          className={s.textarea}
        ></textarea>
        <button className={s.button} onClick={onSendMessageClick}>
          Send message
        </button>
      </div>
    </div>
  );
};
export default Dialogs;
