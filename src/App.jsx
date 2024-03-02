import './App.css';
import Button from './components/Button/Button';
import DiaryItem from './components/DiaryItem/DiaryItem';

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

	return <>
		<h1>Hello World</h1>
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste accusantium, corporis repellendus quasi sint beatae nesciunt earum cumque alias tenetur debitis nostrum blanditiis fuga dolorum excepturi nisi voluptate, praesentium mollitia!</p>
		<Button />
		<DiaryItem 
			title={data[1].title}  
			text={data[1].text} 
			date={data[1].date}
		/>  
		<DiaryItem title={data[1].title} text={data[1].text} date={data[1].date}/>  
	</>;
}

export default App;
