import styles from './LeagueHeader.module.css';

const LeagueHeader = ({
	name,
	flag
}) => {
	return (
		<div className={styles['league-header']}>
			<div className={styles['league-flag']}>
				<img src={flag} />
			</div>
			<div className={styles['league-title']}>
				{name}
			</div>
		</div>
	)
}

export default LeagueHeader;