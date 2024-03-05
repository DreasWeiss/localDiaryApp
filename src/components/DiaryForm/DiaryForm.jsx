import { useState } from 'react';
import './DiaryForm.css';

import Button from '../Button/Button';

export default function DiaryForm() {

	const [inputData, setInputData] = useState('');

	const inputChange = (e) => { 
		console.log(e);
		console.log(e.target.value);
		setInputData(e.target.value);
	};

	const addDiaryItem = (e) => {
		e.preventDefault(); 
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
	};

	return (
		<form className='diary-form' onSubmit={addDiaryItem }>
			<input type="text" name='title'/>
			<input type="date" name='date'/>
			<input type="text" name='tag' value={inputData}  onChange={inputChange}/> 
			<textarea name="post" id="" cols="30" rows="10"></textarea>
			<Button text={'Save'}/>
		</form>
	);
}
