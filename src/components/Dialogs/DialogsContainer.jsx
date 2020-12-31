import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import store, {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../redux/store";
import DialogItem from "./DialogItem/DialogItem";
import Dialogs from "./Dialogs";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";




let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
  updateNewMessageBody: ()=>{
  dispatch(sendMessageCreator());
  },
  sendMessage: (body)=>{
  dispatch(updateNewMessageBodyCreator(body));
  }
  }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;
