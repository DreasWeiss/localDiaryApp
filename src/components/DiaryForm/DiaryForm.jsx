import { useState } from 'react';
import './DiaryForm.css';

import Button from '../Button/Button';

export default function DiaryForm({onSubmit}) {

	const [formValidState, setFormValidState] = useState({
		title: true,
		post: true,
		date: true
	});

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
		<form className='diary-form' onSubmit={addDiaryItem }>
			<input type="text" name='title' style={{border: formValidState.title ? undefined : '1px solid red'}}/>
			<input type="date" name='date' style={{border: formValidState.date ? undefined : '1px solid red'}}/>
			<input type="text" name='tag'/> 
			<textarea name="post" id="" cols="30" rows="10" style={{border: formValidState.post ? undefined : '1px solid red'}}></textarea>
			<Button text={'Save'}/>
		</form>
	);
}
