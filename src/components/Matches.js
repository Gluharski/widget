import Date from "./Date/Date";
import Teams from "./Teams/Teams";
import Status from "./Status/Status";
import League from "./League/League";

import styles from './Match.module.css';

const Matches = ({
	flag,
	logo,
	name,
	round,
	date,
	status,
	teams
}) => {
	return (
		<div className={styles['match-row']}>
			<League flag={flag} name={name} />
			
			<div className={styles['match-info']}>
				<Date date={date} />
				<Status status={status} />
				<Teams teams={teams} />
			</div>
		</div>
	)
};

export default Matches;