import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Boby/Body';

import Header from './components/Header/Header';
import DiaryList from './components/DiaryList/DiaryList';
import DiaryAddButton from './components/DiaryAddButton/DiaryAddButton'; 
import DiaryForm from './components/DiaryForm/DiaryForm';

import { useEffect, useState } from 'react';

// const INITIAL_DATA = [
// 	{
// 		id: 1,
// 		title: 'Prepairing for course update',
// 		date: new Date(),
// 		post: 'Горные походы открывают удивительные природные ландшафт' 
// 	},
// 	{
// 		id: 2,
// 		title: 'Hiking to the mountains',
// 		date: new Date(),
// 		post: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель' 
// 	},
// 	{
// 		id: 3,
// 		title: 'First note',
// 		date: new Date(),
// 		post: 'Горные походы открывают удивительные природные ландшафт' 
// 	}
// ];

function App() { 

	// const [items, setItems] = useState(INITIAL_DATA);
	const [items, setItems] = useState([]);

	// // vvv!NO!vvv Error: Too many re-renders. React limits the number...
	// const data = JSON.parse(localStorage.getItem('data'));
	// if (data) {
	// 	setItems(data.map(i=>({
	// 		...i,
	// 		date: new Date(i.date)
	// 	})));
	// }
	// // ^^^!NO!^^^ Error: Too many re-renders. React limits the number...

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));
		if (data) {
			setItems(data.map(i=>({
				...i,
				date: new Date(i.date)
			})));
		}
	},[]);

	useEffect(() => {
		if (items.length) {
			console.log('saved');
			localStorage.setItem('data', JSON.stringify(items)); 
		}
	},[items]); 

	const addItem = (item) => {
		setItems(oldItems=>[...oldItems, {
			post: item.text,
			date: new Date(item.date),
			title: item.title,
			tag: item.tag,
			id: oldItems.length > 0 ? Math.max(...oldItems.map(i=>i.id)) + 1 : 1
		}]);
	};

	return <div className='app'>
		<LeftPanel>
			<Header/>
			<DiaryAddButton />
			<DiaryList items={items}/>
		</LeftPanel>
		<Body>
			<DiaryForm onSubmit={addItem}/>
		</Body>
	</div>;
}

export default App;
