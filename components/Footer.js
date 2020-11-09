import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SocialLink from './SocialLink';

import styles from '../styles/Footer.module.scss';

export default function Footer() {
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.footer}>
				<h2 className={styles.footer__heading}>Bryan Daniswara</h2>
				<p className={styles.footer__role}>Fullstack Javascript Developer</p>
				<SocialLink placement="footer" />
				<p className={styles.copyright}>
					<FontAwesomeIcon icon={faCopyright} /> Bryan Daniswara 2020
				</p>
			</div>
		</div>
	);
}
