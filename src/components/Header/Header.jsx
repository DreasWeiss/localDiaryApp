import styles from './Header.module.css';

export default function Header() {
	return (
		<img src="/logo.svg" alt="logo" className={styles.logo}/>
	);
}
