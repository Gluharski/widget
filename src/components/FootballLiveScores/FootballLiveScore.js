import { useState, useEffect } from 'react';
// import { momentLibrary } from '../../utils/momentLibrary';

const FootballLiveScores = () => {
	const [matches, setMatches] = useState([]);
	const [values, setValues] = useState(5);

	useEffect(() => {
		fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all', {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			}
		})
			.then(response => response.json())
			.then(response => {
				// console.log(response.response)
				setMatches(response.response)
			})
			.catch(err => console.error(err));
	}, []);

	const onClickHandler = () => {
		setValues((prevState) => prevState + 10);
	};

	return (
		<section className="live">
			<h2 className='title'>
				Live
				<span className='match-counter'>
					{matches.length}
				</span>
			</h2>

			<ul>
				{matches.slice(0, values).map(m => (
					<li key={m.fixture.id} className="list-item">
						<div className="league-information">
							<div className="league-flag-container">
								<img src={m.league.flag} alt="" />
							</div>
							<h3 className="league-name">
								{m.league.country} {m.league.name}
							</h3>
						</div>

						<div className="league-row">
							<div className="match-information">
								<div className="date">
									{/* {momentLibrary(m.fixture.date)} */}
								</div>

								<div className="status" title={m.fixture.status.long}>
									{m.fixture.status.elapsed <= 90 || null
										? m.fixture.status.elapsed
										: m.fixture.status.short
									}
								</div>
							</div>

							<div className="teams">
								{/* home team information */}
								<div className="home-team">
									<div className="home-team-name">
										{m.teams.home.name}
									</div>
									<div className="home-team-logo">
										<img src={m.teams.home.logo} alt="" />
									</div>
									<div className="home-team-result">
										{m.goals.home}
									</div>
								</div>

								{/* TODO: div separator */}
								<div className="separator">-</div>

								{/* away team information*/}
								<div className="away-team">
									<div className="away-team-result">
										{m.goals.away}
									</div>
									<div className="away-team-logo">
										<img src={m.teams.away.logo} alt="" />
									</div>
									<div className="away-team-name">
										{m.teams.away.name}
									</div>
								</div>
							</div>
						</div>
					</li>
				))}

				<div className="btn">
					<button className="show-more" onClick={onClickHandler}>show more</button>
				</div>
			</ul>
		</section>
	);
};

export default FootballLiveScores;