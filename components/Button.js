import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styles from '../styles/Button.module.scss';

export default function Button(props) {
	return (
		<Link href={props.href}>
			<a className={styles.button}>
				{props.text}
				<FontAwesomeIcon className={styles.icon} icon={props.icon} />
			</a>
		</Link>
	);
}
