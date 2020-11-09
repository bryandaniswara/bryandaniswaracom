import Head from 'next/head';

import { faArrowDown, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import Header from '../components/Header';
import styles from '../styles/Home.module.scss';
import Button from '../components/Button';
import SocialLink from '../components/SocialLink';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<Head>
				<title>Bryan Daniswara | Fullstack Javascript Developer</title>
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta
					name="title"
					content="Bryan Daniswara | Fullstack Javascript Developer"
				/>
				<meta name="description" content="I'm passionate in crafting website" />

				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://bryandaniswara.com/" />
				<meta
					property="og:title"
					content="Bryan Daniswara | Fullstack Javascript Developer"
				/>
				<meta
					property="og:description"
					content="I'm passionate in crafting website"
				/>
				<meta
					property="og:image"
					content="https://bryandaniswara.com/preview.jpg"
				/>

				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://bryandaniswara.com/" />
				<meta
					property="twitter:title"
					content="Bryan Daniswara | Fullstack Javascript Developer"
				/>
				<meta
					property="twitter:description"
					content="I'm passionate in crafting website"
				/>
				<meta
					property="twitter:image"
					content="https://bryandaniswara.com/preview.jpg"
				/>
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
				<section className={styles.section}>
					<div id="projects" className={styles.projects}>
						<h1 className={styles.projects__heading}>Projects</h1>
						<div className={styles.projects__items}>
							<a
								target="_blank"
								href="https://github.com/bryandaniswara/bryandaniswaracom"
							>
								<img src="https://github-stats.bryandaniswara.com/api/pin/?username=bryandaniswara&repo=bryandaniswaracom&theme=dark" />
							</a>
							<a
								target="_blank"
								href="https://github.com/bryandaniswara/e-commerce"
							>
								<img src="https://github-stats.bryandaniswara.com/api/pin/?username=bryandaniswara&repo=e-commerce&theme=dark" />
							</a>
							<a
								target="_blank"
								href="https://github.com/bryandaniswara/kanban-app"
							>
								<img src="https://github-stats.bryandaniswara.com/api/pin/?username=bryandaniswara&repo=kanban-app&theme=dark" />
							</a>
							<a
								target="_blank"
								href="https://github.com/bryandaniswara/frontend-mentor-challenges"
							>
								<img src="https://github-stats.bryandaniswara.com/api/pin/?username=bryandaniswara&repo=frontend-mentor-challenges&theme=dark" />
							</a>
						</div>
					</div>
				</section>
				<section className={styles.section}>
					<div id="contact" className={styles.contact}>
						<h1 className={styles.contact__heading}>Get in touch</h1>
						<Button
							text="Email me"
							icon={faEnvelope}
							href="mailto:bryan.daniswara@gmail.com"
						/>
					</div>
				</section>
			</main>
			<footer className={cx(styles.darkMode, styles.center)}>
				<Footer />
			</footer>
		</>
	);
}
