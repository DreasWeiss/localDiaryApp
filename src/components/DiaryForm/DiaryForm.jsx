// import { useState } from 'react';
import './DiaryForm.css';

import Button from '../Button/Button';

export default function DiaryForm({onSubmit}) {

	const addDiaryItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		onSubmit(formProps); 
	};

	return (
		<form className='diary-form' onSubmit={addDiaryItem }>
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag'/> 
			<textarea name="text" id="" cols="30" rows="10"></textarea>
			<Button text={'Save'} onClick={()=>console.log('Clicked')}/>
		</form>
	);
}
