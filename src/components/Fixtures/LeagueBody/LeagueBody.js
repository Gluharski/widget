import Date from './Date/Date';
import Teams from './Teams/Teams';

const LeagueBody = ({
	date,
	teams
}) => {

	return (
		<div className='match'>
			<Date date={date} />
			<Teams teams={teams} />
		</div>
	)
};

export default LeagueBody;