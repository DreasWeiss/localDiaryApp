import './Button.css';
import { useState } from 'react';

export default function Button() {

	const [text, setText] = useState('Save');
	console.log('rerender');

	const clicked = () => {
		setText('Close');
		return console.log('Clicked');
	};

	return (
		<button 
			className="button accent"
			// onClick={()=>console.log('Hello World')}
			// onClick={clicked()} - !!! при первичной отрисовке будет исполнена !!!
			onClick={clicked}
		>{text}</button>
	);
}
 