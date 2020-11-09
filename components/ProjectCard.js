import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProjectCard(props) {
	const { data } = props;

	return (
		<div>
			<div>
				<h2>{data.title}</h2>
				<p>{data.category}</p>
			</div>
			<FontAwesomeIcon icon={faArrowRight} />
		</div>
	);
}
