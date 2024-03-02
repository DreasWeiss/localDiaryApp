import './DiaryItem.css';

export default function DiaryItem() {
	const title = 'Prepairing for course update';
	const date = new Date();
	const text = 'Горные походы открывают удивительные природные ландшафт'; 

	return (
		<div className="diary-item">
			<h2 className="diary-item__header">{title}</h2>
			<h2 className="diary-item__body">
				<div className="diary-item__date">{date.toString() }</div>
				<div className="diary-item__text">{text}</div>
			</h2>
		</div>
	);
}
