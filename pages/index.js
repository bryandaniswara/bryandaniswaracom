import Head from 'next/head';

import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button';
import SocialLink from '../components/SocialLink';

export default function Home() {
	return (
		<>
			<Head>
				<title>Bryan Daniswara | Fullstack Javascript Developer</title>
			</Head>
			<Header />
			<main className={cx(styles.darkMode, styles.center)}>
				<section className={styles.section}>
					<div className={styles.hero}>
						<h1 className={styles.heading}>Bryan Daniswara</h1>
						<div className={styles.subheading}>
							<p className={styles.role}>Fullstack Javascript Developer</p>
							<p className={styles.based}>Based in Indonesia</p>
							<p className={styles.description}>
								I'm passionate in crafting website
							</p>
							<Button text="See my works" icon={faArrowDown} href="#projects" />
						</div>
					</div>
					<SocialLink placement="heading" />
				</section>
			</main>
		</>
	);
}
