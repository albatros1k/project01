import React from 'react'
import { NavLink } from 'react-router-dom';
import s from "./Dialogs.module.css";
const DialogItem = (props)=>{
		let path = `/dialogs/${props.id}`
		return (
			<p className={s.dialogItem}>
				<NavLink to ={path}>{props.name}</NavLink>
			</p>
		)
	}
const Message = (props)=>{
		return (
			<p className={s.message}>{props.message}</p>
		)
	}
const Dialogs = (props) =>{
		return (
			<div className={s.dialogs}>
				<section className={s.dialogItems}>
			<DialogItem name='Albert' id='1'/>
			<DialogItem name='Viktoria' id='2'/>
			<DialogItem name='Viktor' id='3'/>
			<DialogItem name='Tatyana' id='4'/>
			<DialogItem name='Evgeniy' id='5'/>
			<DialogItem name='Kurul' id='6'/>
				</section>
				<section className={s.messages}>
					<Message message='Hello'/>
					<Message message='How are you?'/>
					<Message message='What about your development?'/>
				</section>
			</div>
		)
	}
	export default Dialogs;