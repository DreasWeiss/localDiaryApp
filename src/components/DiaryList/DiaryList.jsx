import './DiaryList.css';
import CardButton from '../CardButton/CardButton';
import DiaryItem from '../DiaryItem/DiaryItem';

export default function DiaryList({items}) {
	if (items.length === 0) {
		return <p>No memories yet, please add first one...</p>;
	}

	const sortItems = (a,b) => {
		return a.date < b.date ? 1 : -1;
	};

	return <> { items.sort(sortItems).map((i) => (
		<CardButton key={i.id}>
			<DiaryItem 
				title={i.title}  
				post={i.post} 
				date={i.date} 
			/>  
		</CardButton>
	))}
	</>;
}
 