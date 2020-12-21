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
	let dialogsData = [
	{id: 1, name:'Albert'},
	{id: 2, name:'Viktoria'},
	{id: 3, name:'Viktor'},
	{id: 4, name:'Tatyana'},
	{id: 5, name:'Evgeniy'},
	{id: 6, name:'Kurul'},
];
	let messagesData = [
	{id: 1, message:'Hello'},
	{id: 2, message:'How are you?'},
	{id: 3, message:'What about your development?'},
	{id: 4, message:'Yo'},
	{id: 5, message:'Yo'},
	{id: 6, message:'Yo'},
];
		return (
			<div className={s.dialogs}>
				<section className={s.dialogItems}>
			<DialogItem name={dialogsData[0].name} id={dialogsData.[0].id}/>
			<DialogItem name='Viktoria' id='2'/>
			<DialogItem name='Viktor' id='3'/>
			<DialogItem name='Tatyana' id='4'/>
			<DialogItem name='Evgeniy' id='5'/>
			<DialogItem name='Kurul' id='6'/>
				</section>
				<section className={s.messages}>
					<Message message={messagesData[0].message}/>
					<Message message='How are you?'/>
					<Message message='What about your development?'/>
				</section>
			</div>
		)
	}
	export default Dialogs;