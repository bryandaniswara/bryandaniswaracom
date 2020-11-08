import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';

import cx from 'classnames';

import styles from '../styles/Navbar.module.scss';

const Menu = () => {
	return (
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<a href="/#projects">Projects</a>
			</li>
			<li>
				<a href="/#contact">Contact</a>
			</li>
			<li>
				<a target="_blank" href="https://blog.bryandaniswara.com">
					Blog
				</a>
			</li>
		</ul>
	);
};

export default function Navbar() {
	const [isMobileMenu, setIsMobileMenu] = useState(false);

	const showMobileMenu = () => {
		setIsMobileMenu(true);
	};

	const hideMobileMenu = () => {
		setIsMobileMenu(false);
	};

	return (
		<>
			<nav className={styles.navbarTabletDesktop}>
				<Menu />
			</nav>
			<FontAwesomeIcon
				onClick={showMobileMenu}
				className={styles.hamburger}
				icon={faBars}
			/>
			<nav
				className={cx(
					styles.navbarMobile,
					isMobileMenu ? styles.navbarMobileActive : ''
				)}
			>
				<FontAwesomeIcon
					className={styles.times}
					onClick={hideMobileMenu}
					icon={faTimes}
				/>
				<Menu />
			</nav>
		</>
	);
}
