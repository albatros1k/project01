import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
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
    </div>
  );
};
export default Dialogs;
