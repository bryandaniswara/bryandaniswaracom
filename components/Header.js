import React from 'react';
import Navbar from './Navbar';

import styles from '../styles/Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<img className={styles.profilePicture} src="/bryan.png"></img>
			<Navbar />
		</header>
	);
}
