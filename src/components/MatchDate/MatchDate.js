import styles from './MatchDate.module.css';

const MatchDate = (props) => {
	console.log(props);


	// TODO: check for match status ...
	

	return (
		<div className={styles['timer']}>
			{props.fixture.status.elapsed}'
		</div>
	)
};

export default MatchDate;