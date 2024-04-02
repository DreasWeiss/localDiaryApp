import { useEffect, useState } from 'react';
import styles from './DiaryForm.module.css';
import cn from 'classnames';
// import classNames from 'classnames';

import Button from '../Button/Button';

const INITIAL_STATE = {
	title: true,
	post: true,
	date: true
};

export default function DiaryForm({onSubmit}) {

	// const [formValidState, setFormValidState] = useState({ 
	// 	title: true,
	// 	post: true,
	// 	date: true
	// });
	const [formValidState, setFormValidState] = useState(INITIAL_STATE);

	useEffect(()=> {
		let timerID;
		if (!formValidState.title || !formValidState.post || !formValidState.date) {
			timerID = setTimeout(()=>{
				setFormValidState(INITIAL_STATE);
			}, 2000);
		}
		return () => {
			clearTimeout(timerID);
		};
	},[formValidState]);

	const addDiaryItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		let isFormValid = true;
		if (!formProps.title?.trim().length) {
			setFormValidState(state=>({...state, title: false}));
			isFormValid = false;
		} else {
			setFormValidState(state=>({...state, title: true}));
		}
		if (!formProps.post?.trim().length) {
			setFormValidState(state=>({...state, post: false}));
			isFormValid = false;
		} else {
			setFormValidState(state=>({...state, post: true}));
		}
		if (!formProps.date) {
			setFormValidState(state=>({...state, date: false}));
			isFormValid = false;
		} else {
			setFormValidState(state=>({...state, date: true}));
		}
		if(!isFormValid){
			return;
		}
		onSubmit(formProps);
	};

	return (
		<form className={styles['diary-form']} onSubmit={addDiaryItem }>
			<div>
				<input 
					type="text" 
					name='title' 
					className={cn(styles['input-title'], {
						[styles.invalid] : !formValidState.title
					})}/>
				{/* className={cn(styles.input, styles.invalid )}/> */}
				{/* className={`${styles['input']} ${formValidState.title ? '' : styles['invalid']}`}/> */}
				{/* style={{border: formValidState.title ? undefined : '1px solid red'}} */}
				{/* className={`input ${formValidState.title ? '' : 'invalid'}`}/>  */}
			</div>
			{/* <input 
				type="text" 
				name='title' 
				className={cn(styles.input, {
					[styles.invalid] : !formValidState.title
				}, styles.title )}/> */}
			{/* className={cn(styles.input, styles.invalid )}/> */}
			{/* className={`${styles['input']} ${formValidState.title ? '' : styles['invalid']}`}/> */}
			{/* style={{border: formValidState.title ? undefined : '1px solid red'}} */}
			{/* className={`input ${formValidState.title ? '' : 'invalid'}`}/>  */}
			<div className={styles['form-row']}>
				<label 
					htmlFor="date" 
					className={styles['form-label']}>
					<img 
						src="/calendar.svg" 
						alt="calendar image" />
					<span>Date</span>
				</label>
				<input 
					type="date" 
					name='date' 
					id='date'
					className={cn(styles.input, {
						[styles.invalid] : !formValidState.date
					})}/>
			</div>
			<div className={styles['form-row']}>
				<label 
					htmlFor="tag" 
					className={styles['form-label']}>
					<img 
						src="/dir.svg" 
						alt="directory/folder image" />
					<span>Tags</span>
				</label>
				<input 
					type="text" 
					name='tag'
					id='tag'
					className={styles.input}
				/>  
			</div>
			<textarea 
				name="post" 
				id="" 
				cols="30" 
				rows="10" 
				className={cn(styles.input, {
					[styles.invalid]: !formValidState.post
				})}>
			</textarea>
			<Button text={'Save'}/>
		</form>
	);
}
