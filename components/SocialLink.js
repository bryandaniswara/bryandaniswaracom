import {
	faGithub,
	faInstagram,
	faLinkedinIn,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../styles/SocialLink.module.scss';

export default function SocialLink(props) {
	const { placement } = props;

	return (
		<div className={placement === 'heading' ? styles.heading : styles.footer}>
			<a
				className={styles.link}
				target="_blank"
				href="https://www.linkedin.com/in/bryandaniswara/"
			>
				<FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
			</a>
			<a
				className={styles.link}
				target="_blank"
				href="https://github.com/bryandaniswara"
			>
				<FontAwesomeIcon className={styles.icon} icon={faGithub} />
			</a>
			<a
				className={styles.link}
				target="_blank"
				href="https://twitter.com/bryandaniswara"
			>
				<FontAwesomeIcon className={styles.icon} icon={faTwitter} />
			</a>
			<a
				className={styles.link}
				target="_blank"
				href="https://instagram.com/bryan.daniswara"
			>
				<FontAwesomeIcon className={styles.icon} icon={faInstagram} />
			</a>
		</div>
	);
}
