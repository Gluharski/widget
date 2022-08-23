import { useState, useEffect } from 'react';

// import { momentLibrary } from "../../utils/momentLibrary";
import { setDay } from "../../utils/momentLibrary";

import LeagueHeader from './LeagueHeader/LeagueHeader';
import LeagueBody from './LeagueBody/LeagueBody';

const Fixtures = () => {
	const [data, setData] = useState([]);
	const [notStared, setNotStarted] = useState([]);
	const [fixtures, setFixtures] = useState([]);

	useEffect(() => {
		fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2022-08-${setDay()}`, {
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
			{data.map(m => (
				<>
					<LeagueHeader
						key={m.league.id}
						id={m.league.id}
						flag={m.league.flag}
						logo={m.league.logo}
						name={m.league.name}
						round={m.league.round}
					/>
					<LeagueBody />
				</>
			))}
		</section>
	)
};

export default Fixtures;