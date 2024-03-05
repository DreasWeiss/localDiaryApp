import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Boby/Body';

import CardButton from './components/CardButton/CardButton';
import DiaryItem from './components/DiaryItem/DiaryItem';
import Header from './components/Header/Header';
import DiaryList from './components/DiaryList/DiaryList';
import DiaryAddButton from './components/DiaryAddButton/DiaryAddButton'; 
import DiaryForm from './components/DiaryForm/DiaryForm';
// import Button from './components/Button/Button';

import { useState } from 'react';

const INITIAL_DATA = [
	{
		title: 'Prepairing for course update',
		date: new Date(),
		text: 'Горные походы открывают удивительные природные ландшафт' 
	},
	{
		title: 'Hiking to the mountains',
		date: new Date(),
		text: 'Различают альпинизм и горный туризм. Если в альпинизме главная цель' 
	},
	{
		title: 'First note',
		date: new Date(),
		text: 'Горные походы открывают удивительные природные ландшафт' 
	}
];

function App() { 

	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = (item) => {
		setItems(olditems=>[...olditems, {
			text: item.text,
			date: new Date(item.date),
			title: item.title,
			tag: item.tag
		}]);
	};

	return <div className='app'>
		<LeftPanel>
			<Header/>
			<DiaryAddButton />
			<DiaryList>
				{items.map((i, idx)=>(
					<CardButton key={idx}>
						<DiaryItem 
							title={i.title}  
							text={i.text} 
							date={i.date} 
						/>  
					</CardButton>
				))}
			</DiaryList>
		</LeftPanel>
		<Body>
			<DiaryForm onSubmit={addItem}/>
		</Body>
	</div>;
}

export default App;
