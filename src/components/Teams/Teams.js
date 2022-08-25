import styles from './Teams.module.css';

const Teams = ({ teams }) => {
	return (
		<div className="teams">
			<div className="home-team">
				{teams.home.name}
			</div>

			<div className="separator">-</div>

			<div className="away-team">
				{teams.away.name}
			</div>
		</div>
	)
};

export default Teams;