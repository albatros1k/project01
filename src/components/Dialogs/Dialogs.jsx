import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessage = React.createRef();
  const addMessage = () => {
    let message = newMessage.current.value;
    alert(message);
  };
  let dialogsElements = props.state.dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });
  let messagesElements = props.state.messages.map((m) => {
    return <Message message={m.message} />;
  });
  return (
    <div className={s.dialogs}>
      <section className={s.dialogItems}>{dialogsElements}</section>
      <section className={s.messages}>{messagesElements}</section>
      <div className={s.sendform}>
        <textarea className={s.textarea}ref={newMessage}></textarea>
        <button className={s.button} onClick={addMessage}>
          Send message
        </button>
      </div>
    </div>
  );
};
export default Dialogs;
