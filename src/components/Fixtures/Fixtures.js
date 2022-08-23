import { useState, useEffect } from 'react';

// import { momentLibrary } from "../../utils/momentLibrary";
import { setToLocalDate } from "../../utils/momentLibrary";
import LeagueHeader from './LeagueHeader/LeagueHeader';
import LeagueBody from './LeagueBody/LeagueBody';

const Fixtures = () => {
	const [data, setData] = useState([]);
	// const [notStared, setNotStarted] = useState([]);
	// const [fixtures, setFixtures] = useState([]);

	useEffect(() => {
		fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=${setToLocalDate()}`, {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
				'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
			}
		})
			.then(response => response.json())
			.then(response => {
				setData(response.response);
			})
			.catch(err => console.error(err));
	}, []);

	console.log(data);

	return (
		<section className='fixtures'>
			{data.map(x => (
				<>
					<LeagueHeader
						key={x.league.id}
						id={x.league.id}
						flag={x.league.flag}
						logo={x.league.logo}
						name={x.league.name}
						round={x.league.round}
					/>
					
					<LeagueBody
						id={x.league.id}
						date={x.fixture.date}
						status={x.fixture.status}
						teams={x.teams}
					/>
				</>
			))}
		</section>
	)
};

export default Fixtures;