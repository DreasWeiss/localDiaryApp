import './DiaryList.css';
import CardButton from '../CardButton/CardButton';
import DiaryItem from '../DiaryItem/DiaryItem';

export default function DiaryList({items}) {
	const sortItems = (a,b) => {
		return a.date < b.date ? 1 : -1;
	};

	let list = <p>No memories yet, please add first one...</p>;
	if (items.length > 0) {
		list = items.sort(sortItems).map((i)=>(
			<CardButton key={i.id}>
				<DiaryItem 
					title={i.title}  
					text={i.text} 
					date={i.date} 
				/>  
			</CardButton>
		));
	}

	return (
		<div className='diary-list'>
			{list}
		</div>
	);
}
 