import CardButton from '../CardButton/CardButton';
import './DiaryAddButton.css';

export default function DiaryAdd() {
	return (
		<CardButton className='diary-add'>
			<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M10 4.34067V16.0073" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M4.16669 10.174H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>

			New Memory
		</CardButton>
	);
}
  