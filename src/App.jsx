import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Boby/Body';

import CardButton from './components/CardButton/CardButton';
import DiaryItem from './components/DiaryItem/DiaryItem';
import Header from './components/Header/Header';
import DiaryList from './components/DiaryList/DiaryList';
import DiaryAddButton from './components/DiaryAddButton/DiaryAddButton'; 

function App() { 

	const data = [
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

	return <div className='app'>
		<LeftPanel>
			<Header/>
			<DiaryAddButton />
			<DiaryList>
				<CardButton>
					<DiaryItem 
						title={data[0].title}  
						text={data[0].text} 
						date={data[0].date} 
					/>  
				</CardButton>
				<CardButton>
					<DiaryItem title={data[1].title} text={data[1].text} date={data[1].date}/>  
				</CardButton>
			</DiaryList>
		</LeftPanel>
		<Body>
 Body
		</Body>
	</div>;
}

export default App;
