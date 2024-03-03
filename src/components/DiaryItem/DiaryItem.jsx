import './DiaryItem.css';

export default function DiaryItem({title, text, date}) {
	
	// const preatyDate = (date) => {
	// 	let day = date.getDate();
	// 	let month = date.getMonth();
	// 	let year = date.getFullYear();

	// 	return `${day < 10 ? '0' + day : day}.${month+1 < 10 ? '0' + month : month}.${year}`;
	// };
    
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
 

	return (
		<>
			<h2 className="diary-item__header">{title}</h2>
			<h2 className="diary-item__body">
				{/* <div className="diary-item__date">{preatyDate(date)}</div> */}
				<div className="diary-item__date">{formatedDate }</div>
				<div className="diary-item__text">{text}</div>
			</h2>
		</>
	); 
}
