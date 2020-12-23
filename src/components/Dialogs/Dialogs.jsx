import React from "react";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogItem/Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Dialogs";

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "Albert" },
    { id: 2, name: "Viktoria" },
    { id: 3, name: "Viktor" },
    { id: 4, name: "Tatyana" },
    { id: 5, name: "Evgeniy" },
    { id: 6, name: "Kurul" },
  ];
  let messagesData = [
    { id: 1, message: "Hello" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What about your development?" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
    { id: 6, message: "Yo" },
  ];
  let dialogsElements = dialogs.map((dialog) => {
    return <DialogItem name={dialog.name} id={dialog.id} />;
  });
  let messagesElements = messagesData.map((m) => {
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
