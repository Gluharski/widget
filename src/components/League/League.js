import styles from './League.module.css';

const League = ({ flag, name }) => {
	return (
		<div className={styles['league-header']}>
			<div className={styles['league-flag']}>
				<img src={flag} alt={flag} />
			</div>
			
			<div className={styles['league-title']}>
				{name}
			</div>
		</div>
	)
}

export default League;