const Teams = ({ teams, goals }) => {
	return (
		<div className="teams">
			<div className="home-team">
				<div className='home-team-name'>
					{teams.home.name}
				</div>
				<div className='home-team-logo'>
					<img src={teams.home.logo} alt={teams.home.logo} />
				</div>

				<div className="home-team-scores">
					{goals.home}
				</div>
			</div>

			<div className="separator">-</div>

			<div className="away-team">
				<div className='home-team-score'>
					{goals.away}
				</div>

				<div className="away-team-logo">
					<img src={teams.away.logo} alt={teams.away.logo} />
				</div>
				<div className='away-team-name'>
					{teams.away.name}
				</div>
			</div>
		</div>
	)
};

export default Teams;