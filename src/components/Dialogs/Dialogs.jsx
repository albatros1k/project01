import React from 'react'
import s from "./Dialogs.module.css";
	const Dialogs = (props) =>{
		return (
			<div className={s.dialogs}>
				<section className={s.dialogItems}>
			<p className={s.dialogItem}>
				Albert
			</p>
			<p className={s.dialogItem}>
				Viktoria
			</p>
			<p className={s.dialogItem}>
				Viktor
			</p>
			<p className={s.dialogItem}>
				Tatyana
			</p>
			<p className={s.dialogItem}>
				Evgeniy
			</p>
			<p className={s.dialogItem}>
				Roman
			</p>
				</section>
				<section className={s.messages}>
					<p className={s.message}>Hello</p>
					<p className={s.message}>How are you?</p>
					<p className={s.message}>What about your development</p>
				</section>
			</div>
		)
	}
	export default Dialogs;